<template>
  <v-container class="pa-0">
    <v-row no-gutters class="pa-0">
        <v-col cols="6" class="d-none d-md-block pa-5">
          <!-- Use three different image for different property Type -->
            <v-img src="../assets/sakleshpur.jpg"></v-img>
        </v-col>
        <v-col cols="12" md="6" class="pa-5">
          <router-view>
            
          </router-view>
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style>

</style>