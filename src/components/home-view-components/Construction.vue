<template>
  <v-container fluid class="pa-0 mb-6">
    <v-expand-transition>
      <v-card style="position: fixed; top: 56px; z-index: 1" v-show="expandFailure" height="60" width="100%"
        class="mx-auto bg-red">
        <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
          <h5>Message delivery Failed. Please try again!</h5>
        </div>
      </v-card>
    </v-expand-transition>
    <v-expand-transition>
      <v-card style="position: fixed; top: 56px; z-index: 1" v-show="expandSuccess" height="60" width="100%"
        class="mx-auto bg-green">
        <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
          <h5>
            Message has been delivered. Checked Spot Team will contact you soon.
          </h5>
        </div>
      </v-card>
    </v-expand-transition>
    <v-row no-gutters class="bgConstruction d-flex justify-space-between py-10 py-md-0">
      <v-col cols="12" md="4" class="px-16 pr-md-0 pl-md-16 my-5 mr-0 d-flex flex-column justify-center">
        <h2 class="h2 text-white pb-3 text-center text-md-left">Checked Spot Construction Simplified</h2>
        <p class="text-white text-h6 font-weight-regular text-center text-md-left">Step into the home you've always
          dreamed of, built to the highest standard of quality.</p>
      </v-col>
      <v-col cols="12" md="2" class="d-flex align-center justify-center py-10 py-md-0">
        <v-btn @click="router.push('/quotation')" variant="elevated" color="deep-orange-darken-1"
          class="text-h6 py-2 elevtion-5" height="120" width="200">GET
          YOUR<br>QUOTATION<br>NOW</v-btn>
        </v-col>
      <v-col cols="12" md="5" class="pr-md-16 pl-md-10 py-10 d-flex justify-center justify-md-end">

        <form class="bg-white px-8 pt-5 pb-8 rounded-lg" style="max-width:350px">
          <div class="pb-3 text-h5 font-weight-bold">Talk to our Expert</div>
          <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value" density="compact"
            counter="40" class="my-2" label="Name*" variant="outlined"></v-text-field>

          <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value" density="compact"
            counter="10" class="my-2" label="Whatsapp Number*" variant="outlined"></v-text-field>


          <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" density="compact"
            counter="30" class="my-2" label="Email*" variant="outlined"></v-text-field>

          <v-text-field v-model="enquiryMessage.value.value" :error-messages="enquiryMessage.errorMessage.value"
            counter="40" density="compact" label="Enquiry Message" variant="outlined"></v-text-field>

          <small>*indicates required field</small>

          <v-sheet class="d-flex flex-column justify-center align-center">
            <v-btn type="submit" variant="flat" color="pink-darken-2" width="300px" class="my-2"
              @click.prevent="callWhatsappCloudApi">
              book free consultation
            </v-btn>
            <p class="caption"><span class="text-red">* </span>By submitting this form, I confirm that I have read and
              agreed to accept Checked Spot's <RouterLink to="/privacypolicy">privacy policy</RouterLink>
            </p>
          </v-sheet>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
//@ts-ignore
import api from "@/data/api/index.js";
import { useRouter } from 'vue-router'

const router = useRouter();
const dialog = ref(false);

//form validation
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: any) {
      if (value?.length >= 2 && value?.length <= 40) {
        return true;
      }
      if (!value) {
        return "Required";
      }
      return "Name needs to be at least 2 and maximum 40 characters.";
    },
    email(value: any) {
      if (
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value) &&
        value.length <= 30
      ) {
        return true;
      }
      if (!value) {
        return "Required";
      }
      return "Must be a valid e-mail.";
    },
    mobile(value: any) {
      if (!value) {
        return "Required";
      } else if (value) {
        if (value?.length === 10 && /^\d+$/.test(value)) {
          return true;
        } else if (value?.length > 10 && /^\d+$/.test(value)) {
          return "Phone number needs to be at exactly 10 digits.";
        } else {
          return "Phone number needs to be exactly 10 digits.";
        }
      }
    },
    enquiryMessage(value: any) {
      if (value?.length > 40) {
        return "Please wrap you message in 40 characters";
      } else if (value || !value) {
        return true;
      }
    },
  },
});

const expandSuccess = ref(false);
const expandFailure = ref(false);

const name = useField("name");
const email = useField("email");
const mobile = useField("mobile");
const enquiryMessage = useField("enquiryMessage");

const callWhatsappCloudApi = handleSubmit(async (values) => {
  dialog.value = false;

  api?.user?.sendEnquiry({ ...values })
    .then((res: any) => {
      if (res?.data?.status === 200) {
        expandSuccess.value = true;
      } else {
        expandFailure.value = true;
      }
      setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
      }, 5000);
    })
    .catch((err: Error) => {
      console.log(err);
      expandFailure.value = true;
      setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
      }, 5000);
    });
  handleReset()
}
);
</script>

<style scoped>
.bgConstruction {
  background-image: url("https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: 0% 70%;
  background-size: cover;
}

h2.h2 {
  font-size: 45px;
  font-weight: 600;
  line-height: 55px;
}

.caption {
  font-size: 11px;
}
</style>
