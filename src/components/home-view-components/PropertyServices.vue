<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="pa-4 pa-sm-2 text-h4 font-weight-medium">Our associated partners</div>
      </v-col>
      <v-col cols="12" class="my-5 mt-2">
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="4" class="px-4 px-sm-2 pr-md-4 py-6 py-sm-4">
            <v-img cover height="200px" src="https://checkedspot.blob.core.windows.net/gallery/interior.jpg"
              class="mb-1 d-flex align-end">
                <div class="d-flex align-end justify-end ma-4">                    
                  <span>
                    <v-btn height="35" color="pink-darken-4" variant="flat" @click="handleEnquiryForm('decoration')">Know More</v-btn>
                    <enquiry-form v-if="enquiryFor === 'decoration'" :enquiryFor="enquiryFor" :dialog="dialog"/>
                  </span>
                </div>
            </v-img>
            <p class="servicename font-weight-medium">Interior decoration</p>
          </v-col>

          <v-col style="z-index: 1;" cols="12" sm="6" md="4" class="px-4 px-sm-2 pr-md-4 py-6 py-sm-4">
            <v-img cover height="200px" src="https://checkedspot.blob.core.windows.net/gallery/maintainance.jpg" class="mb-1 d-flex align-end">
                  <div class="d-flex align-end justify-end ma-4">                    
                    <span>
                      <v-btn height="35" color="pink-darken-4" variant="flat" @click="handleEnquiryForm('maintenance')">Know More</v-btn>
                      <enquiry-form v-if="enquiryFor === 'maintenance'" :enquiryFor="enquiryFor" :dialog="dialog"/>
                    </span>
                  </div>
            </v-img>
            <p class="servicename font-weight-medium">Maintenance</p>
          </v-col>

          <!-- <v-col cols="12" md="6" class="px-4 px-sm-2 pr-md-4 py-6 py-sm-4">
            <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/assets/RentCollectionServices.jpg"
              class="mb-1 d-flex align-end">
              <div class="d-flex align-end justify-end ma-4">                    
                <span>
                  <v-btn height="43" color="pink-darken-4" variant="flat" @click="handleEnquiryForm('rentCollection')">Know More</v-btn>
                  <enquiry-form v-if="enquiryFor === 'rentCollection'" :enquiryFor="enquiryFor" :dialog="dialog" />
                </span>
              </div>
            </v-img>
            <p class="text-h6 font-weight-medium">Rent collection services</p>
          </v-col> -->

          <v-col cols="12" sm="6" md="4" class="px-4 px-sm-2 pr-md-4 py-6 py-sm-4">
            <v-img cover height="200px" src="https://checkedspot.blob.core.windows.net/assets/legalServices.jpg"
              class="mb-1 d-flex align-end">
              <div class="d-flex align-end justify-end ma-4">                    
                <span>
                  <v-btn height="35" color="pink-darken-4" variant="flat" @click="handleEnquiryForm('legal')">Know More</v-btn>
                  <enquiry-form v-if="enquiryFor === 'legal'" :enquiryFor="enquiryFor" :dialog="dialog" />
                </span>
              </div>
            </v-img>
            <p class="servicename font-weight-medium">Legal</p>
          </v-col>

        </v-row>        
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script lang="ts" setup>
//@ts-ignore
import EnquiryForm from "./EnquiryForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const dialog = ref(false)
const enquiryFor = ref('');
const router = useRouter();

function handleEnquiryForm(enq: string) {
  if (enq === 'decoration') {
    enquiryFor.value = 'decoration';
  } else if (enq === 'maintenance') {
    enquiryFor.value = 'maintenance';
  } else if (enq === 'legal') {
    enquiryFor.value = 'legal';
  // }else if (enq === 'rentCollection') {
  //   enquiryFor.value = 'rentCollection';
  }
  dialog.value = true;
}
</script>
<style scoped>
.servicename {
  font-size: 18px;
}

</style>