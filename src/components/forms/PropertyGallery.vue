<template>
  <div class="px-0">
    <v-btn
      @click="handleback"
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="ml-n4 text-none text-body-1"
      >Back</v-btn
    >

    <!-- Image -->
    <div>
      <p class="heading font-weight-medium mt-8">Upload Photo</p>
      <p class="text-body-1 mt-2">
        Upload size max 20mb. Try to upload images with 16:9 aspect ratio.
      </p>

      <!-- file Input Container -->
      <div class="file-upload-container mt-5">
        <input
          type="file"
          id="imageFileUpload"
          class="file-upload-input"
          aria-hidden="true"
          accept=".jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg"
          @change="onUploadImages"
          multiple
        />
        <label for="imageFileUpload" class="file-upload-button"
          >Upload File &nbsp;
          <v-icon class="mt-n1" icon="mdi-cloud-upload-outline"></v-icon
        ></label>

        <span class="ml-5"
          ><span class="text-h6">{{ uploadedImages.length }}</span> Image(s)
          uploaded.</span
        >
      </div>

      <!-- file upload status -->
      <div v-if="uploadedImages.length > 0" class="mt-5">
        <v-card
          class="pa-4 my-2 border"
          elevation="1"
          v-for="image in uploadedImages"
          :key="image.fileUrl"
        >
          <div class="d-flex justify-space-between">
            <div class="d-flex">
              <div class="fileIconCont mr-4">
                <v-icon icon="mdi-file" size="50" color="#00B21C"></v-icon>
                <span class="fileExtension">
                  {{ getFileExtension(image.mimetype).toUpperCase() }}
                </span>
              </div>
              <div class="d-flex flex-column justify-center align-start">
                <p class="fileUploaded">Image has been uploaded</p>
                <p class="filesize">
                  {{ calculateFileSize(image.size) }} - 100% uploaded
                </p>
              </div>
            </div>

            <div class="d-flex justify-end align-center">
              <v-btn
                class="fileCardBtn"
                variant="outlined"
                title="Preview image"
                icon="mdi-eye"
                @click="previewImage(image.fileUrl)"
              ></v-btn>
              <v-btn
                class="fileCardBtn ml-1"
                variant="outlined"
                color="red-darken-2"
                title="Remove image"
                icon="mdi-close"
                @click="removeImageFromUploadedList(image.fileUrl)"
              ></v-btn>
            </div>
          </div>
        </v-card>
      </div>

      <!-- One Image Preview at a time -->
      <v-dialog v-model="previewImageDialog">
        <v-card class="ma-0 pa-5 pt-2" style="height: 100vh">
          <v-card-title class="text-h6 mb-5">Image Viewer</v-card-title>
          <v-btn
            id="closeBtn"
            class="closeBtn"
            density="compact"
            color="red"
            icon="mdi-close"
            @click="previewImageDialog = false"
          ></v-btn>

          <div style="width: 100%; height: calc(100% - 100px)">
            <img
              :src="previewImageUrl"
              alt="Property Image"
              style="width: 100%; height: 100%; object-fit: contain"
            />
          </div>
        </v-card>
      </v-dialog>

      <!-- Preview Images -->
      <v-btn
        id="previewBtn"
        variant="plain"
        prepend-icon="mdi-eye"
        class="text-none mt-5"
        @click="previewImagesDialog = !previewImagesDialog"
        >Preview uploaded images</v-btn
      >
    </div>

    <!-- VIDEO -->
    <div>
      <p class="heading font-weight-medium mt-8">
        Upload Videos
        <span class="font-weight-thin">(optional)</span>
      </p>
      <p class="text-body-1 mt-2">Upload size max 20mb</p>

      <!-- file Input Container -->
      <div class="file-upload-container mt-5">
        <input
          type="file"
          id="videoFileUpload"
          class="file-upload-input"
          aria-hidden="true"
          accept="video/*"
          @change="onUploadVideos"
          multiple
        />
        <label for="videoFileUpload" class="file-upload-button"
          >Upload File &nbsp;
          <v-icon class="mt-n1" icon="mdi-cloud-upload-outline"></v-icon
        ></label>
        <span class="ml-5"
          ><span class="text-h6">{{ uploadedVideos.length }}</span> Video(s)
          uploaded.</span
        >
      </div>

      <!-- file upload status -->
      <div v-if="uploadedVideos.length > 0" class="mt-5">
        <v-card
          class="pa-4 my-2 border"
          v-for="video in uploadedVideos"
          :key="video.fileUrl"
          elevation="1"
        >
          <div class="d-flex justify-space-between">
            <div class="d-flex">
              <div class="fileIconCont mr-4">
                <v-icon icon="mdi-file" size="50" color="#155EEF"></v-icon>
                <span class="fileExtension">
                  {{ getFileExtension(video.mimetype).toUpperCase() }}
                </span>
              </div>
              <div class="d-flex flex-column justify-center align-start">
                <p class="fileUploaded">Video has been uploaded</p>
                <p class="filesize">
                  {{ calculateFileSize(video.size) }} - 100% uploaded
                </p>
              </div>
            </div>
            <div class="d-flex justify-end align-center">
              <v-btn
                class="fileCardBtn"
                variant="outlined"
                title="Preview image"
                icon="mdi-eye"
                @click="previewVideo(video.fileUrl)"
              ></v-btn>
              <v-btn
                class="fileCardBtn ml-1"
                variant="outlined"
                color="red-darken-2"
                title="Remove image"
                icon="mdi-close"
                @click="removeVideoFromUploadedList(video.fileUrl)"
              ></v-btn>
            </div>
          </div>
        </v-card>
      </div>

      <!-- One Video Preview at a time -->
      <v-dialog v-model="previewVideoDialog">
        <v-card class="ma-0 pa-5 pt-2" style="height: 100vh">
          <v-card-title class="text-h6 mb-5">Video Viewer</v-card-title>
          <v-btn
            id="closeBtn"
            class="closeBtn"
            density="compact"
            color="red"
            icon="mdi-close"
            @click="previewVideoDialog = false"
          ></v-btn>

          <div style="width: 100%; height: calc(100% - 100px)">
            <video
              style="width: 100%; height: 100%; object-fit: contain"
              controls
            >
              <source :src="previewVideoUrl" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </v-card>
      </v-dialog>

      <!-- Preview Videos -->
      <v-btn
        id="previewBtn"
        variant="plain"
        prepend-icon="mdi-eye"
        class="text-none mt-5"
        @click="previewVideosDialog = !previewVideosDialog"
        >Preview uploaded videos</v-btn
      >
    </div>

    <!-- Documents -->
    <div>
      <p class="heading font-weight-medium mt-8">
        Upload Documents
        <span class="font-weight-thin">(optional)</span>
      </p>
      <p class="text-body-1 mt-2">Upload size max 5mb</p>

      <!-- file Input Container -->
      <div class="file-upload-container mt-5">
        <v-btn
          id="addDocumentBtn"
          variant="outlined"
          color="pink-darken-2"
          append-icon="mdi-plus-circle-outline"
          @click="uploadDocumentDialog = !uploadDocumentDialog"
          >Add document</v-btn
        >
        <span class="ml-5"
          ><span class="text-h6">{{ uploadedDocuments.length }}</span>
          Document(s) uploaded.</span
        >

        <v-dialog v-model="uploadDocumentDialog" max-width="600">
          <v-card class="pa-5 pt-3 uploadDocContainer">
            <p class="text-h6 mb-7">Upload documents</p>
            <v-btn
              variant="outlined"
              icon="mdi-close"
              color="pink-darken-2"
              id="closeBtn"
              @click="uploadDocumentDialog = false"
            ></v-btn>

            <!-- Documents list -->
            <v-select
              v-model="document"
              :items="documents"
              item-title="list of documents"
              label="Select document"
              persistent-hint
              variant="outlined"
            ></v-select>

            <v-text-field
              v-if="document === 'other'"
              label="Add your document"
              v-model="newDocument"
              clearable
              hint="Enter the document name you wanted to attach to this property."
              variant="outlined"
            ></v-text-field>
            <p class="text-cation text-red" v-if="isdocumentAlreadyUploaded">
              This document is already uploaded.
            </p>

            <input
              :disabled="uploadDocDisabled"
              type="file"
              id="fileUpload"
              class="file-upload-input"
              aria-hidden="true"
              accept=".pdf"
              @change="onUploadDocument"
              multiple
            />
            <label
              @click="handleEnableDocUpload"
              for="fileUpload"
              class="file-upload-button mt-3 documentUploadInputLabel"
              >Upload File &nbsp;
              <v-icon class="mt-n1" icon="mdi-cloud-upload-outline"></v-icon
            ></label>
          </v-card>
        </v-dialog>
      </div>

      <!-- file upload status -->
      <div v-if="uploadedDocuments.length > 0" class="mt-5">
        <v-card
          class="pa-4 my-2 border"
          elevation="1"
          v-for="document in uploadedDocuments"
          :key="document.fileUrl"
        >
          <div class="d-flex justify-space-between">
            <div class="d-flex">
              <div class="fileIconCont mr-4">
                <v-icon icon="mdi-file" size="50" color="#D92D20"></v-icon>
                <span class="fileExtension">
                  {{ getFileExtension(document.mimetype).toUpperCase() }}
                </span>
              </div>
              <div class="d-flex flex-column justify-center align-start">
                <p class="fileUploaded">
                  <span class="font-weight-medium">{{ document.type }}</span>
                  document has been uploaded
                </p>
                <p class="filesize">
                  {{ calculateFileSize(document.size) }} - 100% uploaded
                </p>
              </div>
            </div>

            <div class="d-flex justify-end align-center">
              <v-btn
                class="fileCardBtn"
                variant="outlined"
                title="Preview image"
                icon="mdi-eye"
                @click="previewDocument(document.fileUrl)"
              ></v-btn>
              <v-btn
                class="fileCardBtn ml-1"
                variant="outlined"
                color="red-darken-2"
                title="Remove image"
                icon="mdi-close"
                @click="removeDocumentFromUploadedList(document.fileUrl)"
              ></v-btn>
            </div>
          </div>
        </v-card>
      </div>

      <!-- One Document Preview at a time -->
      <v-dialog v-model="previewDocumentDialog">
        <v-card class="ma-0 pa-5 pt-2" style="height: 100vh">
          <v-card-title class="text-h6 mb-5">Document Viewer</v-card-title>
          <v-btn
            id="closeBtn"
            class="closeBtn"
            density="compact"
            color="red"
            icon="mdi-close"
            @click="previewDocumentDialog = false"
          ></v-btn>

          <div style="width: 100%; height: calc(100% - 100px)">
            <!-- iFrame will use browsers default prd viewer -->
            <iframe
              style="width: 100%; height: 100%"
              :src="
                previewDocumentUrl
                  ? previewDocumentUrl
                  : 'https://checkedspot.blob.core.windows.net/assets/defaultdocument.pdf'
              "
              frameborder="0"
            ></iframe>
          </div>
        </v-card>
      </v-dialog>
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

    <!-- Image Preview Dialog -->
    <v-dialog v-model="previewImagesDialog">
      <v-card height="auto" class="pa-5">
        <v-card-title>Preview Image</v-card-title>
        <v-card-subtitle
          >Here you can see all the images you have uploaded.</v-card-subtitle
        >

        <!-- Images -->
        <div>
          <div
            class="mt-4 d-flex flex-wrap justify-center"
            v-if="uploadedImages.length > 0"
          >
            <span
              class="border ma-3"
              v-for="image in uploadedImages"
              :key="image.fileUrl"
              @click="previewImage(image.fileUrl)"
              style="width: 350px; height: 197px"
            >
              <img
                style="width: 100%; height: 100%; object-fit: contain"
                :src="image.fileUrl"
                loading="lazy"
              />
            </span>
          </div>
          <div
            v-else
            class="pa-5 pt-10 text-h6 text-md-h5 d-flex justify-center align-center"
          >
            <span>No Image has been uploaded until now.</span>
          </div>
        </div>

        <v-card-actions class="px-10 d-flex justify-end my-5">
          <v-btn
            variant="outlined"
            color="red-darken-2"
            @click="previewImagesDialog = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Video Preview Dialog -->
    <v-dialog v-model="previewVideosDialog">
      <v-card height="auto" class="pa-5">
        <v-card-title>Preview Video</v-card-title>
        <v-card-subtitle
          >Here you can see all the videos you have uploaded.</v-card-subtitle
        >

        <!-- Videos -->
        <div>
          <div
            class="mt-4 d-flex flex-wrap justify-center"
            v-if="uploadedVideos.length > 0"
          >
            <span
              class="border ma-3"
              v-for="video in uploadedVideos"
              :key="video.fileUrl"
              @click="previewVideo(video.fileUrl)"
              style="width: 350px; height: 197px"
            >
              <video
                style="width: 100%; height: 100%; object-fit: contain"
                controls
              >
                <source :src="video.fileUrl" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </span>
          </div>
          <div
            v-else
            class="pa-5 pt-10 text-h6 text-md-h5 d-flex justify-center align-center"
          >
            <span>No video has been uploaded until now.</span>
          </div>
        </div>

        <v-card-actions class="px-10 d-flex justify-end my-5">
          <v-btn
            variant="outlined"
            color="red-darken-2"
            @click="previewVideosDialog = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- ALERT -->
    <v-dialog v-model="alert" width="auto">
      <v-card
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="alert = false"></v-btn>
        </template>
        <template v-slot:title>
          <div class="text-h4 font-weight-bold">Warning</div>
        </template>

        <v-divider></v-divider>

        <div class="pa-10 text-center">
          <v-icon
            class="mb-6"
            color="amber"
            icon="mdi-alert"
            size="100"
          ></v-icon>

          <div class="text-h5">
            Image is mandatory. Please upload at least one image!
          </div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            rounded
            variant="outlined"
            @click="alert = false"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, watch } from "vue";
