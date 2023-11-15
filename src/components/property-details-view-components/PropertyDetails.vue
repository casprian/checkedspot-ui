<template>
    <v-row no-gutters class="d-flex justify-space-between align-center">
        <v-col cols="12">
            <v-card-item class="titleCont">
                <v-card-title class="title">Property Details</v-card-title>
            </v-card-item>
        </v-col>
        <v-col v-if="props.details?.propertyAddedDate" cols="12" class="mb-1 mt-n2">
            <v-card-item class="titleCont my-0 mx-0">
                <v-card-title class="px-3 text-body-2 text- font-weight-regular bg-blue-grey-lighten-1"
                    style="line-height: 25px">Posted On : &nbsp; {{ postedDate }}</v-card-title>
            </v-card-item>
        </v-col>
    </v-row>

    <v-row no-gutters class="px-4 pb-6 text-body-1 font-weight-medium text-grey-darken-2">
        <!-- <v-col class="pdLH" cols="12">Property ID:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.propertyId ? props.details?.propertyId : 'Not Found'
                            }}
                        </span>
                    </v-col> -->
        <v-col v-if="props.details?.type" class="pdLH" cols="12">Property Type:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.type
                }}
            </span>
        </v-col>
        <v-col class="pdLH" cols="12">Property:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.isVerifiedByCheckedSpot ? 'Verified' : 'Unverified'
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.isFreeHold" class="pdLH" cols="12">Property:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.isFreeHold ? 'Freehold' : ''
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.title?.length > 0" class="pdLH" cols="12">Title:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props?.details?.title
                }}
            </span>
        </v-col>

        <!-- <v-col v-if="props.details?.propertyStatus" class="pdLH" cols="12">Property Status:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.propertyStatus
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.cost" class="pdLH" cols="12">Property Price:
                        <span class="text-body-1 text-grey-darken-1">
                            &nbsp;₹ {{
                                props.details?.cost
                            }}
                        </span>
                    </v-col>
                    
                    <v-col v-if="props.details?.totalArea > 0" class="pdLH" cols="12">
                        <v-btn class="pa-0 text-none" variant="text" color="" density="comfortable" v-bind="props">
                            <div class="text-body-1 font-weight-medium pdLH"
                                title="total area of the property in square feet">
                                Total Area: 
                                <span class="text-body-1 text-grey-darken-1">
                                    {{
                                        props.details?.totalArea
                                    }}
                                    {{
                                        props.details?.totalAreaUnit ?
                                        props.details?.totalArea :
                                        "sqft"
                                    }}
                                </span>
                            </div>
                            <v-dialog v-model="dialog1" activator="parent" width="auto" transition="dialog-bottom-transition">
                                <v-card>
                                    <v-card-text class="mx-2">
                                        <div class="mb-2 text-h6">Total Area in other Units</div>
                                        <table style="width: 240px;">
                                            <tr>
                                                <th class="valuecell">Value : Unit</th>
                                            </tr>
                                            <tr>
                                                <td title="guntha" class="valuecell">{{ (parseFloat(props.details?.totalArea) /
                                                    1089.000000).toFixed(6) }} &nbsp; &nbsp; <span
                                                        class="px-2 py-1 bg-pink-accent-3 rounded-pill">guntha</span></td>
                                            </tr>
                                            <tr>
                                                <td title="square feet" class="valuecell">{{
                                                    (parseFloat(props.details?.totalArea)).toFixed(6) }} &nbsp; &nbsp; <span
                                                        class="px-2 py-1 bg-pink-accent-3 rounded-pill">sqft</span></td>
                                            </tr>
                                            <tr>
                                                <td title="square meter" class="valuecell">{{
                                                    (parseFloat(props.details?.totalArea) /
                                                        10.763915).toFixed(6) }} &nbsp; &nbsp; <span
                                                        class="px-2 py-1 bg-pink-accent-3 rounded-pill">sqm</span></td>
                                            </tr>
                                            <tr>
                                                <td title="acre" class="valuecell">{{ (parseFloat(props.details?.totalArea) /
                                                    43560.057264).toFixed(6) }} &nbsp; &nbsp; <span
                                                        class="px-2 py-1 bg-pink-accent-3 rounded-pill">acre</span></td>
                                            </tr>
                                            <tr>
                                                <td title="hectare" class="valuecell">{{ (parseFloat(props.details?.totalArea) /
                                                    107639.150512).toFixed(6) }} &nbsp; &nbsp; <span
                                                        class="px-2 py-1 bg-pink-accent-3 rounded-pill">hectare</span></td>
                                            </tr>
                                            <tr>
                                                <td title="cent valuecell">{{ (parseFloat(props.details?.totalArea) /
                                                    435.560000).toFixed(6) }} &nbsp; &nbsp; <span
                                                        class="px-2 py-1 bg-pink-accent-3 rounded-pill">cent</span></td>
                                            </tr>
                                        </table>
                                    </v-card-text>
                                    <v-card-actions class="d-flex justify-center">
                                        <v-btn @click="dialog1 = false">OK</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-btn>
                    </v-col> -->

        <v-col v-if="props.details?.totalArea > 0" class="pdLH" cols="12">Total Area:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.totalArea
                }} sqft
            </span>
        </v-col>
        <v-col v-if="props.details?.builyupArea > 0" class="pdLH" cols="12">Builtup Area:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.builyupArea
                }} sqft
            </span>
        </v-col>
        <v-col v-if="props.details?.carpetArea > 0" class="pdLH" cols="12">Carpet Area:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.carpetArea
                }} sqft
            </span>
        </v-col>
        <v-col v-if="props.details?.noOfBedroom > 0" class="pdLH" cols="12">Bedrooms:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.noOfBedroom
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.noOfBathroom > 0" class="pdLH" cols="12">Bathrooms:
            <span class="text-body-1 text-grey-darken-1">{{
                props.details?.noOfBathroom
            }}</span>
        </v-col>
        <v-col v-if="props.details?.noOfKitchen > 0" class="pdLH" cols="12">Kitchens:
            <span class="text-body-1 text-grey-darken-1">{{
                props.details?.noOfKitchen
            }}</span>
        </v-col>
        <v-col v-if="props.details?.balcony !== 'unavailable'" class="pdLH" cols="12">Balcony:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.balcony
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.diningArea !== 'unavailable'" class="pdLH" cols="12">Dining
            Area:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.diningArea
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.garden !== 'unavailable'" class="pdLH" cols="12">Garden:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.garden
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.parkingLot !== 'unavailable'" class="pdLH" cols="12">Parking
            Lot:
            <span class="text-body-1 text-grey-darken-1">
                {{ props.details?.parkingLot }}
            </span>
        </v-col>
        <v-col v-if="props.details?.elivator !== 'unavailable'" class="pdLH" cols="12">Elivator:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.elivator
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.furnishedStatus !== 'unavailable'" class="pdLH" cols="12">Furnished Status:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.furnishedStatus
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.airConditioning !== 'unavailable'" class="pdLH" cols="12">Air
            Conditioning:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.airConditioning
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.swimmingPool !== 'unavailable'" class="pdLH" cols="12">Swimming Pool:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.swimmingPool
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.laundryRoom !== 'unavailable'" class="pdLH" cols="12">Laundry
            Room:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.laundryRoom
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.gym !== 'unavailable'" class="pdLH" cols="12">Gym:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.gym
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.wifi !== 'unavailable'" class="pdLH" cols="12">Wi Fi:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.wifi
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.tvCable !== 'unavailable'" class="pdLH" cols="12">TV Cable:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.tvCable
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.dishWasher !== 'unavailable'" class="pdLH" cols="12">Dish
            Washer:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.dishWasher
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.refrigerator !== 'unavailable'" class="pdLH" cols="12">Refrigerator:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.refrigerator
                }}
            </span>
        </v-col>
        <v-col v-if="props.details?.outdoorShower !== 'unavailable'" class="pdLH" cols="12">Outdoor Shower:
            <span class="text-body-1 text-grey-darken-1">
                {{
                    props.details?.outdoorShower
                }}
            </span>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const props = defineProps(['details'])

const months = reactive([
    { "name": "Jan" },
    { "name": "Feb" },
    { "name": "Mar" },
    { "name": "Apr" },
    { "name": "May" },
    { "name": "Jun" },
    { "name": "Jul" },
    { "name": "Aug" },
    { "name": "Sep" },
    { "name": "Oct" },
    { "name": "Nov" },
    { "name": "Dec" },
])
const dialog1 = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
const postedDate = ref("");

if (props.details?.propertyAddedDate) {
    const yyyyddmm = (props.details?.propertyAddedDate)?.split('-');
    const mm = parseInt(yyyyddmm[1]);
    postedDate.value = `${yyyyddmm[2]}-${months[mm - 1].name}-${yyyyddmm[0]}`;
}
</script>

<style scoped>
.pdLH {
    line-height: 30px;
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

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}

th,
td {
    padding: 10px 10px;
}
</style>