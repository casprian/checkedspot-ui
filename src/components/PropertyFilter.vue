<template>
  <div class="filterContainer">
    <v-row>
      <v-col offset="2" cols="8">
        <v-expansion-panels :multiple="true" v-model="panel">
          <v-expansion-panel class="mb-4" :expanded="true">
            <v-expansion-panel-title>
              Want to know more about checked spot ?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-sheet elevation="12" rounded="lg" width="100%" class="pa-10 text-left mx-auto">
                <v-icon class="mb-5" color="success" icon="mdi-check-circle" size="112"></v-icon>

                <h5 class="text-h5 mb-6">
                  Checked Spots are those properties which are not just those
                  properties posted in web but they are
                </h5>

                <v-card class="mx-auto pl-10 pr-10 mb-10">
                  <v-list density="compact">
                    <h2>Validated, Verified and Quality Ensured</h2>

                    <v-list-item v-for="(item, i) in checklists" :key="i" :value="item" active-color="primary">
                      <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                      </template>

                      <div v-html="item.text"></div>
                    </v-list-item>
                  </v-list>
                </v-card>

                <p class="mb-4 text-medium-emphasis text-body-2">
                  To see a sample report on each of property listed is verified
                  wou can click here to see a
                  <a href="#">Sample Report - Checked Spot</a>

                  <br />

                  Otherwise, you're done!
                </p>
              </v-sheet>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-btn class="bg-red"> Click Me </v-btn> &nbsp; To Filter
              Properties from thousands of available options
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-container class="bg-primary">
                <v-card>
                  <v-row>
                    <v-col cols="4" offset="5">
                      <v-switch v-model="onlyCheckedSpots" label="Only Checked Spots" color="red" :value="true"
                        hide-details />
                    </v-col>
                  </v-row>
                  <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                    <v-tab :value="1">Any Property</v-tab>
                    <v-tab :value="2" disabled>Farm Land</v-tab>
                    <v-tab :value="3" disabled>Plots</v-tab>
                    <v-tab  :value="4" disabled>Apartment</v-tab>
                    <v-tab disabled :value="5">Independent Houses</v-tab>
                  </v-tabs>
                  <v-window v-model="tab">
                    <v-window-item v-for="n in 3" :key="n" :value="n">
                      <v-container fluid>
                        <v-row>
                          <v-col cols="12">
                            <v-combobox v-model="select" :items="items" label="Location" variant="outlined" multiple>
                              
                            </v-combobox>
                          </v-col>
                          <v-row>
                            <v-col cols="6">
                              <v-row>
                                <v-col cols="12">
                                  <div class="text-caption">
                                    Area In Square Feet
                                  </div>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field clearable label="Min(Sq/Ft)" prepend-icon="mdi-vuetify" variant="outlined"
                                    v-model="areaFrom">
                                  </v-text-field>

                                  <v-text-field clearable label="Max(Sq/Ft)" prepend-icon="mdi-vuetify" variant="outlined"
                                    v-model="areaTo">
                                  </v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                            <v-col cols="6">
                              <v-row>
                                <v-col cols="12">
                                  <div class="text-caption">Budget</div>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field clearable label="Min" prepend-icon="mdi-vuetify" variant="outlined"
                                    v-model="costFrom">
                                  </v-text-field>

                                  <v-text-field clearable label="Max" prepend-icon="mdi-vuetify" variant="outlined"
                                    v-model="costTo">
                                  </v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-row>
                      </v-container>
                    </v-window-item>
                  </v-window>
                  <v-card-actions>
                    <v-btn @click="moveToListing" class="bg-primary">Search Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-container>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
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
    select: ["Bangalore","Hassan"],
    onlyCheckedSpots: true,
    newTask: null,
    areaFrom: null,
    areaTo: null,
    costFrom: null,
    costTo: null,
  }),
  methods: {
    moveToListing() {
      this.$router.push({path: '/listing', query: {
        isVerifiedByCheckedSpot: this.onlyCheckedSpots.toString(),
        city: this.select[0],
        costFrom: this.costFrom,
        costTo: this.costTo,
        areaFrom: this.areaFrom,
        areaTo: this.areaTo,
      }});
    }
  }
};
</script>


<style scoped>
.filterContainer {
  position: absolute;
  top: 100px;
  width: 100%;
}

.text-caption {
  text-align: center;
}
</style>