import { useRouter } from "vue-router";
//@ts-ignore
import api from "@/data/api/index";
import { useCookies } from "vue3-cookies";
import { usePostPropertyStore } from "@/store/postProperty";

const postProperty = usePostPropertyStore();
const router = useRouter();

const { cookies } = useCookies();
if (!cookies.get("token")) {
  router.push({ path: "/signin", query: { message: "createProperty" } });
}

const activeForm = ref();
const propertyData = ref();
const alert = ref(false);

const previewImagesDialog = ref(false);
const previewImageDialog = ref(false);
const previewImageUrl = ref("");
const uploadedImages = ref(
  // @ts-ignore
  JSON.parse(localStorage.getItem(`${activeForm.value}Data`))?.images || []
);

const previewVideosDialog = ref(false);
const previewVideoDialog = ref(false);
const previewVideoUrl = ref("");
const uploadedVideos = ref(
  // @ts-ignore
  JSON.parse(localStorage.getItem(`${activeForm.value}Data`))?.videos || []
);

const uploadDocumentDialog = ref(false);
const documents = ref(["RTC", "EC", "Mother Deed", "Sale Deed", "other"]);
const document = ref(null);
const newDocument = ref(null);
const uploadDocDisabled = ref(true);
const isdocumentAlreadyUploaded = ref(false);
const previewDocumentDialog = ref(false);
const previewDocumentUrl = ref("");
const uploadedDocuments = ref(
  // @ts-ignore
  JSON.parse(localStorage.getItem(`${activeForm.value}Data`))?.documents || []
);

