<template>
  <div>
    <header-component/>
    <owner-properties :properties="verifiedProperties.data"/>
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
import OwnerProperties from '@/components/home-view-components/OwnerProperties.vue';
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
const verifiedProperties = reactive({
  data: null
})

async function getAllVerifiedProperties() {
  const res = await api?.property?.getProperties({ params: { isVerifiedByCheckedSpot: true } });
  if (res.status === 200) {
    verifiedProperties.data = res?.data;
  } else {
    router.push({ path: '/error', query: { status: res?.status } })
  }
}

onMounted(async () => {
  await getAllVerifiedProperties();
})

</script>
