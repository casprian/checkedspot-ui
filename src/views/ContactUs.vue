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
              <v-btn 
                variant="elevated"
                elevation="5" 
                color="pink-accent-3" 
                v-bind="props"
              >
                Click For Enquiry
              </v-btn>
            </template>
            <v-card class="pa-3">
              <v-sheet class="ma-2 elevation-7 pa-4 pb-4">
                <form>
                  <v-text-field 
                    v-model="name.value.value" 
                    :error-messages="name.errorMessage.value"
                    class="ma-2"
                    counter 
                    label="Name" 
                    variant="outlined"
                  ></v-text-field>
  
                  <v-text-field 
                    v-model="mobile.value.value" 
                    :error-messages="mobile.errorMessage.value"
                    class="ma-2"
                    counter 
                    label="Whatsapp Number" 
                    variant="outlined"
                  ></v-text-field>
  
  
                  <v-text-field 
                    v-model="email.value.value" 
                    :error-messages="email.errorMessage.value" 
                    class="ma-2"
                    label="Email"
                    variant="outlined"
                  ></v-text-field>
  
                  <v-textarea 
                    v-model="enquiryMessage.value.value" 
                    class=""
                    rows="3" 
                    label="Enquiry Message"
                    variant="outlined"
                  ></v-textarea>
  
                  <v-container fluid class="pa-0">
                    <v-row no-gutters class="d-flex justify-center">
                      <v-col cols="12" class="d-flex justify-center mb-3">
                        <v-btn 
                          type="submit" 
                          variant="elevated" 
                          elevation="5"
                          color="blue" 
                          width="300px"
                          @click.prevent="callWhatsappCloudApi"
                        >
                          Submit
                        </v-btn>
                      </v-col>
  
                      <v-col cols="12" class="d-flex justify-center">
                        <v-btn 
                          @click.prevent="dialog = false" 
                          elevation="4" 
                          variant="text" 
                          color="red" 
                          width="300px"
                        >
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
import axios from 'axios';
import { ref } from "vue";
import { useField, useForm } from 'vee-validate';

const dialog = ref(false)

//form validation
let { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value:any) {
            if (value?.length >= 2) { 
              return true;
            }
            return 'Name needs to be at least 2 characters.';
        },
        email(value:any) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) { 
              return true;
            }
            return 'Must be a valid e-mail.'
        },
        mobile(value:any) {
            if(!value) {
                return 'Required';
            }else if(value) {
                if(value?.length === 10 && /[0-9-]+/.test(value)) {
                    return true;
                }else if(value?.length > 10  && /[0-9-]+/.test(value)) {
                    return 'Phone number needs to be at exactly 10 digits.'
                }else {
                    return 'Phone number needs to be exactly 10 digits.'
                }
            }
        },
        enquiryMessage(value:any) {
            if(value){
              return true;
            }
        }
    }
})
const name = useField('name');
const email = useField('email');
const mobile = useField('mobile');
const enquiryMessage = useField('enquiryMessage');

const callWhatsappCloudApi = handleSubmit(async(values) => {
  console.log(values)
  dialog.value = false;

  axios({
    method: 'post',
    url: 'https://apicheckedspot.azurewebsites.net/user/sendEnquiry',
    data: values   
  }).then((res) => { 
    console.log(res) 
  }).catch((err) => { 
      console.log(err) 
  })

})
</script>

<style scoped>
.enquiry {
  position: fixed;
  bottom: 20px;
  right: 40px;
}
</style>

