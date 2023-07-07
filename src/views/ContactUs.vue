<template>
  <v-expand-transition>
    <v-card style="position: fixed; top: 63px; z-index: 1" v-show="expandFailure" height="60" width="100%"
      class="mx-auto bg-red">
      <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
        <h5>Message delivery Failed. Please try again!</h5>
      </div>
    </v-card>
  </v-expand-transition>
  <v-expand-transition>
    <v-card style="position: fixed; top: 63px; z-index: 1" v-show="expandSuccess" height="60" width="100%"
      class="mx-auto bg-green">
      <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
        <h5>
          Message has been delivered. Checkedspot Team will contact you soon.
        </h5>
      </div>
    </v-card>
  </v-expand-transition>

  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <v-col cols="12" md="7" class="px-4 mb-10 mt-5">
        <h1 class="text-h3 text-sm-h2 font-weight-bold text-center">
          Contact Us
        </h1>
      </v-col>

      <v-col cols="12" md="7" class="px-4">
        <v-card v-for="(item, index) in items" :key="index" class="mx-auto rounded-0 mb-10" elevation="0" border
          max-width="100%">
          <template>
            <v-progress-linear color="deep-purple" height="4" indeterminate></v-progress-linear>
          </template>

          <v-parallax :src="item.parallaxSrc" class="parallax">
            <div class="h-75 d-flex flex-column justify-center align-center text-white parallaxMask">
              <p class="text-h4 text-sm-h3 font-weight-regular pt-10 text-center" title="Checked Spot - Bangalore">Checked
                Spot - {{ item.name }}</p>
            </div>

            <v-row class="mx-0 mt-0 px-6 pb-4 d-flex justify-space-between align-end parallaxMask"
              style="height: calc(100% - 75%);">
              <div class="d-flex justify-start align-center">
                <v-rating class="lg" :model-value="item.rating" color="amber" density="compact" half-increments readonly
                  size="large"></v-rating>
                <v-rating class="sm" :model-value="item.rating" color="amber" density="compact" half-increments readonly
                  size="small"></v-rating>
                <span class="ml-4 mt-1 text-body-1 text-sm-h6 text-white">{{ item.rating }} ({{ item.noOfRating }})</span>
              </div>

              <div>
                <v-icon class="lg" color="pink-darken-2" icon="mdi-fire-circle" size="30"></v-icon>
                <v-icon class="sm" color="pink-darken-2" icon="mdi-fire-circle" size="25"></v-icon>
              </div>
            </v-row>
          </v-parallax>

          <v-card-text class="px-0 pl-3">
            <h3 class="mt-2 mb-3 pl-3 text-h6 text-sm-h5 font-weight-bold">Reach Us At</h3>
            <div class="contact">
              <v-btn size="large" class="mt-n1" variant="text" icon="mdi-phone" color="pink-darken-2"></v-btn>
              <p v-for="(number, i) in item.mobiles" :key="i" class="d-inline contactinfo">{{ number }}</p>
            </div>

            <div class="email pt-2 d-flex align-start">
              <div>
                <v-btn size="large" variant="text" icon="mdi-email" color="pink-darken-2"></v-btn>
              </div>
              <div>
                <a v-for="(email, i) in item.email" :key="i" class="contactinfo" :href="`mailto:${email}`">{{ email }}
                </a>
              </div>
            </div>

            <div class="contactinfo pt-2 address d-flex align-start">
              <div>
                <v-btn size="large" variant="text" icon="mdi-office-building-marker-outline"
                  color="pink-darken-2"></v-btn>
              </div>
              <div>
                {{ item.address }}
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="5" class="px-4 pr-6 mb-10 formCont">
        <v-card class="ma-2 pt-3 pb-6 elevation-0 card" width="100%">
          <div class="pa-3 text-h6 text-sm-h5 font-weight-medium">Send Enquiry to Checked Spot</div>
          <form>
            <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value" density="compact"
              class="ma-2" counter="40" label="Name" variant="outlined"></v-text-field>

            <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value" density="compact"
              class="ma-2" counter="10" label="Whatsapp Number" variant="outlined"></v-text-field>

            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" density="compact"
              class="ma-2" counter="30" label="Email" variant="outlined"></v-text-field>

            <v-textarea v-model="enquiryMessage.value.value" :error-messages="enquiryMessage.errorMessage.value"
              counter="750" density="compact" class="mx-2" rows="2" label="Enquiry Message"
              variant="outlined"></v-textarea>

            <v-sheet class="d-flex flex-column justify-center align-center bg-transparent">
              <v-btn type="submit" variant="elevated" density="default" elevation="5" width="280px"
                class="my-1 mb-2 text-green" @click.prevent="callWhatsappCloudApi">
                <v-icon color="green" icon="mdi-whatsapp"></v-icon>&nbsp; Contact us on Whatsapp
              </v-btn>
              <v-btn @click.prevent="handleReset" density="default" variant="elevated" elevation="4" color="red-darken-1" width="280px"
                class="my-1">
                Reset Form
              </v-btn>
            </v-sheet>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useField, useForm } from "vee-validate";
