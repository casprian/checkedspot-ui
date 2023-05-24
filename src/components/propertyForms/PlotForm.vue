<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" sm="6" class="py-1 px-3">
                <v-select :v-model="propertyType" label="Property Type" variant="outlined" clearable hint="Property Type"
                    disabled></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="py-1 px-3">
                <v-select :v-model="bodyData.country" :items="countries" disabled label="country" variant="outlined"
                    clearable hint="Choose from the countries list"></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="py-1 px-3">
                <v-select v-model="state.value.value" :error-messages="state.errorMessage.value" :items="states" label="state" variant="outlined" clearable
                    hint="Choose from the states list"></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="py-1 px-3">
                <v-select v-model="city.value.value" :error-messages="city.errorMessage.value" :items="cities" label="city" variant="outlined" clearable
                    hint="Choose from the cities list"></v-select>
            </v-col>

            <v-row no-gutters class="py-3 mt-7 type">
                <v-col cols="12" class="pt-2 pb-7 px-4">
                    <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Plot Details
                    </div>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field prepend-inner-icon="mdi-link" label="Google Map Link" v-model="bodyData.googleMapLink"
                        clearable hint="Enter Google map link of the location" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field label="Cost (INR)" v-model="cost.value.value" :error-messages="cost.errorMessage.value" clearable
                        hint="Enter cost of the property in INR" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field label="Total Area (sq/feet)" v-model="totalArea.value.value" :error-messages="totalArea.errorMessage.value" clearable
                        hint="Enter Total area of the property in square feet" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3" style="position:relative;">
                    <v-row no-gutters @mouseover="expand = true" @mouseout="expand = false">
                        <v-switch v-model="bodyData.isFreeHold" true-value="true" false-value="false" label="Is Free Hold"
                            color="pink-accent-3" hide-details>
                        </v-switch>
                    </v-row>
                    <v-expand-transition class="expandFreehold">
                        <v-card v-show="expand" height="auto" width="75%" class="px-2 mx-auto bg-secondary">
                            <div class="text-body-2 pa-3">Is FreeHolds means</div>
                        </v-card>
                    </v-expand-transition>
                </v-col>
                <v-col cols="12" class="py-1 px-3">
                    <v-textarea label="Plot Description" v-model="bodyData.description" auto-grow variant="outlined"
                        rows="6" row-height="25" shaped></v-textarea>
                </v-col>
            </v-row>

            <!-- Upload image, video section -->
            <v-row no-gutters class="py-3 mt-7 type">
                <v-col cols="12" class="pt-2 pb-7 px-14">
                    <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Upload Property
                        Images
                    </div>
                </v-col>
                <v-col cols="12" class="py-1 px-3">
                    <v-file-input v-model="imgfile.value.value" :error-messages="imgfile.errorMessage.value" label="File input" variant="filled" prepend-icon="mdi-camera"
                        multiple name="imgfile" accept="image/*"></v-file-input>
                </v-col>

                <v-col cols="12" class="pt-2 pb-7 px-14">
                    <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Upload Property
                        Plans
                    </div>
                </v-col>
                <v-col cols="12" class="py-1 px-3">
                    <v-file-input v-model="bodyData.planimgfile" label="File input" variant="filled"
                        prepend-icon="mdi-camera" multiple name="planimgfile" accept="image/*"></v-file-input>
                </v-col>

                <v-col cols="12" class="pt-2 pb-7 px-14">
                    <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Upload Property
                        Videos
                    </div>
                </v-col>
                <v-col cols="12" class="py-1 px-3">
                    <v-file-input v-model="bodyData.vidfile" label="File input" variant="filled" prepend-icon="mdi-video"
                        multiple name="vidfile" accept="video/*"></v-file-input>
                </v-col>
            </v-row>
        </v-row>
        <v-row no-gutters class="ma-6">
            <v-col cols="12" class="d-flex justify-center">
                <v-btn width="300px" color="blue" :loading="loading" @click.prevent="addProperty">submit</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { defineProps, reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";
import { useField, useForm } from 'vee-validate';

const props = defineProps(['type']);
const propertyType = props.type;
const router = useRouter();

const expand = ref(false);

const cities = reactive(['Bangalore', 'Mysore', 'Hassan']);
const states = reactive(['Karnataka']);
const countries = reactive(['India']);
const bodyData = reactive({
    email: sessionStorage.getItem('email'),
    propertyNumber: null,
    type: null,
    description: null,
    city: null,
    state: null,
    country: 'India',
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


let { handleSubmit, handleReset } = useForm({
    validationSchema: {     
        city(value:any) {
            if(!value) {
                return 'Required.'
            }else{
                return true
            }
        },
        state(value:any){
            if(!value) {
                return 'Required.'
            }else{
                return true
            }
        },
        cost(value:any){
            if(!value) {
                return 'Required.'
            }
            else if(value.length>=4 && (/^[0-9]*$/).test(value)){
                return true
            }
                return 'min cost must exceed ₹ 9999 and it should contain only numbers'
            
        },
        totalArea(value:any){
            if(!value) {
                return 'Required.'
            }
            else if(value.length>=2 &&  (/^[0-9]*$/).test(value)){
                return true
            }
            return ' it sholud exceed single digit, it should contain only numbers'
        },
        imgfile(value:any){
            if(!value) {
                return 'Required.'
            }
                return true
            
        }
    }
})


const city = useField('city');
const state = useField('state');
const cost = useField('cost');
const totalArea = useField('totalArea');
const imgfile = useField('imgfile');


const loading = ref(false);
const addProperty = handleSubmit((values) => {
    for(let item in values) {
        //@ts-ignore
        bodyData[item] = values[item];
    }
    loading.value = true;
    const formData = new FormData();
    (Object.entries(bodyData)).forEach(([key, value]: any) => {
        if (value !== null && (key !== 'imgfile' && key !== 'planimgfile' && key !== 'vidfile')) {
            formData.append(`${key}`, value);
        } else if (key === 'imgfile' || key === 'planimgfile' || key === 'vidfile') {
            value.map((file: File) => {
                formData.append(key, file);
            })
        }
    })
    //https://apicheckedspot.azurewebsites.net
    axios.post('http://localhost:8080/property/individual', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`
        }
    }).then(res => {
        console.log(res?.data);
        loading.value = false;
        alert(res?.data?.message);
        if (res?.data?.status === 401) {
            router.push({ path: '/error', query: { status: 401 } });
        }
    }).catch(err => {
        router.push({ path: '/error', query: { status: err?.response?.status } })
        console.log(err);
    })
})

</script>

<style scoped>
.type {
    border: solid 2px grey;
    border-radius: 8px;
}
</style>