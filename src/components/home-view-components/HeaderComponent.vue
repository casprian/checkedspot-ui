<template>
  <v-row
    no-gutters
    class="headerCont mb-8 d-flex flex-column-reverse flex-md-row"
  >
    <v-col cols="12" class="imageCont" id="imgCont">
      <div>
        <v-parallax :src="currentimage.src" :alt="currentimage.alt" id="image"> </v-parallax>
      </div>
    </v-col>

    <v-col cols="12" class="textSection pa-0">
      <div class="d-flex flex-column justiy-center align-center">
        <div class="textcont text-white">
          <h1 class="tagline mb-2 mb-md-4 text-center text-h6 text-md-h4">
            Only Verified Properties
          </h1>
          <p>
            We are a profession real estate service and construction company
            associated with partners in pan India and global spectrum.
          </p>
          <p>
            Specializing in construction of small , medium and big apartments,
            Plot development, Joint Development, Building mesmerizing cottages
            and restaurants, Commercial Complexes, Industrial Ware Houses and
            property sales, we provide tailored services.
          </p>
          <p>
            We are the first choice option when it comes to developing farm
            lands, farm houses with best customer satisfaction survey.
          </p>
        </div>
      </div>

      <!-- FILTERS -->
      <div class="filter">
        <property-filter />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { useRouter } from "vue-router";
import construction from "@/assets/headerCarousel/construction.jpg";
import farmlandhouse from "@/assets/headerCarousel/farmlandhouse.jpg";
import landDevelopment from "@/assets/headerCarousel/landDevelopment.jpg";
import plot from "@/assets/headerCarousel/plot.jpg";

//@ts-ignore
const PropertyFilter = defineAsyncComponent(
  () => import("@/components/home-view-components/PropertyFilter.vue")
);

const router = useRouter();

const selectedImage = ref(0);

const items = ref([
  {
    src: construction,
    alt: "construction",
  },
  {
    src: farmlandhouse,
    alt: "farmland",
  },
  {
    src: landDevelopment,
    alt: "land development",
  },
  {
    src: plot,
    alt: "plot",
  },
]);

const currentimage = ref(items.value[0]);
const counter = ref(0);

function startTransition() {
  const imgContEle = document.getElementById("imgCont");
  const imageEle = document.getElementById("image");

  setInterval(() => {
    if (counter.value === 3) {
      counter.value = -1;
    }
    counter.value++;
    currentimage.value = items.value[counter.value];
  }, 3000);
}

startTransition();
</script>

<style lang="scss" scoped>
.headerCont {
  position: relative;
}

.imageCont {
  height: calc(100vh - 56px) !important;
}

.imageCont div {
  height: calc(100vh - 56px) !important;
  width: 100vw;
}

.imageCont div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
}

.textSection {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.textcont {
  margin-bottom: 24px;
}

.textcont > p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
  text-align: center;
}

.tagline {
  line-height: 50px;
  font-size: 40px;
  font-weight: 700;
}

.filter {
  padding: 0 100px;
}

@media screen and (max-width: 600px) {
  .textcont {
    width: 90% !important;
  }

  .filter {
    padding: 0 20px;
  }
}

@media screen and (max-width: 960px) {
  .textcont {
    width: 75% !important;
  }

  .filter {
    padding: 0 50px;
  }
}

@media screen and (min-width: 961px) {
  .textcont {
    width: 55% !important;
  }
}
</style>
