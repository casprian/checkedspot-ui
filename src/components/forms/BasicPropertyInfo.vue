<template>
  <div class="px-0 px-md-8">
    <p class="heading font-weight-medium text-center">Property Basic Details</p>

    <div class="mt-8">
      <p class="propertyTypeLabel">Property owner name</p>

      <div class="radioGroup">
        <v-text-field
          variant="outlined"
          v-model="propertyOwnerName"
        ></v-text-field>
      </div>
    </div>

    <div class="mt-6">
      <p class="propertyTypeLabel">*What kind of property do you have?</p>

      <div class="radioGroup">
        <input
          id="residential"
          checked
          class="radioInput"
          type="radio"
          name="type"
          value="residential"
          v-model="type"
        />
        <label for="residential" title="residential"
          ><v-icon class="mt-n1">mdi-home</v-icon>&nbsp;Residential</label
        >

        <input
          id="commercial"
          class="radioInput"
          type="radio"
          name="type"
          value="commercial"
          v-model="type"
        />
        <label for="commercial" title="commercial"
          ><v-icon class="mt-n1">mdi-domain</v-icon>&nbsp;Commercial</label
        >
      </div>
    </div>

    <div class="mt-8">
      <p class="propertyTypeLabel">*Property type</p>

      <div class="radioGroup">
        <input
          id="plot/land"
          class="radioInput"
          type="radio"
          name="subtype"
          value="plot/land"
          v-model="subType"
        />
        <label for="plot/land" title="plot/land">Plot / Land</label>

        <input
          id="flat/apartment"
          class="radioInput"
          type="radio"
          name="subtype"
          value="flat/apartment"
          v-model="subType"
        />
        <label for="flat/apartment" title="flat/apartment"
          >Flat / Apartment</label
        >

        <input
          id="farmland/farmhouse"
          class="radioInput"
          type="radio"
          name="subtype"
          value="farmland/farmhouse"
          v-model="subType"
        />
        <label for="farmland/farmhouse" title="farmland/farmhouse"
          >Farmland / Farmhouse</label
        >
      </div>
      <p class="text-body-2 text-red-darken-2" v-if="errorOccured">* marked fields are required! Please choose appropriate option.</p>
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
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const propertyOwnerName = ref("");
const type = ref("residential");
const subType = ref("");
const errorOccured = ref(false);

const handleFormSubmit = () => {
    if(subType.value) {
        router.push('/postproperty/location')
    } else {
        errorOccured.value = true;
    }
}


</script>

<style scoped>
.heading {
  font-size: 26px;
}
.propertyTypeLabel {
  font-size: 16px;
}

.radioGroup {
  margin-top: 15px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 5px;
}
.radioInput {
  display: none;
}
.radioInput + label {
  margin: 5px 15px 5px 0;
  border: solid 2px #000000;
  padding: 8px 25px;
  border-radius: 8px;
  /* border-top-left-radius: 15px;
    border-bottom-right-radius: 15px; */
}
.radioInput + label:hover {
  cursor: pointer;
}
.radioInput:checked + label {
  background-color: #c2185b;
  border-color: #c2185b;
  color: white;
}
</style>