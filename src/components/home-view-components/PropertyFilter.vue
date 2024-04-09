<template>
  <v-row no-gutters class="d-flex justify-center align-center">
    <v-col cols="12">
      <v-card class="rounded-lg" elevation="8">
        <v-tabs v-model="type" show-arrows bg-color="white" color="#F8485E" class="mx-8 mt-4" height="auto">

          <v-tab value="" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/allProperty.svg" :class="[type === '' ? 'filterIcon' : '']" style="" alt="">
            <div class="text-caption pb-3">All Properties</div>
          </v-tab>

          <v-tab value="farmland" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/farmland.svg" :class="[type === 'farmland' ? 'filterIcon' : '']" style=""
              alt="">
            <div class="text-caption pb-3">Farmland</div>
          </v-tab>

          <v-tab value="plot" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/plot.svg" :class="[type === 'plot' ? 'filterIcon' : '']" style="" alt="">
            <div class="text-caption pb-3">Plot</div>
          </v-tab>

          <v-tab value="flat" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/flat.svg" :class="[type === 'flat' ? 'filterIcon' : '']" style="" alt="">
            <div class="text-caption pb-3">Flat</div>
          </v-tab>

          <v-tab value="apartment" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/apartment.svg" :class="[type === 'apartment' ? 'filterIcon' : '']" style=""
              alt="">
            <div class="text-caption pb-3">Apartment</div>
          </v-tab>

          <v-tab value="independentHouse" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/independentHouse.svg"
              :class="[type === 'independentHouse' ? 'filterIcon' : '']" style="" alt="">
            <div class="text-caption pb-3">Independent House</div>
          </v-tab>

          <v-tab value="commercialProperty" stacked min-width="100">
            <img src="../../assets/headerFiltersvg/commercialProperty.svg"
              :class="[type === 'commercialProperty' ? 'filterIcon' : '']" style="" alt="">
            <div class="text-caption pb-3">Commercial Property</div>
          </v-tab>

        </v-tabs>

        <v-card-text class="d-flex justify-space-between align-center px-4 py-0 mx-9 mt-4 mb-5 rounded"
          style="border:1px solid rgb(197, 195, 195); max-height: 50px;">
          <v-icon icon="mdi-map-marker" color="#C2185B" class="mr-2" size="24"></v-icon>
          <v-combobox v-model="select" :items="items" menu-icon="" chips variant="plain" multiple></v-combobox>
          
          <v-btn class="lgNav" @click="moveToListing" variant="flat" color="pink-darken-2" height="34px"
            prepend-icon="mdi-magnify" density="default">SEARCH</v-btn>

          <v-btn class="smNav pa-0" @click="moveToListing" variant="flat" color="pink-darken-2" height="34px"
            min-width="40" density="default">
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
.filterIcon {
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(308deg);
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
