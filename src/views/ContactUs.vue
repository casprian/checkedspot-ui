<template>
  <v-expand-transition>
    <v-card
      style="position: fixed; top: 56px; left: 0; z-index: 1"
      v-show="expandFailure"
      height="60"
      width="100%"
      class="mx-auto bg-red"
    >
      <div
        style="height: 100%"
        class="text-h5 text-center d-flex align-center justify-center"
      >
        <h5>Message delivery Failed. Please try again!</h5>
      </div>
    </v-card>
  </v-expand-transition>
  <v-expand-transition>
    <v-card
      style="position: fixed; top: 56px; left: 0; z-index: 1"
      v-show="expandSuccess"
      height="60"
      width="100%"
      class="mx-auto bg-green"
    >
      <div
        style="height: 100%"
        class="text-h5 text-center d-flex align-center justify-center"
      >
        <h5>
          Message has been delivered. Checked Spot Team will contact you soon.
        </h5>
      </div>
    </v-card>
  </v-expand-transition>

  <v-container class="pa-0 bg-background" fluid>
    <!-- First/Top Section google map Iframe -->
    <v-row no-gutters>
      <v-col cols="12" style="height: 400px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62196.23239355108!2d77.54196080038798!3d13.018819600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176833e3bcd1%3A0x488afbbb30c99b24!2sChecked%20Spot!5e0!3m2!1sen!2sin!4v1714024279303!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>

  <!-- Second Section - Get in Touch Form -->
  <v-container fluid class="px-5 mt-0 px-sm-10">
    <v-row
      no-gutters
      class="pa-0 py-5 d-flex flex-column flex-column-reverse flex-md-row"
    >
      <v-col
        cols="12"
        md="6"
        class="pa-10 socialmedia d-flex flex-column justify-center align-center"
      >
        <p class="text-h5 text-sm-h2 font-weight-bold text-white socialText">Social</p>
        <!-- Facebook Card -->
        <span class="pa-3">
          <v-card color="" class="pa-5 socialCardCont rounded-lg d-flex flex-column justify-center align-start" width="300" height="200">
            <img class="socialIcon" src="../assets/contactus/facebooklogo.png" alt="Facebook Logo" style="width:30px;height:30px;" >

            <div class="my-2 d-flex justify-center align-center" style="width: 100%;">
              <v-sheet width="100" height="100" class="rounded-circle border-lg">
                <img class="socialmediaprofilepic" src="../assets/socialMediaProfilePic.png" alt="Checked spot facebook handle">
              </v-sheet>
              <div class="px-4">
                <p class="font-weight-medium pb-2">Checked Spot</p>
                <a href="https://www.facebook.com/profile.php?id=100087798638318" target="_blank">
                  <v-btn class="rounded-pill" variant="elevated" elevation="8" color="blue-darken-3">Follow</v-btn>
                </a>
              </div>
            </div>
          </v-card>
        </span>
        
        <!-- instagram Card -->
        <span class="pa-3">
          <v-card color="" class="pa-5 socialCardCont rounded-lg d-flex flex-column justify-center align-start" width="300" height="200">
            <img class="socialIcon" src="../assets/contactus/instagramlogo.jpg" alt="Instagram Logo" style="width:40px;height:40px;" >

            <div class="my-2 d-flex justify-center align-center" style="width: 100%;">
              <v-sheet width="100" height="100" class="rounded-circle border-lg">
                <img class="socialmediaprofilepic" src="../assets/socialMediaProfilePic.png" alt="Checked spot instagram handle">
              </v-sheet>
              <div class="px-4">
                <p class="font-weight-medium pb-2">checkedspot</p>
                <a href="https://www.instagram.com/checkedspot" target="_blank">
                  <v-btn class="rounded-pill" variant="elevated" elevation="8" color="#df1537">Follow</v-btn>
                </a>
              </div>
            </div>
          </v-card>
        </span>

        <!-- Twitter Card -->
        <span class="pa-3">
          <v-card color="" class="pa-5 socialCardCont rounded-lg d-flex flex-column justify-center align-start" width="300" height="200">
            <img class="socialIcon" src="../assets/contactus/twitterlogo.jpg" alt="Twitter/X Logo" style="width:30px;height:30px;" >

            <div class="my-2 d-flex justify-center align-center" style="width: 100%;">
              <v-sheet width="100" height="100" class="rounded-circle border-lg">
                <img class="socialmediaprofilepic" src="../assets/socialMediaProfilePic.png" alt="Checked spot twitter/X handle">
              </v-sheet>
              <div class="px-4">
                <p class="font-weight-medium pb-2">@checked_spot</p>
                <a href="https://twitter.com/checked_spot" target="_blank">
                  <v-btn class="rounded-pill" variant="elevated" elevation="8" color="black">Follow</v-btn>
                </a>
              </div>
            </div>
          </v-card>
        </span>
      </v-col>
      
      <!-- Contanct us Form -->
      <v-col
        cols="12"
        md="6"
        class="pa-5 py-0 formCardCont d-flex justify-center align-center"
      >
        <div class="ma-2 pa-5 rounded-xl formCard" color="">
          <p class="pa-3 pb-3 pt-0 text-h5 text-sm-h4 font-weight-medium">
            Get in touch
          </p>
          <p class="pa-3 pt-0 mb-8 text-body-1 font-weight-regular">
            Send Enquiry to Checked Spot
          </p>
          <form>
            <v-text-field
              v-model="name.value.value"
              :error-messages="name.errorMessage.value"
              density="comfortable"
              class="ma-2"
              counter="40"
              label="Name*"
              variant="outlined"
            ></v-text-field>

            <v-text-field
              v-model="mobile.value.value"
              :error-messages="mobile.errorMessage.value"
              density="comfortable"
              class="ma-2"
              counter="10"
              label="Whatsapp Number*"
              variant="outlined"
            ></v-text-field>

            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              density="comfortable"
              class="ma-2"
              counter="30"
              label="Email*"
              variant="outlined"
            ></v-text-field>

            <v-textarea
              v-model="enquiryMessage.value.value"
              :error-messages="enquiryMessage.errorMessage.value"
              counter="750"
              density="comfortable"
              class="mx-2"
              rows="2"
              label="Enquiry Message"
              variant="outlined"
            ></v-textarea>

            <v-checkbox
              class="acceptCheckbox mb-4 ml-2"
              density="comfortable"
              v-model="acceptpolicy.value.value"
              :error-messages="acceptpolicy.errorMessage.value"
              :true-value="true"
              :false-value="false"
            >
              <template v-slot:label>
                You agree to our friendly&nbsp;
                <a href="/termsofservices">terms & conditions</a>
                &nbsp;and&nbsp; <a to="/privacypolicy">privacy policy</a>*
              </template>
            </v-checkbox>

            <div
              class="d-flex flex-column justify-center align-center bg-transparent"
            >
              <v-btn
                type="submit"
                variant="elevated"
                density="default"
                elevation="1"
                color="#C2185B"
                width="100%"
                class="mb-1 text-none text-body-1"
                @click.prevent="callWhatsappCloudApi"
              >
                Send message
              </v-btn>

              <v-btn
                @click.prevent="handleReset"
                density="default"
                variant="elevated"
                color="grey-lighten-3"
                elevation="2"
                width="100%"
                class="mb-6 mt-3"
              >
                Reset Form
              </v-btn>

              <div class="d-flex justify-end w-100">
                <v-btn
                  type="submit"
                  variant="elevated"
                  density="default"
                  elevation="1"
                  width="280px"
                  class="my-1 mb-2 text-none text-body-2 whatsappMsgBtn"
                  @click.prevent="callWhatsappCloudApi"
                >
                  <v-icon class="whatsappIcon" icon="mdi-whatsapp"></v-icon
                  >&nbsp; Contact us on Whatsapp
                </v-btn>
              </div>
            </div>
          </form>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- Office location card -->
  <v-container fluid class="px-5 px-sm-10">
    <v-row no-gutters class="pa-0">
      <v-col cols="12" class="pa-0 pl-5 text-h5 text-sm-h4 font-weight-medium">
        Visit our offices
      </v-col>
      <!-- Bangaluru location-->
      <v-col cols="12" sm="6" md="4" class="mt-4 pa-5">
        <v-card
          class="mb-4 pa-4"
          elevation="8"
          width="100%"
          height="472"
          position="relative"
        >
          <v-parallax
            :src="bangaloreImage"
            height="197"
            width="100%"
            position="relative"
            cover
            class="hoverPointer"
          >
          </v-parallax>

          <div
            class="d-flex flex-column justify-space-between"
            style="height: calc(100% - 197px)"
          >
            <div>
              <!-- Location name -->
              <p class="my-3 text-body-1 font-weight-medium">Bengaluru</p>

              <!-- Contact Number -->
              <div class="d-flex my-2">
                <v-icon
                  class="mt-1"
                  color="pink-darken-2"
                  size="18"
                  icon="mdi-phone"
                ></v-icon>
                <p class="text-body-1 pl-3">9606937471</p>
              </div>

              <!-- Email -->
              <div class="d-flex my-2">
                <v-icon
                  class="mt-1"
                  color="pink-darken-2"
                  size="18"
                  icon="mdi-email"
                ></v-icon>
                <p class="text-body-1 pl-3">info@checkedspot.com</p>
              </div>

              <!-- Office Address -->
              <div class="d-flex my-2">
                <v-icon
                  class="mt-1"
                  color="pink-darken-2"
                  size="18"
                  icon="mdi-map-marker"
                ></v-icon>
                <p class="text-body-1 pl-3">
                  299, Main Road, 1st Block, Rahmath Nagar, RT Nagar, Bengaluru,
                  Karnataka 560032
                </p>
              </div>
            </div>
            <div>
              <v-card-actions class="sendEnquiry">
                <v-btn
                  block
                  variant="outlined"
                  color="#C2185B"
                  prepend-icon="mdi-navigation-variant"
                  @click.prevent.stop="
                    bangaloreLocationDialog = !bangaloreLocationDialog
                  "
                  >View Map</v-btn
                >
              </v-card-actions>
            </div>
          </div>
          <v-dialog
            v-model="bangaloreLocationDialog"
            transition="dialog-bottom-transition"
            width="70%"
          >
            <v-card class="rounded-xl pa-5">
              <v-card-title class="pt-0"
                >Checked Spot - Bengaluru location</v-card-title
              >
              <v-btn
                icon="mdi-close"
                size="small"
                color="red"
                @click="bangaloreLocationDialog = false"
                style="position: absolute; right: 10px; top: 10px"
              ></v-btn>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62196.23239355108!2d77.54196080038798!3d13.018819600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176833e3bcd1%3A0x488afbbb30c99b24!2sChecked%20Spot!5e0!3m2!1sen!2sin!4v1714024279303!5m2!1sen!2sin"
                width="100%"
                height="400"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>

      <!-- Hassan location-->
      <v-col cols="12" sm="6" md="4" class="mt-4 pa-5">
        <v-card
          class="mb-4 pa-4"
          elevation="8"
          width="100%"
          height="472"
          position="relative"
        >
          <v-parallax
            src="https://checkedspot.blob.core.windows.net/assets/hassan.jpg"
            height="197"
            width="100%"
            position="relative"
            cover
            class="hoverPointer"
          >
          </v-parallax>

          <div
            class="d-flex flex-column justify-space-between"
            style="height: calc(100% - 197px)"
          >
            <div>
              <!-- Location name -->
              <p class="my-3 text-body-1 font-weight-medium">Hassan</p>

              <!-- Contact Number -->
              <div class="d-flex my-2">
                <v-icon
                  class="mt-1"
                  color="pink-darken-2"
                  size="18"
                  icon="mdi-phone"
                ></v-icon>
                <p class="text-body-1 pl-3">9606937470</p>
              </div>

              <!-- Email -->
              <div class="d-flex my-2">
                <v-icon
                  class="mt-1"
                  color="pink-darken-2"
                  size="18"
                  icon="mdi-email"
                ></v-icon>
                <p class="text-body-1 pl-3">info@checkedspot.com</p>
              </div>

              <!-- Office Address -->
              <div class="d-flex my-2">
                <v-icon
                  class="mt-1"
                  color="pink-darken-2"
                  size="18"
                  icon="mdi-map-marker"
                ></v-icon>
                <p class="text-body-1 pl-3">
                  Bangalore - Mangalore Rd, Ammeer Mohalla, Hassan, Karnataka
                  573201
                </p>
              </div>
            </div>

            <div>
              <v-card-actions class="sendEnquiry">
                <v-btn
                  block
                  variant="outlined"
                  color="#C2185B"
                  prepend-icon="mdi-navigation-variant"
                  @click.prevent.stop="
                    hassanLocationDialog = !hassanLocationDialog
                  "
                  >View Map</v-btn
                >
              </v-card-actions>
            </div>
          </div>
          <v-dialog
            v-model="hassanLocationDialog"
            transition="dialog-bottom-transition"
            width="70%"
          >
            <v-card class="rounded-xl pa-5">
              <v-card-title class="pt-0"
                >Checked Spot - Hassan location</v-card-title
              >
              <v-btn
                icon="mdi-close"
                size="small"
                color="red"
                @click="hassanLocationDialog = false"
                style="position: absolute; right: 10px; top: 10px"
              ></v-btn>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.508034507226!2d76.0964573732809!3d13.003287314186373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5494763b45ee3%3A0xba5c2c3355965317!2sChecked%20Spot!5e0!3m2!1sen!2sin!4v1714037530584!5m2!1sen!2sin"
                width="100%"
                height="400"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
