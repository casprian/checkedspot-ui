<template>
  <router-view />
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted } from 'vue';
// @ts-ignore
import { baseURL } from './data/axios/interceptor';

onMounted(async() => {
  const res = await axios.get(`${baseURL}/location`);
  localStorage.setItem('location', JSON.stringify(res?.data[0]));
})
</script>

<style>
::-moz-selection {
  /* Code for Firefox */
  color: #fff;
  background: #c2185c9a;
}

::selection {
  color: #fff;
  background: #c2185c9a;
}

a {
  color: #c62828 !important;
}

.textColor {
    color: black;
    opacity: 0.7;
}

.legendText { 
  font-size: 18px;
  font-weight: 500;
}
</style>
