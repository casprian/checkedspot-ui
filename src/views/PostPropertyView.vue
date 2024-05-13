<template>
  <v-layout class="postProperty">
    <navigation-bar />

    <v-container fluid class="pa-0 postContainer">
      <v-stepper
        non-linear
        v-model:model-value="postProperty.activeForm"
        class="elevation-0"
      >
        <v-row no-gutters class="pa-0">
          <v-col cols="12" class="pa-0">
            <v-stepper-header class="pa-5 elevation-0 stepperHeader">
              <v-stepper-item
                value="basic"
                :color="
                  isFormFilled('basic') ? 'pink-darken-2' : 'grey-darken-4'
                  "
                complete-icon="mdi-check"
                edit-icon="mdi-pencil"
                :complete="postProperty.activeForm == 'basic' ? true : false"
                :editable="postProperty.activeForm != 'basic' ? true : false"
                
              >
                <span class="d-flex flex-column justify-start align-start">
                  Basic Details
                  <p class="text-caption">{{ postProperty.activePropertyType }}</p>
                </span>
              </v-stepper-item>
              <v-divider :thickness="3"></v-divider>
              <v-stepper-item
                value="location"
                :color="
                  isFormFilled('location') ? 'pink-darken-2' : 'grey-darken-4'
                  "
                complete-icon="mdi-check"
                edit-icon="mdi-pencil"
                :complete="postProperty.activeForm == 'location' ? true : false"
                :editable="postProperty.activeForm != 'location' ? true : false"
                
              >
                <span class="d-flex flex-column justify-start align-start">
                  Location
                  <p class="text-caption">{{ postProperty.activePropertyType }}</p>
                </span>
              </v-stepper-item>
              <v-divider :thickness="3"></v-divider>
              <v-stepper-item
                value="details"
                :color="
                  isFormFilled('details') ? 'pink-darken-2' : 'grey-darken-4'
                  "
                complete-icon="mdi-check"
                edit-icon="mdi-pencil"
                :complete="postProperty.activeForm == 'details' ? true : false"
                :editable="postProperty.activeForm != 'details' ? true : false"
                
              >
                <span class="d-flex flex-column justify-start align-start">
                  Details
                  <p class="text-caption">{{ postProperty.activePropertyType }}</p>
                </span>
              </v-stepper-item>
              <v-divider :thickness="3"></v-divider>
              <v-stepper-item
                value="gallery"
                :color="
                  isFormFilled('gallery') ? 'pink-darken-2' : 'grey-darken-4'
                  "
                complete-icon="mdi-check"
                edit-icon="mdi-pencil"
                :complete="postProperty.activeForm == 'gallery' ? true : false"
                :editable="postProperty.activeForm != 'gallery' ? true : false"
                
              >
                <span class="d-flex flex-column justify-start align-start">
                  Gallery
                  <p class="text-caption">{{ postProperty.activePropertyType }}</p>
                </span>
              </v-stepper-item>
              <v-divider :thickness="3"></v-divider>
              <v-stepper-item
                value="amenities"
                :color="
                  isFormFilled('amenities') ? 'pink-darken-2' : 'grey-darken-4'
                  "
                complete-icon="mdi-check"
                edit-icon="mdi-pencil"
                :complete="postProperty.activeForm == 'amenities' ? true : false"
                :editable="postProperty.activeForm != 'amenities' ? true : false"
                
              >
                <span class="d-flex flex-column justify-start align-start">
                  Amenities
                  <p class="text-caption">{{ postProperty.activePropertyType }}</p>
                </span>
              </v-stepper-item>
            </v-stepper-header>
          </v-col>
          <v-col
          cols="6"
          class="pa-16 pt-7 pr-10 d-none d-md-block imageContainer"
          >
          {{ postProperty.activeForm }}
            <div>
              <!-- Backaground Image has been used on this element -->
            </div>
          </v-col>

          <!-- WINDOWS -->
          <v-col cols="6" class="pa-0 formView">
            <v-stepper-window>
              <v-stepper-window-item value="basic">
                <basic-property-info />
              </v-stepper-window-item>
              <v-stepper-window-item value="location">
                <property-location />
              </v-stepper-window-item>
              <v-stepper-window-item value="details">
                <property-details />
              </v-stepper-window-item>
              <v-stepper-window-item value="gallery">
                <property-gallery />
              </v-stepper-window-item>
              <v-stepper-window-item value="amenities">
                <property-amenities />
              </v-stepper-window-item>
            </v-stepper-window>
          </v-col>
        </v-row>
      </v-stepper>
    </v-container>
  </v-layout>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, onBeforeMount, watch, Ref } from "vue";
// @ts-ignore
import { usePostPropertyStore } from "@/store/postProperty";

const navigationBar = defineAsyncComponent(
  () => import("@/layouts/default/AppBar.vue")
);

const BasicPropertyInfo = defineAsyncComponent(
  () => import("@/components/forms/BasicPropertyInfo.vue")
);
const PropertyLocation = defineAsyncComponent(
  () => import("@/components/forms/PropertyLocation.vue")
);

const PropertyDetails = defineAsyncComponent(
  () => import("@/components/forms/PropertyDetails.vue")
);

const PropertyGallery = defineAsyncComponent(
  () => import("@/components/forms/PropertyGallery.vue")
);

const PropertyAmenities = defineAsyncComponent(
  () => import("@/components/forms/PropertyAmenities.vue")
);

const postProperty = usePostPropertyStore();

// const seriesOfFormNames = ref([
//   "basic",
//   "location",
//   "details",
//   "gallery",
//   "amenities",
// ]);

// function shouldBeDisabled(formName: string) {
//   const index = seriesOfFormNames.value.findIndex((item) => item === formName);
//   const isExistInFilledFormList = postProperty.filledForms.find(
//     (item) => item === formName
//   );

//   if (
//     postProperty.activeForm === seriesOfFormNames.value[index - 1] ||
//     isExistInFilledFormList
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isFormFilled(formName: string) {
  const isExist = postProperty.filledForms.find((item) => item === formName);
  return isExist ? true : false;
}

onBeforeMount(() => {
  // @ts-ignore
  const filledFormList = JSON.parse(localStorage.getItem("filledForms"));
  
  if (filledFormList && filledFormList?.length > 0) {
    postProperty.initializeFilledForms(filledFormList);
  } else {
    localStorage.setItem("filledForms", JSON.stringify(["basic"]));
    postProperty.initializeFilledForms(["basic"]);
  }
  postProperty.checkActiveForm();
  // console.log("activePropertyType : ", localStorage.getItem('activePropertyType'))
});
</script>

<style scoped>
.postContainer {
  margin-top: 56px;
  height: calc(100vh - 56px);
  overflow: hidden;
}

.imageContainer {
  height: calc(100vh - 160px);
}

.imageContainer > div {
  height: 100%;
  box-shadow: 5px 5px 20px rgb(207, 205, 205);
  border-radius: 20px;
  background-image: url("../assets/sakleshpur.jpg");
  background-size: cover;
}

.referenceImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.formView {
  height: calc(100vh - 180px);
  overflow-y: scroll;
}
.formView::-webkit-scrollbar {
  display: none;
}
</style>