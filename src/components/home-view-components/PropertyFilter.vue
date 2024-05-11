<template>
  <v-row no-gutters class="">
    <v-col cols="12">
      <v-card class="rounded-lg" elevation="8">
        <v-tabs v-model="type" show-arrows bg-color="white" color="#F8485E" class="mx-8 mt-4" height="auto">

          <v-tab value="" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/allProperty.svg" :class="[type === '' ? 'putfilteronimage' : '', 'filterImage']" style="" alt="">
            <div class="text-caption pb-3">All Properties</div>
          </v-tab>

          <v-tab value="farmhouse or farmland" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/farmland.svg" :class="[type === 'farmhouse or farmland' ? 'putfilteronimage' : '', 'filterImage']" style=""
              alt="">
            <div class="text-caption pb-3">Farmhouse/Farmland</div>
          </v-tab>

          <v-tab value="plot or land" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/plot.svg" :class="[type === 'plot or land' ? 'putfilteronimage' : '', 'filterImage']" style="" alt="">
            <div class="text-caption pb-3">Plot/Land</div>
          </v-tab>

          <v-tab value="flat or apartment" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/flat.svg" :class="[type === 'flat or apartment' ? 'putfilteronimage' : '', 'filterImage']" style="" alt="">
            <div class="text-caption pb-3">Flat/Apartment</div>
          </v-tab>

          <!-- <v-tab value="apartment" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/apartment.svg" :class="[type === 'apartment' ? 'putfilteronimage' : '', 'filterImage']" style=""
              alt="">
            <div class="text-caption pb-3">Apartment</div>
          </v-tab> -->

          <v-tab value="independentHouse" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/independentHouse.svg"
              :class="[type === 'independentHouse' ? 'putfilteronimage' : '', 'filterImage']" style="" alt="">
            <div class="text-caption pb-3">Independent House</div>
          </v-tab>

          <v-tab value="commercialProperty" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/commercialProperty.svg"
              :class="[type === 'commercialProperty' ? 'putfilteronimage' : '', 'filterImage']" style="" alt="">
            <div class="text-caption pb-3">Commercial Property</div>
          </v-tab>

        </v-tabs>

        <v-card-text class="d-flex justify-space-between align-center px-4 py-0 mx-9 mt-4 mb-5 rounded"
          style="border:1px solid rgb(197, 195, 195); max-height: 50px;">
          <v-icon icon="mdi-map-marker" color="#C2185B" class="mr-2" size="24"></v-icon>
          <v-combobox v-model="select" :items="items" menu-icon="" chips variant="plain" multiple></v-combobox>
          
          <v-btn :loading="loader" class="lgNav" @click="moveToListing" variant="flat" color="pink-darken-2"
            prepend-icon="mdi-magnify" density="comfortable">SEARCH</v-btn>

          <v-btn :loading="loader" class="smNav pa-0" @click="moveToListing" variant="flat" color="pink-darken-2" density="comfortable">
            <v-icon size="20" icon="mdi-magnify"></v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>


<script lang="ts">
export default {
  data: () => ({
    loader: false,
    type: null,
    checklists: [
      {
        text: "Properties are digitally and physically verified by one ore more of our checkedspot representative such that you can save your time and be sure on what you are buying",
        icon: "mdi-clock",
      },
      {
        text: "Documents are verified by visiting the actual property owners along with our specialist legal team",
        icon: "mdi-account",
      },
      {
        text: "Any thing which our expert team finds as a warning its immediately flagged ",
        icon: "mdi-flag",
      },
    ],
    items: ["Bengaluru", "Hassan", "Mysuru"],
    select: ["Bengaluru", "Hassan"],
  }),
  methods: {
    moveToListing() {
      this.loader = true;
      this.$router.push({
        path: '/listing', query: {
          type: this.type,
          city: [...this.select],
        }
      });
    }

  }
};

</script>

<style scoped>
.putfilteronimage {
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(308deg);
}

.filterImage {
  width: 25px;
  height: 25px;
}

@media only screen and (max-width: 600px) {
  .lgNav {
    display: none;
  }

  .smNav {
    display: block;
  }
}

@media only screen and (min-width: 601px) {
  .lgNav {
    display: flex;
  }

  .smNav {
    display: none;
  }
}
</style>
