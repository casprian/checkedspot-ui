<template>
    <v-col cols="12">
        <v-card class="rounded-0 px-5 pb-8 pt-2" elevation="2">
            <v-card-item class="titleCont mb-6 pa-0 pb-4">
                <v-card-title class="title">Location</v-card-title>
            </v-card-item>
            {{ props?.latitude }} {{ props?.longitude }}
            <div class="d-flex justify-center">
                <span>
                    <v-btn width="200" @click="showMap" v-if="!maploaded" prepend-icon="mdi-google-maps"
                        color="deep-purple-lighten-2">Show Map</v-btn>
                </span>
            </div>
            <v-row no-gutters v-if="maploaded" id="map" class="px-4 pb-7 text-body-1 font-weight-medium text-grey-darken-2"
                style="height: 500px;">
            </v-row>
        </v-card>
    </v-col>
</template>

<script lang="ts" setup>
import { Loader } from '@googlemaps/js-api-loader';
import { ref } from "vue";

const props = defineProps(['address', 'latitude', 'longitude']);

const maploaded = ref(false);

async function showMap() {
    let map;
    const additionalOptions = {};

    const loader = new Loader({
        //@ts-ignore
        apiKey: "AIzaSyBzpqC5xhWWMXzMtrpK84IiwQoMe93r-m8",
        version: "weekly",
        libraries: ["places"],
        ...additionalOptions,
    });

    // loader?.load()?.then(async (google:any) => {
    //     const { Map } = await google.maps.importLibrary("maps");

    //     map = new Map(document.getElementById("map"), {
    //         //@ts-ignore
    //         center: { lat: parseFloat(props?.latitude), lng: parseFloat(props?.longitude) },
    //         zoom: 16,
    //     });
    // });
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
</style>