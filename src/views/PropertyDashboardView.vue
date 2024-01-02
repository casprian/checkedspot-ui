<template>
    <div style="height: 100%;">
        <v-container fluid class="pa-0 ma-0" v-if="cookies.get('token')" style="height: 100%;">
            <v-card class="rounded-0 pa-0 ma-0" flat height="100%">
                <v-toolbar>
                    <!-- <v-toolbar-title>Edit Property Details</v-toolbar-title> -->
                    <v-tabs v-model="tab" direction="horizontal" color="pink-darken-4">
                        <v-tab value="Property">
                            <v-icon start> mdi-home-group </v-icon>
                            Property
                        </v-tab>
                        <v-tab value="Agent">
                            <v-icon start> mdi-pencil-box </v-icon>
                            Agent
                        </v-tab>
                    </v-tabs>
                </v-toolbar>

                <v-row no-gutters class="d-flex justify-center" style="height: 100vh;">
                    <v-col cols="12">
                        <v-window v-model="tab" style="width: 100%; height: 100vh; overflow-y: scroll;">
                            <v-window-item value="Property" class="pa-10">
                                <div>
                                    <edit-plot-details v-if="property.details.type === 'plot'" :details="property.details" />
                                    <edit-farmland-details v-if="property.details.type === 'farmland'" :details="property.details" />
                                    <edit-flat-details v-if="property.details.type === 'flat'" :details="property.details" />
                                </div>

                                <div class="mt-15">
                                    <edit-property-images :propertyId="property.propertyId" />
                                </div>

                                <div class="mt-15">
                                    <edit-property-videos :propertyId="property.propertyId" />
                                </div>

                                <div class="mt-15">
                                    <edit-property-documents :propertyId="property.propertyId" />
                                </div>

                            </v-window-item>
                            
                            <v-window-item value="Agent" class="pa-10">
                                <edit-property-agents :propertyId="property.propertyId" :primaryAgentUserId="property.details.primaryAgent" />
                            </v-window-item>

                            <!-- <v-window-item value="Details" class="pa-10">
                                <edit-plot-details v-if="property.details.type === 'plot'" :details="property.details" />
                                <edit-farmland-details v-if="property.details.type === 'farmland'"
                                    :details="property.details" />
                                <edit-flat-details v-if="property.details.type === 'flat'" :details="property.details" />
                            </v-window-item>
                            <v-window-item value="Images" class="pa-10">
                                <edit-property-images :images="property.images" :propertyId="property.propertyId" />
                            </v-window-item>
                            <v-window-item value="Videos" class="pa-10">
                                <edit-property-videos :videos="property.videos" :propertyId="property.propertyId" />
                            </v-window-item>
                            <v-window-item value="Documents" class="pa-10">
                                <edit-property-documents :documents="property.documents" :propertyId="property.propertyId" />
                            </v-window-item> -->
                        </v-window>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
        <v-container v-else class="mb-5" style="height: calc(100% - 102px);">
            <v-row no-gutters class="d-flex justify-center align-center" style="width:100%; height: 100%;">
                <v-col cols="4">
                    <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, defineAsyncComponent } from 'vue';
import { useCookies } from 'vue3-cookies';
import { useRouter, useRoute } from 'vue-router';
//@ts-ignore
import api from '@/data/api/index.js';

// const PropertyPreview = defineAsyncComponent(() => import('@/components/property-dashboard/PropertyPreview.vue'));
const EditPlotDetails = defineAsyncComponent(() => import('@/components/property-dashboard/EditPlotDetails.vue'));
const EditFarmlandDetails = defineAsyncComponent(() => import('@/components/property-dashboard/EditFarmlandDetails.vue'));
const EditFlatDetails = defineAsyncComponent(() => import('@/components/property-dashboard/EditFlatDetails.vue'));
const EditPropertyImages = defineAsyncComponent(() => import('@/components/property-dashboard/EditPropertyImages.vue'));
const EditPropertyVideos = defineAsyncComponent(() => import('@/components/property-dashboard/EditPropertyVideos.vue'));
const EditPropertyDocuments = defineAsyncComponent(() => import('@/components/property-dashboard/EditPropertyDocuments.vue'));
const EditPropertyAgents = defineAsyncComponent(() => import('@/components/property-dashboard/EditPropertyAgents.vue'));

const { cookies } = useCookies();
const router = useRouter();
const route = useRoute();

const property = ref({
    propertyId: route?.query?.propertyId,
    details: { type: '', primaryAgent: '' },
    images: null,
    videos: null,
    documents: null
});
const tab = ref('Preview Details')

function changeTab(newtab: String) {
    //@ts-ignore
    tab.value = newtab;
}

if (!cookies.get('token')) {
    router.back();
}

async function fetchPropertydetails() {
    const res = await api?.property?.getProperty({ params: { propertyId: route?.query?.propertyId } })
    if (res.status === 200) {
        property.value.details = res?.data;
        property.value.propertyId = res?.data?.propertyId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

// async function fetchPropertyImages() {
//     const res = await api?.property?.getPropertyImage({ params: { propertyId: route?.query?.propertyId } })
//     if (res.status === 200) {
//         property.value.images = res.data;
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//         router.push({ path: '/error', query: { status: res?.status } })
//     }
// }

// async function fetchPropertyVideos() {
//     const res = await api?.property?.getPropertyVideo({ params: { propertyId: route?.query?.propertyId } })
//     if (res.status === 200) {
//         property.value.videos = res.data;
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//         router.push({ path: '/error', query: { status: res?.status } })
//     }
// }

// async function fetchPropertyDocuments() {
//     const res = await api?.property?.getPropertyDocument({ params: { propertyId: route?.query?.propertyId } })

//     if (res.status === 200) {
//         property.value.documents = res.data;
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//         router.push({ path: '/error', query: { status: res?.status } })
//     }
// }

onMounted(async () => {
    await fetchPropertydetails();
    // await fetchPropertyImages();
    // await fetchPropertyVideos();
    // await fetchPropertyDocuments();
})

</script>

<style scoped></style>