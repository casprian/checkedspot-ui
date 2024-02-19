<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>{{ messageType }} is Failed!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>
                    {{ messageType }} is successful! <span class="text-body-1">Please refresh page if changes are not
                        visible.</span>
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <!-- <v-container fluid class="pa-0">
        <v-row no-gutters class="mb-3">
            <v-col cols="12" class="pa-0" style="border-bottom: solid 2px grey;">
                <div class="text-h5 text-grey-darken-2 font-weight-medium">
                    Edit Document
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <div v-if="props.documents?.length === 0" class="text-h4 text-center pa-8 pt-6">
                No Document has been uploaded for this property.
            </div>
            <v-row no-gutters>

                <v-col cols="12" v-for="document in props.documents" :key="document.id" class="my-3"> -->
                    <v-row no-gutters>
                        <v-col cols="12" style="height: 400px; width: 100%;">
                            <iframe style="width: 100%; height: 100%;"
                                :src="props.document.fileUrl ? props.document.fileUrl : 'https://checkedspot.blob.core.windows.net/assets/defaultdocument.pdf'"
                                frameborder="0"></iframe>
                        </v-col>
                        <v-col cols="12" class="documentDetailsSec">
                            <v-row no-gutters class="title">
                                <v-col cols="4">
                                    <span class="font-weight-medium">Document Type</span>
                                    <p class="text-body-2">
                                        {{
                                            props.document.type ?
                                            props.document.type :
                                            "No type assigned to this Document."
                                        }}
                                    </p>
                                </v-col>
                                <v-col cols="8">
                                    <span class="font-weight-medium">Document Title</span>
                                    <p class="text-body-2">
                                        {{
                                            props.document.title ?
                                            props.document.title :
                                            "No title assigned to the Document."
                                        }}
                                    </p>
                                </v-col>
                            </v-row>
                            <div class="description">
                                <span class="font-weight-medium">Document Description</span>
                                <p class="text-body-2">
                                    {{
                                        props.document.description ?
                                        props.document.description :
                                        "No title description to the Document."
                                    }}
                                </p>
                            </div>

                            <div class="documentAction d-flex justify-center align-center">
                                <v-btn class="mx-2" density="comfortable" color="amber"
                                    @click="updateDialog=true">Edit</v-btn>
                                <v-btn class="mx-2" density="comfortable" color="red-darken-1"
                                    @click="confirmDeleteDialog=true">Delete</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                <!-- </v-col> -->


                <!-- update Document Dialog box -->
                <v-dialog v-model="updateDialog" width="auto">
                    <v-card color="grey-lighten-5">
                        <v-row no-gutters class="pa-10 pt-7">
                            <v-col cols="12" class="text-h6 pb-5">
                                Update Document properties
                            </v-col>

                            <v-col v-if="!fileUrl" cols="12">
                                <v-select v-model="type" :items="types" label="Select Document Type"></v-select>
                            </v-col>
                            <v-col v-if="!fileUrl" cols="12">
                                <v-file-input v-model="docfile" accept=".pdf" prepend-icon=""
                                    prepend-inner-icon="mdi-file-pdf-box" label="Upload Document"
                                    @change="uploadFile"></v-file-input>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="title" label="title" variant="filled" name="title"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="description" label="description" variant="filled"
                                    name="description"></v-text-field>
                            </v-col>

                            <v-col cols="12" class="pt-5 d-flex flex-column flex-md-row justify-center align-center">
                                <v-btn class="my-2" variant="elevated" color="amber" width="200" :loading="loader"
                                    @click="updateDocument">Update</v-btn>
                                <v-btn class="ml-4 my-2" width="100" color="green-darken-2" variant="outlined"
                                    @click="updateDialog = false">Cancel</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>


                <!-- Delete Confirmation dialog -->
                <v-dialog v-model="confirmDeleteDialog" width="auto">
                    <v-card class="pa-5 pt-2">
                        <v-card-text class="text-h6">
                            Confirm deleting the Document!
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn width="100" color="red-darken-2" variant="flat" @click="deleteDocument"
                                :loading="loader">Delete</v-btn>
                            <v-btn width="100" color="green-darken-2" variant="outlined"
                                @click="confirmDeleteDialog = false">Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            <!-- </v-row>
        </v-row> -->


        <!-- <v-row no-gutters class="mt-8">
            <v-col cols="12" class="d-flex justify-center">
                <v-btn variant="elevated" color="primary" width="200" @click="addDocumentDialog = !addDocumentDialog">Add
                    Document</v-btn>

                Add New Document Dialog box
                <v-dialog v-model="addDocumentDialog" width="auto">
                    <v-card color="grey-lighten-5">
                        <v-row no-gutters class="pa-10 pt-7">
                            <v-col cols="12" class="text-h6 pb-5">
                                Add new Document
                            </v-col>
                            
                            <v-col cols="12" sm="4" class="pa-0 px-2">
                                <v-select v-model="addType" :items="types" label="Select Document Type"></v-select>
                            </v-col>
                            <v-col cols="12" sm="8" class="pa-0 px-2">
                                <v-file-input :disabled="!addType" accept=".pdf" hint="upload PDF File only" persistent-hint
                                    prepend-inner-icon="mdi-file" prepend-icon="" label="upload file"
                                    v-model="addedDocument"></v-file-input>
                            </v-col>

                            <v-col cols="12" class="pt-5  d-flex flex-column flex-md-row justify-center align-center">
                                <v-btn class="my-2" :disabled="addedDocument.length !== 1" variant="elevated" color="primary"
                                    width="200" :loading="loader" @click="addDocument">Add Document</v-btn>
                                <v-btn class="ml-4 my-2" width="100" color="green-darken-2" variant="outlined"
                                    @click="addDocumentDialog = false">Cancel</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row> -->
    <!-- </v-container> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['propertyId', 'document'])
