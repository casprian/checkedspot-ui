<template>
  <v-container fluid class="pa-0">
    <!-- First Section -->
    <v-row no-gutters class="firstSection d-flex justify-center align-center">
      <v-col cols="12" sm="10">
        <h1 class="aboutHeading">
          Welcome to <a href="/">Checked Spot</a> <br />
          Your Trusted Real Estate Partner
        </h1>
        <h3 class="subHeading">
          With a commitment to excellence and a passion for real estate, we are
          here to guide you every step of the way.
        </h3>
        <div class="headerActionContainer">
          <router-link to="/listing" class="browseProperty">
            <v-btn class="text-none" :width="156" color="#C2185B"
              >Browse Property</v-btn
            >
          </router-link>
          <router-link to="/postproperty" class="postProperty">
            <v-btn
              class="text-none"
              :width="156"
              color="#C2185B"
              variant="outlined"
              >Post Property</v-btn
            >
          </router-link>
        </div>
      </v-col>
    </v-row>

    <!-- Second Section -->
    <v-row no-gutters class="secondSection px-4 px-sm-10 px-md-15">
      <v-col cols="12" class="heroContainer">
        <video
          class="heroVideo"
          poster="https://checkedspot.blob.core.windows.net/assets/headerVideoPoster.png"
          autoplay
          muted
          loop
        >
          <source
            src="https://checkedspot.blob.core.windows.net/assets/7.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </v-col>
    </v-row>

    <!-- Third Section -->
    <v-row no-gutters class="pa-0 thirdSection px-4 px-sm-10 px-md-15">
      <v-col cols="12">
        <h3 class="whyCheckedspot">Why <a href="/">Checked Spot</a>?</h3>
      </v-col>
      <v-col cols="12" sm="6" class="imageContainer pr-10">
        <img
          src="../assets/aboutus/whyCheckedspot.png"
          alt="Why Checked Spot"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="pa-0 pl-md-10 d-flex flex-column justify-center"
      >
        <div class="greaterThanMd">
          <p>
            Launched in 2022, Checked Spot, India's No. 1 portal which displays
            only verified properties, We verify each property with care and a
            quality checklist certified by checkedspot.
          </p>
          <br />
          <p>
            We deal with every aspect of the consumers' needs in the real estate
            industry. It is an online forum where buyers, sellers and
            brokers/agents can exchange information about real estate properties
            quickly, effectively and free. At
            <a href="https://www.checkedspot.com">checkedspot.com</a>, you can
            advertise a property, search for a property, browse through
            properties, build your own property microsite, and keep yourself
            updated with the latest news and trends making headlines in the
            realty sector.
          </p>
        </div>
        <div class="greaterThanSm">
          <p>
            Launched in 2022, Checked Spot, India's No. 1 portal which displays
            only verified properties, We verify each property with care and a
            quality checklist certified by checkedspot.
          </p>
          <br />
          <p>
            We deal with every aspect of the consumers' needs in the real estate
            industry. It is an online forum where buyers, sellers and
            brokers/agents can exchange information about real estate properties
            quickly, effectively and free.
          </p>
        </div>
      </v-col>

      <v-col cols="12" class="mt-5 mt-md-10">
        <div class="greaterThanMd">
          <p>
            We build your dream houses with lot of care , precision and giving
            attention to detail using our unique methodology which ensure
            quality, transparency and trust.
          </p>
          <br />
          <p>
            At present,
            <a href="https://www.checkedspot.com">checkedspot.com</a> prides
            itself for having farmhouses, farmlands, and plots listings spanning
            across multiple cities in South India. Of all, In addition to
            providing an online platform to real estate developers, brokers and
            property owners for listing their property for sale, purchase we are
            also construction specialist with most competitive price at top
            quality for your home dreams.
          </p>
          <br />
          <p>
            With the ever-evolving online search behaviour,
            <a href="https://www.checkedspot.com">checkedspot.com</a> shares
            updated information pertinent to real estate activities, assisting
            prospective buyers to make informed buying decision. We make online
            property search easier, quicker and smarter!
          </p>
        </div>

        <div class="greaterThanSm">
          <p>
            At
            <a href="https://www.checkedspot.com">checkedspot.com</a>, you can
            advertise a property, search for a property, browse through
            properties, build your own property microsite, and keep yourself
            updated with the latest news and trends making headlines in the
            realty sector.
          </p>
          <br />
          <p>
            We build your dream houses with lot of care , precision and giving
            attention to detail using our unique methodology which ensure
            quality, transparency and trust. At present,
            <a href="https://www.checkedspot.com">checkedspot.com</a> prides
            itself for having farmhouses, farmlands, and plots listings spanning
            across multiple cities in South India. Of all, In addition to
            providing an online platform to real estate developers, brokers and
            property owners for listing their property for sale, purchase we are
            also construction specialist with most competitive price at top
            quality for your home dreams.
          </p>
          <br />
          <p>
            With the ever-evolving online search behaviour,
            <a href="https://www.checkedspot.com">checkedspot.com</a> shares
            updated information pertinent to real estate activities, assisting
            prospective buyers to make informed buying decision. We make online
            property search easier, quicker and smarter!
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Fourth Section -->
    <v-row no-gutters class="fourthSection px-4 px-sm-10 px-md-15">
      <!-- Left -->
      <v-col cols="12" sm="6" class="pr-sm-6 pr-md-10">
        <h2 class="journeyHeading">
          Share your journey from <br />
          the beginning to now
        </h2>

        <div class="journeyImage">
          <img
            src="../assets/aboutus/journey.png"
            alt="Journey of Your Dream House"
          />
        </div>
      </v-col>

      <!-- right -->
      <v-col
        cols="12"
        sm="6"
        class="pl-sm-6 pl-md-10 d-flex justify-end align-end"
      >
        <v-row no-gutters class="">
          <v-col cols="12" class="mb-4 d-flex">
            <div
              class="activeStepIndicator d-flex flex-column justify-start align-center"
            >
              <span class="activeStepIconContainer">
                <v-icon
                  class="mdIcon"
                  icon="mdi-cube"
                  color="#c2185b"
                  size="40"
                ></v-icon>
                <v-icon
                  class="smIcon"
                  icon="mdi-cube"
                  color="#c2185b"
                  size="22"
                ></v-icon>
              </span>
              <span class="activeStepVerticalLine"></span>
            </div>
            <div class="activeStepAgenda">
              <h4>Construct your dream</h4>
              <p>
                Experience modern design, Thoughtful layout, and top-notch
                craftsmanship.
              </p>
            </div>
          </v-col>

          <v-col cols="12" class="mb-4 d-flex">
            <div
              class="stepIndicator d-flex flex-column justify-start align-center"
            >
              <span class="stepIconContainer">
                <v-icon class="mdIcon" icon="mdi-cube" size="40"></v-icon>
                <v-icon class="smIcon" icon="mdi-cube" size="22"></v-icon>
              </span>
              <span class="stepVerticalLine"></span>
            </div>
            <div class="stepAgenda">
              <h4>Construct your dream</h4>
              <p>
                Experience modern design, Thoughtful layout, and top-notch
                craftsmanship.
              </p>
            </div>
          </v-col>

          <v-col cols="12" class="mb-4 d-flex">
            <div
              class="stepIndicator d-flex flex-column justify-start align-center"
            >
              <span class="stepIconContainer">
                <v-icon class="mdIcon" icon="mdi-cube" size="40"></v-icon>
                <v-icon class="smIcon" icon="mdi-cube" size="22"></v-icon>
              </span>
            </div>
            <div class="stepAgenda">
              <h4>Construct your dream</h4>
              <p>
                Experience modern design, Thoughtful layout, and top-notch
                craftsmanship.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Fifth Section -->
    <v-row no-gutters class="fifthSection px-4 px-sm-10 px-md-15">
      <!-- Testimonials heading -->
      <v-col cols="12">
        <h2 class="testimonialHeading">Our <span>Testimonials</span></h2>
      </v-col>
      <v-col cols="12">
        <testimonial />
      </v-col>
    </v-row>

    <!-- Sixth Section - CTA -->
    <v-row no-gutters class="pa-0 ma-0 px-4 px-sm-10 px-md-15 sixthSection">
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
  </v-container>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import axios from "axios";
