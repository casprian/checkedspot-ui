<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="text-h5 font-weight-medium">Our associated partners</div>
      </v-col>
      <v-col cols="12" sm="6" class="my-7 mt-0">
        <v-row no-gutters>
          <v-col
            cols="12"
            md="6"
            class="pr-sm-5 mb-1"
            v-for="services in servicesCards"
            :key="services.id"
          >
            <div class="mt-7">
              <v-img
                cover
                height="170px"
                :src="services.img"
                class="mb-1"
              ></v-img>
              <p class="text-h6 font-weight-medium">{{ services.heading }}</p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="my-7 bg-blue-grey-darken-1 pt-16 pb-5"
        color="grey-darken-3"
      >
        <div class="px-10">
          <div class="text-h4 text-grey-lighten-5 mb-3">
            What is Checked Spot?
          </div>
          <h4 class="checkedSpotMeaning font-weight-light">
            Checked Spots are those properties which are not just those
            properties posted in web but they are
          </h4>
          <div class="pl-8 mt-6">
            <p class="text-h5 mb-4">Validated, Verified and Quality Ensured</p>
            <div class="d-flex align-center mb-3">
              <v-icon icon="mdi-clock-time-four" class="mr-3"></v-icon>
              <p class="text-body-1 font-weight-light">
                Properties are digitally and physically verified by one ore more
                of our checkedspot representative such that you can save your
                time and be sure on what you are buying
              </p>
            </div>
            <div class="d-flex align-center mb-3">
              <v-icon icon="mdi-account" class="mr-3"></v-icon>
              <p class="text-body-1 font-weight-light">
                Documents are verified by visiting the actual property owners
                along with our specialist legal team
              </p>
            </div>
            <div class="d-flex align-center mb-3">
              <v-icon icon="mdi-flag" class="mr-3"></v-icon>
              <p class="text-body-1 font-weight-light">
                Any thing which our expert team finds as a warning its
                immediately flagged
              </p>
            </div>
          </div>
          <p class="my-4 text-body-2 text-grey-lighten-5">
            To see a sample report on each of property listed is verified wou
            can click here to see a
            <a href="#" class="text-blue-lighten-2">Sample Report - Checked Spot</a>

            <br />

            Otherwise, you're done!
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const servicesCards = [
  {
    id: 1,
    img: 'https://checkedspot.blob.core.windows.net/assets/packersAndMovers.jpg',
    heading: "Packers and Movers",
  },
  {
    id: 2,
    img: 'https://checkedspot.blob.core.windows.net/assets/homeLoans.jpg',
    heading: "Affordable Home Loans",
  },
  {
    id: 3,
    img: 'https://checkedspot.blob.core.windows.net/assets/RentCollectionServices.jpg',
    heading: "Rent collection services",
  },
  {
    id: 4,
    img: 'https://checkedspot.blob.core.windows.net/assets/legalServices.jpg',
    heading: "Legal services",
  },
];
</script>
<style scoped>
.checkedSpotMeaning {
  line-height: 25px;
  font-size: 20px;
}
</style>