//@ts-ignore
import api from "@/data/api/index.js";
import bangaloreImage from '@/assets/bengaluru.jpg';
import mysoreImage from '@/assets/mysorePalace.jpg';
import sakleshpurImage from '@/assets/sakleshpur.jpg';
import tumkurImage from '@/assets/tumkurCentralLibrary.jpg';

const items = reactive([
  {
    parallaxSrc: bangaloreImage,
    name: "Bangalore",
    rating: 4.9,
    noOfRating: 413,
    mobiles: ["9606937470, ", "9606937471"],
    email: ['info@checkedspot.com'],
    address: "1st floor - Next To Fame Diagnostics - RK Hegde Nagar, Bangalore - 560077"
  },
  {
    parallaxSrc: "https://checkedspot.blob.core.windows.net/assets/hassan.jpg",
    name: "Hassan",
    rating: 4.9,
    noOfRating: 413,
    mobiles: ["9606937470"],
    email: ['info@checkedspot.com'],
    address: "1st floor - Above Queens Collection, Subhash Square, Hassan - 573201"
  },
  {
    parallaxSrc: mysoreImage,
    name: "Mysore",
    rating: 4.9,
    noOfRating: 413,
    mobiles: ["9606937470"],
    email: ['info@checkedspot.com'],
    address: "Mysore - Mysore"
  },
  {
    parallaxSrc: sakleshpurImage,
    name: "Sakleshpur",
    rating: 4.9,
    noOfRating: 413,
    mobiles: ["9606937470"],
    email: ['info@checkedspot.com'],
    address: "Sakleshpur - 573134"
  },
  {
    parallaxSrc: tumkurImage,
    name: "Tumkur",
    rating: 4.9,
    noOfRating: 413,
    mobiles: ["9606937470"],
    email: ['info@checkedspot.com'],
    address: "Tumkur - 572101"
  }
])

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
      if (value?.length > 750) {
        return "Please wrap you message in 750 characters";
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

  api?.user
    ?.sendEnquiry({ ...values })
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
});
</script>

<style scoped>
.parallax {
  height: 300px;
}

.parallaxMask {
  background-color: rgba(0, 0, 0, 0.25);
}

a {
  color: black !important;
  text-decoration: none;
}

.contactinfo {
  font-size: 18px;
}

.email>div>button,
.contactinfo>div>button {
  margin-top: -18px;
}

.formCont {
  position: fixed;
  right: 0;
  height: calc(100% - 64px);
  overflow-y: scroll;
  overflow-x: hidden; 

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.formCont::-webkit-scrollbar {
  display: none;
}

.formCont > .card {
  border: 1px solid rgb(246, 48, 94, 0.171);
  background-color: rgba(246, 48, 94, 0.05);  
  padding-left: 20px; 
  padding-right: 20px;
}


@media only screen and (max-width: 599px) {
  .lg {
    display: none;
  }

  .sm {
    display: block;
  }

  .contactinfo {
    font-size: 16px;
  }

  .formCont {
    position: static;
  }
}

@media only screen and (min-width: 600px) {
  .lg {
    display: block;
  }

  .sm {
    display: none;
  }
}

@media only screen and (max-width: 959px) {
  .formCont {
    position: relative;
    height: auto;
  }
}

</style> 