// @ts-ignore
const FileList = ref();

function handleback() {
  postProperty.handleFormRouting("details");
}

function calculateFileSize(filesize: number) {
  let size = filesize / (1024 * 1024);
  let sizeUnit = "MB";

  if (size < 1) {
    size = size * 1024;
    sizeUnit = "KB";
  }
  return `${Math.trunc(size * 100) / 100} ${sizeUnit}`;
}

function getFileExtension(mimetype: string) {
  return mimetype.split("/")[1];
}

// @ts-ignore
async function onUploadImages(event) {
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
      uploadedImages.value = res?.data?.images;

      propertyData.value.images = res?.data?.images;

      localStorage.setItem(
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

// PREVIEW FILES
function previewImage(imageUrl: string) {
  previewImageUrl.value = imageUrl;
  previewImageDialog.value = true;
}
function previewVideo(videoUrl: string) {
  previewVideoUrl.value = videoUrl;
  previewVideoDialog.value = true;
}
function previewDocument(documentUrl: string) {
  previewDocumentUrl.value = documentUrl;
  previewDocumentDialog.value = true;
}

// REMOVE FILES
function removeImageFromUploadedList(imageUrl: string) {
  const index = uploadedImages.value.findIndex(
    (item: any) => item.fileUrl === imageUrl
  );
  uploadedImages.value.splice(index, 1);
  propertyData.value.images = uploadedImages.value;
  const activeForm = localStorage.getItem("activeForm");
  localStorage.setItem(`${activeForm}Data`, JSON.stringify(propertyData.value));
}
function removeVideoFromUploadedList(videoUrl: string) {
  const index = uploadedVideos.value.findIndex(
    (item: any) => item.fileUrl === videoUrl
  );
  uploadedVideos.value.splice(index, 1);
  propertyData.value.videos = uploadedVideos.value;

  const activeForm = localStorage.getItem("activeForm");
  localStorage.setItem(`${activeForm}Data`, JSON.stringify(propertyData.value));
}
function removeDocumentFromUploadedList(documentUrl: string) {
  const index = uploadedDocuments.value.findIndex(
    (item: any) => item.fileUrl === documentUrl
  );
  uploadedDocuments.value.splice(index, 1);
  propertyData.value.documents = uploadedDocuments.value;

  const activeForm = localStorage.getItem("activeForm");
  localStorage.setItem(`${activeForm}Data`, JSON.stringify(propertyData.value));
}

async function onUploadVideos(event: any) {
  FileList.value = Array.from(event.target.files);
  const formData = new FormData();

  // @ts-ignore
  FileList.value.forEach((file) => {
    // @ts-ignore
    formData.append("video", file);
  });

  try {
    const res = await api?.property?.uploadVideo(formData);
    if (res?.status == 200) {
      uploadedVideos.value = res?.data?.videos;

      propertyData.value.videos = res?.data?.videos;

      localStorage.setItem(
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

watch([document, newDocument], () => {
  if (
    (document.value && document.value !== "other") ||
    (document.value === "other" && newDocument.value)
  ) {
    const docType =
      document.value !== "other" ? document.value : newDocument.value;
    const isDocAlreadyUploaded = propertyData.value?.documents?.find(
      (document: any) => document.type === docType
    );

    if (!isDocAlreadyUploaded) {
      isdocumentAlreadyUploaded.value = false;
      uploadDocDisabled.value = false;
    } else {
      isdocumentAlreadyUploaded.value = true;
    }
  } else {
    uploadDocDisabled.value = true;
  }
});

function handleEnableDocUpload() {
  if (uploadDocDisabled.value) {
    window.alert(
      "Please Select document type of type name of the document in case of other document."
    );
  }
}

async function onUploadDocument(event: any) {
  const formData = new FormData();
  formData.append("document", event?.target?.files[0]);

  try {
    const res = await api?.property?.uploadDocument(formData);

    if (res?.status == 200) {
      uploadedDocuments.value = [
        ...uploadedDocuments.value,
        {
          ...res?.data?.document,
          type: document.value !== "other" ? document.value : newDocument.value,
        },
      ];

      propertyData.value.documents = [
        ...propertyData.value.documents,
        {
          ...res?.data?.document,
          type: document.value !== "other" ? document.value : newDocument.value,
        },
      ];

      localStorage.setItem(
        `${activeForm.value}Data`,
        JSON.stringify(propertyData.value)
      );
      uploadDocumentDialog.value = false;
      document.value = null;
      newDocument.value = null;
    } else {
      throw res;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function handleContinue() {
  alert.value = false;
  if (uploadedImages.value.length > 0) {
    postProperty.addFilledFormPath("/postproperty/gallery");
    postProperty.handleFormRouting("amenities");
  } else {
    alert.value = true;
  }
}

onBeforeMount(() => {
  activeForm.value = localStorage.getItem("activeForm");
  propertyData.value = JSON.parse(
    // @ts-ignore
    localStorage.getItem(activeForm.value + "Data")
  );

  if (propertyData.value) {
    uploadedImages.value = propertyData.value.images;
    uploadedVideos.value = propertyData.value.videos;
    uploadedDocuments.value = propertyData.value.documents;
  }
});
</script>

<style scoped>
.heading {
  font-size: 26px;
}

#previewBtn:hover {
  font-size: 17px;
}
#addDocumentBtn {
  height: 47px;
  border: solid 2px;
  border-radius: 8px;
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
  height: 47px;
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  color: #c2185b;
  border: solid 2px #c2185b;
  border-radius: 8px;
  font-size: 16px;
}
.file-upload-button:hover {
  background-color: #c2185b;
  color: white;
}
.fileIconCont {
  position: relative;
}
.fileExtension {
  width: 45px;
  font-size: 10px;
  text-align: center;
  font-weight: 600;
  color: white;
  position: absolute;
  left: 0;
  bottom: 6px;
}
.fileUploaded {
  font-size: 15px;
  font-weight: 400;
  color: #344054;
}
.filesize {
  font-size: 15px;
  font-weight: 300;
  color: 475467;
}
.uploadDocContainer {
  position: relative;
}
#closeBtn {
  position: absolute;
  right: 15px;
  top: 15px;
  height: 25px;
  width: 25px;
  border: none;
}
.fileCardBtn {
  height: 30px;
  width: 30px;
  border: none;
}
.documentUploadInputLabel {
  width: 150px;
}
</style>