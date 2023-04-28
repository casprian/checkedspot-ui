<template>
  <v-container fluid class="p0 m0">
    <v-row no-gutters  v-if="showGreetMsg" :class="['profile d-flex justify-center align-center py-10 py-sm-7']">
      <v-col cols="auto" class="text-h6 text-sm-h4 font-weight-bold">
        <v-icon color="yellow" icon="mdi-party-popper"></v-icon> &nbsp; Welcome {{ user }} &nbsp; <v-icon color="yellow" icon="mdi-party-popper"></v-icon>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" class="video-container">
        <video class="backgroundvideo" autoplay muted loop>
          <source src="../assets/videos/7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <property-filter />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import PropertyFilter from '@/components/PropertyFilter.vue';
import { ref } from 'vue';
const user = ref('');
const showGreetMsg = ref(false);
if (localStorage.getItem('email')) {
  showGreetMsg.value = true;
  user.value = `${localStorage.getItem('email')}`;
}
setTimeout(() => {
  localStorage.removeItem('email')
  showGreetMsg.value = false;
}, 4000);
</script>

<style scoped>
.backgroundvideo {
  width: 100%;
  height: calc(100vh + 200px);
  object-fit: cover;
}

.profile {
  width: 100%;
  position: absolute;
  top: 11%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: rgb(0 208 255);
  background: rgba(245, 0, 86, 0.565);
}

.p0 {
  padding: 0px;
}

.m0 {
  margin: 0px;
}

.video-container {
  position: relative;
}
</style>
