<template>
   <v-expand-transition>
    <v-card style="position: fixed; top: 48px; z-index: 1;" v-show="expandSuccess" height="60" width="100%"
      class="mx-auto bg-pink-accent-3">
      <div style="height: 100%;" class="d-flex align-center justify-center">
        <h5 class="text-h5 text-center"><v-icon color="yellow" icon="mdi-party-popper"></v-icon> &nbsp; Welcome {{ user }} &nbsp; <v-icon color="yellow" icon="mdi-party-popper"></v-icon></h5>
      </div>
    </v-card>
  </v-expand-transition>
  <v-container fluid class="p0 m0">
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

const expandSuccess = ref(false);
// const showGreetMsg = ref(false);

if (localStorage.getItem('email')) {
  expandSuccess.value = true;
  user.value = `${localStorage.getItem('email')}`;
}
setTimeout(() => {
  localStorage.removeItem('email')
  expandSuccess.value = false;
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
