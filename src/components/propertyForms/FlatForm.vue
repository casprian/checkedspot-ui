<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="6" class="py-1 px-3">
        <v-select v-model="bodyData.country" :items="countries" disabled label="country" variant="outlined" clearable
          hint="Choose from the countries list"></v-select>
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
            Flat Details
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-select v-model="useris.value.value" :error-messages="useris.errorMessage.value" :items="roles"
            label="*Role (required)" variant="outlined" clearable hint="*Choose from the roles list"></v-select>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-select v-model="bodyData.visibility" :items="propertyVisibilities" label="property visibility"
            variant="outlined" clearable hint="Choose from the list of options"></v-select>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field prepend-inner-icon="mdi-link" label="Google Map Link" v-model="googleMapLink.value.value"
            :error-messages="googleMapLink.errorMessage.value" clearable hint="Enter Google map link of the location"
            variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field label="Property Address" v-model="bodyData.address" clearable hint="Enter property address"
            variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field label="Property Area Pincode" v-model="bodyData.pincode" clearable
            hint="Enter area pincode where property located" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field label="Cost (INR) (required)" v-model="cost.value.value" :error-messages="cost.errorMessage.value"
            clearable hint="Enter cost of the property in INR" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-row no-gutters>
            <v-col cols="8" class="pr-1">
              <v-text-field label="Total Area (required)" v-model="totalArea.value.value"
                :error-messages="totalArea.errorMessage.value" clearable hint="Enter Total area of the property"
                variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4" class="pl-1">
              <v-select v-model="bodyData.totalAreaUnit" :hint="bodyData?.totalAreaUnit" :items="units" item-title="unit"
                label="Select" persistent-hint variant="outlined"></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-row no-gutters>
            <v-col cols="8" class="pr-1">
              <v-text-field label="Builtup Area (required)" v-model="builtupArea.value.value"
                :error-messages="builtupArea.errorMessage.value" clearable
                hint="Enter Builtup Area of the property in square feet" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4" class="pl-1">
              <v-select v-model="bodyData.builtupAreaUnit" :hint="bodyData?.builtupAreaUnit" persistent-hint
                :items="units" item-title="unit" label="Select" variant="outlined"></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-row no-gutters>
            <v-col cols="8" class="pr-1">
              <v-text-field label="Carpet Area (required)" v-model="carpetArea.value.value"
                :error-messages="carpetArea.errorMessage.value" :clearable="false"
                hint="Enter Carpet Area of the property" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4" class="pl-1">
              <v-select v-model="bodyData.carpetAreaUnit" :hint="bodyData?.carpetAreaUnit" :items="units"
                item-title="unit" label="Select" :persistent-hint="true" variant="outlined"></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field label="Number of Bedrooms (required)" v-model="noOfBedroom.value.value"
            :error-messages="noOfBedroom.errorMessage.value" clearable hint="Enter number of Bedrooms in the property"
            variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field label="Number of Bathrooms (required)" v-model="noOfBathroom.value.value"
            :error-messages="noOfBathroom.errorMessage.value" clearable hint="Enter number of Bathroom in the property"
            variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field label="Number of Kitchens (required)" v-model="noOfKitchen.value.value"
            :error-messages="noOfKitchen.errorMessage.value" clearable hint="Enter number of Kitchen in the property"
            variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-select v-model="bodyData.furnishedStatus" :items="furnishedStatus" label="Furnished status"
            variant="outlined" clearable hint="Choose from the list"></v-select>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3" style="position: relative">
          <v-row no-gutters @mouseover="expand = true" @mouseout="expand = false">
            <v-switch v-model="bodyData.isFreeHold" true-value="true" false-value="false" label="Is Free Hold"
              color="pink-accent-3" hide-details>
            </v-switch>
          </v-row>
          <v-expand-transition style="position: absolute">
            <v-card v-show="expand" height="auto" width="90%" class="pa-3 mx-auto bg-grey-darken-3">
              <div class="text-caption text-center">
                Freehold property is inheritable and there are no restrictions on the right of the property owner to
                further transfer the property.In a free hold property, there is no encumbrance to the absolute title of
                the property. A free hold is not akin to a condominium whereinthe owner of the individual unit pays a
                maintenance charge. Free hold property can be inherited by a legal guardian. A freehold property can be
                transferred byregistration of sale deed.
              </div>
            </v-card>
          </v-expand-transition>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field label="title" v-model="bodyData.title" clearable hint="Property title - like, Fit for home etc."
            variant="outlined"></v-text-field>
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
            <v-checkbox class="pa-0" label="Elevator" v-model="bodyData.elevator" false-value="unavailable"
              true-value="available"></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
            <v-checkbox class="pa-0" label="Air Conditioning" v-model="bodyData.airConditioning" false-value="unavailable"
              true-value="available"></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
            <v-checkbox class="pa-0" label="Swimming Pool" v-model="bodyData.swimmingPool" false-value="unavailable"
              true-value="available"></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
            <v-checkbox class="pa-0" label="Laundry Room" v-model="bodyData.laundryRoom" false-value="unavailable"
              true-value="available"></v-checkbox>
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
            <v-checkbox class="pa-0" label="Refrigerator" v-model="bodyData.refrigerator" false-value="unavailable"
              true-value="available"></v-checkbox>
          </v-col>
          <v-col cols="12" sm="3" md="2" class="checkheight py-1 px-2">
            <v-checkbox class="pa-0" label="Outdoor Shower" v-model="bodyData.outdoorShower" false-value="unavailable"
              true-value="available"></v-checkbox>
          </v-col>
          <v-col cols="12" class="py-1 px-3">
            <v-textarea label="Flat Description" v-model="bodyData.description" auto-grow variant="outlined" rows="6"
              row-height="25" shaped></v-textarea>
          </v-col>
        </v-row>
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
            Upload Property Videos
          </div>
        </v-col>
        <v-col cols="12" class="py-1 px-3">
          <v-file-input v-model="videos" label="File input" variant="filled" prepend-icon="mdi-video" multiple
            name="vidfile" accept="video/*"></v-file-input>
        </v-col>

        <v-col cols="12" class="pt-2 pb-7 px-14">
          <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">
            Upload Property Documents
          </div>
        </v-col>
        <property-document-input @addDocument="addDocument" />
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
import { onMounted, watch, reactive, ref, toRaw } from "vue";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";
import { useCookies } from "vue3-cookies";
import jwtDecode from "jwt-decode";
//@ts-ignore
import api from "@/data/api/index.js";
//@ts-ignore
import PropertyDocumentInput from "@/components/propertyForms/customInputs/PropertyDocumentInput.vue";

