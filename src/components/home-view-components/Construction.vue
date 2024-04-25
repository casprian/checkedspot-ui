<template>
  <v-expand-transition>
    <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
      class="mx-auto bg-red">
      <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
        <h5>Message delivery Failed. Please try again!</h5>
      </div>
    </v-card>
  </v-expand-transition>
  <v-expand-transition>
    <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
      class="mx-auto bg-green">
      <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
        <h5>
          Message has been delivered. Checked Spot Team will contact you soon.
        </h5>
      </div>
    </v-card>
  </v-expand-transition>
  <v-row no-gutters class="constructionContainer d-flex justify-space-between">
    <v-col cols="12">
      <h2 class="heading">Checked Spot Construction Simplified.</h2>
      <p class="subheading">Step into the home you've always of, built to the highest standard of quality.</p>
      <router-link to="/quotation" class="quotationBtn">
        <v-btn color="#C2185B" class="text-white" :loading="gyqnLoader">Get Your Quotation Now</v-btn>
      </router-link>
    </v-col>

    <v-row no-gutters class="pa-0 ma-0 mt-10">
      <v-col cols="12" sm="6" md="7" class="construction mb-5 mb-md-0">
        <img src="../../assets/homePageConstruction.jpg" alt="image for construction">
      </v-col>

      <v-col cols="12" sm="6" md="5" class="d-flex justify-center align-center">
        <form class="pa-5 bg-white rounded-lg" style="max-width:350px">
          <div class="pb-3 formHeading text-center font-weight-bold">Talk to our Expert</div>
          <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value" density="compact"
            counter="40" class="my-2" label="Name*" variant="outlined"></v-text-field>

          <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value" density="compact"
            counter="10" class="my-2" label="Whatsapp Number*" variant="outlined"></v-text-field>


          <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" density="compact"
            counter="30" class="my-2" label="Email*" variant="outlined"></v-text-field>

          <v-textarea v-model="enquiryMessage.value.value" :error-messages="enquiryMessage.errorMessage.value" rows="3"
            counter="40" density="compact" label="Enquiry Message" variant="outlined"></v-textarea>

          <small>*indicates required field</small>

          <v-sheet class="d-flex flex-column justify-center align-center">
            <v-btn type="submit" variant="flat" color="pink-darken-2" width="300px" class="my-2"
              @click.prevent="callWhatsappCloudApi" :loading="byfcLoader">
              book free consultation
            </v-btn>
            <p class="caption"><span class="text-red">* </span>By submitting this form, I confirm that I have read and
              agreed to accept Checked Spot's <RouterLink to="/privacypolicy">privacy policy</RouterLink>
            </p>
          </v-sheet>
        </form>
      </v-col>
    </v-row>
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
//@ts-ignore
import api from "@/data/api/index.js";

const dialog = ref(false);
const gyqnLoader = ref(false);
const byfcLoader = ref(false);
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
  byfcLoader.value = true;
  dialog.value = false;

  api?.user?.sendEnquiry({ ...values })
    .then((res: any) => {
      if (res?.data?.status === 200) {
        byfcLoader.value = false;
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
.constructionContainer {
  margin-top: 80px
}

.heading {
  line-height: 53px;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
}

.subHeading {
  font-size: 18px;
  margin-bottom: 40px;
}

.quotationBtn>button {
  margin-top: 20px;
}

.construction {
  height: 543px;
  overflow: hidden
}

.construction>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.formHeading {
  font-size: 36px;
}

.caption {
  font-size: 11px;
}
</style>
