<template>
    <v-col cols="12">
        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
            <v-card-item class="titleCont mb-3">
                <v-card-title class="title">Video</v-card-title>
            </v-card-item>

            <div v-if="!playVid" class="d-flex justify-center align-center" style="height: 200px;">
                <v-btn @click="playVideo" icon="mdi-play-circle-outline" color="pink-accent-3">
                </v-btn>
            </div>
            <v-card-item v-else>
                <video id="propVideo" muted controls autoplay>
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
import { ref } from 'vue';

const props = defineProps(['propertyId'])
const playVid = ref(false);
const propertyVideo = ref('');

async function playVideo() {

    const res = await api?.property?.getPropertyVideo({ params: { propertyId: props?.propertyId } })
    if (res.data?.length > 0) {
        propertyVideo.value = res.data[0];
        playVid.value = true;
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