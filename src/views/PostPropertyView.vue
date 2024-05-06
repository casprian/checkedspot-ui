<template>
  <v-container fluid class="pa-0 px-10 px-md-16">
    <v-row no-gutters class="pa-0 my-10 my-md-16">
      <v-col cols="6" class="d-none d-md-block pa-5" style="position: relative;">
        <!-- Use three different image for different property Type -->
        <div class="imageContainer" id="imageContainer">
          <img
            class="referenceImage"
            loading="lazy"
            src="../assets/sakleshpur.jpg"
            alt="Property type reference image"
          />
        </div>
      </v-col>

      <!-- POST Property Router View -->
      <v-col cols="12" md="6" class="pa-7 formView" id="formView">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

const imageContainer = ref();
window.addEventListener("scroll", () => {
  const scrollThreshold = document.body.scrollHeight - window.innerHeight - 235;
  // console.log(scrollThreshold)
  if (window.scrollY >= scrollThreshold) {
    //@ts-ignore
    imageContainer.value.style.position = "absolute";
    //@ts-ignore
    imageContainer.value.style.top = `${scrollThreshold+27}px`;
    //@ts-ignore
    imageContainer.value.style.width = '92.45%';
  } else {
    //@ts-ignore
    imageContainer.value.style.position = "fixed";
    //@ts-ignore
    imageContainer.value.style.top = "145px";
    //@ts-ignore
    imageContainer.value.style.width = "42%";
    // @ts-ignore
    imageContainer.value.style.paddingBottom = "230px";
  }
});

onMounted(() => {
  imageContainer.value = document.getElementById("imageContainer");
})

</script>

<style scoped>
.imageContainer {
  position: fixed;
  top: 145px;
  width: 42%;
  height: 100vh;
  padding-bottom: 230px;
}

.referenceImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>