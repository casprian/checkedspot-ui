<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="pa-4 pa-sm-2 text-h4 font-weight-medium">Our associated partners</div>
      </v-col>
      <v-col cols="12" class="my-5 mt-2">
        <v-row no-gutters>
          <v-col cols="12" md="6" class="px-4 px-sm-2 pr-md-4 my-6 my-sm-4 serviceCards">
            <a href="https://www.decorwork.in" target="_blank">
              <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/gallery/interior.jpg"
                class="mb-1"></v-img>
              <p class="text-h6 font-weight-medium">Interior decoration services</p>
            </a>
          </v-col>

          <v-col cols="12" md="6" class="px-4 px-sm-2 pr-md-4 my-6 my-sm-4 serviceCards">
            <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/gallery/maintainance.jpg"
              class="mb-1"></v-img>
            <p class="text-h6 font-weight-medium">Maintenance services</p>
          </v-col>

          <v-col cols="12" md="6" class="px-4 px-sm-2 pr-md-4 my-6 my-sm-4 serviceCards">
            <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/assets/RentCollectionServices.jpg"
              class="mb-1"></v-img>
            <p class="text-h6 font-weight-medium">Rent collection services</p>
          </v-col>

          <v-col cols="12" md="6" class="px-4 px-sm-2 pr-md-4 my-6 my-sm-4 serviceCards">
            <v-img cover height="250px" src="https://checkedspot.blob.core.windows.net/assets/legalServices.jpg"
              class="mb-1"></v-img>
            <p class="text-h6 font-weight-medium">Legal services</p>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

</script>
<style scoped>
.checkedSpotMeaning {
  line-height: 25px;
  font-size: 20px;
}

.serviceCards:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black !important;
}
</style>