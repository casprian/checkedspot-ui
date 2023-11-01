<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" sm="6" class="py-1 px-3">
                <v-select v-model="bodyData.country" :items="countries" disabled label="country" variant="outlined"
                    clearable hint="Choose from the countries list"></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="py-1 px-3">
                <v-select v-model="state.value.value" :error-messages="state.errorMessage.value" :items="states"
                    label="state (required)" variant="outlined" clearable hint="Choose from the states list"></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="py-1 px-3">
                <v-select :disabled="disableCities" v-model="city.value.value" :error-messages="city.errorMessage.value"
                    :items="cities" label="city (required)" variant="outlined" clearable
                    hint="Choose from the cities list"></v-select>
            </v-col>

            <v-row no-gutters class="py-3 mt-7 type">
                <v-col cols="12" class="pt-2 pb-7 px-4">
                    <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">
                        Farmland Details
                    </div>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field prepend-inner-icon="mdi-link" label="Google Map Link" v-model="googleMapLink.value.value"
                        :error-messages="googleMapLink.errorMessage.value" clearable
                        hint="Enter Google map link of the location" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field label="Property Address" v-model="bodyData.address" clearable
                        hint="Enter property address" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field label="Property Area Pincode" v-model="bodyData.pincode" clearable
                        hint="Enter area pincode where property located" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field label="Cost (INR) (required)" v-model="cost.value.value"
                        :error-messages="cost.errorMessage.value" clearable hint="Enter cost of the property in INR"
                        variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-row no-gutters>
                        <v-col cols="8" class="pr-1">
                            <v-text-field label="Total Area (required)" v-model="totalArea.value.value"
                                :error-messages="totalArea.errorMessage.value" clearable
                                hint="Enter Total area of the property" variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="4" class="pl-1">
                            <v-select v-model="bodyData.totalAreaUnit" :hint="bodyData?.totalAreaUnit" :items="units"
                                item-title="unit" label="Select" persistent-hint variant="outlined"></v-select>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3" style="position: relative">
                    <v-row no-gutters @mouseover="expand = true" @mouseout="expand = false">
                        <v-switch v-model="bodyData.isFreeHold" true-value="true" false-value="false" label="Is Free Hold"
                            color="pink-accent-3" hide-details>
                        </v-switch>
                    </v-row>
                    <v-expand-transition style="position: absolute">
                        <v-card v-show="expand" height="auto" width="90%" class="px-2 mx-auto bg-grey-darken-3">
                            <div class="text-body-2 pa-3">Is FreeHolds means</div>
                        </v-card>
                    </v-expand-transition>
                </v-col>
                <v-col cols="12" sm="6" class="py-1 px-3">
                    <v-text-field label="title" v-model="bodyData.title" clearable
                        hint="Property title - like, Fit for home etc." variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" class="py-1 px-3">
                    <v-textarea label="Farmland Description" v-model="bodyData.description" auto-grow variant="outlined"
                        rows="6" row-height="25" shaped></v-textarea>
                </v-col>
            </v-row>

            <!-- Upload image, video section -->
            <v-row no-gutters class="py-3 mt-7 type">
                <v-col cols="12" class="pt-2 pb-7 px-14">
                    <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">
                        Upload Property Images
                    </div>
                </v-col>
                <v-col cols="12" class="py-1 px-3">
                    <v-file-input v-model="imgfile.value.value" :error-messages="imgfile.errorMessage.value"
                        label="File input (required)" variant="filled" prepend-icon="mdi-camera" multiple name="imgfile"
                        accept=".jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg"></v-file-input>
                </v-col>

                <v-col cols="12" class="pt-2 pb-7 px-14">
                    <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">
                        Upload Property Documents
                    </div>
                </v-col>
                <v-col cols="12" class="py-1 px-3">
                    <v-file-input v-model="bodyData.planimgfile" label="File input" variant="filled"
                        prepend-icon="mdi-file-pdf-box" multiple name="planimgfile" accept="application/pdf"></v-file-input>
                </v-col>

                <v-col cols="12" class="pt-2 pb-7 px-14">
                    <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">
                        Upload Property Videos
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
                <v-btn width="300px" color="pink-darken-2" :loading="loading" @click.prevent="addProperty">submit</v-btn>
            </v-col>
        </v-row>
        <v-dialog v-model="alert" width="auto">
            <v-card v-if="alert" append-icon="$close" class="mx-auto" elevation="16" max-width="500">
                <template v-slot:append>
                    <v-btn icon="$close" variant="text" @click="alert = false"></v-btn>
                </template>
                <template v-slot:title>
                    <div class="text-h4 font-weight-bold">Warning</div>
                </template>

                <v-divider></v-divider>

                <div class="pa-10 text-center">
                    <v-icon class="mb-6" color="amber" icon="mdi-alert" size="100"></v-icon>

                    <div class="text-h5">Please fill all the required Fields inorder to post the property !!!</div>
                </div>

                <v-divider></v-divider>

                <div class="pa-4 text-end">
                    <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
                        @click="alert = false">
                        Close
                    </v-btn>
                </div>
            </v-card>
        </v-dialog>
    </v-container>