//@ts-ignore
import { baseURL } from "@/data/axios/interceptor.js";

const testimonial = defineAsyncComponent(
  () => import("@/components/aboutus/testimonial.vue")
);

const phoneCallhref = ref(0);
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
a {
  text-decoration: none;
  color: #c2185b !important;
}

/* First Section Starts */
.firstSection {
  margin-top: 80px !important;
  padding: 0 60px !important;
}
.aboutHeading {
  font-size: 56px;
  line-height: 1.2;
  font-weight: 500;
  text-align: center;
  margin-bottom: 24px;
}
.subHeading {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  margin-bottom: 24px;
}
.headerActionContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.browseProperty {
  margin-right: 26px;
}

@media only screen and (max-width: 600px) {
  .firstSection {
    margin-top: 23px !important;
    padding: 0 16px !important;
  }
  .aboutHeading {
    font-size: 16px;
  }
  .subHeading {
    font-size: 12px;
  }
  .headerActionContainer {
    flex-direction: column;
  }
  .browseProperty {
    margin-right: 0;
    margin-bottom: 14px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px) {
  .firstSection {
    margin-top: 40px !important;
    padding: 0 30px !important;
  }
  .aboutHeading {
    font-size: 32px;
  }
  .subHeading {
    font-size: 16px;
  }
}

/* Second Section Starts */
.secondSection {
  margin-top: 80px !important;
}
.heroContainer {
  height: 480px;
}
.heroVideo {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 600px) {
  .secondSection {
    margin-top: 30px !important;
  }
  .heroContainer {
    height: 277px;
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px) {
  .secondSection {
    margin-top: 40px !important;
  }
  .heroContainer {
    height: 350px;
  }
}

/* Third Section Starts */
.thirdSection {
  margin-top: 60px !important;
}
.whyCheckedspot {
  line-height: 1.2;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
}
.imageContainer {
  height: 357px;
}
.imageContainer > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.greaterThanMd {
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;
}
.greaterThanSm {
  display: none;
}

@media only screen and (max-width: 600px) {
  .thirdSection {
    margin-top: 40px !important;
  }
  .whyCheckedspot {
    font-size: 14px;
    margin-bottom: 12px;
  }
  .imageContainer {
    display: none;
  }
  .greaterThanMd {
    font-size: 14px;
    line-height: 1.5;
    text-align: justify;
  }
}

@media only screen and (min-width: 601px) and (max-width: 960px) {
  .thirdSection {
    margin-top: 40px !important;
  }
  .whyCheckedspot {
    font-size: 16px;
    margin-bottom: 24px;
  }
  .imageContainer {
    height: 245px;
  }
  .greaterThanMd {
    display: none;
  }
  .greaterThanSm {
    display: block;
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
  }
}

/* Fourth Section Starts */
.fourthSection {
  margin-top: 80px !important;
}
/* Left */
.journeyHeading {
  font-size: 48px;
  margin-bottom: 64px;
  line-height: 1.2;
}
.journeyImage {
  height: 481px;
}
.journeyImage > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
/* Right */
.activeStepIndicator,
.stepIndicator {
  margin-right: 40px;
}
.activeStepIconContainer > .smIcon,
.stepIconContainer > .smIcon {
  display: none;
}
.activeStepVerticalLine,
.stepVerticalLine {
  margin-top: 16px;
  width: 2px;
  height: 100px;
  border: solid 1px #c2185b;
}
.activeStepAgenda > h4,
.stepAgenda > h4 {
  font-size: 32px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 10px;
  color: #c2185b;
}
.activeStepAgenda > p,
.stepAgenda > p {
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
}
.stepVerticalLine {
  border: solid 1px #000;
}
.stepAgenda > h4 {
  color: #000;
}

@media only screen and (max-width: 600px) {
  .fourthSection {
    margin-top: 40px !important;
  }
  /* Left */
  .journeyHeading {
    font-size: 18px;
    margin-bottom: 32px;
  }
  .journeyImage {
    height: 256px;
    margin-bottom: 32px;
  }
  .journeyImage > img {
    border-radius: 5px;
  }
  /* Right */
  .activeStepIndicator,
  .stepIndicator {
    margin-right: 24px;
  }
  .activeStepIconContainer > .mdIcon,
  .stepIconContainer > .mdIcon {
    display: none;
  }
  .activeStepIconContainer > .smIcon,
  .stepIconContainer > .smIcon {
    display: block;
  }
  .activeStepVerticalLine,
  .stepVerticalLine {
    margin-top: 7px;
    width: 1px;
    height: 50px;
    border: solid 1px #c2185b;
  }
  .activeStepAgenda > h4,
  .stepAgenda > h4 {
    font-size: 16px;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 10px;
    color: #c2185b;
  }
  .activeStepAgenda > p,
  .stepAgenda > p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
  }
  .stepVerticalLine {
    border: solid 1px #000;
  }
  .stepAgenda > h4 {
    color: #000;
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px) {
  .fourthSection {
    margin-top: 40px !important;
  }
  /* Left */
  .journeyHeading {
    font-size: 24px;
    margin-bottom: 32px;
  }
  .journeyImage {
    height: 256px;
  }
  .journeyImage > img {
    border-radius: 5px;
  }
  /* Right */
  .activeStepIndicator,
  .stepIndicator {
    margin-right: 35px;
  }
  .activeStepIconContainer > .mdIcon,
  .stepIconContainer > .mdIcon {
    display: none;
  }
  .activeStepIconContainer > .smIcon,
  .stepIconContainer > .smIcon {
    display: block;
  }
  .activeStepVerticalLine,
  .stepVerticalLine {
    margin-top: 7px;
    width: 1px;
    height: 50px;
    border: solid 1px #c2185b;
  }
  .activeStepAgenda > h4,
  .stepAgenda > h4 {
    font-size: 20px;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 10px;
    color: #c2185b;
  }
  .activeStepAgenda > p,
  .stepAgenda > p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
  }
  .stepVerticalLine {
    border: solid 1px #000;
  }
  .stepAgenda > h4 {
    color: #000;
  }
}

/* Fifth Section Starts */
.fifthSection {
  margin-top: 80px !important;
}
.testimonialHeading {
  font-size: 48px;
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 60px;
}
.testimonialHeading > span {
  color: #c2185b;
}

/* Sixth Section Starts */
.sixthSection {
  margin-top: 80px !important;
  margin-bottom: 80px !important;
  height: 376px;
}
.sixthSection > .cta {
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
  .sixthSection {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
    padding: 0 !important;
    height: 188px;
  }
  .sixthSection > .cta {
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
  .sixthSection {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
    height: 188px;
  }
  .sixthSection > .cta {
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