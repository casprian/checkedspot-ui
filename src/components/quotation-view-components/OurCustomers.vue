<template>
  <v-container fluid class="mt-5 pt-10" style="background-color: #fff6f4">
    <v-row no-gutters>
      <v-col cols="12">
        <h2 class="text-h4 font-weight-medium text-center" style="color: #1f0757">
          Our Customers
        </h2>
        <p class="py-3 text-indigo-lighten-1 text-center text-body-1">
          Over 100 happy family members are part of Plotwala family.
        </p>
      </v-col>
      <v-col cols="12" class="py-4 pr-md-0 pb-8">
        <v-sheet class="mx-auto" width="100%" style="background-color: #fff6f4">
          <v-slide-group class="pa-0 ma-0" show-arrows>
            <v-slide-group-item v-for="(card, index) in customerDetails" :key="index">
              <div class="d-flex pb-3">
                <v-card class="mx-1 mb-2 pa-3 rounded-lg d-flex flex-column justify-space-between" width="370"
                  style="height: 100%">
                  <div>
                    <v-img :src="card.img1" height="240" cover class="d-flex rounded-lg mb-2"></v-img>
                    <v-card-title class="text-body-1 font-weight-black text-wrap px-0" style="line-height: 20px">"{{ card.detail }}"</v-card-title>
                  </div>
                  <v-card-subtitle class="px-0 py-0">{{ card.name }}</v-card-subtitle>
                </v-card>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const customerDetails = reactive([
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    detail:
      "I would recommend Plotwala to all our family and friends. Keep up the good work!",
    name: "Divyashant",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    detail:
      "The whole team was very supportive & I am really very happy. I am an extremely happy customer.",
    name: "Vivek",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    detail: "What helps truly was that Plotwala was always there with us!",
    name: "Divyashant",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    detail:
      "My wife Swati and I had a fantastic house-building experience with Plotwala",
    name: "Vivek",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    detail:
      "Thank you Plotwala for all your support, it was a great journey",
    name: "Divyashant",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    detail: "Plotwala helped me achieve this journey without much hassle",
    name: "Vivek",
  },
]);
</script>


<style scoped></style>