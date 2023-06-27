<template>
  <v-container fluid class="mt-5 pt-10" style="background-color: #fff6f4">
    <v-row no-gutters>
      <v-col cols="12">
        <h2
          class="text-h4 font-weight-medium text-center"
          style="color: #1f0757"
        >
          Our Customers
        </h2>
        <p class="py-3 text-indigo-lighten-1 text-center text-body-1">
          Over 800 happy family members are part of CheckedSpot family.
        </p>
      </v-col>
      <v-col cols="12" class="py-4  pr-md-0 pb-8">
        <div class="d-flex pb-3" style="overflow-x: scroll;">
          <div v-for="(card, index) in customerDetails" :key="index" >
            <v-card class="mx-1 mb-2 pa-3 rounded-lg" width="370" style="height:100%;">
                <v-img
                    :src= card.img1
                    height="240"
                    cover
                    class="d-flex rounded-lg mb-2"
                ></v-img>
                <v-card-title class="text-body-1 font-weight-black text-wrap px-0" style="line-height:20px">"{{card.detail}}"</v-card-title>

                <v-card-subtitle class="px-0 py-0">{{card.name}}
                </v-card-subtitle>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
    import { reactive } from "vue";

    const customerDetails = reactive([
    {
        img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        detail: "I would recommend CheckedSpot to all our family and friends. Keep up the good work!",
        name: "Divyashant"
    },
    {
        img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        detail: "The whole team was very supportive & I am really very happy. I am an extremely happy customer.",
        name: "Vivek"
    },
    {
        img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        detail: "What helps truly was that CheckedSpot was always there with us!",
        name: "Divyashant"
    },
    {
        img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        detail: "My wife Swati and I had a fantastic house-building experience with CheckedSpot",
        name: "Vivek"
    },
    {
        img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        detail: "Thank you CheckedSpot for all your support, it was a great journey",
        name: "Divyashant"
    },
    {
        img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        detail: "CheckedSpot helped me achieve this journey without much hassle",
        name: "Vivek"
    },
    ]);
</script>


<style scoped>
</style>