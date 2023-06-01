<template>
  <v-expand-transition>
    <v-card style="position: fixed; top: 48px; z-index: 1;" v-show="expandFailure" height="60" width="100%"
      class="mx-auto bg-red">
      <div style="height: 100%;" class="text-h5 text-center d-flex align-center justify-center">
        <h5>Message delivery Failed. Please try again!</h5>
      </div>
    </v-card>
  </v-expand-transition>
  <v-expand-transition>
    <v-card style="position: fixed; top: 48px; z-index: 1;" v-show="expandSuccess" height="60" width="100%"
      class="mx-auto bg-green">
      <div style="height: 100%;" class="text-h5 text-center d-flex align-center justify-center">
        <h5>Message has been delivered. Checkedspot Team will contact you soon.</h5>
      </div>
    </v-card>
  </v-expand-transition>
  <v-container>
    <v-row no-gutters class="d-flex justify-space-between">
      <v-col cols="12" sm="6" md="8" class="my-12">
        <v-row no-gutters>
          <v-col cols="auto" class="ma-2 d-flex justify-center">
            <v-card class="mx-auto" max-width="370">
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
          <v-col cols="auto" class="ma-2 d-flex justify-center">
            <v-card class="mx-auto" max-width="370">
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
      </v-col>
      <v-col cols="12" sm="6" md="4" class="my-12" style="position:relative;">
        <v-card class="ma-2 px-5 pt-3 pb-10 elevation-7 rounded-0" width="100%">
          <div class="pa-3 text-h4 font-weight-bold">Enquiry Form</div>
          <form>
            <!-- 1024 -->
            <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value" density="comfortable"
              class="ma-2" counter="40" label="Name" variant="outlined"></v-text-field>

            <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value" density="comfortable"
              class="ma-2" counter="10" label="Whatsapp Number" variant="outlined"></v-text-field>


            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" density="comfortable"
              class="ma-2" counter="30" label="Email" variant="outlined"></v-text-field>

            <v-textarea v-model="enquiryMessage.value.value" :error-messages="enquiryMessage.errorMessage.value" counter="750" density="comfortable" class="mx-2" rows="3"
              label="Enquiry Message" variant="outlined"></v-textarea>

            <v-sheet class="d-flex flex-column justify-center align-center">
              <v-btn type="submit" variant="elevated" elevation="5" color="blue" width="300px" class="my-2"
                @click.prevent="callWhatsappCloudApi">
                Contact us on Whatsapp
              </v-btn>
              <v-btn @click.prevent="handleReset" elevation="4" variant="text" color="red" width="300px" class="my-2">
                Reset Form
              </v-btn>
            </v-sheet>
          </form>
        </v-card>
      </v-col>
      <v-col cols="12">
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from "vue";
import { useField, useForm } from 'vee-validate';
//@ts-ignore
import api from '@/data/api/index.js';

const dialog = ref(false);

//form validation
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: any) {
      if (value?.length >= 2 && value?.length <= 40) {
        return true;
      }
      if (!value) {
        return 'Required';
      }
      return 'Name needs to be at least 2 and maximum 40 characters.';
    },
    email(value: any) {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value) && value.length <= 30) {
        return true;
      }
      if (!value) {
        return 'Required';
      }
      return 'Must be a valid e-mail.'
    },
    mobile(value: any) {
      if (!value) {
        return 'Required';
      } else if (value) {
        if (value?.length === 10 && /^\d+$/.test(value)) {
          return true;
        } else if (value?.length > 10 && /^\d+$/.test(value)) {
          return 'Phone number needs to be at exactly 10 digits.'
        } else {
          return 'Phone number needs to be exactly 10 digits.'
        }
      }
    },
    enquiryMessage(value: any) {
      if(value?.length > 750) {
        return 'Please wrap you message in 750 characters'
      }else if (value || !value) {
        return true;
      }
    }
  }
});

const nameLength = ref(0);
console.log(nameLength.value)

const expandSuccess = ref(false);
const expandFailure = ref(false)

const name = useField('name');
const email = useField('email');
const mobile = useField('mobile');
const enquiryMessage = useField('enquiryMessage');

console.log(name.value.value)
const callWhatsappCloudApi = handleSubmit(async (values) => {
  // console.log(values)
  dialog.value = false;

  api?.user?.sendEnquiry({...values}).then((res:any) => {
    if (res?.data?.status === 200) {
      expandSuccess.value = true;
    } else {
      expandFailure.value = true;
    }
    setTimeout(() => {
      expandSuccess.value = false;
      expandFailure.value = false;
    }, 5000);
  }).catch((err:Error) => {
    console.log(err)
    expandFailure.value = true;    
    setTimeout(() => {
      expandSuccess.value = false;
      expandFailure.value = false;
    }, 5000);
  })

  // axios({
  //   method: 'post',
  //   url: 'https://apicheckedspot.azurewebsites.net/user/sendEnquiry',
  //   data: values
  // }).then((res) => {
  //   console.log(res)
  //   if (res?.data?.status === 200) {
  //     expandSuccess.value = true;
  //   } else {
  //     expandFailure.value = true;
  //   }
  //   setTimeout(() => {
  //     expandSuccess.value = false;
  //     expandFailure.value = false;
  //   }, 5000);
  // }).catch((err) => {
  //   console.log(err)
  //   expandFailure.value = true;    
  //   setTimeout(() => {
  //     expandSuccess.value = false;
  //     expandFailure.value = false;
  //   }, 5000);
  // })
})
</script>

<style scoped></style>

