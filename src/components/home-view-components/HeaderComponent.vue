<template>
  <v-row no-gutters class="mt-5 mt-sm-10 mt-md-16 mb-8 d-flex flex-column-reverse flex-md-row">
    <v-col cols="12" md="6" class="textSection pa-0 pr-md-10 mt-5 mt-md-0">
      <h1 class="tagline">Plots Perfected, Dreams Constructed</h1>

      <p>We are a profession real estate service and construction company associated with partners in pan India and global spectrum.</p>
      <p>Specializing in construction of small , medium and big apartments, Plot development, Joint Development,
        Building mesmerizing cottages and restaurants, Commercial Complexes, Industrial Ware Houses and property sales,
        we provide tailored services.</p>
      <p>We are the first choice option when it comes to developing farm lands, farm houses with best customer
        satisfaction survey.</p>
      <!-- <p>With us for expert guidance and exclusive opportunities.</p> -->
      <v-btn @click="router.push({path: '/aboutus'})" color="#C2185B" class="text-white mt-6">Explore Us</v-btn>
    </v-col>
    
    <v-col cols="12" md="6" class="pa-0 pl-md-10 d-flex justify-center align-center">
      <img class="headerImage" src="../../assets/bengaluru.jpg">
    </v-col>
  </v-row>

  <!-- FILTERS -->
  <property-filter />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';

//@ts-ignore
const PropertyFilter = defineAsyncComponent(() => import('@/components/home-view-components/PropertyFilter.vue'));

const router = useRouter();
</script>

<style scoped>
.p0 {
  padding: 0px;
}

.m0 {
  margin: 0px;
}

.tagline {
  line-height: 53px;
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 24px;
}

.textSection > p {
  font-size: 18px;
  margin-bottom: 10px;
}

.headerImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.backgroundvideo {
  margin-top: -7px;
  width: 100%;
  height: 55vh;
  object-fit: cover;
}

.video-container {
  position: relative;
}
</style>
