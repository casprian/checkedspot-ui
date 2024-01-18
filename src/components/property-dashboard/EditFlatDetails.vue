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
                <builtup-area :propertyId="propertyDetails.propertyId" :builtupArea="propertyDetails.builtupArea"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <carpet-area :propertyId="propertyDetails.propertyId" :carpetArea="propertyDetails.carpetArea"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <number-of-bedroom :propertyId="propertyDetails.propertyId" :noOfBedroom="propertyDetails.noOfBedroom"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <number-of-bathroom :propertyId="propertyDetails.propertyId" :noOfBathroom="propertyDetails.noOfBathroom"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <number-of-kitchen :propertyId="propertyDetails.propertyId" :noOfKitchen="propertyDetails.noOfKitchen"
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

            <v-col cols="12">
                <furnished-status :propertyId="propertyDetails.propertyId"
                    :furnishedStatus="propertyDetails.furnishedStatus" @success="handleUpdateSuccess"
                    @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-lobby :propertyId="propertyDetails.propertyId" :lobby="propertyDetails.lobby"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-balcony :propertyId="propertyDetails.propertyId" :balcony="propertyDetails.balcony"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-dining-area :propertyId="propertyDetails.propertyId" :diningArea="propertyDetails.diningArea"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-garden :propertyId="propertyDetails.propertyId" :garden="propertyDetails.garden"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-parking-lot :propertyId="propertyDetails.propertyId" :parkingLot="propertyDetails.parkingLot"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-elevator :propertyId="propertyDetails.propertyId" :elevator="propertyDetails.elevator"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-air-conditioning :propertyId="propertyDetails.propertyId"
                    :airConditioning="propertyDetails.airConditioning" @success="handleUpdateSuccess"
                    @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-swimming-pool :propertyId="propertyDetails.propertyId"
                    :swimmingPool="propertyDetails.swimmingPool" @success="handleUpdateSuccess"
                    @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-laundry-room :propertyId="propertyDetails.propertyId" :laundryRoom="propertyDetails.laundryRoom"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-gym :propertyId="propertyDetails.propertyId" :gym="propertyDetails.gym"
                    @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-wifi 
                    :propertyId="propertyDetails.propertyId" 
                    :wifi="propertyDetails.wifi"
                    @success="handleUpdateSuccess" 
                    @failure="handleUpdateFailure" 
                />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-tv-cable 
                    :propertyId="propertyDetails.propertyId" 
                    :tvCable="propertyDetails.tvCable"
                    @success="handleUpdateSuccess" 
                    @failure="handleUpdateFailure" 
                />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-dishwasher
                    :propertyId="propertyDetails.propertyId" 
                    :dishWasher="propertyDetails.dishWasher"
                    @success="handleUpdateSuccess" 
                    @failure="handleUpdateFailure" 
                />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-refrigerator
                    :propertyId="propertyDetails.propertyId" 
                    :refrigerator="propertyDetails.refrigerator"
                    @success="handleUpdateSuccess" 
                    @failure="handleUpdateFailure" 
                />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12">
                <property-outdoor-shower
                    :propertyId="propertyDetails.propertyId" 
                    :outdoorShower="propertyDetails.outdoorShower"
                    @success="handleUpdateSuccess" 
                    @failure="handleUpdateFailure" 
                />
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
const BuiltupArea = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/BuiltupArea.vue'));
const CarpetArea = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/CarpetArea.vue'));
const NumberOfBedroom = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/NumberOfBedroom.vue'));
const NumberOfBathroom = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/NumberOfBathroom.vue'));
const NumberOfKitchen = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/NumberOfKitchen.vue'));
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
const FurnishedStatus = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/FurnishedStatus.vue'));
const PropertyLobby = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyLobby.vue'));
const PropertyBalcony = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyBalcony.vue'));
const PropertyDiningArea = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyDiningArea.vue'));
const PropertyGarden = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyGarden.vue'));
const PropertyParkingLot = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyParkingLot.vue'));
const PropertyElevator = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyElevator.vue'));
const PropertyAirConditioning = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyAirConditioning.vue'));
const PropertySwimmingPool = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertySwimmingPool.vue'));
const PropertyLaundryRoom = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyLaundryRoom.vue'));
const PropertyGym = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyGym.vue'));
const PropertyWifi = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyWifi.vue'));
const PropertyTvCable = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyTvCable.vue'));
const PropertyDishwasher = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyDishwasher.vue'));
const PropertyRefrigerator = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyRefrigerator.vue'));
const PropertyOutdoorShower = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyOutdoorShower.vue'));

const router = useRouter();

const props = defineProps(['details']);
const propertyDetails = ref(props.details);

const textfieldDialog = ref(false);
const textfield = ref({
    key: '',
    value: ''
})

const expandSuccess = ref(false);
const expandFailure = ref(false);

// const propertyType = {
//     "plot": ["propertyStatus", "readyToMoveIn", "title", "description", "address", "pincode", "city", "state", "country", "cost", "totalArea", "isFreeHold", "googleMapLink"],
//     "farmland": ["propertyStatus", "readyToMoveIn", "title", "description", "address", "pincode", "city", "state", "country", "cost", "totalArea", "isFreeHold", "googleMapLink"],
//     "flat": ["propertyStatus", "readyToMoveIn", "title", "description", "address", "pincode", "city", "state", "country", "cost", "totalArea", "builtupArea", "carpetArea", "noOfBedroom", "noOfBathroom", "noOfKitchen", "lobby", "balcony", "diningArea", "garden", "parkingLot", "elevator", "furnishedStatus", "airConditioning", "swimmingPool", "laundryRoom", "gym", "wifi", "tvCable", "dishWasher", "refrigerator", "outdoorShower", "isFreeHold", "googleMapLink"]
// }

function editTextField(key: any, value: any) {
    textfield.value.key = key;
    textfield.value.value = value === 'unavailable' ? '' : value;
    textfieldDialog.value = true;
}

async function fetchPropertydetails() {
    const res = await api?.property?.getProperty({ params: { propertyId: propertyDetails.value?.propertyId } })
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