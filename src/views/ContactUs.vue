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
      <v-col cols="12" style="height: 306px">
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

  <!-- Second Section - Visit our Offices AND Get in Touch Form -->
  <v-container fluid class="px-0 px-md-5 mt-0 px-sm-10">
    <v-row no-gutters class="pa-0 d-flex flex-column flex-md-row">
      <!-- Visit our Offices -->
      <v-col
        cols="12"
        md="6"
        class="cardsContainer pa-10 mb-5 position-relative d-flex flex-column justify-start align-center"
      >
        <div class="text-h4 text-center mb-7 text-none text-md-block">
          Visit Our Offices
        </div>

        <div class="position-relative cardsSubContainer">
          <v-btn
            id="leftBtn"
            color="#EBEBEB"
            elevation="4"
            icon="mdi-arrow-left"
            size="large"
            @click="handleLeftBtnClick"
          ></v-btn>
          <v-btn
            id="rightBtn"
            color="#EBEBEB"
            elevation="4"
            icon="mdi-arrow-right"
            size="large"
            @click="handleRightBtnClick"
          ></v-btn>

          <!-- Bengaluru Card -->
          <v-card
            v-for="office in visitOfficeCards"
            :key="office.locationName"
            :id="office.id"
            elevation="8"
            position="relative"
            class="mb-4 pa-4 rounded-lg"
            :class="[office.isActive ? 'activeCard' : 'inactiveCard']"
          >
            <v-parallax
              :src="office.images[0]"
              position="relative"
              cover
              class="hoverPointer rounded parallaxImage"
            >
            </v-parallax>

            <div class="d-flex flex-column justify-space-between cardContent">
              <div>
                <!-- Location name -->
                <p
                  class="my-3 font-weight-medium"
                  :class="[
                    office.isActive ? 'activeCardText' : 'inactiveCardText',
                  ]"
                >
                  {{ office.locationName }}
                </p>

                <!-- Contact Number -->
                <div class="d-flex my-3">
                  <v-icon
                    class="mt-1"
                    color="pink-darken-2"
                    size="18"
                    icon="mdi-phone"
                  ></v-icon>
                  <p
                    :class="[
                      office.isActive ? 'activeCardText' : 'inactiveCardText',
                      'pl-3',
                    ]"
                  >
                    {{ office.mobile }}
                  </p>
                </div>

                <!-- Email -->
                <div class="d-flex my-3">
                  <v-icon
                    class="mt-1"
                    color="pink-darken-2"
                    size="18"
                    icon="mdi-email"
                  ></v-icon>
                  <p
                    :class="[
                      office.isActive ? 'activeCardText' : 'inactiveCardText ',
                      'pl-3',
                    ]"
                  >
                    {{ office.email }}
                  </p>
                </div>

                <!-- Office Address -->
                <div class="d-flex my-3">
                  <v-icon
                    class="mt-1"
                    color="pink-darken-2"
                    size="18"
                    icon="mdi-map-marker"
                  ></v-icon>
                  <p
                    :class="[
                      office.isActive ? 'activeCardText' : 'inactiveCardText',
                      'pl-3',
                    ]"
                  >
                    {{ office.address }}
                  </p>
                </div>
              </div>

              <div>
                <v-card-actions class="pa-0">
                  <v-btn
                    block
                    class="text-none"
                    :disabled="!office.isActive"
                    :id="[
                      office.isActive
                        ? 'activeViewMapBtn'
                        : 'inactiveViewMapBtn',
                    ]"
                    variant="outlined"
                    color="#C2185B"
                    prepend-icon="mdi-navigation-variant"
                    @click.prevent.stop="office.dialog = !office.dialog"
                    >View Map</v-btn
                  >
                </v-card-actions>
              </div>
            </div>

            <v-dialog
              v-model="office.dialog"
              transition="dialog-bottom-transition"
              width="70%"
            >
              <v-card class="rounded-xl pa-5">
                <v-card-title class="pt-0"
                  >Checked Spot -
                  {{ office.locationName }} location</v-card-title
                >
                <v-btn
                  icon="mdi-close"
                  size="small"
                  color="red"
                  @click="office.dialog = false"
                  style="position: absolute; right: 10px; top: 10px"
                ></v-btn>
                <iframe
                  :src="office.map"
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
        </div>
      </v-col>

      <!-- Contanct us Form -->
      <v-col
        cols="12"
        md="6"
        class="px-5 mt-n4 formCardCont d-flex justify-center align-start"
      >
        <div class="mx-2 rounded-xl formCard text-white" color="">
          <p class="pa-3 pl-2 pb-2 pt-0 text-h5 text-sm-h4 font-weight-medium">
            Get in touch
          </p>
          <p class="pa-3 pl-2 pt-0 mb-3 text-h6 font-weight-medium">
            Send Enquiry to Checked Spot
          </p>
          <form>
            <p class="text-body-3 ml-2 mb-2">Name*</p>
            <v-text-field
              v-model="name.value.value"
              density="comfortable"
              bg-color="white"
              variant="filled"
              class="ma-2"
              counter="40"
              placeholder="Devid johnson"
            ></v-text-field>

            <p class="text-body-3 ml-2 mb-2">Phone Number*</p>
            <v-text-field
              v-model="mobile.value.value"
              density="comfortable"
              bg-color="white"
              variant="filled"
              class="ma-2"
              counter="10"
              placeholder="9567676767"
            ></v-text-field>

            <p class="text-body-3 ml-2 mb-2">Email*</p>
            <v-text-field
              v-model="email.value.value"
              density="comfortable"
              bg-color="white"
              variant="filled"
              class="ma-2"
              counter="30"
              placeholder="abc@gmail.com"
            ></v-text-field>

            <p class="text-body-3 ml-2 mb-2">Message</p>
            <v-textarea
              v-model="enquiryMessage.value.value"
              counter="750"
              density="comfortable"
              bg-color="white"
              variant="filled"
              class="mx-2"
              rows="3"
              placeholder="Leave us a message..."
            ></v-textarea>

            <v-checkbox
              class="acceptCheckbox mb-4 ml-2"
              density="comfortable"
              v-model="acceptpolicy.value.value"
              :error-messages="acceptpolicy.errorMessage.value"
              :true-value="true"
              :false-value="false"
              label="You agree to our friendly privacy policy."
            >
              <!-- <template v-slot:label>
                You agree to our friendly&nbsp;
                <a href="/termsofservices">terms & conditions</a>
                &nbsp;and&nbsp; <a to="/privacypolicy">privacy policy</a>*
              </template> -->
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

    <!-- Our Social Media -->
    <v-row no-gutters>
      <v-col cols="12" class="my-6 text-h4 text-center text-md-left"
        >Our Social Media Platforms</v-col
      >
      <v-col cols="12" class="mt-10 mb-15">
        <div class="d-flex justify-center align-center flex-wrap">
          <div
            class="socialContainer mx-6 my-4 d-flex flex-column justify-center align-center"
            v-for="social in socials"
            :key="social.id"
          >
            <img
              :src="social.logo"
              alt="Instagram logo"
              class="socialLogo"
              style="height: 95px; width: 95px"
            />
            <span class="socialUserId" :id="social.id">{{
              social.userId
            }}</span>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="alert" width="auto">
      <v-card
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="alert = false"></v-btn>
        </template>
        <template v-slot:title>
          <div class="text-h4 font-weight-bold">Warning</div>
        </template>

        <v-divider></v-divider>

        <div class="pa-10 text-center">
          <v-icon
            class="mb-6"
            color="amber"
            icon="mdi-alert"
            size="100"
          ></v-icon>

          <div class="text-h5">
            Name, Mobile number, Email are mandatory fields. Please fill these
            fields to send message!!!
          </div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            rounded
            variant="outlined"
            @click="alert = false"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useField, useForm } from "vee-validate";