const { cookies } = useCookies();
const props = defineProps(["type"]);
const router = useRouter();
const expand = ref(false);
const alert = ref(false);
const units = reactive(["guntha", "hectare", "acre", "cent", "square feet", "square meter"]);

const cities = ref([]);
const disableCities = ref(true);
const states = ref([]);
const countries = reactive(["India"]);
const furnishedStatus = reactive([
  "unfurnished",
  "semi-furnished",
  "full-furnished",
]);
const videos = ref([]);
const roles = ref(['OWNER', 'AGENT', 'DEVELOPER']);
const propertyVisibilities = ref(['public', 'private']);

const bodyData = reactive({
  //@ts-ignore
  email: null,
  type: props.type,
  description: null,
  visibility: 'public',
  title: null,
  address: null,
  pincode: null,
  city: null,
  state: null,
  country: "India",
  cost: null,
  totalArea: null,
  builtupArea: null,
  carpetArea: null,
  totalAreaUnit: "square feet",
  builtupAreaUnit: "square feet",
  carpetAreaUnit: "square feet",
  noOfBedroom: null,
  noOfBathroom: null,
  noOfKitchen: null,
  lobby: null,
  balcony: null,
  diningArea: null,
  garden: null,
  parkingLot: null,
  elevator: null,
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
  images: [],
  videos: [],
  documents: [],
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
      return "cost should be greater than 0.";
    },
    totalArea(value: any) {
      if (!value) {
        return "Required.";
      } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
        return true;
      }
      return "total area should be greater than 0.";
    },
    builtupArea(value: any) {
      if (!value) {
        return "Required.";
      } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
        return true;
      }
      return "builtup area should be greater than 0.";
    },
    carpetArea(value: any) {
      if (!value) {
        return "Required.";
      } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
        return true;
      }
      return "carpet area should be greater than 0.";
    },
    noOfBedroom(value: any) {
      if (!value) {
        return "Required.";
      } else if (value.length >= 0 && /^[0-9]*$/.test(value)) {
        return true;
      }
      return "it should contain only numbers";
    },
    noOfBathroom(value: any) {
      if (!value) {
        return "Required.";
      } else if (value.length >= 0 && /^[0-9]*$/.test(value)) {
        return true;
      }
      return "it should contain only numbers";
    },
    noOfKitchen(value: any) {
      if (!value) {
        return "Required.";
      } else if (value.length >= 0 && /^[0-9]*$/.test(value)) {
        return true;
      }
      return "it should contain only numbers";
    },
    useris(value: any) {
      if (!value) {
        return 'Required!';
      } else {
        return true;
      }
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
const builtupArea = useField("builtupArea");
const carpetArea = useField("carpetArea");
const noOfBedroom = useField("noOfBedroom");
const noOfBathroom = useField("noOfBathroom");
const noOfKitchen = useField("noOfKitchen");
const imgfile = useField<File[] | undefined>("imgfile");
const useris = useField("useris");

const loading = ref(false);


function addDocument(documents: Array<Object>) {
  //@ts-ignore
  const receiveddocuments = toRaw(documents);
  if (receiveddocuments?.length > 0) {
    //@ts-ignore
    bodyData.documents = receiveddocuments?.map(document => {
      //@ts-ignore
      if (document?.type) {
        return {
          //@ts-ignore
          ...document?.file,
          //@ts-ignore
          type: document?.type
        }
      } else {
        return;
      }
    })
  } else {
    //@ts-ignore
    bodyData.documents = [];
  }

  console.log(bodyData.documents, typeof bodyData.documents, Array.isArray(bodyData.documents))
}

watch(imgfile?.value, async (newImages) => {
  const imagefiles = newImages;
  const formData = new FormData();
  //@ts-ignore
  if (imagefiles?.length > 0) {
    //@ts-ignore
    for (let i = 0; i < imagefiles.length; i++) {
      //@ts-ignore
      formData.append('image', imagefiles[i]);
    }

    const res = await api?.property?.uploadImage(formData);

    if (res?.data?.images === undefined || res?.data?.images?.length <= 0) {
      bodyData.images = [];
    } else {
      bodyData.images = res?.data?.images;
    }
  } else {
    //@ts-ignore
    imgfile.value.value = null;
    bodyData.images = [];
  }
})

watch(videos, async (newVideos) => {
  const videofiles = newVideos;
  const formData = new FormData();
  //@ts-ignore
  if (videofiles?.length > 0) {
    //@ts-ignore
    for (let i = 0; i < videofiles.length; i++) {
      //@ts-ignore
      formData.append('video', videofiles[i]);
    }

    const res = await api?.property?.uploadVideo(formData);

    if (res?.data?.videos === undefined || res?.data?.videos?.length <= 0) {
      bodyData.videos = [];
    } else {
      bodyData.videos = res?.data?.videos;
    }
  } else {
    bodyData.videos = [];
  }
})

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
if (sessionStorage.getItem('bodyData') && sessionStorage.getItem('formType') === 'flatForm') {
  //@ts-ignore
  const sessionData = JSON.parse(sessionStorage.getItem('bodyData'));
  city.value.value = sessionData.city;
  state.value.value = sessionData.state;
  googleMapLink.value.value = sessionData.googleMapLink;
  cost.value.value = sessionData.cost;
  totalArea.value.value = sessionData.totalArea;
  builtupArea.value.value = sessionData.builtupArea;
  carpetArea.value.value = sessionData.carpetArea;
  noOfBedroom.value.value = sessionData.noOfBedroom;
  noOfBathroom.value.value = sessionData.noOfBathroom;
  noOfKitchen.value.value = sessionData.noOfKitchen;
  // imgfile.value.value = bodyData.imgfile;
  for (const key in sessionData) {
    if (sessionData[key] != null) {
      //@ts-ignore
      bodyData[key] = sessionData[key];
    }
  }
}

async function postingFlat(bodyData: any) {
  const jwt = cookies?.get("token")?.split("Bearer ")[1];
  //@ts-ignore
  bodyData.email = jwtDecode(jwt)?.userData?.email;

  const res = await api?.property?.createProperty(bodyData);

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
    //@ts-ignore
    bodyData[item] = values[item];
  }
  if (bodyData?.googleMapLink) {
    //@ts-ignore
    bodyData.latitude = bodyData?.googleMapLink?.toString().split("@")[1].split(",")[0];
    //@ts-ignore
    bodyData.longitude = bodyData?.googleMapLink?.toString().split("@")[1].split(",")[1];
  }

  //If not login setData in SessionStorage to use it again to autofill the 
  if (!cookies.get('token')) {
    sessionStorage.setItem('bodyData', JSON.stringify(bodyData));
    sessionStorage.setItem('formType', 'flatForm');
    loading.value = false;
    router.push({ path: '/signin', query: { message: "createProperty" } });
    return;
  } else {

    for (let key in bodyData) {
      if (key === "totalAreaUnit" || key === "builtupAreaUnit" || key === "carpetAreaUnit") {
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
    await postingFlat(bodyData);
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
}</style>