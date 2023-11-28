<template>
    <v-col cols="12">
        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
            <v-card-item class="titleCont mb-3">
                <v-card-title class="title">Video</v-card-title>
            </v-card-item>

            <div v-if="!isVideoExists" class="text-h4 text-center pa-8">
                No video has been uploaded for this property.
            </div>
            <div @click="playVideo" v-else-if = "!playVid" class="d-flex justify-center align-center" style="padding: 10px 15px;">
                <v-btn :loading="loader" variant="text" style="height: 400px; width: 100%;"><img style="height: 400px; width: 100%; object-fit: cover;" src="@/assets/videoplayergif.gif"/></v-btn>
            </div>
            <v-card-item v-else>
                <video id="propVideo" muted controls autoplay style="width: 100%; height: 60vh; object-fit: contain;">
                    <source :src="propertyVideo" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </v-card-item>
        </v-card>
    </v-col>
</template>

<script lang="ts" setup>
//@ts-ignore
import api from '@/data/api/index.js'
import { onMounted, ref } from 'vue';

const props = defineProps(['propertyId', 'videosExist']);
const playVid = ref(false);
const propertyVideo = ref('');
const loader = ref(false);
const videoUnavailable = ref(false);
const isVideoExists = ref(props.videosExist);

async function playVideo() {
    loader.value = true;
    const res = await api?.property?.getPropertyVideo({ params: { propertyId: props?.propertyId } })
    if (res?.status === 200) {
        loader.value = false;
        propertyVideo.value = res.data[0]?.fileUrl;
        playVid.value = true;
        if(res.data.length === 0) {
            videoUnavailable.value = true;
        }
    }
}
</script>

<style scoped>
.titleCont {
    position: relative;
}

.title::before {
    content: "";
    width: 50px;
    height: 3px;
    background-color: #f50057;
    position: absolute;
    top: 43px;
}


#propVideo {
    object-fit: cover;
    width: 100%;
    height: auto;
}
</style>