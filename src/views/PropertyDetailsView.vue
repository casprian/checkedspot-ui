<template>
    <v-container fluid class="pa-0 pt-8 bg-background">
        <v-row no-gutters class="px-sm-14">
            <v-col cols="12">
                <v-breadcrumbs :items="items" class="pa-0">
                    <template v-slot:prepend>
                        <v-icon size="small" icon="mdi-vuetify"></v-icon>
                    </template>
                </v-breadcrumbs>
            </v-col>
        </v-row>
    </v-container>
    <v-container fluid class="pa-0 pt-16 px-4 bg-background" style="height: calc(100% - 54px);">
        <v-row v-if="count < 2" no-gutters class="d-flex justify-center align-center" style="height: calc(100% - 64px);">
            <v-col cols="4">
                <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
            </v-col>
        </v-row>

        <v-row v-else no-gutters class="px-sm-10">
            <v-col cols="12" md="8" class="pr-0 pr-md-3">
                <v-row no-gutters class="mb-10">
                    <v-col cols="12" sm="9">
                        <div class="d-flex justify-space-between align-center justify-sm-start">
                            <div class="text-h6 text-sm-h5 font-weight-medium">
                                Checkedspot Property
                            </div>
                            <div v-if="property?.data">
                                <v-btn v-if="property?.data.propertyStatus" variant="flat" color="pink-accent-3"
                                    density="comfortable" class="rounded-pill ml-6">
                                    {{
                                        property?.data?.propertyStatus
                                        ? `For ${property?.data?.propertyStatus}`
                                        : "sale"
                                    }}
                                </v-btn>
                            </div>
                        </div>
                        <div class="py-2">
                            <v-icon size="15" class="mt-n1 mr-2" icon="mdi-map-marker" color="grey-darken-2"></v-icon>
                            <span class="text-body-1 text-md-h6 font-weight-regular text-grey-darken-2">{{
                                property?.data?.city
                                ? `${property?.data?.city}`
                                : 'Not Found'
                            }}</span>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="3" class="d-flex flex-column align-start align-sm-end">
                        <div class="text-h6 text-md-h5 font-weight-medium text-pink-accent-3">
                            {{ property?.data?.cost ? `₹ ${property?.data?.cost}` : '' }}
                        </div>
                        <div class="text-body-1 text-md-h6 font-weight-regular text-black">
                            {{ costPerSqFt ? `₹ ${costPerSqFt} / sq ft` : '' }}
                        </div>
                    </v-col>
                </v-row>

                <!-- Gallery -->
                <v-row no-gutters class="mb-8">
                    <property-image :propertyId="property?.data?.propertyId" :image="property?.data?.propertyImage[0]" />
                </v-row>

                <!-- Description -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Description</v-card-title>
                            </v-card-item>

                            <v-card-text v-if="property?.data?.description !== 'unavailable'"
                                class="description text-body-2">
                                {{ property?.data?.description }}
                            </v-card-text>
                            <v-card-text v-else class="description text-h4 font-weight-regular text-center">
                                Description Not Found
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Property Details -->
                <property-details :details="property?.data" />


                <!-- Property Videos -->
                <v-row no-gutters class="mb-8">
                    <property-video :propertyId="property?.data?.propertyId" />
                </v-row>

                <!-- Plans -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Plan</v-card-title>
                            </v-card-item>

                            <v-row v-if="property?.data?.propertyPlan.length > 0" no-gutters class="px-4 pb-5">
                                <v-cols cols="12" style="height: 500px; width: 100%;">
                                    <PDFViewer style="min-width: 300px !important;" :rendering-text="'Loading Plan PDF'"
                                        :source="property?.data?.propertyPlan ? property?.data?.propertyPlan[0] : ''"
                                        @download="handleDownload"
                                        :controls="['download', 'print', 'zoom', 'switchPage', 'catalog']" />
                                </v-cols>
                            </v-row>
                            <div v-else class="text-h4 text-center pa-8">
                                No Document has been uploaded for this property.
                            </div>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Location -->
                <v-row v-if="property?.data?.longitude && property?.data?.latitude" no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-5 pb-8 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-6 pa-0 pb-4">
                                <v-card-title class="title">Location</v-card-title>
                            </v-card-item>
                            <div class="d-flex justify-center">
                                <span>
                                    <v-btn width="200" @click="showMap" v-if="!maploaded" prepend-icon="mdi-google-maps"
                                        color="deep-purple-lighten-2">Show Map</v-btn>
                                </span>
                            </div>
                            <v-row no-gutters v-if="maploaded" class="px-4 pb-7" id="map" :class="pdStyle01"
                                style="height: 500px;">
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col v-if="isSold === true" cols="12" md="4" class="pl-0 pl-md-3">
                <v-card class="rounded-0" elevation="2">
                    <v-card-item>
                        <div class="text-h3 font-weight-regular pa-10 bg-yellow">Property is Sold!</div>
                    </v-card-item>
                </v-card>
            </v-col>

            <v-col v-else cols="12" md="4" class="pl-0 pl-md-3">
                <v-card class="rounded-0" elevation="2">
                    <v-card-item>
                        <v-card-title class="pb-5 mx-3 mb-10 pt-2" style="border-bottom: 1px solid #e0e0e0">Sales
                            Coordinator
                        </v-card-title>
                        <v-card-actions>
                            <v-avatar class="mx-2" size="75" color="grey-darken-3"
                                image="https://checkedspot.blob.core.windows.net/assets/parvez1.jpeg"></v-avatar>
                            <v-sheet class="px-5 mt-n7">
                                <v-card-title>
                                    {{
                                        agent?.data?.name
                                        ? agent?.data?.name
                                        : 'Not Found'
                                    }}
                                </v-card-title>
                            </v-sheet>
                        </v-card-actions>
                        <v-row no-gutters class="pt-7 px-3 mx-3 pb-2 mb-2">
                            <v-col cols="12" class="d-flex align-center pb-3">
                                <v-icon icon="mdi-map-marker" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    {{
                                        agent?.data?.address
                                        ? agent?.data?.address
                                        : 'Not Found'
                                    }}
                                </div>
                            </v-col>
                            <v-col cols="12" class="d-flex align-center pb-3">
                                <v-icon icon="mdi-phone" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    {{
                                        agent?.data?.mobile
                                        ? agent?.data?.mobile
                                        : 'Not Found'
                                    }}
                                </div>
                            </v-col>
                            <v-col cols="12" class="d-flex align-center">
                                <v-icon icon="mdi-email" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    {{
                                        agent?.data?.email
                                        ? agent?.data?.email
                                        : 'Not Found' }}
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from '@/data/api/index.js';
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PDFViewer from 'pdf-viewer-vue';
//@ts-ignore
import PropertyDetails from '@/components/property-details-view/PropertyDetails.vue';
//@ts-ignore
import PropertyVideo from '@/components/property-details-view/PropertyVideo.vue';
//@ts-ignore
import PropertyImage from '@/components/property-details-view/PropertyImage.vue'
import { Loader } from '@googlemaps/js-api-loader';

