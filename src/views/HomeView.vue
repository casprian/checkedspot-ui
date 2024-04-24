<template>
  <header-component/>    
  <v-container class="pa-0 my-0 px-5 px-sm-10 px-md-16" fluid>
    <recent-property :properties="recent20Properties.data" :errorOccured="errorOccured"/>
    <company-stats />
    <Construction/>

    <property-services/>
  </v-container>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

//@ts-ignore
import api from '@/data/api/index.js';

const HeaderComponent = defineAsyncComponent(() => import('@/components/home-view-components/HeaderComponent.vue'));
const RecentProperty = defineAsyncComponent(() => import('@/components/home-view-components/RecentProperty.vue'));
const CompanyStats = defineAsyncComponent(() => import('@/components/home-view-components/Stats.vue'));
const Construction = defineAsyncComponent(() => import('@/components/home-view-components/Construction.vue'));
const PropertyServices = defineAsyncComponent(() => import('@/components/home-view-components/PropertyServices.vue'));



const router = useRouter();
const recent20Properties = reactive({
  data: {}
})
const errorOccured = ref(false);

async function recentproperties() {
  const res = await api?.property?.getRecentProperties({ params: { limit: 20 } });
  if (res?.status === 200) {
    recent20Properties.data = res;
  } else {
    errorOccured.value = true;
    recent20Properties.data = res;    
  }
}

onMounted(async () => {
  await recentproperties();
})

</script>
