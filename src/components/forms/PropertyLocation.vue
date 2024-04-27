<template>
  <div class="px-0 px-md-8">
    <v-btn
      @click="router.back()"
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="ml-n4 text-none text-body-1"
      >Back</v-btn
    >
    <p class="heading font-weight-medium mt-8">
      Where is your property located?
    </p>
    <p class="mt-2">
      An accurate location helps you to connect with right buyer.
    </p>

    <div class="mt-8">
      <v-text-field
        class="mb-2"
        variant="outlined"
        v-model="country"
        disabled
        label="*City"
      ></v-text-field>

      <v-select
        class="mb-2"
        v-model="state.value.value"
        :error-messages="state.errorMessage.value"
        :items="states"
        label="*State"
        variant="outlined"
        clearable
        hint="Choose from the states list"
      ></v-select>

      <v-select
        class="mb-2"
        v-model="city.value.value"
        :error-messages="city.errorMessage.value"
        :items="cities"
        label="*City"
        variant="outlined"
        clearable
        hint="Choose from the Cities list"
      ></v-select>

      <v-text-field
        class="mb-2"
        variant="outlined"
        v-model="locality.value.value"
        :error-messages="locality.errorMessage.value"
        label="*Locality"
      ></v-text-field>
      <v-text-field
        class="mb-2"
        variant="outlined"
        v-model="subLocality"
        label="Sub locality (Optional)"
      ></v-text-field>
      <v-text-field
        variant="outlined"
        v-model="googleMapLink"
        label="Google map link (Optional)"
      ></v-text-field>
      <p class="text-caption">* marked fields are mandatory!</p>
    </div>

    <div class="mt-10 d-flex justify-center">
      <v-btn
        @click="handleFormSubmit"
        append-icon="mdi-arrow-right-bold"
        variant="elevated"
        class="px-10 text-none text-body-1 elevation-4"
        height="48"
        color="#C2185B"
        >Continue</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";

const router = useRouter();

const country = ref("India");
const cities = ref([]);
const states = ref([]);
const subLocality = ref("");
const googleMapLink = ref("");
const disableCities = ref(true);

let { meta, handleSubmit, handleReset } = useForm({
  validationSchema: {
    city(value: string) {
      if (!value) {
        return "Required.";
      } else {
        return true;
      }
    },
    state(value: string) {
      if (!value) {
        return "Required.";
      } else {
        return true;
      }
    },
    locality(value: string) {
      if (!value) {
        return "Required.";
      } else {
        return true;
      }
    },
  },
});
const city = useField<any>("city");
const state = useField<any>("state");
const locality = useField<string>("locality");

//@ts-ignore
watch(state.value, (newStateSelected) => {
  disableCities.value = false;
  //@ts-ignore
  const stateList = JSON.parse(localStorage.getItem("location"));
  //@ts-ignore
  const stateObj = stateList?.states?.find(
    // @ts-ignore
    (state) => state.name === newStateSelected
  );
  cities.value = stateObj?.cities;
  city.value.value = null;
});

function onSuccess() {
    console.log("onSuccess");
    router.push({path: '/postproperty/details'})
}

function onInvalidSubmit() {
    console.log("onInvalidSubmit");
}

const handleFormSubmit = handleSubmit(onSuccess, onInvalidSubmit);

onMounted(() => {
  //@ts-ignore
  const stateList = JSON.parse(localStorage.getItem("location"));
  //@ts-ignore
  states.value = stateList?.states?.map((item) => item.name);
});
</script>

<style scoped>
.heading {
  font-size: 26px;
}
</style>