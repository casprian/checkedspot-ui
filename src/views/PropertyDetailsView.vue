<template>
    <v-container fluid class="pa-0 pt-10 px-4 bg-background" style="height: calc(100% - 54px);">
        <v-row v-if="count < 1" no-gutters class="d-flex justify-center align-center" style="height: calc(100% - 64px);">
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
                            {{ property?.data?.cost ? `₹ ${property?.data?.cost < 10000000 ? `${property?.data?.cost /
                                100000.0} Lac` : `${property?.data?.cost / 10000000.0} Cr`}` : '' }} </div>
                                <div class="text-body-1 text-md-h6 font-weight-regular text-black">
                                    {{ costPerSqFt ? `₹ ${costPerSqFt} / sq ft` : '' }}
                                </div>
                    </v-col>
                </v-row>

                <!-- Gallery -->
                <v-row no-gutters class="mb-8" style="width: 100%; height: auto;">
                    <property-image :propertyId="property?.data?.propertyId" :image="property?.data?.images?.fileUrl" />
                </v-row>

                <!-- Description -->
                <v-row no-gutters class="mb-8" style="width: 100%; height: auto;">
                    <property-description :description="property?.data?.description" />
                </v-row>

                <!-- Document -->
                <v-row no-gutters class="mb-8" style="width: 100%; height: auto;">
                    <property-documents :propertyId="property?.data?.propertyId" />
                </v-row>

                <!-- Location -->
                <v-row v-if="property?.data?.longitude && property?.data?.latitude" no-gutters class="mb-8">
                    <property-location-map :latitude="property?.data?.latitude" :longitude="property?.data?.longitude" />
                </v-row>
                
                <!-- Property Videos -->
                <v-row no-gutters class="mb-8">
                    <property-video :propertyId="property?.data?.propertyId" />
                </v-row>
            </v-col>

            <v-col cols="12" md="4" class="pl-0 pl-md-3">
                <v-row no-gutters>
                    <v-col v-if="isSold === true" cols="12">
                        <v-card class="rounded-0" elevation="2">
                            <v-card-item>
                                <div class="text-h3 font-weight-regular pa-10 bg-yellow">Property is Sold!</div>
                            </v-card-item>
                        </v-card>
                    </v-col>

                    <v-col v-else cols="12">
                        <property-agents :propertyId="property?.data?.propertyId"/>
                    </v-col>

                    <!-- Property Details -->
                    <v-col cols="12" class="my-8">
                        <v-card class="rounded-0" elevation="2">
                            <property-details :details="property?.data" />
                        </v-card>
                    </v-col>
                </v-row>
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
import { defineAsyncComponent } from 'vue';

const PropertyDetails = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyDetails.vue'))
const PropertyVideo = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyVideo.vue'))
const PropertyImage = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyImage.vue'))
const PropertyDocuments = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyDocuments.vue'))
const PropertyAgents = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyAgents.vue'))
const PropertyLocationMap = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyLocationMap.vue'))
const PropertyDescription = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyDescription.vue'))

const route = useRoute();
const router = useRouter();
const isSold = ref(false);
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
        'images': {fileUrl: ""},
        'documents': [''],
        'vodeos': [''],
        'address': null,
        'name': null,
        'parkingLot': null,
        'longitude': null,
        'latitude': null,
    },
});


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
        isSold.value = property?.data?.propertyStatus?.includes("sold");
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

onMounted(async () => {
    await propertydata();
});
</script>

<style scoped>
</style>