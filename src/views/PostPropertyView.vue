<template>
  <v-container fluid class="pa-0 px-10 px-md-16">
    <v-row no-gutters class="pa-0 my-10 my-md-16">
      <v-col cols="6" class="d-none d-md-block pa-5" style="position: relative">
        <!-- Use three different image for different property Type -->
        <div class="imageContainer">
          <img
            class="referenceImage"
            loading="lazy"
            src="../assets/sakleshpur.jpg"
            alt="Property type reference image"
          />
        </div>
      </v-col>

      <!-- POST Property Router View -->
      <v-col cols="12" md="6" class="pa-7 formView" id="formView">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>


</script>

<style scoped>
.imageContainer {
  position: fixed;
  top: 145px;
  width: 42%;
  height: 100vh;
  padding-bottom: 230px;
}

.referenceImage {
  width: 100%;
  height: 100%;
}
</style>