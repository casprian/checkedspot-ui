<template>
  <div class="px-0">
    <v-btn
      @click="handleBack"
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="ml-n4 text-none text-body-1"
      >Back</v-btn
    >
    <p class="heading font-weight-medium mt-8">
      Tell us more about your property.
    </p>
    <!-- <p class="mt-2"> An accurate location helps you to connect with right buyer.</p> -->

    <plot-or-land-details v-if="type === 'plot'" @onContinue="handleDetailsContinueBtnClick" />
    <flat-or-apartment-details v-if="type === 'flat'" @onContinue="handleDetailsContinueBtnClick" />
    <farmland-or-farmhouse-details v-if="type === 'farmland'" @onContinue="handleDetailsContinueBtnClick" />
  </div>
</template>
  
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
// @ts-ignore
import { usePostPropertyStore } from "@/store/postProperty";

const PlotOrLandDetails = defineAsyncComponent(
  // @ts-ignore
  () => import("@/components/forms/plot-or-land/PlotOrLandDetails.vue")
);
const FlatOrApartmentDetails = defineAsyncComponent(
  // @ts-ignore
  () =>
    import("@/components/forms/flat-or-apartment/FlatOrApartmentDetails.vue")
);
const FarmlandOrFarmhouseDetails = defineAsyncComponent(
  () =>
    import(
      // @ts-ignore
      "@/components/forms/farmland-or-farmhouse/FarmlandOrFarmhouseDetails.vue"
    )
);

const router = useRouter();
const postProperty = usePostPropertyStore();

const type = ref("");

function handleBack() {
  postProperty.removeFromFilledForms("location");
  postProperty.updateActiveForm("location");
}

function handleDetailsContinueBtnClick() {
  postProperty.addToFilledForms("details");
  postProperty.updateActiveForm("gallery");
}

onMounted(() => {
  // @ts-ignore
  type.value = localStorage.getItem("activePropertyType");
  console.log("DETAILS type.value : ", type.value)
});
</script>
  
<style scoped>
.heading {
  font-size: 26px;
}
</style>