//@ts-ignore
import api from "@/data/api/index.js";
import bangaloreImage from "@/assets/bengaluru.jpg";

const dialog = ref(false);
const bangaloreLocationDialog = ref(false);
const hassanLocationDialog = ref(false);
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
    acceptpolicy(value: any) {
      if (value == true) {
        return true;
      } else {
        return "Required! Please accept the terms & conditions and privacy policy";
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
const acceptpolicy = useField("acceptpolicy");
acceptpolicy.value.value = true;

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
.acceptCheckbox a {
  color: #f5005696 !important;
}
.acceptCheckbox a:hover {
  text-decoration: underline;
}

.acceptCheckboxlabel {
  height: auto !important;
}

.socialmedia {
  position: relative;
}

.socialCardCont {
  position: relative;
}

.socialCardCont .socialIcon  {
  position: absolute;
  top: 10px;
  left: 10px;
}

.socialmediaprofilepic {
  width: 95px;
  height: 90px;
  object-fit: cover;
}

.socialText {
  position: absolute;
  left: 0;
  z-index: 1;
  writing-mode: vertical-lr;
  text-orientation: upright;
  height: 100%;
  width: 65px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.408);
  text-transform: capitalize;
}

.formCard {
  width: 600px;
}

@media screen and (max-width: 600px) {
  .formCard {
    width: 400px;
  }
  .socialmedia {
    padding-bottom: 0 !important;
  }
  .socialText {
    position: relative;
    writing-mode: lr;
    height: auto;
    width: 100%;
    justify-content: start;
    margin-bottom: 10px;
    background-color: white;
    color: black !important;
    border-bottom: solid 2px black;
    text-transform: none;
  }
}

.whatsappMsgBtn,
.whatsappIcon {
  color: #00ac11;
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

.email > div > button,
.contactinfo > div > button {
  margin-top: -18px;
}

.formCont {
  position: fixed;
  right: 0;
  height: auto;
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
    position: static;
    height: auto;
  }
}
</style> 