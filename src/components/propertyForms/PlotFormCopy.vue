<script lang="ts" setup>
import CustomInput from '@/components/propertyForms/customInputs/CustomInput.vue';
import PincodeInput from '@/components/propertyForms/customInputs/PincodeInput.vue';
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue'

const { meta, values, errors, defineComponentBinds, handleSubmit } = useForm({
  validationSchema: {
    email(value: any) {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return true
      if (!value) return 'required'
      return 'Must be a valid e-mail.'
    },
  }
})

const email = defineComponentBinds('email');
const alert = ref(false);
const bodyData = ref({
  //@ts-ignore
  email: null,
  type: 'props?.type' || null,
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
})


function onSuccess(values:any) {
  console.log("meta : ", meta.value)
  console.log("sakdfhakslf")
  console.log(values)
}

function onInvalidSubmit(invalidData:any) {
  console.log("meta : ", meta.value)
  console.log(invalidData?.values); // current form values
  console.log(invalidData?.errors); // a map of field names and their first error message
  console.log(invalidData?.results); // a detailed map of field names and their validation results
  alert.value = true;
}
// This handles both valid and invalid submissions
const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);

</script>

<template>
  <v-container>

    <v-row>
      <CustomInput v-bind="email" :error="errors.email" />
    </v-row>
    <v-row>
      <pincode-input @clear="bodyData.pincode = null" v-model:textfieldtype="bodyData.pincode" variant="outlined"
        hint="Enter area pincode where property located" label="Property Area Pincode" :clearable="true"
        :persistenthint="false" />
    </v-row>
    <v-row>
      <v-btn @click="onSubmit">submit</v-btn>
    </v-row>
    <v-row>
      <div>values: {{ values }}</div>
      <div>values: {{ bodyData }}</div>
    </v-row>
    <v-row>

      <v-alert closable v-model="alert" icon="mdi-alert" type="warning" title="Warning">
        <div class="pa-3">Please Fill all the required Fields to post the property!</div>
      </v-alert>
    </v-row>
  </v-container>
  <!-- <pre>errors: {{ errors }}</pre> -->
</template>
