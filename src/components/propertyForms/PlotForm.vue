<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="6" class="py-1 px-3">
        <v-select
          v-model="bodyData.country"
          :items="countries"
          disabled
          label="country"
          variant="outlined"
          clearable
          hint="Choose from the countries list"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" class="py-1 px-3">
        <v-select
          v-model="state.value.value"
          :error-messages="state.errorMessage.value"
          :items="states"
          label="state"
          variant="outlined"
          clearable
          hint="Choose from the states list"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" class="py-1 px-3">
        <v-select
          v-model="city.value.value"
          :error-messages="city.errorMessage.value"
          :items="cities"
          label="city"
          variant="outlined"
          clearable
          hint="Choose from the cities list"
        ></v-select>
      </v-col>

      <v-row no-gutters class="py-3 mt-7 type">
        <v-col cols="12" class="pt-2 pb-7 px-4">
          <div
            class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1"
          >
            Plot Details
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field
            prepend-inner-icon="mdi-link"
            label="Google Map Link"
            v-model="googleMapLink.value.value"
            :error-messages="googleMapLink.errorMessage.value"
            clearable
            hint="Enter Google map link of the location"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field
            label="Property Address"
            v-model="bodyData.address"
            clearable
            hint="Enter property address"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field
            label="Property Area Pincode"
            v-model="bodyData.pincode"
            clearable
            hint="Enter area pincode where property located"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-text-field
            label="Cost (INR)"
            v-model="cost.value.value"
            :error-messages="cost.errorMessage.value"
            clearable
            hint="Enter cost of the property in INR"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3">
          <v-row no-gutters>
            <v-col cols="8" class="pr-1">
              <v-text-field
                label="Total Area"
                v-model="totalArea.value.value"
                :error-messages="totalArea.errorMessage.value"
                clearable
                hint="Enter Total area of the property"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="4" class="pl-1">
              <v-select
                v-model="totalAreaUnit"
                :hint="`${totalAreaUnit.unit}, ${totalAreaUnit.abbr}`"
                :items="units"
                item-title="unit"
                item-value="abbr"
                label="Select"
                persistent-hint
                return-object
                single-line
                variant="outlined"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="py-1 px-3" style="position: relative">
          <v-row
            no-gutters
            @mouseover="expand = true"
            @mouseout="expand = false"
          >
            <v-switch
              v-model="bodyData.isFreeHold"
              true-value="true"
              false-value="false"
              label="Is Free Hold"
              color="pink-accent-3"
              hide-details
            >
            </v-switch>
          </v-row>
          <v-expand-transition style="position: absolute">
            <v-card
              v-show="expand"
              height="auto"
              width="90%"
              class="px-2 mx-auto bg-grey-darken-3"
            >
              <div class="text-body-2 pa-3">Is FreeHolds means</div>
            </v-card>
          </v-expand-transition>
        </v-col>
        <v-col cols="12" class="py-1 px-3">
          <v-textarea
            label="Plot Description"
            v-model="bodyData.description"
            auto-grow
            variant="outlined"
            rows="6"
            row-height="25"
            shaped
          ></v-textarea>
        </v-col>
      </v-row>

      <!-- Upload image, video section -->
      <v-row no-gutters class="py-3 mt-7 type">
        <v-col cols="12" class="pt-2 pb-7 px-14">
          <div
            class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1"
          >
            Upload Property Images
          </div>
        </v-col>
        <v-col cols="12" class="py-1 px-3">
          <v-file-input
            v-model="imgfile.value.value"
            :error-messages="imgfile.errorMessage.value"
            label="File input"
            variant="filled"
            prepend-icon="mdi-camera"
            multiple
            name="imgfile"
            accept="image/*"
          ></v-file-input>
        </v-col>

        <v-col cols="12" class="pt-2 pb-7 px-14">
          <div
            class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1"
          >
            Upload Property Plans
          </div>
        </v-col>
        <v-col cols="12" class="py-1 px-3">
          <v-file-input
            v-model="bodyData.planimgfile"
            label="File input"
            variant="filled"
            prepend-icon="mdi-file-pdf-box"
            multiple
            name="planimgfile"
            accept=".pdf"
          ></v-file-input>
        </v-col>

        <v-col cols="12" class="pt-2 pb-7 px-14">
          <div
            class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1"
          >
            Upload Property Videos
          </div>
        </v-col>
        <v-col cols="12" class="py-1 px-3">
          <v-file-input
            v-model="bodyData.vidfile"
            label="File input"
            variant="filled"
            prepend-icon="mdi-video"
            multiple
            name="vidfile"
            accept="video/*"
          ></v-file-input>
        </v-col>
      </v-row>
    </v-row>
    <v-row no-gutters class="ma-6">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
          width="300px"
          color="blue"
          :loading="loading"
          @click.prevent="addProperty"
          >submit</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
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

const cities = reactive(["Bangalore", "Mysore", "Hassan"]);
const states = reactive(["Karnataka"]);
const countries = reactive(["India"]);
const jwt = cookies?.get("token")?.split("Bearer ")[1];
const units = reactive([
  { unit: "guntha", abbr: "guntha" },
  { unit: "hectare", abbr: "hectare" },
  { unit: "acre", abbr: "acre" },
  { unit: "cent", abbr: "cent" },
  { unit: "square feet", abbr: "sqft" },
  { unit: "square meter", abbr: "sqm" },
]);
const totalAreaUnit = ref({ unit: "square feet", abbr: "sqft" });

const bodyData = reactive({
  //@ts-ignore
  email: jwtDecode(jwt)?.userData?.email,
  type: props.type,
  description: null,
  address: null,
  pincode: null,
  city: null,
  state: null,
  country: "India",
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
  vidfile: [],
});

let { handleSubmit, handleReset } = useForm({
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
      } else if (value.length >= 4 && /^[0-9]*$/.test(value)) {
        return true;
      }
      return "min cost must exceed ₹ 9999 and it should contain only numbers";
    },
    totalArea(value: any) {
      if (!value) {
        return "Required.";
      } else if (value.length >= 2 && /^[0-9]*$/.test(value)) {
        return true;
      }
      return " it sholud exceed single digit, it should contain only numbers";
    },
    imgfile(value: any) {
      if (!value) {
        return "Required.";
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
const addProperty = handleSubmit(async (values) => {
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
  loading.value = true;
  const formData = new FormData();
  Object.entries(bodyData).forEach(([key, value]: any) => {
    if (
      value !== null &&
      key !== "imgfile" &&
      key !== "planimgfile" &&
      key !== "vidfile"
    ) {
      formData.append(`${key}`, value);
    } else if (
      key === "imgfile" ||
      key === "planimgfile" ||
      key === "vidfile"
    ) {
      value.map((file: File) => {
        formData.append(key, file);
      });
    }
  });

  const res = await api?.property?.createProperty(formData);

  if (res.status === 200) {
    loading.value = false;
    alert(res?.data?.message);
  } else {
    router.push({ path: "/error", query: { status: res?.status } });
  }
});
</script>

<style scoped>
.type {
  border: solid 2px grey;
  border-radius: 8px;
}
</style>