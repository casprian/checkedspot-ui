<template>
  <div>
    <header-component/>
    <recent-property :properties="recent20Properties.data"/>
    <Construction/>
    <all-property-needs/>
    <!-- <properties-for-everyone/> -->
    <property-services/>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import HeaderComponent from '@/components/home-view-components/HeaderComponent.vue';
//@ts-ignore
import RecentProperty from '@/components/home-view-components/RecentProperty.vue';
//@ts-ignore
import AllPropertyNeeds from '@/components/home-view-components/AllPropertyNeeds.vue';
//@ts-ignore
import PropertiesForEveryone from '@/components/home-view-components/PropertiesForEveryone.vue';
//@ts-ignore
import PropertyServices from '@/components/home-view-components/PropertyServices.vue';
//@ts-ignore
import Construction from '@/components/home-view-components/Construction.vue';
//@ts-ignore
import api from '@/data/api/index.js';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';


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
