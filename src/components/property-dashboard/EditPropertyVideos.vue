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
                    {{ messageType }} is successful! <span class="text-body-1">Please refresh page if changes are not visible.</span>
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-container fluid class="pa-0">
        <v-row no-gutters class="mb-3">
            <v-col cols="12" class="pa-0" style="border-bottom: solid 2px grey;">
                <div class="text-h5 text-grey-darken-2 font-weight-medium">
                    Edit Video
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <div v-if="props?.videos?.length === 0" class="text-h4 text-center pa-8 pt-6">
                No Video has been uploaded for this property.
            </div>
            <v-row no-gutters>
                <v-col cols="12" v-for="video in videos" :key="video.id" class="my-3">
                    <v-row no-gutters>
                        <v-col cols="12" md="6">
                            <video muted controls style="width: 100%; height: 100%; object-fit: cover;">
                                <source :src="video?.fileUrl" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </v-col>
                        <v-col cols="12" md="6" class="videoDetailsSec">
                            <div class="title">
                                <span class="font-weight-medium">videos Title</span>
                                <p class="text-body-2">{{ video.title ? video.title : "No title assigned to the Video." }}
                                </p>
                            </div>
                            <div class="description">
                                <span class="font-weight-medium">videos Description</span>
                                <p class="text-body-2">
                                    {{
                                        video.description ?
                                        video.description :
                                        "No title description to the Video."
                                    }}
                                </p>
                            </div>

                            <div class="videoAction d-flex justify-center align-center">
                                <v-btn class="mx-2" density="comfortable" color="amber"
                                    @click="() => { getVideoId(video.id) }">Edit</v-btn>
                                <v-btn class="mx-2" density="comfortable" color="red-darken-1"
                                    @click="() => { confirmDeletion(video.id) }">Delete</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                

                <!-- update Video Dialog box -->
                <v-dialog v-model="updateDialog" width="auto">
                    <v-card width="50vw" color="grey-lighten-5">
                        <v-row no-gutters class="pa-10 pt-7">
                            <v-col cols="12" class="text-h6 pb-5">
                                Update video properties
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
                                    @click="updateVideo">Update</v-btn>
                                <v-btn class="ml-4" width="100" color="green-darken-2" variant="outlined"
                                    @click="updateDialog = false">Cancel</v-btn>
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
                            <v-btn width="100" color="red-darken-2" variant="flat" @click="deleteVideo"
                                :loading="loader">Delete</v-btn>
                            <v-btn width="100" color="green-darken-2" variant="outlined"
                                @click="confirmDelete = false">Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-row>
        </v-row>


        <v-row no-gutters class="mt-8">
            <v-col cols="12" class="d-flex justify-center">
                <v-btn variant="elevated" color="primary" width="200" @click="addVideoDialog = !addVideoDialog">Add
                    Video</v-btn>

                <!-- Add New Video Dialog box -->
                <v-dialog v-model="addVideoDialog" width="auto">
                    <v-card width="50vw" color="grey-lighten-5">
                        <v-row no-gutters class="pa-10 pt-7">
                            <v-col cols="12" class="text-h6 pb-5">
                                Add new Video
                            </v-col>
                            <v-col cols="12">
                                <v-file-input v-model="videos" label="File input" variant="filled" prepend-icon="mdi-video"
                                    name="videofile" accept="video/*"></v-file-input>
                            </v-col>
                            <v-col cols="12" class="pt-5 d-flex justify-center">
                                <v-btn variant="elevated" color="primary" width="200" :loading="loader"
                                    @click="addVideo">Add Video</v-btn>
                                <v-btn class="ml-4" width="100" color="green-darken-2" variant="outlined"
                                    @click="addVideoDialog = false">Cancel</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js';
import { useRouter } from "vue-router";

const props = defineProps(['videos', 'propertyId'])
const router = useRouter();

const videos = ref(props.videos);
const videoId = ref('')

const addVideoDialog = ref(false)

const updateDialog = ref(false);
const title = ref('');
const description = ref('');

const confirmDelete = ref(false);

const loader = ref(false);
const expandSuccess = ref(false);
const expandFailure = ref(false);
const messageType = ref('');


async function fetchPropertyVideos() {
    const res = await api?.property?.getPropertyVideo({ params: { propertyId: props?.propertyId } })
    if (res.status === 200) {
        videos.value = res.data;
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}



function addVideoFailure() {
    addVideoDialog.value = false;
    loader.value = false;
    expandFailure.value = true;
}
async function addVideo() {
    messageType.value = " Video addition ";
    loader.value = true;

    const formData = new FormData();
    if (videos.value?.length > 0) {
        for (let i = 0; i < videos.value.length; i++) {
            formData.append('video', videos.value[i]);
        }
        const res = await api?.property?.uploadVideo(formData);

        if (res?.data?.videos.length > 0) {
            console.log(res?.data, res?.data?.videos)

            const response = await api?.property?.addVideo({
                "propertyId": props.propertyId,
                "videoObj": res?.data?.videos[0]
            })


            if (response?.status === 200) {
                loader.value = false;
                addVideoDialog.value = false;
                await fetchPropertyVideos(); 
                expandSuccess.value = true;
            } else {
                addVideoFailure();
            }
        } else {
            addVideoFailure();
        }
    } else {
        addVideoFailure();
    }
    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 3000);
}

function getVideoId(id: any) {
    videoId.value = id;
    const video = videos.value.find((video:any) => video.id === id);
    title.value = video?.title;
    description.value = video?.description;
    
    updateDialog.value = true;
}
async function updateVideo() {
    messageType.value = " Video Updation ";
    loader.value = true;

    const res = await api.property.updateVideo({
        propertyId: props.propertyId,
        videoId: videoId.value,
        videoObj: {
            title: title.value,
            description: description.value,
        }
    })

    if (res?.status === 200) {
        loader.value = false;
        updateDialog.value = false;
        await fetchPropertyVideos(); 
        expandSuccess.value = true;
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


function confirmDeletion(id: any) {
    videoId.value = id;
    confirmDelete.value = true;
}
async function deleteVideo() {
    messageType.value = " Video deletion ";
    loader.value = true;

    const res = await api?.property?.deleteVideo({
        params: {
            propertyId: props.propertyId,
            videoId: videoId.value,
        }
    })

    if (res?.status === 200) {
        loader.value = false;
        confirmDelete.value = false;
        await fetchPropertyVideos(); 
        expandSuccess.value = true;
    } else {
        loader.value = false;
        confirmDelete.value = false;
        expandFailure.value = true;
    }
    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 3000);
}

</script>

<style scoped>
.videoDetailsSec {
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

.videoAction {
    height: 20%;
}
</style>