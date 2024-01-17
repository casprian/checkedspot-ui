<template>
  <v-main style="--v-layout-right: 0px; --v-layout-top: 56px; --v-layout-bottom: 0px; --v-layout-left: 0px; background-color: white;">
    <router-view />
  </v-main>
  <footer-comp/>
</template>

<script lang="ts" setup>
  //@ts-ignore
  import FooterComp from '@/components/Footer.vue';
</script>
