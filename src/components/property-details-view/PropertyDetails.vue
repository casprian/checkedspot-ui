<template>
    <v-row no-gutters class="mb-8">
        <v-col cols="12">
            <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" class="d-flex justify-start align-center">
                        <v-card-item class="titleCont mb-4">
                            <v-card-title class="title">Property Details</v-card-title>
                        </v-card-item>
                    </v-col>
                    <v-col v-if="props.details?.propertyAddedDate" cols="12" sm="6" class="d-flex justify-sm-end justify-end align-center">
                        <v-card-item class="titleCont mb-4">
                            <v-card-title class="px-3 text-body-2 text- font-weight-regular bg-blue-grey-lighten-1 rounded-pill" style="line-height: 25px">Posted On : &nbsp;&nbsp; {{ postedDate }}</v-card-title>
                        </v-card-item>
                    </v-col>
                </v-row>

                <v-row no-gutters class="px-4 pb-6 text-body-1 font-weight-medium text-grey-darken-2">
                    <!-- <v-col class="pdLH" cols="12" sm="6" md="4">Property ID:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.propertyId ? props.details?.propertyId : 'Not Found'
                            }}
                        </span>
                    </v-col> -->
                    <v-col v-if="props.details?.type" class="pdLH" cols="12" sm="6" md="4">Property Type:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.type
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.propertyStatus" class="pdLH" cols="12" sm="6" md="4">Property Status:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.propertyStatus
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.cost" class="pdLH" cols="12" sm="6" md="4">Property Price:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.cost
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.totalArea > 0" class="pdLH" cols="12" sm="6" md="4">Total Area:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.totalArea
                            }} sqft
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.builyupArea > 0" class="pdLH" cols="12" sm="6" md="4">Builtup Area:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.builyupArea
                            }} sqft
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.carpetArea > 0" class="pdLH" cols="12" sm="6" md="4">Carpet Area:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.carpetArea
                            }} sqft
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.noOfBedroom > 0" class="pdLH" cols="12" sm="6" md="4">Bedrooms:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.noOfBedroom
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.noOfBathroom > 0" class="pdLH" cols="12" sm="6" md="4">Bathrooms:
                        <span class="text-body-1 text-grey-darken-1">{{
                            props.details?.noOfBathroom
                        }}</span>
                    </v-col>
                    <v-col v-if="props.details?.noOfKitchen > 0" class="pdLH" cols="12" sm="6" md="4">Bathrooms:
                        <span class="text-body-1 text-grey-darken-1">{{
                            props.details?.noOfKitchen
                        }}</span>
                    </v-col>
                    <v-col v-if="props.details?.balcony !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Balcony:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.balcony
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.diningArea !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Dining
                        Area:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.diningArea
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.garden !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Garden:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.garden
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.parkingLot !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Parking
                        Lot:
                        <span class="text-body-1 text-grey-darken-1">
                            {{ props.details?.parkingLot }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.elivator !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Elivator:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.elivator
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.furnishedStatus !== 'unavailable'" class="pdLH" cols="12" sm="6"
                        md="4">Furnished Status:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.furnishedStatus
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.airConditioning !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Air
                        Conditioning:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.airConditioning
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.swimmingPool !== 'unavailable'" class="pdLH" cols="12" sm="6"
                        md="4">Swimming Pool:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.swimmingPool
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.laundryRoom !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Laundry
                        Room:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.laundryRoom
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.gym !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Gym:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.gym
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.wifi !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Wi Fi:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.wifi
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.tvCable !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">TV Cable:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.tvCable
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.dishWasher !== 'unavailable'" class="pdLH" cols="12" sm="6" md="4">Dish
                        Washer:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.dishWasher
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.refrigerator !== 'unavailable'" class="pdLH" cols="12" sm="6"
                        md="4">Refrigerator:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.refrigerator
                            }}
                        </span>
                    </v-col>
                    <v-col v-if="props.details?.outdoorShower !== 'unavailable'" class="pdLH" cols="12" sm="6"
                        md="4">Outdoor Shower:
                        <span class="text-body-1 text-grey-darken-1">
                            {{
                                props.details?.outdoorShower
                            }}
                        </span>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
const props = defineProps(['details'])
import { reactive, ref } from 'vue';
const months = reactive([
    {"name": "Jan"},
    {"name": "Feb"},
    {"name": "Mar"},
    {"name": "Apr"},
    {"name": "May"},
    {"name": "Jun"},
    {"name": "Jul"},
    {"name": "Aug"},
    {"name": "Sep"},
    {"name": "Oct"},
    {"name": "Nov"},
    {"name": "Dec"},
])
const postedDate = ref("");

if(props.details?.propertyAddedDate) {
    const yyyyddmm = (props.details?.propertyAddedDate)?.split('-');
    const mm = parseInt(yyyyddmm[1]);
    postedDate.value = `${yyyyddmm[2]}-${months[mm-1].name}-${yyyyddmm[0]}`;
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

</style>