const emit = defineEmits(['success']);


const types = ref(['RTC', 'EC', 'Sale Deed', 'Mother Deed']);

const type = ref(props?.document?.type);
const title = ref(props?.document?.title);
const description = ref(props?.document?.description);
const fileUrl = ref(props?.document?.fileUrl);

const updateDialog = ref(false);
const confirmDeleteDialog = ref(false);

const loader = ref(false);
const expandSuccess = ref(false);
const expandFailure = ref(false);
const messageType = ref('');

const uploadedFileUrl = ref('');
const docfile = ref([]);
async function uploadFile() {
    const formData = new FormData();
    formData.append('document', docfile.value[0]);

    const res = await api?.property?.uploadDocument(formData);

    if (res?.status === 200) {
        uploadedFileUrl.value = res?.data?.document?.fileUrl;
    } else {
        console.log(res);
    }
}

async function updateDocument() {
    messageType.value = " Document Updation ";
    loader.value = true;

    let res;
    if(!fileUrl.value) {
        res = await api.property.updateDocument({
            propertyId: props.propertyId,
            documentId:  props?.document?.id,
            documentObj: {
                type: type.value,
                title: title.value,
                description: description.value,
                fileUrl: uploadedFileUrl.value
            }
        })
    } else {
        res = await api.property.updateDocument({
            propertyId: props.propertyId,
            documentId:  props?.document?.id,
            documentObj: {
                title: title.value,
                description: description.value,
            }
        })
    }

    if (res?.status === 200) {
        loader.value = false;
        updateDialog.value = false;
        expandSuccess.value = true;
        setTimeout(() => {            
            emit('success');
        }, 500);
    } else {
        loader.value = false;
        updateDialog.value = false;
        expandFailure.value = true;
    }
    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 3000);
}

async function deleteDocument() {
    messageType.value = " Document deletion ";
    loader.value = true;

    const res = await api?.property?.deleteDocument({
        params: {
            propertyId: props.propertyId,
            documentId: props?.document?.id,
        }
    })

    if (res?.status === 200) {
        loader.value = false;
        confirmDeleteDialog.value = false;
        expandSuccess.value = true;
        setTimeout(() => {            
            emit('success');
        }, 500);
    } else {
        loader.value = false;
        confirmDeleteDialog.value = false;
        expandFailure.value = true;
    }
    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 3000);
}
</script>

<style scoped>
.documentDetailsSec {
    border: solid 1px rgb(103, 103, 103);
    height: max-content;
}

.title {
    padding: 5px 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-bottom: solid 1px rgb(224, 224, 224);
    height: 30%;
    overflow-y: scroll;
}

.description {
    padding: 5px 10px;
    border-bottom: solid 1px rgb(224, 224, 224);
    height: 50%;
    overflow-y: scroll;
}

.title>span,
.description>span {
    padding-bottom: 5px;
}

.documentAction {
    height: 20%;
}
</style>