<template>
  <div class="px-0 px-md-8">
    <v-btn
      @click="router.back()"
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="ml-n4 text-none text-body-1"
      >Back</v-btn
    >
    <p class="heading font-weight-medium mt-8">
      Add photo of your property
      <span class="font-weight-regular">(optional)</span>
    </p>
    <p class="text-body-1 mt-2">
      a picture is worth a thousand words. 87% of buyers look at photos before
      buying
    </p>

    <!-- File Upload -->
    <div
      class="mt-10 pa-12 py-6 bg-grey-lighten-4 border-md border-grey rounded-xl d-flex flex-column justify-center align-center"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <span class="pa-4 border border-grey rounded-lg"
        ><v-icon size="35" color="grey" icon="mdi-cloud-upload-outline"></v-icon
      ></span>
      <p class="text-body-1 text-center mt-3">
        <span class="font-weight-medium text-pink-darken-2"
          >Click on upload button</span
        >
        or drag and drop
      </p>
      <p class="text-body-2 text-center mt-2">
        upto 50 photos png, jpeg, gif, webp (max. size 10mb and aspect ratio
        16:9)
      </p>

      <div class="file-upload-container mt-7">
        <input
          type="file"
          id="fileUpload"
          class="file-upload-input"
          aria-hidden="true"
          @change="onChange"
          multiple
        />
        <label for="fileUpload" class="file-upload-button"
          ><v-icon icon="mdi-upload"></v-icon>Upload File</label
        >
      </div>
    </div>
    <!-- Images display -->
    <div class="mt-4 d-flex flex-wrap" v-if="FileList.length > 0">
      <span
        class="border"
        v-for="file in FileList"
        :key="file"
        style="width: 250px; height: 141px"
      >
        <img
          style="width: 100%; height: 100%; object-fit: contain"
          :src="file.fileUrl"
          loading="lazy"
        />
      </span>
    </div>

    <div class="mt-10 d-flex justify-center">
      <v-btn
        @click="handleContinue"
        append-icon="mdi-arrow-right-bold"
        variant="elevated"
        class="px-10 text-none text-body-1 elevation-4"
        height="48"
        color="#C2185B"
        >Continue</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
//@ts-ignore
import api from "@/data/api/index";

const router = useRouter();

const activeForm = ref();
const propertyData = ref();

// @ts-ignore
const FileList = ref();

// @ts-ignore
async function onChange(event) {
  FileList.value = Array.from(event.target.files);
  const formData = new FormData();

  // @ts-ignore
  FileList.value.forEach((file) => {
    // @ts-ignore
    formData.append("image", file);
  });

  try {
    const res = await api?.property?.uploadImage(formData);
    if (res?.status == 200) {
      FileList.value = res?.data?.images;

      propertyData.value.images = res?.data?.images;

      sessionStorage.setItem(
        `${activeForm.value}Data`,
        JSON.stringify(propertyData.value)
      );
    } else {
      throw res;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// @ts-ignore
function dragover(event) {
  event.preventDefault();
  // Add some visual fluff to show the user can drop its files
  if (!event.currentTarget.classList.contains("bg-pink-lighten-4")) {
    event.currentTarget.classList.remove("bg-grey-lighten-4");
    event.currentTarget.classList.add("bg-pink-lighten-4");
  }
}

// @ts-ignore
function dragleave(event) {
  // Clean up
  event.currentTarget.classList.add("bg-grey-lighten-4");
  event.currentTarget.classList.remove("bg-pink-lighten-4");
}

// @ts-ignore
async function drop(event) {
  event.preventDefault();

  FileList.value = Array.from(event.dataTransfer.files);
  const formData = new FormData();
  // @ts-ignore
  FileList.value.forEach((file) => {
    // @ts-ignore
    formData.append("image", file);
  });

  try {
    const res = await api?.property?.uploadImage(formData);

    if (res?.status == 200) {
      FileList.value = res?.data?.images;

      propertyData.value.images = res?.data?.images;

      sessionStorage.setItem(
        `${activeForm.value}Data`,
        JSON.stringify(propertyData.value)
      );
      
    } else {
      throw res;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }

  // Clean up
  event.currentTarget.classList.add("bg-grey-lighten-4");
  event.currentTarget.classList.remove("bg-pink-lighten-4");
}

function handleContinue() {
  router.push("/postproperty/amenities");
}

onBeforeMount(() => {
  activeForm.value = sessionStorage.getItem("activeForm");
  propertyData.value = JSON.parse(
    // @ts-ignore
    sessionStorage.getItem(activeForm.value + "Data")
  );

  if (propertyData.value) {
    FileList.value = propertyData.value.images;
  }
});
</script>

<style scoped>
.heading {
  font-size: 26px;
}

.file-upload-container {
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
}
.file-upload-input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.file-upload-button {
  display: inline-block;
  padding: 5px 20px;
  cursor: pointer;
  color: #c2185b;
  border: solid 2px #c2185b;
  border-radius: 5px;
  font-size: 16px;
}
.file-upload-button:hover {
  background-color: #c2185b;
  color: white;
}
</style>