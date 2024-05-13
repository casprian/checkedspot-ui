<template>
  <div class="px-0">
    <p class="heading font-weight-medium text-center">Property Basic Details</p>

    <!-- Property owner name -->
    <div class="mt-8">
      <p class="propertyTypeLabel">Property owner name</p>

      <div class="radioGroup">
        <v-text-field variant="outlined" v-model="ownerName"></v-text-field>
      </div>
    </div>

    <!-- Do you want to sale/rent/lease your property? -->
    <div class="mt-8">
      <p class="propertyTypeLabel">
        *Do you want to sale/rent/lease your property?
      </p>

      <div class="radioGroup">
        <input
          id="sale"
          checked
          class="radioInput"
          type="radio"
          name="status"
          value="sale"
          v-model="status"
        />
        <label for="sale" title="sale">Sale</label>

        <input
          id="rent"
          class="radioInput"
          type="radio"
          name="status"
          value="rent"
          v-model="status"
        />
        <label for="rent" title="rent">Rent</label>

        <input
          id="lease"
          class="radioInput"
          type="radio"
          name="status"
          value="lease"
          v-model="status"
        />
        <label for="lease" title="lease">Lease</label>
      </div>
    </div>

    <!-- What kind of property do you have? -->
    <div class="mt-10">
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

    <!-- *Property type -->
    <div class="mt-10">
      <p class="propertyTypeLabel">
        *Choose the type of
        <span class="text-h6 font-weight-regular">{{ category }}</span>
        property.
      </p>

      <div class="radioGroup">
        <input
          v-if="
            status === 'sale' ||
            ((status === 'rent' || 'lease') && category === 'commercial')
          "
          id="plot/land"
          class="radioInput"
          type="radio"
          name="type"
          value="plot or land"
          v-model="type"
        />
        <label
          v-if="
            ((status === 'rent' || 'lease') && category === 'commercial') ||
            status === 'sale'
          "
          for="plot/land"
          title="plot/land"
          >Plot / Land</label
        >

        <input
          v-if="category === 'residential'"
          id="flat/apartment"
          class="radioInput"
          type="radio"
          name="type"
          value="flat or apartment"
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
          value="farmland or farmhouse"
          v-model="type"
        />
        <label
          v-if="category === 'residential'"
          for="farmland/farmhouse"
          title="farmland/farmhouse"
          >Farmland / Farmhouse</label
        >
      </div>
      <p class="text-body-2 text-red-darken-2" v-if="invalidFormSubmittion">
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
import { Ref, onBeforeMount, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
// @ts-ignore
import { initializePlotPost } from "@/composables/postProperty";
// @ts-ignore
import { initializeFlatPost } from "@/composables/postProperty";
// @ts-ignore
import { initializeFarmlandPost } from "@/composables/postProperty";
// @ts-ignore
import { usePostPropertyStore } from "@/store/postProperty";

const router = useRouter();
const postProperty = usePostPropertyStore();

const ownerName = ref("");
const status: Ref<string> = ref("sale");
const category: Ref<string> = ref("residential");
const type: Ref<string> = ref("");
const invalidFormSubmittion = ref(false);

watch(status, (newStatus) => {
  type.value = "";
});

function clearlocalStoragePropertyData() {
  localStorage.removeItem("plotData");
  localStorage.removeItem("flatData");
  localStorage.removeItem("farmlandData");
}

const handleContinue = () => {
  const activeStatus = localStorage.getItem("activePropertyStatus");
  const activeCategory = localStorage.getItem("activePropertyCategory");
  const activePropertyType = localStorage.getItem("activePropertyType");

  !(activeStatus && activeStatus === status.value)
    ? localStorage.setItem("activePropertyStatus", status.value)
    : "";
  !(activeCategory && activeCategory === category.value)
    ? localStorage.setItem("activePropertyCategory", category.value)
    : "";

  if (type.value) {
    if (type.value === "plot or land" && activePropertyType !== "plot") {
      clearlocalStoragePropertyData();
      const plotData = initializePlotPost();
      plotData.ownerName = ownerName.value;
      plotData.type = type.value;
      plotData.category = category.value;
      localStorage.setItem("plotData", JSON.stringify(plotData));
      localStorage.setItem("activePropertyType", "plot");
    } else if (
      type.value === "flat or apartment" &&
      activePropertyType !== "flat"
    ) {
      clearlocalStoragePropertyData();
      const flatData = initializeFlatPost();
      flatData.ownerName = ownerName.value;
      flatData.type = type.value;
      flatData.category = category.value;
      localStorage.setItem("flatData", JSON.stringify(flatData));
      localStorage.setItem("activePropertyType", "flat");
    } else if (
      type.value === "farmland or farmhouse" &&
      activePropertyType !== "farmland"
    ) {
      clearlocalStoragePropertyData();
      const farmlandData = initializeFarmlandPost();
      farmlandData.ownerName = ownerName.value;
      farmlandData.type = type.value;
      farmlandData.category = category.value;
      localStorage.setItem("farmlandData", JSON.stringify(farmlandData));
      localStorage.setItem("activePropertyType", "farmland");
    }

    postProperty.checkActiveForm();
    postProperty.addToFilledForms("basic");
    postProperty.updateActiveForm("location");
  } else {
    invalidFormSubmittion.value = true;
  }
};

onBeforeMount(() => {
  const activePropertyType = localStorage.getItem("activePropertyType");
  const propertyData = JSON.parse(
    // @ts-ignore
    localStorage.getItem(activePropertyType + "Data")
  );

  if (propertyData) {
    ownerName.value = propertyData.ownerName;
    status.value = propertyData.status;
    category.value = propertyData.category;
    type.value = propertyData.type;
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
  border: solid 1px #000000;
  padding: 8px 25px;
  border-radius: 8px;
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