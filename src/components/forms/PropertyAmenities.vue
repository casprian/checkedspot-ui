<template>
  <div class="px-0">
    <v-btn
      @click="handleback"
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="ml-n4 text-none text-body-1"
      >Back</v-btn
    >
    <p class="heading font-weight-medium mt-8">Add amenities/unique features</p>
    <!-- <p class="mt-2"> An accurate location helps you to connect with right buyer.</p> -->

    <plot-or-land-aminities v-if="type == 'plot'" @onContinue="handleAmenitiesContinue" />
    <flat-or-apartment-aminities v-if="type == 'flat'" @onContinue="handleAmenitiesContinue" />
    <farmland-or-farmhouse-aminities v-if="type == 'farmland'" @onContinue="handleAmenitiesContinue" />
  </div>
</template>
  
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCookies } from "vue3-cookies";
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
const postproperty = usePostPropertyStore();

const { cookies } = useCookies();
if (!cookies.get("token")) {
  router.push({ path: "/signin", query: { message: "createProperty" } });
}

function handleback() {
  postproperty.handleFormRouting('gallery');
}

function handleAmenitiesContinue() {
 postproperty.addFilledFormPath('/postproperty/details');
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