<template>
  <v-container class="pa-0">
    <v-row no-gutters class="pa-0">
      <v-col cols="12"> Flat / Apartment Form </v-col>
    </v-row>
    
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const items = ref(["Review Order", "Select Shipping", "Submit"]);
const shipping = ref();
const total = ref();
const products = ref([
  {
    name: "Product 1",
    price: 10,
    quantity: 2,
  },
  {
    name: "Product 2",
    price: 15,
    quantity: 10,
  },
]);
const step = ref(1);
</script>

<style scoped>
</style>