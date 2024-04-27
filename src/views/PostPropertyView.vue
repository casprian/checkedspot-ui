<template>
  <v-container fluid class="pa-0 px-10 px-md-16">
    <v-row no-gutters class="pa-0 my-10 my-md-16">
      <v-col cols="6" class="d-none d-md-block pa-5" style="border:solid 1px;">
        <!-- Use three different image for different property Type -->
        <v-img src="../assets/sakleshpur.jpg" width="100%" height="640" cover></v-img>
      </v-col>

      <!-- POST Property Router View -->
      <v-col cols="12" md="6" class="pa-5">
        <router-view> </router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style>
</style>