</template>
  
<script lang="ts" setup>
import { onMounted, watch, reactive, ref } from "vue";
import jwtDecode from "jwt-decode";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";
//@ts-ignore
import api from "@/data/api/index.js";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const props = defineProps(["type"]);
const router = useRouter();

const expand = ref(false);
const alert = ref(false);
const cities = ref([]);
const disableCities = ref(true);
const states = ref([]);
const countries = reactive(["India"]);
const units = reactive(["guntha", "hectare", "acre", "cent", "square feet", "square meter"]);

const bodyData = reactive({
    //@ts-ignore
    email: null,
    type: props.type,
    description: null,
    title: null,
    address: null,
    pincode: null,
    city: null,
    state: null,
    country: "India",
    cost: null,
    totalArea: null,
    builyupArea: null,
    totalAreaUnit: "square feet",
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
    agentName: null,
    agentMobile: null,
    agentEmail: null,
    agentAddress: null,
    longitude: null,
    latitude: null,
    googleMapLink: null,
    propertySchedule: null,
    imgfile: [],
    documents: [{ type: 'RTC', file: null }],
    planimgfile: [],
    vidfile: [],
});

let { meta, values, errors, handleSubmit, handleReset } = useForm({
    validationSchema: {
        city(value: any) {
            if (!value) {
                return "Required.";
            } else {
                return true;
            }
        },
        state(value: any) {
            if (!value) {
                return "Required.";
            } else {
                return true;
            }
        },
        googleMapLink(value: string) {
            if (!value) {
                return true;
            } else if (value) {
                try {
                    value.toString().split("@")[1].split(",")[0];
                    value.toString().split("@")[1].split(",")[1];
                    return true;
                } catch (error) {
                    return "Please enter Valid Google map url/link OR leave it BLANK";
                }
            } else {
                return true;
            }
        },
        cost(value: any) {
            if (!value) {
                return "Required.";
            } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
                return true;
            }
            return "cost should be grater than 0.";
        },
        totalArea(value: any) {
            if (!value) {
                return "Required.";
            } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
                return true;
            }
            return "total area should be greater than 0.";
        },
        imgfile(value: any) {
            if (!value) {
                return "Required! Allowed files: .jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg";
            }
            return true;
        },
    },
});
const city = useField("city");
const state = useField("state");
const googleMapLink = useField("googleMapLink");
const cost = useField("cost");
const totalArea = useField("totalArea");
const imgfile = useField<File[] | undefined>("imgfile");

const loading = ref(false);

//@ts-ignore
watch(state.value, newStateSelected => {
    disableCities.value = false;
    //@ts-ignore
    const stateList = JSON.parse(localStorage.getItem('location'));
    //@ts-ignore
    const state = stateList?.states?.find(state => state.name === newStateSelected);
    cities.value = state?.cities;
    city.value.value = null;
})

//autofill data in the form.
if (sessionStorage.getItem('bodyData') && sessionStorage.getItem('formType') === 'farmLandForm') {
    //@ts-ignore
    const sessionData = JSON.parse(sessionStorage.getItem('bodyData'));
    city.value.value = sessionData.city;
    state.value.value = sessionData.state;
    googleMapLink.value.value = sessionData.googleMapLink;
    cost.value.value = sessionData.cost;
    totalArea.value.value = sessionData.totalArea;
    // imgfile.value.value = bodyData.imgfile;
    for (const key in sessionData) {
        if (sessionData[key] != null) {
            //@ts-ignore
            bodyData[key] = sessionData[key];
        }
    }
}

async function postingFarmland(bodyData: any) {
    const jwt = cookies?.get("token")?.split("Bearer ")[1];
    //@ts-ignore
    bodyData.email = jwtDecode(jwt)?.userData?.email;

    const formData = new FormData();
    Object.entries(bodyData).forEach(([key, value]: any) => {
        if (key === "totalAreaUnit") {
            formData?.append(key, "square feet")
        } else if (value !== null && key !== "imgfile" && key !== "planimgfile" && key !== "vidfile") {
            formData.append(`${key}`, value);
        } else if (key === "imgfile" || key === "planimgfile" || key === "vidfile") {
            value.map((file: File) => {
                formData.append(key, file);
            });
        }
    });

    const res = await api?.property?.createProperty(formData);

    if (res.status === 200) {
        loading.value = false;
        sessionStorage.removeItem('bodyData');
        sessionStorage.removeItem('formType');
        router.push(`/propertydetails/${res.data.propertyId}`)
    } else {
        router.push({ path: "/error", query: { status: res?.status } });
    }
}

