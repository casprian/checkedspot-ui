<template>
  <v-sheet class="slideGroupContainer mx-auto">
    <v-slide-group show-arrows class="mx-n16 slideGroup">
      <v-slide-group-item
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <!-- Review Cards -->
        <div
          class="testimonialCard mb-1 mx-4 pa-8 d-flex flex-column justify-space-between align-start"
        >
          <v-rating
            density="compact"
            class="ma-0 ml-n1 rating"
            color="yellow-darken-3"
            v-model="testimonial.rating"
            readonly
          ></v-rating>
          <p class="testimonial">{{ testimonial.testimonial }}</p>

          <div class="d-flex justify-start align-end">
            <v-avatar
              class="d-none d-md-block avatar mr-4"
              color="surface-variant"
              size="56"
            >
              <v-img
                :src="
                  testimonial.img
                    ? testimonial.img
                    : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
                "
                :alt="'Image of' + testimonial.name"
              ></v-img>
            </v-avatar>
            <v-avatar
              class="d-md-none avatar mr-4"
              color="surface-variant"
              size="42"
            >
              <v-img
                :src="
                  testimonial.img
                    ? testimonial.img
                    : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
                "
                :alt="'Image of' + testimonial.name"
              ></v-img>
            </v-avatar>
            <div>
              <h3 class="testimonialBy">{{ testimonial.name }}</h3>
              <p class="testimonialByType">{{ testimonial.type }}</p>
            </div>
          </div>
        </div>
      </v-slide-group-item>

      <template v-slot:next>
        <v-btn
          variant="outlined"
          class="buttonnext"
          icon="mdi-arrow-right"
        ></v-btn>
      </template>
      <template v-slot:prev>
        <v-btn
          variant="outlined"
          class="buttonprev"
          icon="mdi-arrow-left"
        ></v-btn>
      </template>
    </v-slide-group>

    <!-- Mobile Screen -->
    <!-- Review Cards -->
    <div class="testimonialCardMobileContainer">
      <div
        v-for="testimonial in mobileViewtestimonials"
        :key="testimonial.id"
        class="testimonialCardMobile pa-8 d-flex flex-column justify-space-between align-start"
      >
        <v-rating
          density="compact"
          class="ma-0 ml-n1 mb-3 rating"
          color="yellow-darken-3"
          v-model="testimonial.rating"
          readonly
        ></v-rating>
        <p class="testimonial">{{ testimonial.testimonial }}</p>

        <div class="d-flex justify-start align-end">
          <v-avatar
            class="d-none d-md-block avatar mr-4"
            color="surface-variant"
            size="56"
          >
            <v-img
              :src="
                testimonial.img
                  ? testimonial.img
                  : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
              "
              :alt="'Image of' + testimonial.name"
            ></v-img>
          </v-avatar>
          <v-avatar
            class="d-md-none avatar mr-4"
            color="surface-variant"
            size="42"
          >
            <v-img
              :src="
                testimonial.img
                  ? testimonial.img
                  : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
              "
              :alt="'Image of' + testimonial.name"
            ></v-img>
          </v-avatar>
          <div>
            <h3 class="testimonialBy">{{ testimonial.name }}</h3>
            <p class="testimonialByType">{{ testimonial.type }}</p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-end align-center">
        <v-btn
          class="viewMoreBtn text-none"
          :disabled="viewMoreBtn"
          @click="addMoreTestimonials"
          color="#c2185b"
          >View More</v-btn
        >
      </div>
    </div>
  </v-sheet>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import IqbalAhmed from "@/assets/customers/IqbalAhmed.jpeg";
import MashoodAhmed from "@/assets/customers/MashoodAhmed.jpeg";

