<template>
  <div class="px-0">
    <v-btn
      @click="handleBack"
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="ml-n4 text-none text-body-1"
      >Back</v-btn
    >
    <p class="heading font-weight-medium mt-8">Add amenities/unique features</p>
    <!-- <p class="mt-2"> An accurate location helps you to connect with right buyer.</p> -->

    <plot-or-land-aminities v-if="type == 'plot'" @onContinue="handleAmenitiesContinueBtnClick" />
    <flat-or-apartment-aminities v-if="type == 'flat'" @onContinue="handleAmenitiesContinueBtnClick" />
    <farmland-or-farmhouse-aminities v-if="type == 'farmland'" @onContinue="handleAmenitiesContinueBtnClick" />
  </div>
</template>
  
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
// @ts-ignore
import { usePostPropertyStore } from "@/store/postProperty";


const PlotOrLandAminities = defineAsyncComponent(
  // @ts-ignore
  () => import("@/components/forms/plot-or-land/PlotOrLandAminities.vue")
);
const FlatOrApartmentAminities = defineAsyncComponent(
  // @ts-ignore
  () =>
    import("@/components/forms/flat-or-apartment/FlatOrApartmentAminities.vue")
);
const FarmlandOrFarmhouseAminities = defineAsyncComponent(
  () =>
    import(
      // @ts-ignore
      "@/components/forms/farmland-or-farmhouse/FarmlandOrFarmhouseAminities.vue"
    )
);

const router = useRouter();
const postProperty = usePostPropertyStore();

const type = ref("");

function handleBack() {
  postProperty.removeFromFilledForms("gallery");
  postProperty.updateActiveForm("gallery");
}

function handleAmenitiesContinueBtnClick() {
  postProperty.addToFilledForms("amenities");
}

onMounted(() => {
  // @ts-ignore
  type.value = localStorage.getItem("activePropertyType");
});
</script>
  
<style scoped>
.heading {
  font-size: 26px;
}
</style>