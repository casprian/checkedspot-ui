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
                    {{ messageType }} is successful!
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-container fluid class="pa-0">
        <v-row no-gutters class="mb-3">
            <v-col cols="12" class="pa-0" style="border-bottom: solid 2px grey;">
                <div class="text-h5 text-grey-darken-2 font-weight-medium">
                    Edit Images
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <div v-if="props?.images?.length === 0" class="text-h4 text-center pa-8 pt-6">
                No Image has been uploaded for this property.
            </div>
            <v-row no-gutters>
                <v-col cols="12" v-for="image in props?.images" :key="image.id" class="my-3">
                    <v-row no-gutters>
                        <v-col cols="12" md="6">
                            <v-img :src="image?.fileUrl" cover height="250" class="text-right">
                            </v-img>
                        </v-col>
                        <v-col cols="12" md="6" class="imageDetailsSec">
                            <div class="title">
                                <span class="font-weight-medium">Image Title</span>
                                <p class="text-body-2">{{ image.title ? image.title : "No title assigned to the image." }}
                                </p>
                            </div>
                            <div class="description">
                                <span class="font-weight-medium">Image Description</span>
                                <p class="text-body-2">
                                    {{
                                        image.description ?
                                        image.description :
                                        "No title description to the image."
                                    }}
                                </p>
                            </div>

                            <div class="imageAction d-flex justify-center align-center">
                                <v-btn class="mx-2" density="comfortable" color="amber"
                                    @click="() => { getImageId(image.id) }">Edit</v-btn>
                                <v-btn class="mx-2" density="comfortable" color="red-darken-1"
                                    @click="() => { confirmDeletion(image.id) }">Delete</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>


                <!-- update Image Dialog box -->
                <v-dialog v-model="updateDialog" width="auto">
                    <v-card width="50vw" color="grey-lighten-5">
                        <v-row no-gutters class="pa-10 pt-7">
                            <v-col cols="12" class="text-h6 pb-5">
                                Update image properties
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="title" label="title" variant="filled" name="title"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="description" label="description" variant="filled"
                                    name="description"></v-text-field>
                            </v-col>
                            <v-col cols="12" class="pt-5 d-flex justify-center">
                                <v-btn variant="elevated" color="amber" width="200" :loading="loader"
                                    @click="updateImage">Update</v-btn>
                                <v-btn class="ml-4" width="100" color="green-darken-2" variant="outlined"
                                    @click="updateDialog = false">Cancle</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>

                
                <!-- Delete Confirmation dialog -->
                <v-dialog v-model="confirmDelete" width="auto">
                    <v-card class="pa-5 pt-2">
                        <v-card-text class="text-h6">
                            Confirm deleting the property!
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn width="100" color="red-darken-2" variant="flat" @click="deleteImage"
                                :loading="loader">Delete</v-btn>
                            <v-btn width="100" color="green-darken-2" variant="outlined"
                                @click="confirmDelete = false">Cancle</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-row>
        </v-row>

        <v-row no-gutters class="mt-8">
            <v-col cols="12" class="d-flex justify-center">
                <v-btn variant="elevated" color="primary" width="200" @click="addImageDialog = !addImageDialog">Add
                    Image</v-btn>

                <!-- Add New Image Dialog box -->
                <v-dialog v-model="addImageDialog" width="auto">
                    <v-card width="50vw" color="grey-lighten-5">
                        <v-row no-gutters class="pa-10 pt-7">
                            <v-col cols="12" class="text-h6 pb-5">
                                Add new image
                            </v-col>
                            <v-col cols="12">
                                <v-file-input v-model="images" label="File input" variant="filled" prepend-icon="mdi-camera"
                                    name="imgfile"
                                    accept=".jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg"></v-file-input>
                            </v-col>
                            <v-col cols="12" class="pt-5 d-flex justify-center">
                                <v-btn variant="elevated" color="primary" width="200" :loading="loader"
                                    @click="addImage">Add Image</v-btn>
                                <v-btn class="ml-4" width="100" color="green-darken-2" variant="outlined"
                                    @click="addImageDialog = false">Cancle</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
//@ts-ignore
import api from '@/data/api/index.js'

const props = defineProps(['images', 'propertyId'])

const images = ref([]);
const imageId = ref('');

const addImageDialog = ref(false);

const updateDialog = ref(false);
const title = ref('');
const description = ref('');

const confirmDelete = ref(false);

const loader = ref(false);
const expandSuccess = ref(false);
const expandFailure = ref(false);
const messageType = ref('');

function addImageFailure() {
    addImageDialog.value = false;
    loader.value = false;
    expandFailure.value = true;
}
async function addImage() {
    messageType.value = " Image addition ";
    loader.value = true;

    const formData = new FormData();
    if (images.value?.length > 0) {
        for (let i = 0; i < images.value.length; i++) {
            formData.append('image', images.value[i]);
        }
        const res = await api?.property?.uploadImage(formData);

        if (res?.data?.images.length > 0) {

            const response = await api?.property?.addImage({
                "propertyId": props.propertyId,
                "imageObj": res?.data?.images[0]
            })

            if (response?.status === 200) {
                addImageDialog.value = false;
                loader.value = false;
                expandSuccess.value = true;
            } else {
                addImageFailure();
            }
        } else {
            addImageFailure();
        }
    } else {
        addImageFailure();
    }
    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 2000);
}

function getImageId(id: any) {
    imageId.value = id;
    updateDialog.value = true;
}
async function updateImage() {
    messageType.value = " Image Updation ";
    loader.value = true;

    const res = await api.property.updateImage({
        propertyId: props.propertyId,
        imageId: imageId.value,
        imageObj: {
            title: title.value,
            description: description.value,
        }
    })

    if (res?.status === 200) {
        loader.value = false;
        updateDialog.value = false;
        expandSuccess.value = true;
    } else {
        loader.value = false;
        updateDialog.value = false;
        expandFailure.value = true;
    }
    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 2000);
}

function confirmDeletion(id: any) {
    imageId.value = id;
    confirmDelete.value = true;
}
async function deleteImage() {
    messageType.value = " Image deletion ";
    loader.value = true;

    const res = await api?.property?.deleteImage({
        params: {
            propertyId: props.propertyId,
            imageId: imageId.value,
        }
    })

    if (res?.status === 200) {
        loader.value = false;
        confirmDelete.value = false;
        expandSuccess.value = true;
    } else {
        loader.value = false;
        confirmDelete.value = false;
        expandFailure.value = true;
    }
    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 2000);
}

</script>

<style scoped>
.imageDetailsSec {
    border: solid 1px rgb(103, 103, 103);
}

.title {
    padding: 5px 10px;
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

.imageAction {
    height: 20%;
}
</style>