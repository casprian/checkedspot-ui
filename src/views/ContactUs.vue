<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-card class="mx-auto my-12" max-width="374">
          <template>
            <v-progress-linear color="deep-purple" height="4" indeterminate></v-progress-linear>
          </template>

          <v-img cover height="250" src="/src/assets/photos/bangalore.jpg"></v-img>

          <v-card-item>
            <v-card-title>Checked Spot - Bangalore</v-card-title>

            <v-card-subtitle>
              <span class="me-1"></span>

              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :model-value="4.9" color="amber" density="compact" half-increments readonly
                size="small"></v-rating>

              <div class="text-grey ms-4">4.9 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              1st floor - Next To Fame Diagnostics - RK Hegde Nagar Bangalore
            </div>

            <h3>Reach Us At </h3>
            <br />

            <h1>9606937470 </h1>
            <br />
            <h1>9606937472 </h1>

          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto my-12" max-width="374">
          <template>
            <v-progress-linear color="deep-purple" height="4" indeterminate></v-progress-linear>
          </template>

          <v-img cover height="250" src="/src/assets/photos/hassan.jpg"></v-img>

          <v-card-item>
            <v-card-title>Checked Spot - Hassan</v-card-title>

            <v-card-subtitle>
              <span class="me-1"></span>

              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :model-value="4.9" color="amber" density="compact" half-increments readonly
                size="small"></v-rating>

              <div class="text-grey ms-4">4.9 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              1st floor - Above Queens Collection, Subhash Square - Hassan
              573201
            </div>

            <h3>Reach Us At</h3>
            <br />

            <h1>9606937471</h1>
            <br />
            <h1>9606937473</h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-end enquiry">
      <v-col cols="auto" >
          <v-dialog v-model="dialog"  width="auto">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props">
                Click For Enquiry
              </v-btn>
            </template>
            <v-card class="pa-3">
              <v-sheet class="ma-2 elevation-7 pa-4 pb-4">
                <form>
                  <v-text-field v-model="enquiry.name" :counter="10" :error-messages="name.errorMessage.value"
                    label="Name" variant="outlined"></v-text-field>
  
                  <v-text-field v-model="enquiry.phoneNumber" :counter="7" :error-messages="phone.errorMessage.value"
                    label="Phone Number" variant="outlined"></v-text-field>
  
  
                  <v-text-field v-model="enquiry.email" :error-messages="email.errorMessage.value" label="E-Mail"
                    variant="outlined"></v-text-field>
  
                  <v-textarea v-model="enquiry.enquiryMessage" rows="3" label="Enquiry Message"
                    variant="outlined"></v-textarea>
  
                  <v-container fluid>
                    <v-row no-gutters class="d-flex justify-center">
                      <v-col cols="12" class="d-flex justify-center mb-4">
                        <v-btn type="submit" variant="flat" color="pink-accent-3" width="300px"
                          @click.prevent="callWhatsappCloudApi">
                          Submit
                        </v-btn>
                      </v-col>
  
                      <v-col cols="12" class="d-flex justify-center">
                        <v-btn @click.prevent="dialog = false" variant="flat" color="pink-accent-3" width="300px">
                          Cancle
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </form>
              </v-sheet>
            </v-card>
          </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useField, useForm } from "vee-validate";
import axios from 'axios';
import { reactive, ref } from "vue";
const dialog = ref(false)

const { handleReset } = useForm({
  validationSchema: {},
});

const name = useField("name");
const phone = useField("phone");
const email = useField("email");

const enquiry = reactive({
  name: "",
  phoneNumber: "",
  email: "",
  enquiryMessage: "",
});


function callWhatsappCloudApi() {
  dialog.value = false;

  axios({
    method: 'post',
    url: 'https://apicheckedspot.azurewebsites.net/user/sendEnquiry',
    data: enquiry   
  }).then((res) => { 
    console.log(res) 
  }).catch((err) => { 
      console.log(err) 
  })

}
</script>

<style scoped>
.enquiry {
  position: fixed;
  bottom: 40px;
  right: 50px;
}
</style>