function handleDownload() {
    window.location.href = property?.data?.propertyPlan[0];
}

const route = useRoute();
const router = useRouter();
const isSold = ref(false);

const pdStyle01 = ref("text-body-1 font-weight-medium text-grey-darken-2");

const items = reactive([
    {
        title: "Home",
        disabled: false,
        href: "/",
    },
    {
        title: "Listing",
        disabled: false,
        href: router?.options?.history?.state?.back,
    },
    {
        title: "Property Details",
        disabled: true,
        href: "/propertydetails",
    },
]);

const costPerSqFt = ref(0);
const count = ref(0);

const property = reactive({
    data: {
        'propertyId': null,
        'type': null,
        'wifi': null,
        'swimmingPool': null,
        'propertyStatus': [''],
        'laundryRoom': null,
        'city': null,
        'tvCable': null,
        'cost': null,
        'noOfBedroom': null,
        'dishWasher': null,
        'elivator': null,
        'airConditioning': null,
        'refrigerator': null,
        'yearOfBuilt': null,
        'noOfBathroom': null,
        'email': null,
        'description': null,
        'propertyImage': [''],
        'propertyPlan': [''],
        'propertyVideo': [''],
        'address': null,
        'name': null,
        'parkingLot': null,
        'longitude': null,
        'latitude': null,
    },
});

const agent = reactive({
    data: {
        'name': null,
        'email': [],
        'mobile': [],
        'address': []
    }
});

const maploaded = ref(false)
async function showMap() {
    let map;
    const additionalOptions = {};

    const loader = new Loader({
        //@ts-ignore
        apiKey: process.env.GOOGLE_API_KEY,
        version: "weekly",
        libraries: ["places"],
        ...additionalOptions,
    });

    loader?.load()?.then(async (google) => {
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map"), {
            //@ts-ignore
            center: { lat: parseFloat(property?.data?.latitude), lng: parseFloat(property?.data?.longitude) },
            zoom: 16,
        });
    });

    maploaded.value = true;
}

async function propertydata() {
    const res = await api?.property?.getProperty({
        params: {
            propertyId: route?.params?.propertyId,
        },
    })

    if (res.status === 200) {
        count.value++;
        property.data = res.data;
        costPerSqFt.value = res?.data?.totalArea !== 0 ? Math.ceil(res?.data?.cost / res?.data?.totalArea) : 0;
        //@ts-ignore
        isSold.value = property.data.propertyStatus.includes("sold");
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

async function agentdata() {
    const res = await api?.agent?.getAgent({
        params: {
            propertyId: route?.params?.propertyId,
        },
    })
    console.log(route?.params?.propertyId)
    console.log(typeof route?.params?.propertyId)


    if (res.status === 200) {
        count.value++;
        agent.data = res.data
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

onMounted(async () => {
    await propertydata();
    await agentdata();
});
</script>

<style scoped>
.description {
    line-height: 25px;
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