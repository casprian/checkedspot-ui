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
                    Edit Property Details
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12">
                <total-area
                    :propertyId="props.details.propertyId" 
                    :totalArea="props.details.totalArea" 
                    @success="handleUpdateSuccess" 
                    @failure="handleUpdateFailure"
                />
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12">
                <google-map-link
                    :propertyId="props.details.propertyId" 
                    :gMapLink="props.details.googleMapLink" 
                    @success="handleUpdateSuccess" 
                    @failure="handleUpdateFailure"
                />
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12">
                <property-title
                    :propertyId="props.details.propertyId" 
                    :title="props.details.title" 
                    @success="handleUpdateSuccess" 
                    @failure="handleUpdateFailure"
                />
                <v-divider></v-divider>
            </v-col>

            <v-col cols="12" v-for="item in updateFields" :key="item">
                <div class="my-4 d-flex justify-space-between align-center">
                    <span> {{ item }} : &nbsp; <span class="text-blue-grey-darken-1">{{ props.details[item] }}</span></span>
                    <span><v-btn variant="text" color="secondary" @click="editTextField(item, props.details[item])"> Edit </v-btn></span>
                </div>
                <v-divider></v-divider>
            </v-col>
        </v-row>

        <v-dialog v-model="textfieldDialog" width="auto">
            <v-card width="50vw" color="grey-lighten-5">
                <v-row no-gutters class="pa-10 pt-7">
                    <v-col cols="12" class="text-h6 pb-5">
                        Update with new data
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="textfield.value" label="File input" variant="filled"
                            :name="textfield.key"></v-text-field>
                    </v-col>
                    <v-col cols="12" class="pt-5 d-flex justify-center">
                        <v-btn variant="elevated" color="primary" width="200" @click="updateTextField">Save</v-btn>
                        <v-btn class="ml-4" width="100" color="green-darken-2" variant="outlined"
                            @click="textfieldDialog = false">Cancle</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
const TotalArea = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/TotalArea.vue'));
const GoogleMapLink = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/GoogleMapLink.vue'));
const PropertyTitle = defineAsyncComponent(() => import('@/components/property-dashboard/edit-property-details/PropertyTitle.vue'));


const props = defineProps(['details']);

const textfieldDialog = ref(false);
const textfield = ref({
    key: '',
    value: ''
})

const loader = ref(false);
const expandSuccess = ref(false);
const expandFailure = ref(false);
const messageType = ref('');

const propertyType = {
    "plot": ["propertyStatus", "readyToMoveIn", "title", "description", "address", "pincode", "city", "state", "country", "cost", "totalArea", "isFreeHold", "googleMapLink"],
    "farmland": ["propertyStatus", "readyToMoveIn", "title", "description", "address", "pincode", "city", "state", "country", "cost", "totalArea", "isFreeHold", "googleMapLink"],
    "flat": ["propertyStatus", "readyToMoveIn", "title", "description", "address", "pincode", "city", "state", "country", "cost", "totalArea", "builtupArea", "carpetArea", "noOfBedroom", "noOfBathroom", "noOfKitchen", "lobby", "balcony", "diningArea", "garden", "parkingLot", "elivator", "furnishedStatus", "airConditioning", "swimmingPool", "laundryRoom", "gym", "wifi", "tvCable", "dishWasher", "refrigerator", "outdoorShower", "isFreeHold", "googleMapLink"]
}
//@ts-ignore
const updateFields = propertyType[props.details.type];

const data = ref(props.details);

function editTextField(key: any, value: any) {
    textfield.value.key = key; 
    textfield.value.value = value === 'unavailable' ? '' : value; 
    textfieldDialog.value = true;
}

function handleUpdateSuccess() {
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

async function updateTextField() {
    console.log(textfield.value);
}


</script>

<style scoped></style>