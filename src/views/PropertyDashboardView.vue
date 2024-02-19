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
                                <!-- PROPERTY DETAILS EDIT SECTION -->
                                <div>
                                    <edit-plot-details v-if="property.details.type === 'plot'"
                                        :details="property.details" />
                                    <edit-farmland-details v-if="property.details.type === 'farmland'"
                                        :details="property.details" />
                                    <edit-flat-details v-if="property.details.type === 'flat'"
                                        :details="property.details" />
                                </div>

                                <!-- PROPERTY IMAGE EDIT SECTION -->
                                <div class="mt-15">
                                    <edit-property-images :propertyId="property.propertyId" />
                                </div>

                                <!-- PROPERTY VIDEO EDIT SECTION -->
                                <div class="mt-15">
                                    <edit-property-videos :propertyId="property.propertyId" />
                                </div>

                                <!-- PROPERTY DOCUMENT EDIT SECTION -->
                                <div class="mt-15">
                                    <v-container fluid class="pa-0">
                                        <v-row no-gutters class="mb-3">
                                            <v-col cols="12" class="pa-0" style="border-bottom: solid 2px grey;">
                                                <div class="text-h5 text-grey-darken-2 font-weight-medium">
                                                    Edit Document
                                                </div>
                                            </v-col>
                                        </v-row>

                                        <v-row no-gutters>
                                            <div v-if="documents?.length === 0" class="text-h4 text-center pa-8 pt-6">
                                                No Document has been uploaded for this property.
                                            </div>
                                        </v-row>
                                        <v-row no-gutters>
                                            <v-col cols="12" v-for="document in documents" :key="document.id" class="my-3">
                                                <edit-property-documents :propertyId="property.propertyId"
                                                    :document="document" @success="docUpdateSuccess" />
                                            </v-col>
                                        </v-row>

                                        <v-row no-gutters class="mt-8">
                                            <v-col cols="12" class="d-flex justify-center">
                                                <v-btn variant="elevated" color="primary" width="200"
                                                    @click="addDocumentDialog = !addDocumentDialog">Add
                                                    Document</v-btn>

                                                <!-- Add New Document Dialog box -->
                                                <v-dialog v-model="addDocumentDialog" width="auto">
                                                    <v-card color="grey-lighten-5">
                                                        <v-row no-gutters class="pa-10 pt-7">
                                                            <v-col cols="12" class="text-h6 pb-5">
                                                                Add new Document
                                                            </v-col>

                                                            <v-row no-gutters>
                                                                <v-col cols="12" sm="4" class="pa-0 px-2">
                                                                    <v-select v-model="addType" :items="[...types, 'other']"
                                                                        label="Select Document Type"
                                                                        @update:modelValue="enableOtherDocUpload(addType)"></v-select>
                                                                </v-col>
                                                                <v-col v-if="otherDocument" cols="12" sm="4"
                                                                    class="pa-0 px-2">
                                                                    <v-text-field v-model="addType" variant="outlined"
                                                                        label="Enter new Document Type"></v-text-field>
                                                                </v-col>
                                                                
                                                                <v-col cols="12" sm="8" class="pa-0 px-2">
                                                                    <v-file-input :disabled="!addType" accept=".pdf"
                                                                        hint="upload PDF File only" persistent-hint
                                                                        prepend-inner-icon="mdi-file" prepend-icon=""
                                                                        label="upload file"
                                                                        v-model="addedDocument"></v-file-input>
                                                                </v-col>

                                                                <v-col cols="12"
                                                                    class="pt-5  d-flex flex-column flex-md-row justify-center align-center">
                                                                    <v-btn class="my-2"
                                                                        :disabled="addedDocument.length !== 1"
                                                                        variant="elevated" color="primary" width="200"
                                                                        :loading="loader" @click="addDocument">Add
                                                                        Document</v-btn>
                                                                    <v-btn class="ml-4 my-2" width="100"
                                                                        color="green-darken-2" variant="outlined"
                                                                        @click="addDocumentDialog = false">Cancel</v-btn>
                                                                </v-col>

                                                                <v-col v-if="docUploadFailed" cols="12"
                                                                    class="mt-3 text-h6 text-center text-red">Document
                                                                    Upload Failed!</v-col>
                                                                <v-col v-if="documentAddFailed" cols="12"
                                                                    class="mt-3 text-h6 text-center text-red">Failed to add
                                                                    document <tbody></tbody> the property!</v-col>
                                                            </v-row>
                                                        </v-row>
                                                    </v-card>
                                                </v-dialog>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </div>
                            </v-window-item>


                            <!-- PROPERTY AGENTS EDIT SECTION -->
                            <v-window-item value="Agent" class="pa-10">
                                <edit-property-agents :propertyId="property.propertyId"
                                    :primaryAgentUserId="property.details.primaryAgent" />
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

let types = ref([]);
const property = ref({
    propertyId: route?.query?.propertyId,
    details: { type: '', primaryAgent: '' },
    images: null,
    videos: null,
    documents: null
});
const tab = ref('Preview Details');
const addType = ref(null);
const loader = ref(false);
const addedDocument = ref([]);
const addDocumentDialog = ref(false);
const documents = ref([{ id: '' }]);
const docUploadFailed = ref(false);
const documentAddFailed = ref(false);
const otherDocument = ref(false);


if (!cookies.get('token')) {
    router.back();
}

function enableOtherDocUpload(type: string) {
    type === 'other' ? otherDocument.value = true : otherDocument.value = false;
}

function updateAvailableTypes() {
    const allDocTypes = ['RTC', 'EC', 'Sale Deed', 'Mother Deed'];

    const typesUploaded = documents.value.map(item => {
        //@ts-ignore
        return item?.type;
    })
    //@ts-ignore
    let newTypes = [];
    allDocTypes.forEach(item => {
        if (!typesUploaded?.includes(item)) {
            newTypes.push(item)
        }
    })
    //@ts-ignore
    types.value = newTypes;
    types.value.length > 0 ? otherDocument.value = false : otherDocument.value = true;
}

async function fetchPropertydetails() {

    const res = await api?.property?.getUserProperty({ params: { propertyId: route?.query?.propertyId } });

    if (res.status === 200) {
        property.value.details = res?.data;
        property.value.propertyId = res?.data?.propertyId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

async function fetchPropertyDocuments() {
    documents.value = [];
    const res = await api?.property?.getPropertyDocument({ params: { propertyId: route?.query?.propertyId } });

    if (res.status === 200) {
        documents.value = res.data;
        updateAvailableTypes();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

async function docUpdateSuccess() {
    await fetchPropertyDocuments();
}


async function addDocument() {
    documentAddFailed.value = false;
    docUploadFailed.value = false;
    loader.value = true;

    const formData = new FormData();

    if (addedDocument.value?.length === 1) {
        formData.append('document', addedDocument.value[0]);

        const res = await api?.property?.uploadDocument(formData);

        if (res?.data?.document) {
            const document = {
                ...res.data.document,
                type: addType.value
            };

            const response = await api?.property?.addDocument({
                "propertyId": route?.query?.propertyId,
                "documentObj": document
            })

            if (response?.status === 200) {
                loader.value = false;
                addDocumentDialog.value = false;
                await fetchPropertyDocuments();
                addType.value = null;
                addedDocument.value = [];
            } else {
                loader.value = false;
                documentAddFailed.value = true;
            }
        } else {
            loader.value = false;
            docUploadFailed.value = true;
        }
    } else {
        loader.value = false;
        docUploadFailed.value = true;
    }
}

onMounted(async () => {
    await fetchPropertydetails();
    await fetchPropertyDocuments();
})

</script>

<style scoped></style>