//@ts-ignore
import api from "@/data/api/index.js";
import bangaloreImage from "@/assets/bengaluru.jpg";
import instagramlogo from "@/assets/contactus/instagram.jpg";
import facebooklogo from "@/assets/contactus/fb.jpg";
import linkedinlogo from "@/assets/contactus/linkedin.jpg";
import twitterlogo from "@/assets/contactus/x.jpg";
import whatsapplogo from "@/assets/contactus/whatsapp.jpg";

const dialog = ref(false);
const alert = ref(false);
//form validation
const { meta, handleSubmit, handleReset } = useForm({
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

const visitOfficeCards = ref([
  {
    id: "bengaluruCard",
    locationName: "Bengaluru",
    mobile: "9606937471",
    email: "info@checkedspot.com",
    address:
      "299, Main Road, 1st Block, Rahmath Nagar, RT Nagar, Bengaluru, Karnataka 560032",
    images: [bangaloreImage],
    isActive: true,
    dialog: false,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62196.23239355108!2d77.54196080038798!3d13.018819600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176833e3bcd1%3A0x488afbbb30c99b24!2sChecked%20Spot!5e0!3m2!1sen!2sin!4v1714024279303!5m2!1sen!2sin",
  },
  {
    id: "hassanCard",
    locationName: "Hassan",
    mobile: "9606937470",
    email: "info@checkedspot.com",
    address:
      "1st floor - Above Queens Collection, Subhash Square, Hassan - 573201",
    images: ["https://checkedspot.blob.core.windows.net/assets/hassan.jpg"],
    isActive: false,
    dialog: false,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.508034507226!2d76.09645737328087!3d13.003287314186364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5494763b45ee3%3A0xba5c2c3355965317!2sChecked%20Spot!5e0!3m2!1sen!2sin!4v1716197788679!5m2!1sen!2sin",
  },
]);
const activeIndex = ref(0);

const socials = ref([
  {
    id: "instagram",
    logo: instagramlogo,
    userId: "@checkedspot",
    followUrl: "",
    actionBtn: "follow",
  },
  {
    id: "facebook",
    logo: facebooklogo,
    userId: "@checkedspot",
    followUrl: "",
    actionBtn: "follow",
  },
  {
    id: "linkedin",
    logo: linkedinlogo,
    userId: "@checkedspot",
    followUrl: "",
    actionBtn: "follow",
  },
  {
    id: "twitter",
    logo: twitterlogo,
    userId: "@checked_spot",
    followUrl: "",
    actionBtn: "follow",
  },
  {
    id: "whatsapp",
    logo: whatsapplogo,
    userId: "Join Community",
    followUrl: "",
    actionBtn: "click to join",
  },
]);

const name = useField("name");
const email = useField("email");
const mobile = useField("mobile");
const enquiryMessage = useField("enquiryMessage");
const acceptpolicy = useField("acceptpolicy");
acceptpolicy.value.value = true;

async function onSuccess(values: any) {
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
}

function onInvalidSubmit(invalidData: any) {
  alert.value = true;
  console.log("meta : ", meta.value);
  console.log(invalidData?.values); // current form values
  console.log(invalidData?.errors); // a map of field names and their first error message
  console.log(invalidData?.results); // a detailed map of field names and their validation results
}

const callWhatsappCloudApi = handleSubmit(onSuccess, onInvalidSubmit);

function handleLeftBtnClick() {
  const lastActiveIndex = activeIndex.value;
  if (activeIndex.value === 0) {
    activeIndex.value = visitOfficeCards.value.length - 1;
  } else {
    activeIndex.value -= 1;
  }
  // set isActive Value to false for last Active active Office Card
  visitOfficeCards.value[lastActiveIndex].isActive = false;
  visitOfficeCards.value[activeIndex.value].isActive = true;
}

function handleRightBtnClick() {
  const lastActiveIndex = activeIndex.value;
  if (activeIndex.value === visitOfficeCards.value.length - 1) {
    activeIndex.value = 0;
  } else {
    activeIndex.value += 1;
  }
  // set isActive Value to false for last Active active Office Card
  visitOfficeCards.value[lastActiveIndex].isActive = false;

  visitOfficeCards.value[activeIndex.value].isActive = true;
}

// function redirectToWhatsAppGroup() {
//   // Construct the API link
//   var whatsappGroupLink =
//     "https://wa.me/<phone_number_or_group_id>?text=<encoded_message>";

//   // Redirect the user to the WhatsApp group
//   window.location.href = whatsappGroupLink;
// }

onMounted(() => {});
</script>

<style scoped>
#leftBtn {
  position: absolute;
  top: 240px;
  left: -70px;
  z-index: 1;
}
#rightBtn {
  position: absolute;
  top: 240px;
  right: -70px;
  z-index: 1;
}

