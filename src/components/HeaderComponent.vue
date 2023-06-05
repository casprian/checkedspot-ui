<template>
  <v-expand-transition>
    <v-card style="position: fixed; top: 48px; z-index: 1;" v-show="expandSuccess" height="60" width="100%"
      class="mx-auto bg-pink-accent-3">
      <div style="height: 100%;" class="d-flex align-center justify-center">
        <h5 class="text-h5 text-center"><v-icon color="yellow" icon="mdi-party-popper"></v-icon> &nbsp; Welcome {{ user }}
          &nbsp; <v-icon color="yellow" icon="mdi-party-popper"></v-icon></h5>
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
        <property-filter/>
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
