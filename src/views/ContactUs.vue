<template>
  <v-expand-transition>
    <v-card
      style="position: fixed; top: 56px; left: 0; z-index: 100"
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
      style="position: fixed; top: 56px; left: 0; z-index: 100"
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

  <v-container fluid class="pa-0">
    <!-- First Section - Map and contact form -->
    <v-row no-gutters class="firstSection px-4 px-sm-10 px-md-15">
      <!-- Google map For Bengaluru Office Location -->
      <v-col cols="12" sm="6" class="mapContainer">
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

      <!-- Contanct us Form -->
      <v-col
        cols="12"
        sm="6"
        class="pa-0 pl-sm-8 pl-md-15 pt-8 pt-sm-0 formCardContainer d-flex justify-center align-start"
      >
        <div class="formCard">
          <p class="heading">Get in touch</p>
          <p class="subHeading">Send Enquiry to Checked Spot</p>
          <form>
            <p class="inputFieldTitle">Name*</p>
            <v-text-field
              id="name"
              v-model="name.value.value"
              :density="
                screenWidth > 600 && screenWidth < 960
                  ? 'compact'
                  : 'comfortable'
              "
              hint="Name needs to be at least 2 and maximum 40 characters."
              bg-color="white"
              variant="outlined"
              counter="40"
              placeholder="Devid johnson"
            ></v-text-field>

            <p class="inputFieldTitle">Email*</p>
            <v-text-field
              id="email"
              v-model="email.value.value"
              :density="
                screenWidth > 600 && screenWidth < 960
                  ? 'compact'
                  : 'comfortable'
              "
              hint="Must be a valid e-mail. Example: abc@gmail.com"
              bg-color="white"
              variant="outlined"
              placeholder="abc@gmail.com"
            ></v-text-field>

            <p class="inputFieldTitle">Phone Number*</p>
            <v-text-field
              id="mobile"
              v-model="mobile.value.value"
              :density="
                screenWidth > 600 && screenWidth < 960
                  ? 'compact'
                  : 'comfortable'
              "
              hint="Enter 10 digits only."
              bg-color="white"
              variant="outlined"
              counter="10"
              placeholder="9567676767"
            ></v-text-field>

            <p class="inputFieldTitle">Message</p>
            <v-textarea
              id="message"
              v-model="enquiryMessage.value.value"
              counter="750"
              :density="
                screenWidth > 600 && screenWidth < 960
                  ? 'compact'
                  : 'comfortable'
              "
              hint="Please wrap you message in 750 characters."
              bg-color="white"
              variant="outlined"
              rows="3"
              placeholder="Leave us a message..."
            ></v-textarea>

            <v-checkbox
              variant="outlined"
              :density="
                screenWidth > 600 && screenWidth < 960
                  ? 'compact'
                  : 'comfortable'
              "
              v-model="acceptpolicy.value.value"
              :true-value="true"
              :false-value="false"
              label="You agree to our friendly privacy policy."
            >
            </v-checkbox>

            <div
              class="d-flex flex-column justify-center align-start bg-transparent"
            >
              <v-btn
                class="sendMessageBtn text-none"
                type="submit"
                variant="elevated"
                density="default"
                elevation="1"
                color="#C2185B"
                width="100%"
                @click.prevent="callWhatsappCloudApi"
              >
                Send message
              </v-btn>
            </div>
          </form>
        </div>
      </v-col>
    </v-row>

    <!-- Second Section -->
    <v-row no-gutters class="secondSection px-6 px-sm-10 px-md-15">
      <v-col
        cols="12"
        sm="4"
        class="d-flex flex-column justify-center align-start"
      >
        <div class="iconContainer">
          <v-icon icon="mdi-email" color="#C2185B"></v-icon>
        </div>
        <p class="iconType">Email</p>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        class="d-flex flex-column justify-center align-start"
      >
        <div class="iconContainer">
          <v-icon icon="mdi-phone" color="#C2185B"></v-icon>
        </div>
        <p class="iconType">Phone</p>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        class="d-flex flex-column justify-center align-start"
      >
        <div class="iconContainer">
          <v-icon icon="mdi-office-building" color="#C2185B"></v-icon>
        </div>
        <p class="iconType">Head Office</p>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </v-col>
    </v-row>

    <!-- Third Section - Location -->
    <div class="thirdContainer px-4 px-sm-10 px-md-15">
      <p class="text-center locationHeading">Location</p>

      <v-row no-gutters class="d-flex justify-center align-start">
        <!-- Bengaluru Office Card -->
        <v-col
          cols="11"
          sm="5"
          class="pa-0 pb-4 pb-sm-0 pr-sm-2 pr-md-4 locationCardContainer"
        >
          <v-card class="locationCard" elevation="0">
            <v-parallax
              class="parallax"
              src="../assets/contactus/office in bengaluru.png"
              cover
            >
            </v-parallax>

            <div class="d-flex flex-column justify-space-between cardContent">
              <div>
                <p class="locationName text-center">Bengaluru</p>
                <p class="phoneNumber text-center">9606937471</p>
                <p class="address text-center">
                  299, Main Road, 1st Block, Rahmath Nagar, RT Nagar, Bengaluru,
                  Karnataka 560032
                </p>
              </div>

              <div>
                <v-card-actions class="pa-0">
                  <v-btn
                    block
                    class="getDirectionBtn text-none"
                    variant="plain"
                    @click.prevent.stop="handleGMapInDialog('Bengaluru')"
                  >
                    Get Direction
                    <v-icon icon="mdi-arrow-right" color="#C2185B"></v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- Hassan Office Card -->
        <v-col
          cols="11"
          sm="5"
          class="pa-0 pl-sm-2 pl-md-4 locationCardContainer"
        >
          <v-card class="locationCard" elevation="0">
            <v-parallax
              class="parallax"
              src="../assets/contactus/office in Hassan.png"
              cover
            >
            </v-parallax>

            <div class="d-flex flex-column justify-space-between cardContent">
              <div>
                <p class="locationName text-center">Hassan</p>
                <p class="phoneNumber text-center">9606937470</p>
                <p class="address text-center">
                  1st floor - Above Queens Collection, Subhash Square, Hassan -
                  573201
                </p>
              </div>

              <div>
                <v-card-actions class="pa-0">
                  <v-btn
                    block
                    class="getDirectionBtn text-none"
                    variant="plain"
                    @click.prevent.stop="handleGMapInDialog('Hassan')"
                  >
                    Get Direction
                    <v-icon icon="mdi-arrow-right" color="#C2185B"></v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        width="70%"
      >
        <v-card class="rounded-xl pa-5">
          <v-card-title class="pt-0"
            >Checked Spot - {{ location }} location</v-card-title
          >
          <v-btn
            icon="mdi-close"
            size="small"
            color="red"
            @click="dialog = false"
            style="position: absolute; right: 10px; top: 10px"
          ></v-btn>
          <iframe
            :src="mapLink"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-card>
      </v-dialog>
    </div>

    <!-- Fourth Section - CTA -->
    <v-row no-gutters class="pa-0 ma-0 fourthContainer px-4 px-sm-10 px-md-15">
      <v-col cols="12" class="cta">
        <v-row no-gutters class="pl-7 pl-sm-9 pl-md-16">
          <v-col cols="8">
            <p class="ctaStatement">Your Dream Home Awaits - Get Started Now</p>
            <a :href="`tel:${phoneCallhref}`">
              <v-btn class="text-none ctaBtn" color="#C2185B">Call Now</v-btn>
            </a>
          </v-col>
        </v-row>
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
            Name, Mobile number, Email and privacy policy are mandatory fields.
            Please fill these fields to send message!!!
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
import axios from "axios";
//@ts-ignore
import { baseURL } from "@/data/axios/interceptor.js";

