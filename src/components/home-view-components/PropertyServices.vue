<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="pa-4 pa-sm-2 text-h4 font-weight-medium">Our associated partners</div>
      </v-col>
      <v-col cols="12" class="my-5 mt-2">
        <v-row no-gutters>

          <v-col cols="12" md="6" @click="enquiryFor=''" class="px-4 px-sm-2 pr-md-4 py-6 py-sm-4 serviceCards">
            <a href="https://www.decorwork.in" target="_blank" @click="enquiryFor = ''">
              <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/gallery/interior.jpg"
                class="mb-1"></v-img>
              <p class="text-h6 font-weight-medium">Interior decoration services</p>
            </a>
          </v-col>

          <v-col @click="handleEnquiryForm('maintenance')" cols="12" md="6"
            class="px-4 px-sm-2 pr-md-4 py-6 py-sm-4 serviceCards">
            <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/gallery/maintainance.jpg"
              class="mb-1"></v-img>
            <p class="text-h6 font-weight-medium">Maintenance services</p>
          </v-col>

          <v-col cols="12" md="6" @click="enquiryFor=''" class="px-4 px-sm-2 pr-md-4 py-6 py-sm-4 serviceCards">
            <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/assets/RentCollectionServices.jpg"
              class="mb-1"></v-img>
            <p class="text-h6 font-weight-medium">Rent collection services</p>
          </v-col>

          <v-col @click="handleEnquiryForm('legal')" cols="12" md="6"
            class="px-4 px-sm-2 pr-md-4 py-6 py-sm-4 serviceCards">
            <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/assets/legalServices.jpg"
              class="mb-1"></v-img>
            <p class="text-h6 font-weight-medium">Legal services</p>
          </v-col>

        </v-row>
        <enquiry-form v-if="enquiryFor === 'maintenance'" :enquiryFor="enquiryFor" :dialog="dialog"/>
        <enquiry-form v-if="enquiryFor === 'legal'" :enquiryFor="enquiryFor" :dialog="dialog" />
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script lang="ts" setup>
import EnquiryForm from "./EnquiryForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const dialog = ref(false)
const enquiryFor = ref('');
const router = useRouter();

function handleEnquiryForm(enq: string) {
  if (enq === 'maintenance') {
    enquiryFor.value = 'maintenance';
  } else if (enq === 'legal') {
    enquiryFor.value = 'legal';
  }
  dialog.value = true;
}
</script>
<style scoped>
.checkedSpotMeaning {
  line-height: 25px;
  font-size: 20px;
}

.serviceCards:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black !important;
}
</style>