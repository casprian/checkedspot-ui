<template>
  <div class="px-0 px-md-8">
    <p class="heading font-weight-medium text-center">Property Basic Details</p>

    <div class="mt-8">
      <p class="propertyTypeLabel">Property owner name</p>

      <div class="radioGroup">
        <v-text-field variant="outlined" v-model="ownerName"></v-text-field>
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
          name="category"
          value="residential"
          v-model="category"
        />
        <label for="residential" title="residential"
          ><v-icon class="mt-n1">mdi-home</v-icon>&nbsp;Residential</label
        >

        <input
          id="commercial"
          class="radioInput"
          type="radio"
          name="category"
          value="commercial"
          v-model="category"
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
          name="type"
          value="plot/land"
          v-model="type"
        />
        <label for="plot/land" title="plot/land">Plot / Land</label>

        <input
          v-if="category === 'residential'"
          id="flat/apartment"
          class="radioInput"
          type="radio"
          name="type"
          value="flat/apartment"
          v-model="type"
        />
        <label
          v-if="category === 'residential'"
          for="flat/apartment"
          title="flat/apartment"
          >Flat / Apartment</label
        >

        <input
          v-if="category === 'residential'"
          id="farmland/farmhouse"
          class="radioInput"
          type="radio"
          name="type"
          value="farmland/farmhouse"
          v-model="type"
        />
        <label
          v-if="category === 'residential'"
          for="farmland/farmhouse"
          title="farmland/farmhouse"
          >Farmland / Farmhouse</label
        >
      </div>
      <p class="text-body-2 text-red-darken-2" v-if="errorOccured">
        * marked fields are required! Please choose appropriate option.
      </p>
    </div>

    <div class="mt-10 d-flex justify-center">
      <v-btn
        @click="handleContinue"
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// @ts-ignore
import { initializePlotPost } from "@/composables/postProperty";
// @ts-ignore
import { initializeFlatPost } from "@/composables/postProperty";
// @ts-ignore
import { initializeFarmlandPost } from "@/composables/postProperty";

const router = useRouter();

const ownerName = ref("");
const category = ref("residential");
const type = ref("");
const errorOccured = ref(false);

function clearSessionStoragePropertyData() {
  sessionStorage.removeItem("plotData");
  sessionStorage.removeItem("flatData");
  sessionStorage.removeItem("farmlandData");
}

const handleContinue = () => {
  if (type.value) {
    if (type.value === "plot/land") {
      const plotData = initializePlotPost();
      clearSessionStoragePropertyData();
      plotData.ownerName = ownerName.value;
      plotData.type = type.value;
      plotData.category = category.value;
      sessionStorage.setItem("plotData", JSON.stringify(plotData));
      sessionStorage.setItem("activeForm", "plot");
    } else if (type.value === "flat/apartment") {
      const flatData = initializeFlatPost();
      clearSessionStoragePropertyData();
      flatData.ownerName = ownerName.value;
      flatData.type = type.value;
      flatData.category = category.value;
      sessionStorage.setItem("flatData", JSON.stringify(flatData));
      sessionStorage.setItem("activeForm", "flat");
    } else if (type.value === "farmland/farmhouse") {
      const farmlandData = initializeFarmlandPost();
      clearSessionStoragePropertyData();
      farmlandData.ownerName = ownerName.value;
      farmlandData.type = type.value;
      farmlandData.category = category.value;
      sessionStorage.setItem("farmlandData", JSON.stringify(farmlandData));
      sessionStorage.setItem("activeForm", "farmland");
    }
    router.push("/postproperty/location");
  } else {
    errorOccured.value = true;
  }
};

onMounted(() => {
  const activeForm = sessionStorage.getItem("activeForm");
  // @ts-ignore
  const propertyData = JSON.parse(sessionStorage.getItem(activeForm + "Data"));

  if (propertyData) {
    type.value = propertyData.type;
    category.value = propertyData.category;
    ownerName.value = propertyData.ownerName;
  }
});
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