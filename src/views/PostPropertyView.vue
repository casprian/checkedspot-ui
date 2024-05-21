<template>
  <v-layout class="postProperty">
    <navigation-bar />

    <v-container fluid class="pa-0 postContainer">
      <v-row no-gutters class="pa-0">
        <v-col
          cols="12"
          class="pa-5 pa-md-10 text-h6 d-flex justify-space-between formNavigation"
        >
          <span>
            <v-btn
              height="auto"
              variant="text"
              :color="
                postProperty.basicActive
                  ? 'amber-darken-2'
                  : postProperty.isFormFilled('/postproperty')
                  ? 'green'
                  : 'grey'
              "
              :prepend-icon="
                postProperty.basicActive
                  ? 'mdi-pencil'
                  : postProperty.isFormFilled('/postproperty')
                  ? 'mdi-check-circle-outline'
                  : 'mdi-pencil'
              "
              @click="postProperty.handleFormRouting('basic')"
            >
              <span class="d-flex flex-column justify-start align-start">
                <span
                  :class="[
                    postProperty.basicActive
                      ? 'text-body-1 activeFont font-weight-medium'
                      : 'text-body-1 font-weight-regular',
                  ]"
                  >Basic</span
                >
                <span class="text-none text-caption text-grey-darken-2">{{
                  postProperty.activePropertyType
                }}</span>
              </span>
            </v-btn>
          </span>
          <v-divider class="mt-4 horizontalDivider" thickness="2"></v-divider>
          <span>
            <v-btn
              variant="text"
              :color="
                postProperty.locationActive
                  ? 'amber-darken-2'
                  : postProperty.isFormFilled('/postproperty/location')
                  ? 'green'
                  : 'grey'
              "
              :prepend-icon="
                postProperty.locationActive
                  ? 'mdi-pencil'
                  : postProperty.isFormFilled('/postproperty/location')
                  ? 'mdi-check-circle-outline'
                  : 'mdi-pencil'
              "
              @click="postProperty.handleFormRouting('location')"
            >
              <span
                :class="[
                  postProperty.locationActive
                    ? 'text-body-1 activeFont font-weight-medium'
                    : 'text-body-1 font-weight-regular',
                ]"
                >Location</span
              >
            </v-btn>
          </span>
          <v-divider class="mt-4 horizontalDivider" thickness="2"></v-divider>
          <span>
            <v-btn
              variant="text"
              :color="
                postProperty.detailsActive
                  ? 'amber-darken-2'
                  : postProperty.isFormFilled('/postproperty/details')
                  ? 'green'
                  : 'grey'
              "
              :prepend-icon="
                postProperty.detailsActive
                  ? 'mdi-pencil'
                  : postProperty.isFormFilled('/postproperty/details')
                  ? 'mdi-check-circle-outline'
                  : 'mdi-pencil'
              "
              @click="postProperty.handleFormRouting('details')"
            >
              <span
                :class="[
                  postProperty.detailsActive
                    ? 'text-body-1 activeFont font-weight-medium'
                    : 'text-body-1 font-weight-regular',
                ]"
                >Details</span
              >
            </v-btn>
          </span>
          <v-divider class="mt-4 horizontalDivider" thickness="2"></v-divider>
          <span>
            <v-btn
              variant="text"
              :color="
                postProperty.galleryActive
                  ? 'amber-darken-2'
                  : postProperty.isFormFilled('/postproperty/gallery')
                  ? 'green'
                  : 'grey'
              "
              :prepend-icon="
                postProperty.galleryActive
                  ? 'mdi-pencil'
                  : postProperty.isFormFilled('/postproperty/gallery')
                  ? 'mdi-check-circle-outline'
                  : 'mdi-pencil'
              "
              @click="postProperty.handleFormRouting('gallery')"
            >
              <span
                :class="[
                  postProperty.galleryActive
                    ? 'text-body-1 activeFont font-weight-medium'
                    : 'text-body-1 font-weight-regular',
                ]"
                >Gallery</span
              >
            </v-btn>
          </span>
          <v-divider class="mt-4 horizontalDivider" thickness="2"></v-divider>
          <span>
            <v-btn
              variant="text"
              :color="
                postProperty.amenitiesActive
                  ? 'amber-darken-2'
                  : postProperty.isFormFilled('/postproperty/amenities')
                  ? 'green'
                  : 'grey'
              "
              :prepend-icon="
                postProperty.amenitiesActive
                  ? 'mdi-pencil'
                  : postProperty.isFormFilled('/postproperty/amenities')
                  ? 'mdi-check-circle-outline'
                  : 'mdi-pencil'
              "
              @click="postProperty.handleFormRouting('amenities')"
            >
              <span
                :class="[
                  postProperty.amenitiesActive
                    ? 'text-body-1 activeFont font-weight-medium'
                    : 'text-body-1 font-weight-regular',
                ]"
                >Amenities</span
              >
            </v-btn>
          </span>
        </v-col>

        <v-col cols="6" class="pr-12 pl-16 pb-14 d-none d-md-block">
          <!-- Use three different image for different property Type -->
          <div class="imageContainer" >
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

const activePropertyType = ref();

onBeforeMount(() => {
  postProperty.handleActivePropertyType(false);
});
</script>

<style scoped>
.postContainer {
  margin-top: 56px;
  height: calc(100vh - 57px);
  overflow: hidden;
}

.formNavigation {
  overflow-x: scroll;
}

.formNavigation::-webkit-scrollbar {
  display: none;
}

.horizontalDivider {
  min-width: 50px;
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

.activeFont {
  font-size: 17px !important;
}

.formView {
  height: calc(100vh - 170px);
  overflow-y: scroll;
}
.formView::-webkit-scrollbar {
  display: none;
}
</style>