const testimonials = ref([
  {
    id: "1",
    type: "Customer",
    rating: 5,
    name: "Iqbal Ahmed",
    img: IqbalAhmed,
    testimonial:
      "Checked Spot's proactive and personalized approach ensures a smooth real estate journey. Trustworthy professionals for any property!",
  },
  {
    id: "2",
    type: "Investor",
    rating: 5,
    name: "Mohammed Saad",
    img: "",
    testimonial:
      "Investing with Checked Spot was a game-changer—expert advice, solid returns, and reliable professionalism. Remarkably satisfied!",
  },
  {
    id: "3",
    type: "Investor",
    rating: 5,
    name: "Aleem Shariff",
    img: "",
    testimonial:
      "Investing with Checked Spot brings peace of mind—smart decisions, steady growth, and unparalleled professionalism.",
  },
  {
    id: "4",
    type: "Customer",
    rating: 5,
    name: "Mahantesh Elemmi",
    img: "",
    testimonial:
      "Seamless property purchase with Checked Spot - their commitment to satisfaction is unmatched. Highly recommended!",
  },
  {
    id: "5",
    type: "Customer",
    rating: 5,
    name: "Shakuntla",
    img: "",
    testimonial:
      "Checked Spot's dedication and expertise shine in every real estate transaction, making it smooth and satisfying.",
  },
  {
    id: "6",
    type: "Customer",
    rating: 5,
    name: "Nagina Kausar",
    img: "",
    testimonial:
      "Checked Spot's professionalism ensured a smooth farmhouse purchase. Highly recommend for a satisfying real estate experience!",
  },
  {
    id: "7",
    type: "Investor",
    rating: 5,
    name: "Mohammed Shuhib",
    img: "",
    testimonial:
      "Checked Spot maximized my investment success—proactive, strategic, and consistently delivering outstanding returns. Impressive!",
  },
  {
    id: "8",
    type: "Customer",
    rating: 5,
    name: "Mashood Ahmed",
    img: MashoodAhmed,
    testimonial:
      "Checked Spot's commitment to customer satisfaction made my property purchase stress-free. Trustworthy and highly recommended!",
  },
  {
    id: "9",
    type: "Investor",
    rating: 5,
    name: "Siddharth",
    img: "",
    testimonial:
      "Checked Spot's investment wisdom stands out—astute decisions, transparent communication, and a focus on lasting success.",
  },
  {
    id: "10",
    type: "Customer",
    rating: 5,
    name: "Naveed Pasha",
    img: "",
    testimonial:
      "Seamless transaction with Checked Spot, making my farmhouse dream a reality. Professionalism and satisfaction guaranteed!",
  },
  {
    id: "11",
    type: "Customer",
    rating: 5,
    name: "Hina Kausar",
    img: "",
    testimonial:
      "Smooth real estate journey with Checked Spot - their dedication and personalized guidance shine. Highly recommended!",
  },
  {
    id: "12",
    type: "Customer",
    rating: 5,
    name: "Shifa Aleem",
    img: "",
    testimonial:
      "Checked Spot's proactive approach and expertise ensured a smooth purchase of my dream property. Highly satisfied!",
  },
  {
    id: "13",
    type: "Customer",
    rating: 5,
    name: "Imdad",
    img: "",
    testimonial:
      "A stress-free transaction with Checked Spot - their professionalism and dedication shine.",
  },
  {
    id: "14",
    type: "Customer",
    rating: 5,
    name: "Mudassir Pasha",
    img: "",
    testimonial:
      "Checked Spot's expertise and guidance made my farmland purchase seamless. Highly recommend for any property!",
  },
  {
    id: "15",
    type: "Customer",
    rating: 5,
    name: "Naziya Akthar",
    img: "",
    testimonial:
      "Smooth sailing with Checked Spot—stellar service and expert guidance made my property purchase truly extraordinary.",
  },
  {
    id: "16",
    type: "Customer",
    rating: 5,
    name: "Shaziya Waheed",
    img: "",
    testimonial:
      "Checked Spot's dedication and proficiency ensured a seamless experience, transforming my property dreams into reality.",
  },
]);

const mobileViewtestimonials = ref([
  {
    id: "",
    rating: 0,
    testimonial: "",
    img: "",
    name: "",
    type: "",
  },
]);
let testimonialPerClick = 0;
const viewMoreBtn = ref(false);
function addMoreTestimonials() {
  for (let i = testimonialPerClick; i < testimonialPerClick + 3; i++) {
    if (i === testimonials.value.length) {
      viewMoreBtn.value = true;
      break;
    }
    mobileViewtestimonials.value[i] = testimonials.value[i];
  }
  testimonialPerClick += 3;
}

onMounted(() => {
  addMoreTestimonials();
});
</script>

<style scoped>
.slideGroupContainer {
  position: relative;
  padding-bottom: 84px;
  background-color: rgb(249, 251, 255);
}

.testimonialCardMobileContainer {
  display: none !important;
}
.testimonialCard {
  border: solid 1px rgba(194, 24, 92, 0.408);
  border-radius: 8px;
  width: 420px;
  height: 287px;
}
.rating {
  color: rgb(244, 220, 4);
  margin-bottom: 24px;
}
.testimonial {
  text-align: justify;
}
.testimonialBy {
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
}
.testimonialByType {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #c2185b;
}

.buttonnext {
  position: absolute;
  top: 320px;
  right: 0px;
  color: #1f6fa8;
}
.buttonprev {
  position: absolute;
  top: 320px;
  right: 70px;
  color: #1f6fa8;
}

@media only screen and (max-width: 600px) {
  .slideGroupContainer {
    padding-bottom: 0px;
  }
  .slideGroup {
    display: none;
  }
  .testimonialCardMobileContainer {
    display: block !important;
  }
  .testimonialCardMobile {
    margin-bottom: 24px !important;
    border: solid 1px rgba(194, 24, 92, 0.408);
    border-radius: 6px;
    width: 100%;
    min-height: 212px;
  }
  .rating {
    margin-bottom: 18px;
  }
  .testimonial {
    margin-bottom: 15px;
  }
  .testimonialBy {
    font-size: 13.5px;
    line-height: 21px;
  }
  .testimonialByType {
    font-size: 12px;
    line-height: 18px;
  }
  .viewMoreBtn {
    background-color: rgb(249, 251, 255);
  }
}
@media only screen and (min-width: 601px) and (max-width: 960px) {
  .testimonialCard {
    border-radius: 6px;
    width: 315px;
    min-height: 212px;
  }
  .rating {
    margin-bottom: 18px;
  }
  .testimonial {
    font-size: 13.5px;
    margin-bottom: 15px;
  }
  .testimonialBy {
    font-size: 13.5px;
    line-height: 21px;
  }
  .testimonialByType {
    font-size: 12px;
    line-height: 18px;
  }
}
</style>