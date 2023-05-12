<template>
    <v-container>
        <form>
            <v-row no-gutters>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field label="email" v-model="bodyData.email" hint="Please enter you login email"
                        variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field label="property number(unique)" v-model="bodyData.propertyNumber"
                        hint="Please a unique property number" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-select v-model="bodyData.city" :items="cities" label="city" variant="outlined"
                        hint="Choose from the cities list"></v-select>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-select v-model="bodyData.state" :items="states" label="state" variant="outlined"
                        hint="Choose from the states list"></v-select>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-select v-model="bodyData.country" :items="countries" label="country" variant="outlined"
                        hint="Choose from the countries list"></v-select>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-select v-model="bodyData.type" :items="types" label="property type(plot, flat, etc."
                        variant="outlined" hint="Choose from the list of property types"></v-select>
                </v-col>

                <v-row no-gutters v-if="bodyData.type === 'plot'" class="py-3 mt-7 type">
                    <v-col cols="12" class="pt-2 pb-7 px-4">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Plot Details
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="cost (INR)" v-model="bodyData.cost" hint="Enter cost of the property in INR"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Total Area (sq/feet)" v-model="bodyData.totalArea"
                            hint="Enter Total area of the property in square feet" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Builyup Area (sq/feet)" v-model="bodyData.builyupArea"
                            hint="Enter Builyup Area of the property in square feet" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Carpet Area (sq/feet)" v-model="bodyData.carpetArea"
                            hint="Enter Carpet Area of the property in square feet" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-select v-model="bodyData.isFreeHold" :items="truefalse" label="Is Free Hold" variant="outlined"
                            hint="Choose from the list"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-select v-model="bodyData.isVerifiedByCheckedSpot" :items="truefalse"
                            label="Verified By Checkedspot" variant="outlined" hint="Choose from the list"></v-select>
                    </v-col>
                </v-row>

                <v-row no-gutters v-if="bodyData.type === 'flat'" class="py-3 mt-7 type">
                    <v-col cols="12" class="pt-2 pb-7 px-4">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Flat Details
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="cost (INR)" v-model="bodyData.cost" hint="Enter cost of the property in INR"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Total Area (sq/feet)" v-model="bodyData.totalArea"
                            hint="Enter Total area of the property in square feet" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Builyup Area (sq/feet)" v-model="bodyData.builyupArea"
                            hint="Enter Builyup Area of the property in square feet" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Carpet Area (sq/feet)" v-model="bodyData.carpetArea"
                            hint="Enter Carpet Area of the property in square feet" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Number of Bedrooms" v-model="bodyData.noOfBedroom"
                            hint="Enter number of Bedrooms in the property" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Number of Bathroom" v-model="bodyData.noOfBathroom"
                            hint="Enter number of Bathroom in the property" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Number of Kitchen" v-model="bodyData.noOfKitchen"
                            hint="Enter number of Kitchen in the property" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Number of Kitchen" v-model="bodyData.noOfKitchen"
                            hint="Enter number of Kitchen in the property" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-select v-model="bodyData.isFreeHold" :items="truefalse" label="Is Free Hold" variant="outlined"
                            hint="Choose from the list"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-select v-model="bodyData.isVerifiedByCheckedSpot" :items="truefalse"
                            label="Verified By Checkedspot" variant="outlined" hint="Choose from the list"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-select v-model="bodyData.furnishedStatus" :items="furnishedStatus"
                            label="Verified By Checkedspot" variant="outlined" hint="Choose from the list"></v-select>
                    </v-col>

                    <v-row no-gutters>                        
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Lobby" v-model="bodyData.lobby" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Balcony" v-model="bodyData.balcony" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Garden" v-model="bodyData.garden" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Dining Area" v-model="bodyData.diningArea" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Parking Lot" v-model="bodyData.parkingLot" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Elivator" v-model="bodyData.elivator" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Air Conditioning" v-model="bodyData.airConditioning"
                                false-value="unavailable" true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Swimming Pool" v-model="bodyData.swimmingPool"
                                false-value="unavailable" true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Laundry Room" v-model="bodyData.laundryRoom"
                                false-value="unavailable" true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Gym" v-model="bodyData.gym" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Wifi" v-model="bodyData.wifi" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="TV Cable" v-model="bodyData.tvCable" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Dishwasher" v-model="bodyData.dishWasher" false-value="unavailable"
                                true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Refrigerator" v-model="bodyData.refrigerator"
                                false-value="unavailable" true-value="available"></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
                            <v-checkbox class="pa-0" label="Outdoor Shower" v-model="bodyData.outdoorShower"
                                false-value="unavailable" true-value="available"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-row>

                <!-- Upload image, video section -->
                <v-row no-gutters class="py-3 mt-7 type">
                    <v-col cols="12" class="pt-2 pb-7 px-14">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Upload Property
                            Images
                        </div>
                    </v-col>
                    <v-col cols="12" class="py-1 px-3">
                        <v-file-input v-model:model-value="bodyData.imgfile" label="File input" variant="filled"
                            prepend-icon="mdi-camera" multiple name="imgfile" accept="image/*"></v-file-input>
                    </v-col>

                    <v-col cols="12" class="pt-2 pb-7 px-14">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Upload Property
                            Plans
                        </div>
                    </v-col>
                    <v-col cols="12" class="py-1 px-3">
                        <v-file-input v-model:model-value="bodyData.planimgfile" label="File input" variant="filled" prepend-icon="mdi-camera" multiple
                            name="planimgfile" accept="image/*"></v-file-input>
                    </v-col>

                    <v-col cols="12" class="pt-2 pb-7 px-14">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Upload Property
                            Videos
                        </div>
                    </v-col>
                    <v-col cols="12" class="py-1 px-3">
                        <v-file-input v-model:model-value="bodyData.vidfile" label="File input" variant="filled" prepend-icon="mdi-video" multiple
                            name="vidfile" accept="video/*"></v-file-input>
                    </v-col>
                </v-row>

                <!-- Property Location Section -->
                <v-row no-gutters class="py-3 mt-7 type">
                    <v-col cols="12" class="pt-2 pb-7 px-14">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Property
                            Location details
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field prepend-icon="mdi-longitude"  label="Property's Longitude" v-model="bodyData.longitude" hint="Enter Property's Longitude"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field prepend-icon="mdi-latitude" label="Property's Latitude" v-model="bodyData.latitude" hint="Enter Property's Latitude"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field prepend-icon="mdi-link" label="Google Map Link" v-model="bodyData.googleMapLink" hint="Enter Google map link of the location"
                            variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                <!-- Property Document Section -->
                <v-row no-gutters class="py-3 mt-7 type">
                    <v-col cols="12" class="pt-2 pb-7 px-4">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Property
                            Documents details
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Document Id" v-model="bodyData.documentId" hint="Enter Document Id"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Document Type" v-model="bodyData.documentType" hint="Enter Document Type"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Document Description" v-model="bodyData.documentDescription" hint="Enter Document Description"
                            variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                <!-- Property Agent Section -->
                <v-row no-gutters class="py-3 mt-7 type">
                    <v-col cols="12" class="pt-2 pb-7 px-4">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Property Agent details
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Agent Name" v-model="bodyData.agentName" hint="Enter Agent's Name"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Agent Email" v-model="bodyData.agentEmail" hint="Enter Agent's Email"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Agent Mobile" v-model="bodyData.agentMobile" hint="Enter Agent's Mobile"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Agent Address" v-model="bodyData.agentAddress" hint="Enter Agent's Address"
                            variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
            </v-row>
            <v-row no-gutters class="ma-6">
                <v-col cols="12"  class="d-flex justify-center">
                    <v-btn width="300px" color="blue" @click.prevent="addProperty" >submit</v-btn>
                </v-col>
            </v-row>
        </form>
    </v-container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import axios from 'axios';

