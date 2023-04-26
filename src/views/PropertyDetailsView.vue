<template>
    <v-container fluid class="pa-0 pt-16 px-4">
        <v-row v-if="!property?.data" no-gutters class="px-sm-14">
            <v-col cols="4" class="loader">
                <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
            </v-col>
        </v-row>
        <v-row v-else no-gutters class="px-sm-10">
            <v-col cols="12" md="8" class="pr-0 pr-md-3">
                <v-row no-gutters>
                    <v-col cols="9">
                        <div class="d-flex justify-start align-center">
                            <div class="text-h6 text-md-h5 font-weight-medium">Checkedspot Property</div>
                            <div>
                                <v-btn variant="flat" color="pink-accent-3" density="comfortable"
                                    class="rounded-pill ml-6">For {{ property?.data?.propertyStatus ?
                                        property?.data?.propertyStatus : 'sale' }}</v-btn>
                            </div>
                        </div>
                        <div class="py-2">
                            <v-icon size="15" class="mt-n1 mr-2" icon="mdi-map-marker" color="grey-darken-2"></v-icon>
                            <span class="text-body-1 text-md-h6 font-weight-regular text-grey-darken-2">{{
                                property?.data?.location ?
                                property?.data?.location : "Bangalore" }}</span>
                        </div>
                    </v-col>
                    <v-col cols="3">
                        <div class="text-h6 text-md-h5 font-weight-medium text-pink-accent-3">₹ {{ property?.data?.cost ?
                            property?.data?.cost : 0 }}</div>
                        <div class="text-body-1 text-md-h6 font-weight-regular text-black">₹ {{ costPerSqFt ? costPerSqFt :
                            0 }} / sq ft</div>
                    </v-col>
                </v-row>

                <!-- Description -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Description</v-card-title>
                            </v-card-item>

                            <v-card-text class="description text-body-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor dolores nemo
                                omnis veniam, voluptatibus sit vero non tempora iste officia. Minima explicabo dolores iste,
                                veniam facilis corrupti odio maiores nihil temporibus accusamus. Sed ex dolore dicta quod
                                cumque.<br /><br />

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor dolores nemo
                                omnis veniam, voluptatibus sit vero non tempora iste officia. Minima explicabo dolores iste,
                                veniam facilis corrupti odio maiores nihil temporibus accusamus. Sed ex dolore dicta quod
                                cumque.<br /><br />

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor dolores nemo
                                omnis veniam, voluptatibus sit vero non tempora iste officia. Minima explicabo dolores iste,
                                veniam facilis corrupti odio maiores nihil temporibus accusamus. Sed ex dolore dicta quod
                                cumque.<br /><br />

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor dolores nemo
                                omnis veniam, voluptatibus sit vero non tempora iste officia. Minima explicabo dolores iste,
                                veniam facilis corrupti odio maiores nihil temporibus accusamus. Sed ex dolore dicta quod
                                cumque.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Property Details -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Property Details</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7" :class="pdStyle01">
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property ID: <span :class="pdStyle02">{{
                                    property?.data?.projectId ? property?.data?.projectId : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Type: <span :class="pdStyle02">{{
                                    property?.data?.type ? property?.data?.type : 'plot' }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Status: <span :class="pdStyle02">{{
                                    property?.data?.propertyStatus ? property?.data?.propertyStatus : 'sale'
                                }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Price: <span :class="pdStyle02">{{
                                    property?.data?.cost ? property?.data?.cost : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bedrooms: <span :class="pdStyle02">{{
                                    property?.data?.noOfBedroom ? property?.data?.noOfBedroom : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bathrooms: <span :class="pdStyle02">{{
                                    property?.data?.noOfBathroom ? property?.data?.noOfBathroom : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Garages: <span :class="pdStyle02">{{
                                    property?.data?.parkingLot === 'NOT_AVAILABLE' ? 0 : property?.data?.parkingLot
                                }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Year Built: <span :class="pdStyle02">{{
                                    property?.data?.yearOfBuilt ? property?.data?.yearOfBuilt : 2023 }}</span></v-col>
                            </v-row>

                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Amenities</v-card-title>
                            </v-card-item>

                            <v-card-text class="description text-body-2">

                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Floor Plans -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Floor Plans</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7">
                                <v-img
                                    src="https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg"></v-img>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- What's Nearby -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">What's Nearby</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7" :class="pdStyle01">
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property ID: <span :class="pdStyle02">{{
                                    property?.data?.projectId ? property?.data?.projectId : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Type: <span :class="pdStyle02">{{
                                    property?.data?.type ? property?.data?.type : 'plot' }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Status: <span :class="pdStyle02">{{
                                    property?.data?.propertyStatus ? property?.data?.propertyStatus : 'sale'
                                }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Price: <span :class="pdStyle02">{{
                                    property?.data?.cost ? property?.data?.cost : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bedrooms: <span :class="pdStyle02">{{
                                    property?.data?.noOfBedroom ? property?.data?.noOfBedroom : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bathrooms: <span :class="pdStyle02">{{
                                    property?.data?.noOfBathroom ? property?.data?.noOfBathroom : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Garages: <span :class="pdStyle02">{{
                                    property?.data?.parkingLot === 'NOT_AVAILABLE' ? 0 : property?.data?.parkingLot
                                }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Year Built: <span :class="pdStyle02">{{
                                    property?.data?.yearOfBuilt ? property?.data?.yearOfBuilt : 2023 }}</span></v-col>
                            </v-row>

                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Amenities</v-card-title>
                            </v-card-item>

                            <v-card-text class="description text-body-2">

                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Property Video -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-4 pb-4 pt-2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Property Video</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="pa-2">
                                <v-col cols="12">
                                    <video id="propVideo" muted controls>
                                        <source src="../assets/videos/7.mp4" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Location -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Location</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7" :class="pdStyle01">
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property ID: <span :class="pdStyle02">{{
                                    property?.data?.projectId ? property?.data?.projectId : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Type: <span :class="pdStyle02">{{
                                    property?.data?.type ? property?.data?.type : 'plot' }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Status: <span :class="pdStyle02">{{
                                    property?.data?.propertyStatus ? property?.data?.propertyStatus : 'sale'
                                }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Price: <span :class="pdStyle02">{{
                                    property?.data?.cost ? property?.data?.cost : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bedrooms: <span :class="pdStyle02">{{
                                    property?.data?.noOfBedroom ? property?.data?.noOfBedroom : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bathrooms: <span :class="pdStyle02">{{
                                    property?.data?.noOfBathroom ? property?.data?.noOfBathroom : 0 }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Garages: <span :class="pdStyle02">{{
                                    property?.data?.parkingLot === 'NOT_AVAILABLE' ? 0 : property?.data?.parkingLot
                                }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Year Built: <span :class="pdStyle02">{{
                                    property?.data?.yearOfBuilt ? property?.data?.yearOfBuilt : 2023 }}</span></v-col>
                            </v-row>

                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Amenities</v-card-title>
                            </v-card-item>

                            <v-card-text class="description text-body-2">

                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="4" class="pl-0 pl-md-3" style="background-color: aqua;">

            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const pdStyle01 = ref('text-body-1 font-weight-medium text-grey-darken-2')
const pdStyle02 = ref('text-body-1 text-grey-darken-1');

const route = useRoute();
const costPerSqFt = ref(0);
const property = reactive({
    data: null
})
// console.log(property)
onMounted(() => {
    axios.get('https://apicheckedspot.azurewebsites.net/property',
        {
            params: {
                propertyId: route?.params?.propertyId,
            },
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then((response) => {
            // console.log(response)
            property.data = response?.data?.data[0];
            costPerSqFt.value = Math.ceil(response?.data?.data[0].cost / response?.data?.data[0].totalArea);
        }).catch((error) => {
            console.log(error);
        })
})
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
    background-color: #F50057;
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
</style>