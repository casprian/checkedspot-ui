<template>
    <v-col cols="12">
        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
            <v-card-item class="titleCont mb-3">
                <v-card-title class="title">Gallery</v-card-title>
            </v-card-item>

            <div v-if="!showImage" class="d-flex justify-center align-center" style="height: 200px;">
                <v-btn  @click="loadImages">Show Images</v-btn>
            </div>
            <v-card-item v-else> 
                <v-carousel height="400" show-arrows="hover" progress="pink-accent-3" continuous hide-delimiter-background>
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

const props = defineProps(['propertyId']);
const showImage = ref(false);
let propertyImage = reactive({
    data: [""]
});

async function loadImages() {
    const res = await api?.property?.getPropertyImage({ params: { propertyId: props?.propertyId } })
    if (res.data?.length > 0) {
        propertyImage.data = res.data;
        showImage.value = true;
    }
}

// onMounted(async() => {
//    await loadImages();
// })
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
</style>