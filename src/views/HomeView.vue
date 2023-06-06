<template>
  <div>
    <header-component/>
    <owner-properties :properties="verifiedProperties.data"/>
    <all-property-needs/>
    <properties-for-everyone :noOfProperties="noOfProperties"/>
    <property-services/>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/home-view-components/HeaderComponent.vue';
import OwnerProperties from '@/components/home-view-components/OwnerProperties.vue';
import AllPropertyNeeds from '@/components/home-view-components/AllPropertyNeeds.vue';
import PropertiesForEveryone from '@/components/home-view-components/PropertiesForEveryone.vue';
import PropertyServices from '@/components/home-view-components/PropertyServices.vue';

import { onMounted, reactive, ref } from 'vue';
import api from '@/data/api/index.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const verifiedProperties = reactive({
  data: null
})
const noOfProperties = ref(null);


async function getAllVerifiedProperties() {
  const res = await api?.property?.getProperties({ params: { isVerifiedByCheckedSpot: true } });
  if (res.status === 200) {
    console.log(res);
    verifiedProperties.data = res?.data;
    noOfProperties.value = res?.noOfdata;
  } else {
    router.push({ path: '/error', query: { status: res?.status } })
  }
}
onMounted(async () => {
  await getAllVerifiedProperties();
})
</script>
