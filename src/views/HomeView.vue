<template>
  <div>
    <header-component/>
    <recent-property :properties="recent20Properties.data"/>
    <Construction/>
    <property-services/>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

//@ts-ignore
import api from '@/data/api/index.js';

const HeaderComponent = defineAsyncComponent(() => import('@/components/home-view-components/HeaderComponent.vue'))
const RecentProperty = defineAsyncComponent(() => import('@/components/home-view-components/RecentProperty.vue'))
const Construction = defineAsyncComponent(() => import('@/components/home-view-components/Construction.vue'))
const PropertyServices = defineAsyncComponent(() => import('@/components/home-view-components/PropertyServices.vue'))



const router = useRouter();
const recent20Properties = reactive({
  data: {}
})

async function recentproperties() {
  const res = await api?.property?.getRecentProperties({ params: { limit: 20 } });
  if (res?.status === 200) {
    recent20Properties.data = res;
  } else {
    recent20Properties.data = res;    
  }
}

onMounted(async () => {
  await recentproperties();
})

</script>