.parallaxImage {
  width: 100%;
  height: 47%;
}
.cardContent {
  width: 100%;
  height: 53%;
}

.activeCard {
  position: relative;
  width: 350px;
  height: 538px;
  opacity: 1;
}
.activeCardText {
  font-size: 16px;
}
#activeViewMapBtn {
  border: solid 2px;
  font-size: 16px;
}
.inactiveCard {
  width: 200px;
  height: 388px;
  opacity: 0.4;
  position: absolute;
  top: 70px;
  right: -231px;
}
.inactiveCardText {
  font-size: 10px;
}
#inactiveViewMapBtn {
  border: solid 2px;
  font-size: 10px;
  margin-top: -20px;
  height: 25px;
}

.acceptCheckbox a {
  color: #f5005696 !important;
}
.acceptCheckbox a:hover {
  text-decoration: underline;
}

.acceptCheckboxlabel {
  height: auto !important;
}

.formCard {
  padding: 50px 50px !important;
  width: 588px;
  z-index: 1;
  background: url("../assets/contactus/phoneHolding.jpg");
  background-size: cover;
}

.cardsSubContainer {
  width: 350px;
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

.socialContainer:hover {
  cursor: pointer;
}

.socialLogo {
  width: 95px;
  height: 95px;
}
.socialUserId {
  margin-top: 24px;
  color: white;
  padding: 5px 15px;
  border-radius: 12px;
}

#instagram {
  background: rgba(205, 57, 162, 1);
  background: linear-gradient(
    25deg,
    rgba(255, 207, 83, 1) 0%,
    rgba(255, 86, 62, 1) 50%,
    rgba(205, 57, 162, 1) 100%
  );
}
#facebook {
  background: rgba(40, 128, 243, 1);
  background: linear-gradient(
    43deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(40, 128, 243, 1) 35%,
    rgba(24, 119, 242, 1) 100%
  );
}
#linkedin {
  background: rgba(0, 119, 181, 1);
  background: linear-gradient(
    43deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 119, 181, 1) 35%
  );
}
#twitter {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    43deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 35%
  );
}
#whatsapp {
  background: rgb(78, 171, 82, 1);
  background: linear-gradient(
    43deg,
    rgba(195, 224, 196, 1) 0%,
    rgba(78, 171, 82, 1) 51%
  );
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

  #leftBtn {
    left: -50px;
    width: 40px;
    height: 40px;
  }
  #rightBtn {
    right: -50px;
    width: 40px;
    height: 40px;
  }
  .cardsSubContainer {
    width: 250px;
  }
  .activeCard {
    position: relative;
    width: 250px;
  }

  .inactiveCard {
    width: 150px;
    top: 70px;
    right: -180px;
  }

  .formCard {
    width: 400px;
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
  .cardsContainer {
    overflow: hidden;
  }
}
</style> 