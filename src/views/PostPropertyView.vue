<template>
  <v-layout class="postProperty">
    <navigation-bar />

    <v-container fluid class="pa-0 postContainer">
      <v-row no-gutters class="pa-0">
        <v-col cols="12" class="pa-5 pa-md-10 text-h6 d-flex justify-space-between">
          <span>
            <v-btn
            variant="text"
              :color="postProperty.basicActive ? 'green' : 'red'"
              :prepend-icon="postProperty.basicActive ? 'mdi-check-circle-outline' : 'mdi-home-edit'"
              @click="postProperty.handleFormRouting('basic')"
              >Basic</v-btn
            >
          </span>
          <v-divider class="mt-4" thickness="4"></v-divider>
          <span>
            <v-btn
            variant="text"
              :color="postProperty.locationActive ? 'green' : 'red'"
              :prepend-icon="postProperty.locationActive ? 'mdi-check-circle-outline' : 'mdi-home-edit'"
              @click="postProperty.handleFormRouting('location')"
              >location</v-btn
            >
          </span>          
          <v-divider class="mt-4" thickness="4"></v-divider>
          <span>
            <v-btn
            variant="text"
              :color="postProperty.detailsActive ? 'green' : 'red'"
              :prepend-icon="postProperty.detailsActive ? 'mdi-check-circle-outline' : 'mdi-home-edit'"
              @click="postProperty.handleFormRouting('details')"
              >details</v-btn
            >
          </span>
          <v-divider class="mt-4" thickness="4"></v-divider>
          <span>
            <v-btn
            variant="text"
              :color="postProperty.galleryActive ? 'green' : 'red'"
              :prepend-icon="postProperty.galleryActive ? 'mdi-check-circle-outline' : 'mdi-home-edit'"
              @click="postProperty.handleFormRouting('gallery')"
              >gallery</v-btn
            >
          </span>
          <v-divider class="mt-4" thickness="4"></v-divider>
          <span>
            <v-btn
            variant="text"
              :color="postProperty.amenitiesActive ? 'green' : 'red'"
              :prepend-icon="postProperty.amenitiesActive ? 'mdi-check-circle-outline' : 'mdi-home-edit'"
              @click="postProperty.handleFormRouting('amenities')"
              >amenities</v-btn
            >
          </span>
        </v-col>

        <v-col cols="6" class="pr-12 pl-16 pb-14 d-none d-md-block">
          <!-- Use three different image for different property Type -->
          <div class="imageContainer">
            <img
              class="referenceImage"
              loading="lazy"
              src="../assets/sakleshpur.jpg"
              alt="Property type reference image"
            />
          </div>
        </v-col>

        <!-- POST Property Router View -->
        <v-col cols="12" md="6" class="formView pa-16 pt-0 pl-md-4">
          <!-- {{ router.currentRoute.value.fullPath }} -->
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, onBeforeMount, watch } from "vue";
// @ts-ignore
import { usePostPropertyStore } from "@/store/postProperty";

import { useRouter } from "vue-router";

const navigationBar = defineAsyncComponent(
  () => import("@/layouts/default/AppBar.vue")
);

const postProperty = usePostPropertyStore();
const router = useRouter();


function handleIcon() {
  // create a function in which test if 
  // if the form is filled but inactive show icon -> "mdi-check-circle-outline" ---> with green color
  // the from is already filled and active show "mdi-home-edit" icon. -> to check the form is filled : check in postProperty.filledFormPathList --->  with green color
  // if the form is not filled but active 
}

onBeforeMount(() => {});
</script>

<style scoped>
.postContainer {
  margin-top: 56px;
  height: calc(100vh - 57px);
  overflow: hidden;
}

.imageContainer {
  height: 100%;
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgb(207, 205, 205);
}

.referenceImage {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.formView {
  height: calc(100vh - 170px);
  overflow-y: scroll;
}
.formView::-webkit-scrollbar {
  display: none;
}
</style>