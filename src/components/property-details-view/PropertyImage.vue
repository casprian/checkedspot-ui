<template>
    <v-col cols="12">
        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
            <v-card-item class="titleCont mb-3">
                <v-card-title class="title">Gallery</v-card-title>
            </v-card-item>

            <div @click="loadImages" v-if="!showImage" class="d-flex justify-center align-center container">
                <img :src="props.image" alt="Avatar" class="image">
                <div class="overlay">
                    <v-btn :loading="loader" class="text">Click to see Gallery</v-btn>
                </div>
            </div>
            <v-card-item v-else>
                <v-carousel height="400" class="galleryheight" show-arrows="hover" progress="pink-accent-3" continuous hide-delimiter-background>
                    <v-carousel-item selected-class="item" v-for="(image, i) in propertyImage.data" :key="i">
                        <v-sheet height="100%">
                            <img class="propGallery" :src="image" alt="property Gallery">
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-card-item>
        </v-card>
    </v-col>
</template>

<script lang="ts" setup>
//@ts-ignore
import api from '@/data/api/index.js'
import { onMounted, reactive, ref } from 'vue';

const props = defineProps(['propertyId', 'image']);
const showImage = ref(false);
let propertyImage = reactive({
    data: [""]
});
const loader = ref(false);

async function loadImages() {
    loader.value = true;
    const res = await api?.property?.getPropertyImage({ params: { propertyId: props?.propertyId } })
    if (res.data?.length > 0) {
        propertyImage.data = res.data;
        showImage.value = true;
        loader.value = false;
    }
}
</script>

<style scoped>
.propGallery {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item {
    display: block;
}

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

.container {
    position: relative;
    width: 96%;
    height: 400px;
    margin: 10px 15px;
}

.image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0000008b;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .3s ease;
}

.container:hover .overlay {
    bottom: 0;
    height: 100%;
}

.text {
    white-space: nowrap;
    color: rgb(0, 0, 0);
    font-size: 20px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

@media only screen and (max-width: 960px) {
    .overlay {
        height: 100%;
    }
}

@media only screen and (min-width: 1800px) {
    .galleryheight {
        height: auto !important;
    }
}
</style>