<template>
  <div class="px-0">
    <v-btn
      @click="handleback"
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="ml-n4 text-none text-body-1"
      >Back</v-btn
    >
    <p class="heading font-weight-medium mt-8">
      Tell us more about your property.
    </p>
    <!-- <p class="mt-2"> An accurate location helps you to connect with right buyer.</p> -->

    <plot-or-land-details v-if="type == 'plot'" @onContinue="handleDetailsContinue" />
    <flat-or-apartment-details v-if="type == 'flat'" @onContinue="handleDetailsContinue" />
    <farmland-or-farmhouse-details v-if="type == 'farmland'" @onContinue="handleDetailsContinue" />
  </div>
</template>
  
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCookies } from "vue3-cookies";
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
const postproperty = usePostPropertyStore();

const { cookies } = useCookies();
if (!cookies.get("token")) {
  router.push({ path: "/signin", query: { message: "createProperty" } });
}

function handleback() {
  router.back();
  postproperty.handleFormRouting('location');
}

function handleDetailsContinue() {
 postproperty.addFilledFormPath('/postproperty/details');
  postproperty.handleFormRouting("gallery");
}

const type = ref("");

onMounted(() => {
  // @ts-ignore
  type.value = localStorage.getItem("activeForm");
});
</script>
  
<style scoped>
.heading {
  font-size: 26px;
}
</style>