<template>
  <v-main style="--v-layout-right: 0px; --v-layout-top: 64px; --v-layout-bottom: 0px; --v-layout-left: 0px; background-color: white;">
    <router-view />
  </v-main>
  <v-footer class="pa-0">
    <footer-comp/>
  </v-footer>
</template>

<script lang="ts" setup>
  //
  import FooterComp from '@/components/Footer.vue';
</script>
