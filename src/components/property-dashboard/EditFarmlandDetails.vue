<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>Update Failed!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>
                    Update is Successful! <span class="text-body-1">Please refresh page if changes are not visible.</span>
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-container fluid class="pa-0">
        <v-row no-gutters class="mb-3">
            <v-col cols="12" class="pa-0" style="border-bottom: solid 2px grey;">
                <div class="text-h5 text-grey-darken-2 font-weight-medium">
                    Edit Your {{ (propertyDetails.type).toUpperCase() }} Details
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters>

            <v-col cols="12">
                <property-status :propertyId="propertyDetails.propertyId" :propertyStatus="propertyDetails.propertyStatus"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-visibility :propertyId="propertyDetails.propertyId" :visibility="propertyDetails.visibility"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <total-area :propertyId="propertyDetails.propertyId" :totalArea="propertyDetails.totalArea"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-cost :propertyId="propertyDetails.propertyId" :cost="propertyDetails.cost"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-country :propertyId="propertyDetails.propertyId" :country="propertyDetails.country"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-state :propertyId="propertyDetails.propertyId" :state="propertyDetails.state"
                    :country="propertyDetails.country" @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-city :propertyId="propertyDetails.propertyId" :city="propertyDetails.city"
                    :state="propertyDetails.state" @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-pincode :propertyId="propertyDetails.propertyId" :pincode="propertyDetails.pincode"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <google-map-link :propertyId="propertyDetails.propertyId" :gMapLink="propertyDetails.googleMapLink"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-address :propertyId="propertyDetails.propertyId" :address="propertyDetails.address"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-title :propertyId="propertyDetails.propertyId" :title="propertyDetails.title"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-description :propertyId="propertyDetails.propertyId" :description="propertyDetails.description"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <ready-to-movein :propertyId="propertyDetails.propertyId" :readyToMoveIn="propertyDetails.readyToMoveIn"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <free-hold :propertyId="propertyDetails.propertyId" :isFreeHold="propertyDetails.isFreeHold"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
//@ts-ignore
import api from '@/data/api/index.js';


const PropertyStatus = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyStatus.vue'));
const PropertyVisibility = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyVisibility.vue'));
const TotalArea = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/TotalArea.vue'));
const PropertyCost = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyCost.vue'));
const PropertyCountry = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyCountry.vue'));
const PropertyState = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyState.vue'));
const PropertyCity = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyCity.vue'));
const PropertyPincode = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyPincode.vue'));
const GoogleMapLink = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/GoogleMapLink.vue'));
const PropertyAddress = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyAddress.vue'));
const PropertyTitle = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyTitle.vue'));
const PropertyDescription = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyDescription.vue'));
const ReadyToMovein = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/ReadyToMovein.vue'));
const FreeHold = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/FreeHold.vue'));


const router = useRouter();

const props = defineProps(['details']);
const propertyDetails = ref(props.details);
const expandSuccess = ref(false);
const expandFailure = ref(false);

async function fetchPropertydetails() {
    const res = await api?.property?.getUserProperty({ params: { propertyId: propertyDetails.value?.propertyId } })
    if (res.status === 200) {
        propertyDetails.value = res.data;
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

async function handleUpdateSuccess() {
    await fetchPropertydetails();
    expandSuccess.value = true;

    setTimeout(() => {
        expandSuccess.value = false;
    }, 3000);
}

function handleUpdateFailure() {
    expandFailure.value = true;
    setTimeout(() => {
        expandFailure.value = false;
    }, 3000);
}


</script>

<style scoped></style>