<template>
  <v-sheet class="slideGroupContainer mx-auto">
    <v-slide-group show-arrows class="mx-n16 slideGroup">
      <v-slide-group-item
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <!-- Review Cards -->
        <div
          class="testimonialCard mx-4 pa-8 d-flex flex-column justify-space-between align-start"
        >
          <v-rating
            class="ma-0 ml-n2 mt-n2 rating"
            color="yellow-darken-3"
            v-model="testimonial.rating"
            readonly
          ></v-rating>
          <p class="testimonial">{{ testimonial.testimonial }}</p>

          <div class="d-flex justify-start align-end">
            <v-avatar class="avatar mr-4" color="surface-variant" size="56">
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
  </v-sheet>
</template>

<script lang="ts" setup>
import { ref } from "vue";
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
</script>

<style scoped>
.slideGroupContainer {
  position: relative;
  padding-bottom: 84px;
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
  top: 344px;
  right: 70px;
  color: #1f6fa8;
}
.buttonprev {
  position: absolute;
  top: 344px;
  right: 140px;
  color: #1f6fa8;
}
</style>