const dialog = ref(false);
const alert = ref(false);
const expandSuccess = ref(false);
const expandFailure = ref(false);

const screenWidth = ref(window.innerWidth);
const bengaluruMapLink =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62196.23239355108!2d77.54196080038798!3d13.018819600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176833e3bcd1%3A0x488afbbb30c99b24!2sChecked%20Spot!5e0!3m2!1sen!2sin!4v1714024279303!5m2!1sen!2sin";
const HassanMapLink =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.508034507226!2d76.09645737328087!3d13.003287314186364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5494763b45ee3%3A0xba5c2c3355965317!2sChecked%20Spot!5e0!3m2!1sen!2sin!4v1716197788679!5m2!1sen!2sin";
const mapLink = ref(bengaluruMapLink);
const location = ref("Bengaluru");
const phoneCallhref = ref(0);

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
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
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
          return "Phone number needs to be exactly 10 digits.";
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

function handleGMapInDialog(loc: string) {
  if (loc == "Bengaluru") {
    location.value = "Bengaluru";
    mapLink.value = bengaluruMapLink;
  } else if (loc == "Hassan") {
    location.value = "Hassan";
    mapLink.value = HassanMapLink;
  }
  dialog.value = true;
}

async function getContact() {
  const response = await axios.get(`${baseURL}/contact`);

  const contact = parseInt(response?.data?.contact);
  phoneCallhref.value = contact;
}

onMounted(async () => {
  await getContact();
});
</script>

<style scoped>
/* First Section Starts  */
.firstSection {
  margin-top: 80px !important;
}

.mapContainer > iframe {
  border-radius: 12px;
  min-height: 277px;
}

.formCard {
  padding: 30px 62px 40px 62px;
  background-color: #ffecf4;
  border-radius: 12px;
  width: 100%;
}

