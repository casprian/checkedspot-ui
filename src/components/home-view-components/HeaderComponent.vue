<template>
  <v-container fluid class="p0 m0">
    <v-row no-gutters>
      <v-col cols="12" class="video-container">
        <video class="backgroundvideo" poster="https://checkedspot.blob.core.windows.net/assets/headerVideoPoster.png" autoplay muted loop>
          <source src="https://checkedspot.blob.core.windows.net/assets/7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <property-filter/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import PropertyFilter from '@/components/PropertyFilter.vue';
</script>

<style scoped>

.p0 {
  padding: 0px;
}

.m0 {
  margin: 0px;
}

.backgroundvideo {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}

.video-container {
  position: relative;
}
</style>
