<template>
    <div style="height: 100%;">
        <v-container fluid class="pa-0 ma-0" v-if="cookies.get('token')" style="height: 100%;">
            <v-card class="rounded-0 pa-0 ma-0" flat height="100%">
                <v-toolbar color="pink-darken-3">
                    <v-toolbar-title>Edit Property Details</v-toolbar-title>
                </v-toolbar>

                <v-row no-gutters class="d-flex flex-row" style="height: 100vh;">
                    <v-col cols="12" sm="4" md="3" class="" style="border-right: solid 1px rgb(197, 195, 195);">
                        <v-tabs v-model="tab" direction="vertical" color="pink-darken-4">
                            <v-tab value="Preview Details">
                                <v-icon start> mdi-home-group </v-icon>
                                Preview Details
                            </v-tab>
                            <v-tab value="Details">
                                <v-icon start> mdi-pencil-box </v-icon>
                                Details
                            </v-tab>
                            <v-tab value="Images">
                                <v-icon start> mdi-image-edit </v-icon>
                                Images
                            </v-tab>
                            <v-tab value="Videos">
                                <v-icon start> mdi-movie-edit </v-icon>
                                Videos
                            </v-tab>
                            <v-tab value="Documents">
                                <v-icon start> mdi-file-edit </v-icon>
                                Documents
                            </v-tab>
                        </v-tabs>
                    </v-col>
                    <v-col cols="12" sm="8" md="9">
                        <v-window v-model="tab" style="width: 100%; height: 100%;">
                            <v-window-item value="Preview Details">
                                <property-preview :property="property" @edit="changeTab" />
                            </v-window-item>
                            <v-window-item value="Details">
                                <v-card flat>
                                    <v-card-text>
                                        <p>
                                            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi
                                            ac felis. Etiam feugiat lorem non metus. Sed a libero. Sed aliquam ultrices
                                            mauris. Donec posuere vulputate arcu. Morbi
                                            ac felis. Etiam feugiat lorem non metus. Sed a libero. Sed aliquam ultrices
                                            mauris. Donec posuere vulputate arcu. Morbi
                                            ac felis. Etiam feugiat lorem non metus. Sed a libero. Sed aliquam ultrices
                                            mauris. Donec posuere vulputate arcu. Morbi
                                            ac felis. Etiam feugiat lorem non metus. Sed a libero. Sed aliquam ultrices
                                            mauris. Donec posuere vulputate arcu. Morbi
                                            ac felis. Etiam feugiat lorem non metus. Sed a libero. Sed aliquam ultrices
                                            mauris. Donec posuere vulputate arcu. Morbi
                                            ac felis. Etiam feugiat lorem non metus. Sed a libero. Sed aliquam ultrices
                                            mauris. Donec posuere vulputate arcu. Morbi
                                            ac felis. Etiam feugiat lorem non metus. Sed a libero. Sed aliquam ultrices
                                            mauris. Donec posuere vulputate arcu. Morbi
                                            ac felis. Etiam feugiat lorem non metus. Sed a libero.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-window-item>
                            <v-window-item value="Images">
                                <v-card flat>
                                    <v-card-text>
                                        <p>Fusce a</p>

                                        <p class="mb-0">
                                            Cras sagittis. P, ultricies nec,m at tortor in tellus interdum
                                            sagittis.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-window-item>
                            <v-window-item value="Videos">
                                <v-card flat>
                                    <v-card-text>
                                        <p>Fusce a</p>

                                        <p class="mb-0">
                                            Cras sagittis. P, ultricies nec,m at tortor in tellus interdum
                                            sagittis.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-window-item>
                            <v-window-item value="Documents">
                                <v-card flat>
                                    <v-card-text>
                                        <p>Fusce a</p>

                                        <p class="mb-0">
                                            Cras sagittis. P, ultricies nec,m at tortor in tellus interdum
                                            sagittis.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-window-item>
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
import { onMounted, ref } from 'vue';
import { useCookies } from 'vue3-cookies';
import { useRouter, useRoute } from 'vue-router';
//@ts-ignore
import api from '@/data/api/index.js';

import PropertyPreview from '@/components/property-dashboard/PropertyPreview.vue';

const { cookies } = useCookies();
const router = useRouter();
const route = useRoute();

const property = ref(null);

const tab = ref('Preview Details')

function changeTab(newtab:String) {
    //@ts-ignore
    tab.value = newtab;
}

if (!cookies.get('token')) {
    router.back();
}

async function fetchPropertydetails() {
    const res = await api?.property?.getProperty({ params: { propertyId: route?.query?.propertyId } })
    if (res.status === 200) {
        property.value = res.data;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

onMounted(() => {
    fetchPropertydetails();
})

</script>

<style scoped></style>