.heading {
  line-height: 44px;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
}

.subHeading {
  line-height: 18px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 48px;
}

.inputFieldTitle {
  line-height: 18px;
  font-size: 14px;
  font-weight: 400;
  margin-top: 2px;
  margin-bottom: 6px;
}

.sendMessageBtn {
  line-height: 18px;
  font-size: 16px;
  font-weight: 500;
  height: 42px !important;
  border-radius: 6px;
}

@media only screen and (max-width: 960px) {
  .firstSection {
    margin-top: 40px !important;
  }
  .formCard {
    padding: 20px 40px 25px 40px;
    border-radius: 6px;
  }

  .heading {
    line-height: 22px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .subHeading {
    line-height: 14px;
    font-size: 12px;
    margin-bottom: 24px;
  }

  .inputFieldTitle {
    line-height: 14px;
    font-size: 12px;
  }

  input::placeholder {
    font-size: 5px !important;
  }
}

/* Second Section Starts  */
.secondSection {
  margin-top: 80px !important;
}
.secondSection > div:nth-child(1) {
  padding-right: 32px !important;
}
.secondSection > div:nth-child(2) {
  padding-right: 32px !important;
}
.iconContainer {
  font-size: 27px;
  margin-bottom: 16px;
}
.iconType {
  font-size: 24px;
  margin-bottom: 24px;
}
.description {
  font-size: 16px;
}

@media only screen and (max-width: 960px) {
  .secondSection {
    margin-top: 40px !important;
  }
  .secondSection > div:nth-child(1) {
    padding-right: 0 !important;
    padding-bottom: 16px;
  }
  .secondSection > div:nth-child(2) {
    padding-right: 0 !important;
    padding-bottom: 16px;
  }
  .iconContainer {
    font-size: 20px;
    margin-bottom: 8px;
  }
  .iconType {
    font-size: 15px;
    margin-bottom: 12px;
  }
  .description {
    font-size: 12px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 960px) {
  .secondSection > div:nth-child(1) {
    padding-right: 16px !important;
    padding-bottom: 0px;
  }
  .secondSection > div:nth-child(2) {
    padding-right: 16px !important;
    padding-bottom: 0px;
  }
}

/* Third Section Starts  */
.thirdContainer {
  margin-top: 80px !important;
  height: auto;
}
.locationHeading {
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 32px;
}

.parallax {
  width: 100%;
  height: auto;
  border-radius: 7.5px;
}

.locationName {
  margin-top: 32px;
  line-height: 48px;
  font-size: 32px;
  font-weight: 600;
  color: #c2185b;
}
.phoneNumber {
  margin-top: 32px;
  line-height: 36px;
  font-size: 24px;
}
.address {
  margin-top: 32px;
  line-height: 36px;
  font-size: 24px;
}

.getDirectionBtn {
  margin-top: 32px;
  line-height: 36px;
  font-size: 24px;
}

@media only screen and (max-width: 960px) {
  .thirdContainer {
    margin-top: 40px !important;
  }
  .locationHeading {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  .parallax {
    width: 100%;
    height: auto;
    border-radius: 3.68px;
  }
  .locationName {
    margin-top: 20px;
    line-height: 35px;
    font-size: 25px;
    font-weight: 500;
    color: #c2185b;
  }
  .phoneNumber {
    margin-top: 20px;
    line-height: 30px;
    font-size: 20px;
  }
  .address {
    margin-top: 20px;
    line-height: 30px;
    font-size: 20px;
  }

  .getDirectionBtn {
    margin-top: 20px;
    line-height: 30px;
    font-size: 20px;
  }
}

/* Fourth Section Starts  */
.fourthContainer {
  margin-top: 80px !important;
  margin-bottom: 80px !important;
  height: 376px;
}
.fourthContainer > .cta {
  border-radius: 8px;
  background-image: url("../assets/contactus/CTA image.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: start;
}

.ctaStatement {
  margin-bottom: 32px;
  color: white;
  font-size: 42px;
}
.ctaBtn {
  font-size: 20px;
  height: 48px !important;
  border-radius: 8px;
}

@media only screen and (max-width: 600px) {
  .fourthContainer {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
    padding: 0 !important;
    height: 188px;
  }
  .fourthContainer > .cta {
    border-radius: 0px;
  }

  .ctaStatement {
    margin-bottom: 16px;
    font-size: 20px;
  }
  .ctaBtn {
    font-size: 14px;
    height: 35px !important;
    border-radius: 4px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 960px) {
  .fourthContainer {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
    height: 188px;
  }
  .fourthContainer > .cta {
    border-radius: 4px;
  }

  .ctaStatement {
    margin-bottom: 16px;
    font-size: 24px;
  }
  .ctaBtn {
    font-size: 16px;
    height: 40px !important;
    border-radius: 6px;
  }
}
</style> 