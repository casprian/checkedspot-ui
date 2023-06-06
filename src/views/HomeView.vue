<template>
  <div>
    <header-component />
    <owner-properties />
    <all-property-needs />
    <properties-for-everyone />
    <property-services />
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/home-view-components/HeaderComponent.vue';
import OwnerProperties from '@/components/home-view-components/OwnerProperties.vue';
import AllPropertyNeeds from '@/components/home-view-components/AllPropertyNeeds.vue';
import PropertiesForEveryone from '@/components/home-view-components/PropertiesForEveryone.vue'
import PropertyServices from '@/components/home-view-components/PropertyServices.vue'
</script>
