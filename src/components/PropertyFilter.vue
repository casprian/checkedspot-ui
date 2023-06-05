<template>
  <div class="propertyFilter">
    <v-row no-gutters class="d-flex justify-center align-center">
      <v-col cols="11" sm="8">
        <v-card class="rounded-lg">
          <v-tabs v-model="type" bg-color="white" class="mx-11 mt-4">
            <v-tab value="">ANY PROPERTY</v-tab>
            <v-tab value="farmland">FARMLAND</v-tab>
            <v-tab value="plot">PLOTS</v-tab>
            <v-tab value="flat">FLATS</v-tab>
            <v-tab value="apartment">APARTMENT</v-tab>
            <v-tab value="independentHouse">INDEPENDENT HOUSES</v-tab>
          </v-tabs>

          <v-card-text class="d-flex justify-space-between align-center pl-4 pr-4 py-0 mx-10 mt-4 mb-5 rounded" style="border:1px solid rgb(197, 195, 195); max-height: 55px;">
            <v-icon icon="mdi-map-marker" class="mr-2" size="24"></v-icon>
            <v-combobox v-model="select" :items="items" menu-icon="" chips variant="plain" multiple></v-combobox>
            <v-btn @click="moveToListing" variant="flat" color="deep-purple-lighten-2" height="34px" density="default">SEARCH</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script lang="ts">
export default {
  data: () => ({
    type: null,
    panel: [1],
    value: [1000, 5000],
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
    items: ["Bangalore", "Hassan", "Mysore"],
    select: ["Bangalore", "Hassan"],
  }),
  methods: {
    moveToListing() {
      console.log(this.select, this.type)
      this.$router.push({
        path: '/listing', query: {
          type: this.type,
          city: this.select,
        }
      });
    }
  }
};
</script>


<style scoped>
.propertyFilter {
  position: absolute;
  bottom: -80px;
  width: 100%;
}
</style>
