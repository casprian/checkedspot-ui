<template>
  <v-container fluid class="mt-5" style="background-color: #fff6f4">
    <v-row no-gutters>
      <v-col cols="12">
        <h2
          class="text-h4 font-weight-medium text-center"
          style="color: #1f0757"
        >
          Our Projects
        </h2>
        <p class="py-3 px-2 px-sm-0 text-indigo-lighten-1 text-center text-body-1">
          From a couple to a large Indian family, we have houses built with
          emotions for everyone.
        </p>
      </v-col>
      <v-col cols="12" class="pt-5">
        <v-sheet
          class="mx-auto"
          width="100%"
          style="background-color: #fff6f4"
        >
          <v-slide-group
            class="pa-0 ma-0"
            show-arrows
            max="50"
          >
            <v-slide-group-item
              v-for="(cards, index) in cardArr" :key="index">
            <div class="d-flex">
            <v-card class="mx-1 mb-2" width="315">
              <v-row no-gutters>
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="170"
                    cover
                    class="d-flex"
                  >
                    <v-toolbar-title
                      class="toolBar text-white px-2 ml-1 mt-1 d-inline-block"
                      theme="dark"
                    >
                      3D Render
                    </v-toolbar-title>
                  </v-img>
                </v-col>
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="170"
                    cover
                  >
                    <v-toolbar-title
                      class="toolBar text-white px-2 ml-1 mt-1 d-inline-block"
                    >
                      After Construction
                    </v-toolbar-title>
                  </v-img>
                </v-col>
              </v-row>

              <v-card-title class="font-weight-regular"> TCRN559 </v-card-title>

              <v-card-subtitle class="cardSubTitle px-0 mx-4 py-3">
                <span class="mr-3">2446 sq.ft.</span
                ><span class="mr-3"> G + 2</span> Basic Package
              </v-card-subtitle>
            </v-card>
        </div>
              
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
        <!-- <div class="d-flex" style="overflow-x: scroll">
          <div v-for="(cards, index) in cardArr" :key="index">
            <v-card class="ml-3 mb-2" width="315">
              <v-row no-gutters>
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="170"
                    cover
                    class="d-flex"
                  >
                    <v-toolbar-title
                      class="toolBar text-white px-2 ml-1 mt-1 d-inline-block"
                      theme="dark"
                    >
                      3D Render
                    </v-toolbar-title>
                  </v-img>
                </v-col>
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="170"
                    cover
                  >
                    <v-toolbar-title
                      class="toolBar text-white px-2 ml-1 mt-1 d-inline-block"
                    >
                      After Construction
                    </v-toolbar-title>
                  </v-img>
                </v-col>
              </v-row>

              <v-card-title class="font-weight-regular"> TCRN559 </v-card-title>

              <v-card-subtitle class="cardSubTitle px-0 mx-4 py-3">
                <span class="mr-3">2446 sq.ft.</span
                ><span class="mr-3"> G + 2</span> Basic Package
              </v-card-subtitle>
            </v-card>
          </div>
        </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";

const cardArr = reactive([
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    img2: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    title: "TCRN559",
    sqft: "2446 sq.ft.",
    floor: "G + 2",
    package: "Basic Package",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    img2: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    title: "TCRN559",
    sqft: "2446 sq.ft.",
    floor: "G + 2",
    package: "Basic Package",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    img2: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    title: "TCRN559",
    sqft: "2446 sq.ft.",
    floor: "G + 2",
    package: "Basic Package",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    img2: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    title: "TCRN559",
    sqft: "2446 sq.ft.",
    floor: "G + 2",
    package: "Basic Package",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    img2: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    title: "TCRN559",
    sqft: "2446 sq.ft.",
    floor: "G + 2",
    package: "Basic Package",
  },
  {
    img1: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    img2: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    title: "TCRN559",
    sqft: "2446 sq.ft.",
    floor: "G + 2",
    package: "Basic Package",
  },
]);
</script>


<style scoped>
.toolBar {
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 11px;
}
.cardSubTitle {
  border-top: 1px solid rgb(216, 205, 205);
}
</style>