<template>
  <div>
    <header-component />
    <OwnerProperties />
    <AllPropertyNeeds />
    <PropertiesForEveryone/>
    <PropertyServices/>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import HeaderComponent from "@/components/HeaderComponent.vue";
//@ts-ignore
import OwnerProperties from "@/components/OwnerProperties.vue";
//@ts-ignore
import AllPropertyNeeds from "@/components/AllPropertyNeeds.vue";
//@ts-ignore
import PropertiesForEveryone from "@/components/PropertiesForEveryone.vue";
//@ts-ignore
import PropertyServices from "@/components/PropertyServices.vue";
</script>
