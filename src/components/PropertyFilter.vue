<template>
  <div class="filterContainer">
    <v-row no-gutters>
      <v-col offset="2" cols="8">
        <v-card class="rounded-lg">
          <v-tabs v-model="tab" bg-color="white" class="mx-11 mt-4">
            <v-tab value="anyProperty">ANY PROPERTY</v-tab>
            <v-tab value="farmland">FARMLAND</v-tab>
            <v-tab value="plot">PLOTS</v-tab>
            <v-tab value="flat">FLATS</v-tab>
            <v-tab value="apartment">APARTMENT</v-tab>
            <v-tab value="independentHouse">INDEPENDENT HOUSES</v-tab>
          </v-tabs>

          <v-card-text class="pa-0 pb-2 pt-0">
            <v-container>
              <v-row no-gutters class="px-7">
                <v-col cols="12" class="d-flex justify-space-between align-center px-4 py-0 pl-4  rounded"
                  style="border:1px solid rgb(197, 195, 195)">
                  <v-icon icon="mdi-map-marker" class="mr-2" size="24"></v-icon>
                  <v-text-field placeholder="Enter Location" variant="plain" density="compact"
                    class="mr-5 mb-n3 placeholder-color"></v-text-field>

                  <v-btn variant="flat" color="deep-purple-lighten-2" height="34px" density="default">SEARCH</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script lang="ts">
export default {
  data: () => ({
    tab: null,
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
    justify: ["start", "center", "end", "space-around", "space-between"],
    select: ["Bangalore", "Hassan"],
    onlyCheckedSpots: true,
    newTask: null,
    areaFrom: null,
    areaTo: null,
    costFrom: null,
    costTo: null,
  }),
  methods: {
    moveToListing() {
      this.$router.push({
        path: '/listing', query: {
          isVerifiedByCheckedSpot: this.onlyCheckedSpots.toString(),
          city: this.select,
          costFrom: this.costFrom,
          costTo: this.costTo,
          areaFrom: this.areaFrom,
          areaTo: this.areaTo,
        }
      });
    }
  }
};
</script>


<style scoped>
.filterContainer {
  position: absolute;
  top: 360px;
  width: 100%;
}

.text-caption {
  text-align: center;
}

.theme--light.v-input.placeholder-color input::placeholder {
  color: green;
}
</style>
