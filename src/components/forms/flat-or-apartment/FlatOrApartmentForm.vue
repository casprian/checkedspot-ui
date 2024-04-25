<template>
  <v-container class="pa-0"> 
    <v-row no-gutters class="pa-0">
      <v-col cols="12">
        Flat / Apartment Form
      </v-col>
    </v-row>
    <v-stepper editable :items="['Step 1', 'Step 2', 'Step 3']">
      <template v-slot:Step 1>
        <v-card title="Step One" flat>...</v-card>
      </template>

      <template v-slot:item.2>
        <v-card title="Step Two" flat>...</v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Step Three" flat>...</v-card>
      </template>
    </v-stepper>
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