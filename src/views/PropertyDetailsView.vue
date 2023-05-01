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
    <v-container fluid class="pa-0 pt-16 px-4 bg-background">

        <v-row v-if="!property?.data" no-gutters class="px-sm-14">
            <v-col cols="4" class="loader">
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
                                <v-btn v-if="property?.data.propertyStatus" variant="flat" color="pink-accent-3" density="comfortable" class="rounded-pill ml-6">
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
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-3">
                                <v-card-title class="title">Gallery</v-card-title>
                            </v-card-item>

                            <v-card-item>
                                <v-carousel height="400" show-arrows="hover" delimiter-icon="mdi-vuetify" progress
                                    continuous hide-delimiter-background>
                                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                        <v-sheet :color="colors[i]" height="100%">
                                            <div class="d-flex fill-height justify-center align-center">
                                                <div class="text-h2">
                                                    {{ slide }} Slide
                                                </div>
                                            </div>
                                            <template v-slot:placeholder>
                                                <v-row>
                                                    <v-col cols="12" height="100px" class="bg-red"> kafds</v-col>
                                                </v-row>
                                            </template>
                                        </v-sheet>
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Description -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Description</v-card-title>
                            </v-card-item>

                            <v-card-text class="description text-body-2">
                                {{ property?.data?.description ? property?.data?.description : `<h4> Description Not Found </h4>` }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Property Details -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Property Details</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7" :class="pdStyle01">
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property ID:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.propertyId ? property?.data?.propertyId : 'Not Found'
                                        }}
                                    </span>
                                </v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Type:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.type ? property?.data?.type : "plot"
                                        }}
                                    </span>
                                </v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Status:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.propertyStatus
                                            ? property?.data?.propertyStatus
                                            : 'Not Found'
                                        }}
                                    </span>
                                </v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Price:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.cost ? property?.data?.cost : 'unavailable'
                                        }}
                                    </span>
                                </v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bedrooms:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.noOfBedroom
                                            ? property?.data?.noOfBedroom
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bathrooms:
                                    <span :class="pdStyle02">{{
                                        property?.data?.noOfBathroom
                                        ? property?.data?.noOfBathroom
                                        : 'unavailable'
                                    }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Year Built:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.yearOfBuilt
                                            ? property?.data?.yearOfBuilt
                                            : 'unavailable'
                                        }}
                                        </span>
                                    </v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Refrigerator:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.refrigerator !== "unavailable"
                                            ? property?.data?.refrigerator
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Air Conditioning:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.airConditioning !== "unavailable"
                                            ? property?.data?.airConditioning
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Dish Washer:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.dishWasher !== "unavailable"
                                            ? property?.data?.dishWasher
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Elivator:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.elivator !== "unavailable"
                                            ? property?.data?.elivator
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">TV Cable:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.tvCable !== "unavailable"
                                            ? property?.data?.tvCable
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Laundry Room:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.laundryRoom !== "unavailable"
                                            ? property?.data?.laundryRoom
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Swimming Pool:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.swimmingPool !== "unavailable"
                                            ? property?.data?.swimmingPool
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Wi Fi:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.wifi !== "unavailable"
                                            ? property?.data?.wifi
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Parking Lot:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.parkingLot !== "unavailable"
                                            ? property?.data?.parkingLot
                                            : 'unavailable'
                                        }}
                                    </span>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Floor Plans -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Plan</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7">
                                <v-img
                                    src="https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg"></v-img>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Location</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7" :class="pdStyle01">

                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="4" class="pl-0 pl-md-3">
                <v-card class="rounded-0" elevation="2">
                    <v-card-item>
                        <v-card-title class="pb-5 mx-3 mb-10 pt-2" style="border-bottom: 1px solid #e0e0e0">Sales Coordinator
                        </v-card-title>
                        <v-card-actions>
                            <v-avatar class="mx-2" size="75" color="grey-darken-3"
                            image="/src/assets/photos/parvez1.jpeg"></v-avatar>
                            <v-sheet class="px-5 mt-n7">
                                <v-card-title>{{ property?.data?.agentDetails?.name ? property?.data?.agentDetails?.name : 'Not Found' }}</v-card-title>
                            </v-sheet>
                        </v-card-actions>
                        <v-row no-gutters class="pt-7 px-3 mx-3 pb-2 mb-2">
                            <v-col cols="12" class="d-flex align-center pb-3">
                                <v-icon icon="mdi-map-marker" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    {{ property?.data?.agentDetails?.address ? property?.data?.agentDetails?.address : 'Not Found' }}
                                </div>
                            </v-col>
                            <v-col cols="12" class="d-flex align-center pb-3">
                                <v-icon icon="mdi-phone" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    {{ property?.data?.agentDetails?.contact ? property?.data?.agentDetails?.contact : 'Not Found' }}
                                </div>
                            </v-col>
                            <v-col cols="12" class="d-flex align-center">
                                <v-icon icon="mdi-email" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    {{ property?.data?.agentDetails?.email ? property?.data?.agentDetails?.email : 'Not Found' }}
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
import api from '@/data/api/index.js';
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const pdStyle01 = ref("text-body-1 font-weight-medium text-grey-darken-2");
const pdStyle02 = ref("text-body-1 text-grey-darken-1");

const items = reactive([
    {
        title: "Home",
        disabled: false,
        href: "/",
    },
    {
        title: "Listing",
        disabled: false,
        href: `${route?.query?.listingPath}`,
    },
    {
        title: "PropertyDetails",
        disabled: true,
        href: "/propertydetails",
    },
]);

const costPerSqFt = ref(0);

const property = reactive({
    data: {
        'propertyId':null,
        'type':null,
        'propertyStatus':null,
        'city':null,
        'cost':null,
        'description':null
    },
});

async function propertydata() {
    const res = await api?.property?.getProperty({
        params: {
            propertyId: route?.params?.propertyId,
        },
    })
    property.data = res.data;
    costPerSqFt.value = res?.data?.totalArea !== 0 ? Math.ceil(res?.data?.cost / res?.data?.totalArea) : 0;
}

onMounted(async () => {
    await propertydata();
});
const slides = reactive([
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
]);
const colors = reactive([
    'red',
    'blue',
    'yellow',
    'orange',
    'purple',
]);
</script>

<style scoped>
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

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

.pdLH {
    line-height: 38px;
}

#propVideo {
    object-fit: cover;
    width: 100%;
    height: auto;
}

.uploadBtn {
    background-color: #F50057;
    padding: 5px 25px;
    border-radius: 20px;
    font-weight: 500;
    color: white;
}

.uploadBtn>label:hover {
    cursor: pointer;
}
</style>