async function onSuccess(values: any) {
    loading.value = true;
    for (let item in values) {
        if (values[item]) {
            //@ts-ignore
            bodyData[item] = values[item];
        }
    }

    if (bodyData?.googleMapLink) {
        //@ts-ignore
        bodyData.latitude = bodyData?.googleMapLink?.toString().split("@")[1].split(",")[0];
        //@ts-ignore
        bodyData.longitude = bodyData?.googleMapLink?.toString().split("@")[1].split(",")[1];
        console.log(bodyData.latitude, bodyData.longitude);
    }

    //If not login setData in SessionStorage to use it again to autofill the 
    if (!cookies.get('token')) {
        sessionStorage.setItem('bodyData', JSON.stringify(bodyData));
        sessionStorage.setItem('formType', 'farmLandForm');
        loading.value = false;
        router.push({ path: '/signin', query: { message: "createProperty" } });
        return;
    } else {
        for (let key in bodyData) {
            if (key === "totalAreaUnit") {
                const area = key?.slice(0, -4);
                if (bodyData[key] === "guntha") {
                    //@ts-ignore
                    bodyData[area] = 1089.000000 * bodyData[area];
                } else if (bodyData[key] === "hectare") {
                    //@ts-ignore
                    bodyData[area] = 107639.150512 * bodyData[area];
                } else if (bodyData[key] === "acre") {
                    //@ts-ignore
                    bodyData[area] = 43560.057264 * bodyData[area];
                } else if (bodyData[key] === "cent") {
                    //@ts-ignore
                    bodyData[area] = 435.560000 * bodyData[area];
                } else if (bodyData[key] === "square meter") {
                    //@ts-ignore
                    bodyData[area] = 10.763915 * bodyData[area];
                } else if (bodyData[key] === "square feet") {
                    //@ts-ignore
                    bodyData[area] = 1.000000 * bodyData[area];
                }
            }
        }
        await postingFarmland(bodyData);
    }
}

function onInvalidSubmit(invalidData: any) {
    console.log("meta : ", meta.value)
    console.log(invalidData?.values); // current form values
    console.log(invalidData?.errors); // a map of field names and their first error message
    console.log(invalidData?.results); // a detailed map of field names and their validation results
    alert.value = true;
}
const addProperty = handleSubmit(onSuccess, onInvalidSubmit);

// const addProperty = handleSubmit(async (values) => {
//     loading.value = true;
//     for (let item in values) {
//         if (values[item]) {
//             //@ts-ignore
//             bodyData[item] = values[item];
//         }
//     }

//     if (bodyData?.googleMapLink) {
//         //@ts-ignore
//         bodyData.latitude = bodyData?.googleMapLink?.toString().split("@")[1].split(",")[0];
//         //@ts-ignore
//         bodyData.longitude = bodyData?.googleMapLink?.toString().split("@")[1].split(",")[1];
//         console.log(bodyData.latitude, bodyData.longitude);
//     }

//     //If not login setData in SessionStorage to use it again to autofill the 
//     if (!cookies.get('token')) {
//         sessionStorage.setItem('bodyData', JSON.stringify(bodyData));
//         sessionStorage.setItem('formType', 'farmLandForm');
//         loading.value = false;
//         router.push({ path: '/signin', query: { message: "createProperty" } });
//         return;
//     } else {
//         for (let key in bodyData) {
//             if (key === "totalAreaUnit") {
//                 const area = key?.slice(0, -4);
//                 if (bodyData[key] === "guntha") {
//                     //@ts-ignore
//                     bodyData[area] = 1089.000000 * bodyData[area];
//                 } else if (bodyData[key] === "hectare") {
//                     //@ts-ignore
//                     bodyData[area] = 107639.150512 * bodyData[area];
//                 } else if (bodyData[key] === "acre") {
//                     //@ts-ignore
//                     bodyData[area] = 43560.057264 * bodyData[area];
//                 } else if (bodyData[key] === "cent") {
//                     //@ts-ignore
//                     bodyData[area] = 435.560000 * bodyData[area];
//                 } else if (bodyData[key] === "square meter") {
//                     //@ts-ignore
//                     bodyData[area] = 10.763915 * bodyData[area];
//                 } else if (bodyData[key] === "square feet") {
//                     //@ts-ignore
//                     bodyData[area] = 1.000000 * bodyData[area];
//                 }
//             }
//         }
//         await postingFarmland(bodyData);
//     }
// });


onMounted(() => {
    //@ts-ignore
    const stateList = JSON.parse(localStorage.getItem('location'));
    //@ts-ignore
    states.value = stateList?.states?.map(item => item.name);
})
</script>
  
<style scoped>
.type {
    border: solid 2px grey;
    border-radius: 8px;
}
</style>