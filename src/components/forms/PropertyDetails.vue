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
      Tell us more about your property.
    </p>
    <!-- <p class="mt-2"> An accurate location helps you to connect with right buyer.</p> -->

    <plot-or-land-details v-if="type == 'plot/land'" />
    <flat-or-apartment-details v-if="type == 'flat/apartment'" />
    <farmland-or-farmhouse-details v-if="type == 'farmland/farmhouse'" />
  </div>
</template>
  
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

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

const type = ref("");

onMounted(() => {
  // @ts-ignore
  type.value = sessionStorage.getItem("propertyType") || "plot/land";
});
</script>
  
  <style scoped>
.heading {
  font-size: 26px;
}
</style>