const bodyData = reactive({
    email: null,
    propertyNumber: null,
    type: null,
    description: null,
    city: null,
    state: null,
    country: null,
    cost: null,
    totalArea: null,
    builyupArea: null,
    carpetArea: null,
    noOfBedroom: null,
    noOfBathroom: null,
    noOfKitchen: null,
    lobby: null,
    balcony: null,
    diningArea: null,
    garden: null,
    parkingLot: null,
    elivator: null,
    furnishedStatus: null,
    airConditioning: null,
    swimmingPool: null,
    laundryRoom: null,
    gym: null,
    wifi: null,
    tvCable: null,
    dishWasher: null,
    refrigerator: null,
    outdoorShower: null,
    isFreeHold: false,
    isVerifiedByCheckedSpot: false,
    documentId: null,
    documentType: null,
    documentDescription: null,
    agentName: null,
    agentMobile: null,
    agentEmail: null,
    agentAddress: null,
    longitude: null,
    latitude: null,
    googleMapLink: null,
    propertySchedule: null,
    imgfile: [],
    planimgfile: [],     
    vidfile: []
});
const cities = reactive(['Bangalore', 'Mysore', 'Hassan']);
const states = reactive(['Karnataka']);
const countries = reactive(['india']);
const types = reactive(['plot', 'flat']);
const truefalse = reactive(['true', 'false']);
const furnishedStatus = reactive(['unfurnished', 'semi-furnished', 'full-furnished']);

function addProperty() {    
    const formData = new FormData();    
    (Object.entries(bodyData)).forEach(([key, value]:any) => {
        if(value !== null && (key !== 'imgfile' && key !== 'planimgfile' && key !== 'vidfile')) {
            formData.append(`${key}`, value);
        }else if(key === 'imgfile' || key === 'planimgfile' || key === 'vidfile'){
            value.map((file:File) => {
                formData.append(key, file);
            })
        }
    })
    
    axios.post('http://localhost:8080/property/individual', formData, {
        headers :{
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`
        }
    }).then(res => {
        console.log(res?.data);
        alert(res?.data?.message);
    }).catch(err => {
        console.log(err);
    }) 
}

</script>

<style scoped>
.type {
    border: solid 2px grey;
    border-radius: 8px;
}

.checkheight {
    height: 60px;
    overflow: hidden;
}</style>