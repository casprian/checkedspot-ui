<template>
  <v-expand-transition>
    <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
      class="mx-auto bg-red">
      <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center pa-4">
        <h5 style="line-height: normal;">Message delivery Failed. Please try again!</h5>
      </div>
    </v-card>
  </v-expand-transition>
  <v-expand-transition>
    <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
      class="mx-auto bg-green">
      <div style="height: 100%" class="text-h6 text-center d-flex align-center justify-center pa-4">
        <h5 style="line-height: normal;">
          Message has been delivered. Checked Spot Team will contact you soon.
        </h5>
      </div>
    </v-card>
  </v-expand-transition>

  <v-row no-gutters class="services">
    <!-- Heading of the Section -->
    <v-col cols="12">
      <div class="heading text-h4 text-center">Empower your dream with our Associated Partners </div>
    </v-col>

    <!-- Cards -->
    <v-col cols="12" class="my-5 mt-2">
      <v-row no-gutters class="pa-0">
        <!-- Interior Decoration Service -->
        <v-col cols="12" sm="6" md="4" class="pa-0 pa-3">
          <v-card class="pa-4" elevation="8" height="378" width="100%">
            <div>
              <v-img class="rounded" cover height="240"
                src="https://checkedspot.blob.core.windows.net/gallery/interior.jpg"></v-img>
            </div>
            <v-card-title class="pa-0 mt-5 mb-4 cardTitle">
              Interior decoration
            </v-card-title>
            <v-card-actions class="pa-0">
              <v-btn height="35" color="pink-darken-4" variant="outlined" @click="handleEnquiryForm('decoration')">Know
                More</v-btn>
              <enquiry-form v-if="enquiryFor === 'decoration'" :enquiryFor="enquiryFor" :dialog="dialog"
                @success="successHandler" @failure="failureHandler" />
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Maintenance Service -->
        <v-col cols="12" sm="6" md="4" class="pa-0 pa-3">
          <v-card class="pa-4" elevation="8" height="378" width="100%">
            <div>
              <v-img class="rounded" cover height="240"
                src="https://checkedspot.blob.core.windows.net/gallery/maintainance.jpg"></v-img>
            </div>
            <v-card-title class="pa-0 mt-5 mb-4 cardTitle">
              Maintenance
            </v-card-title>

            <v-card-actions class="pa-0">
              <v-btn height="35" color="pink-darken-4" variant="outlined" @click="handleEnquiryForm('maintenance')">Know
                More</v-btn>
              <enquiry-form v-if="enquiryFor === 'maintenance'" :enquiryFor="enquiryFor" :dialog="dialog"
                @success="successHandler" @failure="failureHandler" />
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Legal Service -->
        <v-col cols="12" sm="6" md="4" class="pa-0 pa-3">
          <v-card class="pa-4" elevation="8" height="378" width="100%">
            <div>
              <v-img class="rounded" cover height="240"
                src="https://checkedspot.blob.core.windows.net/assets/legalServices.jpg"></v-img>
            </div>
            <v-card-title class="pa-0 mt-5 mb-4 cardTitle">
              Legal
            </v-card-title>
            <v-card-actions class="pa-0">
              <v-btn height="35" color="pink-darken-4" variant="outlined" @click="handleEnquiryForm('legal')">Know
                More</v-btn>
              <enquiry-form v-if="enquiryFor === 'legal'" :enquiryFor="enquiryFor" :dialog="dialog"
                @success="successHandler" @failure="failureHandler" />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

//@ts-ignore
import EnquiryForm from "@/components/home-view-components/EnquiryForm.vue";

const dialog = ref(false)
const enquiryFor = ref('');
const router = useRouter();
const expandSuccess = ref(false);
const expandFailure = ref(false);

function handleEnquiryForm(enq: string) {
  console.log("Enquiry: ", enq)
  if (enq === 'decoration') {
    enquiryFor.value = 'decoration';
  } else if (enq === 'maintenance') {
    enquiryFor.value = 'maintenance';
  } else if (enq === 'legal') {
    enquiryFor.value = 'legal';
  }
  dialog.value = true;
}

function successHandler() {
  expandSuccess.value = true;
  setTimeout(() => {
    expandSuccess.value = false;
    expandFailure.value = false;
  }, 5000);
}

function failureHandler() {
  expandFailure.value = true;
  setTimeout(() => {
    expandSuccess.value = false;
    expandFailure.value = false;
  }, 5000);
}

</script>
<style scoped>
.services {
  margin: 80px 0;
}

.heading {
  line-height: 53px;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
}

.servicename {
  font-size: 18px;
}

.serviceZindex {
  z-index: 0 !important;
}
</style>