<template>
  <div>
    <!-- Amenities -->
    <div class="mt-7">
      <p class="fieldheading">Amenities</p>

      <div class="checkboxGroup">
        <input
          type="checkbox"
          id="maintenanceStaff"
          class="checkboxInput"
          name="maintenanceStaff"
          value="Maintenance Staff"
          v-model="amenities.maintenanceStaff"
        />
        <label
          class="amenitiesLabel"
          for="maintenanceStaff"
          title="Maintenance Staff"
          >Maintenance Staff</label
        >

        <input
          type="checkbox"
          id="waterStorage"
          class="checkboxInput"
          name="waterStorage"
          value="Water Storage"
          v-model="amenities.waterStorage"
        />
        <label class="amenitiesLabel" for="waterStorage" title="Water Storage"
          >Water Storage</label
        >

        <input
          type="checkbox"
          id="rainWaterHarvesting"
          class="checkboxInput"
          name="rainWaterHarvesting"
          value="Rain Water Harvesting"
          v-model="amenities.rainWaterHarvesting"
        />
        <label
          class="amenitiesLabel"
          for="rainWaterHarvesting"
          title="Rain Water Harvesting"
          >Rain Water Harvesting</label
        >

        <input
          type="checkbox"
          id="vaastuCompliant"
          class="checkboxInput"
          name="vaastuCompliant"
          value="Vaastu Compliant"
          v-model="amenities.vaastuCompliant"
        />
        <label
          class="amenitiesLabel"
          for="vaastuCompliant"
          title="Vaastu Compliant"
          >Vaastu Compliant</label
        >
      </div>
    </div>

    <!-- Overlooking -->
    <div class="mt-7">
      <p class="fieldheading">Overlooking</p>

      <div class="checkboxGroup">
        <input
          type="checkbox"
          id="pool"
          class="checkboxInput"
          name="pool"
          value="Pool"
          v-model="amenities.pool"
        />
        <label class="overlookingLabel" for="pool" title="Swimming Pool"
          >Pool</label
        >

        <input
          type="checkbox"
          id="garden"
          class="checkboxInput"
          name="garden"
          value="Garden"
          v-model="amenities.garden"
        />
        <label class="overlookingLabel" for="garden" title="Garden"
          >Garden</label
        >

        <input
          type="checkbox"
          id="club"
          class="checkboxInput"
          name="club"
          value="Club"
          v-model="amenities.club"
        />
        <label class="overlookingLabel" for="club" title="Club">Club</label>

        <input
          type="checkbox"
          id="mainRoad"
          class="checkboxInput"
          name="mainRoad"
          value="Main Road"
          v-model="amenities.mainRoad"
        />
        <label class="overlookingLabel" for="mainRoad" title="Main Road"
          >Main Road</label
        >

        <input
          type="checkbox"
          id="others"
          class="checkboxInput"
          name="others"
          value="Others"
        />
        <label class="overlookingLabel" for="others" title="Others"
          >Others</label
        >
      </div>
    </div>

    <!-- Other Features -->
    <div class="mt-7">
      <p class="fieldheading">Other Features</p>

      <div class="checkboxGroup">
        <input
          type="checkbox"
          id="in_gated_society"
          class="checkboxInput"
          name="in_gated_society"
          value="In a gated society"
          v-model="amenities.isInGatedSociety"
        />
        <label
          class="otherFeaturesLabel"
          for="in_gated_society"
          title="In a gated society"
          >In a gated society</label
        >

        <input
          type="checkbox"
          id="cornerProperty"
          class="checkboxInput"
          name="cornerProperty"
          value="Corner Property"
          v-model="amenities.isCornerProperty"
        />
        <label
          class="otherFeaturesLabel"
          for="cornerProperty"
          title="Corner Property"
          >Corner Property</label
        >
      </div>
    </div>

    <!-- Property facing -->
    <div class="mt-8">
      <p class="fieldheading">Property Facing</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="north"
          class="radioInput"
          name="propertyFacing"
          value="North"
          v-model="propertyFacing"
        />
        <label class="propertyFacingLabel" for="north" title="north"
          >North</label
        >

        <input
          type="radio"
          id="south"
          class="radioInput"
          name="propertyFacing"
          value="South"
          v-model="propertyFacing"
        />
        <label class="propertyFacingLabel" for="south" title="South"
          >South</label
        >

        <input
          type="radio"
          id="east"
          class="radioInput"
          name="propertyFacing"
          value="East"
          v-model="propertyFacing"
        />
        <label class="propertyFacingLabel" for="east" title="East">East</label>

        <input
          type="radio"
          id="west"
          class="radioInput"
          name="propertyFacing"
          value="West"
          v-model="propertyFacing"
        />
        <label class="propertyFacingLabel" for="west" title="West">West</label>

        <input
          type="radio"
          id="northEast"
          class="radioInput"
          name="propertyFacing"
          value="North East"
          v-model="propertyFacing"
        />
        <label class="propertyFacingLabel" for="northEast" title="North East"
          >North East</label
        >

        <input
          type="radio"
          id="northWest"
          class="radioInput"
          name="propertyFacing"
          value="North West"
          v-model="propertyFacing"
        />
        <label class="propertyFacingLabel" for="northWest" title="North West"
          >North West</label
        >

        <input
          type="radio"
          id="southEast"
          class="radioInput"
          name="propertyFacing"
          value="South East"
          v-model="propertyFacing"
        />
        <label class="propertyFacingLabel" for="southEast" title="South East"
          >South East</label
        >

        <input
          type="radio"
          id="southWest"
          class="radioInput"
          name="propertyFacing"
          value="South West"
          v-model="propertyFacing"
        />
        <label class="propertyFacingLabel" for="southWest" title="South West"
          >South West</label
        >
      </div>
    </div>

    <!-- Width of facing road-->
    <div class="mt-8">
      <p class="fieldheading mb-4">Width of facing road</p>
      <v-row no-gutters class="">
        <v-col cols="8" class="pa-0 px-1">
          <v-text-field
            type="number"
            variant="outlined"
            label="Enter the width"
            v-model="facingRoadWidth"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0 px-1">
          <v-select
            :items="units"
            v-model="facingRoadWidthUnit"
            item-title="unit"
            label="Unit"
            persistent-hint
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
    </div>

    <!-- Location Advantage -->
    <div class="mt-7">
      <p class="fieldheading">Location Advantage</p>

      <div class="checkboxGroup">
        <input
          type="checkbox"
          id="metroStation"
          class="checkboxInput"
          name="metroStation"
          value="metroStation"
          v-model="amenities.nearMetroStation"
        />
        <label
          class="locationAdvantageLabel"
          for="metroStation"
          title="Close to metro station"
          >Close to metro station</label
        >

        <input
          type="checkbox"
          id="school"
          class="checkboxInput"
          name="school"
          value="school"
          v-model="amenities.nearSchool"
        />
        <label
          class="locationAdvantageLabel"
          for="school"
          title="Close to school"
          >Close to school</label
        >

        <input
          type="checkbox"
          id="hospital"
          class="checkboxInput"
          name="hospital"
          value="hospital"
          v-model="amenities.nearHospital"
        />
        <label
          class="locationAdvantageLabel"
          for="hospital"
          title="Close to hospital"
          >Close to hospital</label
        >

        <input
          type="checkbox"
          id="market"
          class="checkboxInput"
          name="market"
          value="market"
          v-model="amenities.nearMarket"
        />
        <label
          class="locationAdvantageLabel"
          for="market"
          title="Close to market"
          >Close to market</label
        >

        <input
          type="checkbox"
          id="busStand"
          class="checkboxInput"
          name="busStand"
          value="busStand"
          v-model="amenities.nearBusStand"
        />
        <label
          class="locationAdvantageLabel"
          for="busStand"
          title="Close to Bus Stand"
          >Close to bus stand</label
        >

        <input
          type="checkbox"
          id="railwayStation"
          class="checkboxInput"
          name="railwayStation"
          value="railwayStation"
          v-model="amenities.nearRailwayStation"
        />
        <label
          class="locationAdvantageLabel"
          for="railwayStation"
          title="Close to railway station"
          >Close to railway station</label
        >

        <input
          type="checkbox"
          id="airport"
          class="checkboxInput"
          name="airport"
          value="airport"
          v-model="amenities.nearAirport"
        />
        <label
          class="locationAdvantageLabel"
          for="airport"
          title="Close to airport"
          >Close to airport</label
        >

        <input
          type="checkbox"
          id="mall"
          class="checkboxInput"
          name="mall"
          value="mall"
          v-model="amenities.nearMall"
        />
        <label class="locationAdvantageLabel" for="mall" title="Close to mall"
          >Close to mall</label
        >

        <input
          type="checkbox"
          id="highway"
          class="checkboxInput"
          name="highway"
          value="highway"
          v-model="amenities.nearHighway"
        />
        <label
          class="locationAdvantageLabel"
          for="highway"
          title="Close to highway"
          >Close to highway</label
        >
      </div>
    </div>

    <!-- Continue button -->
    <div class="mt-10 d-flex justify-center">
      <v-btn
        @click="handleSubmit"
        append-icon="mdi-arrow-right-bold"
        variant="elevated"
        class="px-10 text-none text-body-1 elevation-4"
        height="48"
        color="#C2185B"
        :loading="loader"
        >Save and Submit</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
// @ts-ignore
import api from "@/data/api/index";
//@ts-ignore
import { convertToSqft, convertTofeet } from "@/composables/area";

const emits = defineEmits(["onContinue"]);
const router = useRouter();

const propertyData = ref();
const loader = ref(false);

const propertyFacing = ref("");
const facingRoadWidth = ref(0);
const units = ref(["feet", "meter", "yard"]);
const facingRoadWidthUnit = ref("feet");

const amenities = ref({
  maintenanceStaff: false,
  waterStorage: false,
  rainWaterHarvesting: false,
  vaastuCompliant: false,
  pool: false,
  garden: false,
  club: false,
  mainRoad: false,
  isInGatedSociety: false,
  isCornerProperty: false, // what is corner property
  nearMetroStation: false,
  nearSchool: false,
  nearHospital: false,
  nearMarket: false,
  nearBusStand: false,
  nearRailwayStation: false,
  nearAirport: false,
  nearButStand: false,
  nearMall: false,
  nearHighway: false,
});

function saveDataTolocalStorage() {
  propertyData.value.maintenanceStaff = amenities.value.maintenanceStaff;
  propertyData.value.waterStorage = amenities.value.waterStorage;
  propertyData.value.rainWaterHarvesting = amenities.value.rainWaterHarvesting;
  propertyData.value.vaastuCompliant = amenities.value.vaastuCompliant;
  propertyData.value.pool = amenities.value.pool;
  propertyData.value.garden = amenities.value.garden;
  propertyData.value.club = amenities.value.club;
  propertyData.value.mainRoad = amenities.value.mainRoad;
  propertyData.value.isInGatedSociety = amenities.value.isInGatedSociety;
  propertyData.value.isCornerProperty = amenities.value.isCornerProperty;
  propertyData.value.propertyFacing = propertyFacing.value;
  propertyData.value.facingRoadWidth = facingRoadWidth.value;
  propertyData.value.facingRoadWidthUnit = facingRoadWidthUnit.value;
  propertyData.value.nearMetroStation = amenities.value.nearMetroStation;
  propertyData.value.nearSchool = amenities.value.nearSchool;
  propertyData.value.nearHospital = amenities.value.nearHospital;
  propertyData.value.nearMarket = amenities.value.nearMarket;
  propertyData.value.nearBusStand = amenities.value.nearBusStand;
  propertyData.value.nearRailwayStation = amenities.value.nearRailwayStation;
  propertyData.value.nearAirport = amenities.value.nearAirport;
  propertyData.value.nearMall = amenities.value.nearMall;
  propertyData.value.nearHighway = amenities.value.nearHighway;

  localStorage.setItem("plotData", JSON.stringify(propertyData.value));

  propertyData.value.totalArea = convertToSqft(
    propertyData.value.totalAreaUnit,
    propertyData.value.totalArea
  );
  propertyData.value.facingRoadWidth = convertTofeet(
    facingRoadWidthUnit.value,
    facingRoadWidth.value
  );
  return propertyData.value;
}

async function handleSubmit() {
  loader.value = true;
  const postPropertyData = saveDataTolocalStorage();

  // deleting unit before sending data to backend because unit will be either sqft. for areas, and feet for length
  delete postPropertyData.totalAreaUnit;
  delete postPropertyData.facingRoadWidthUnit;

  // Submit data to Backend
  const res = await api.property.postProperty(propertyData.value);
  
  if (res.status === 200) {
    localStorage.removeItem("activeForm");
    localStorage.removeItem("plotData");

    //  Redirect user to the posted property's Details page.
    router.push(`/propertydetails/${res.data.propertyId}`);
  } else {
    alert("Property Posting Failed!");
  }
  loader.value = false;
}

onBeforeMount(() => {
  // @ts-ignore
  propertyData.value = JSON.parse(localStorage.getItem("plotData"));

  if (propertyData.value) {
    amenities.value.maintenanceStaff = propertyData.value.maintenanceStaff;
    amenities.value.waterStorage = propertyData.value.waterStorage;
    amenities.value.rainWaterHarvesting =
      propertyData.value.rainWaterHarvesting;
    amenities.value.vaastuCompliant = propertyData.value.vaastuCompliant;
    amenities.value.pool = propertyData.value.pool;
    amenities.value.garden = propertyData.value.garden;
    amenities.value.club = propertyData.value.club;
    amenities.value.mainRoad = propertyData.value.mainRoad;
    amenities.value.isInGatedSociety = propertyData.value.isInGatedSociety;
    amenities.value.isCornerProperty = propertyData.value.isCornerProperty;
    propertyFacing.value = propertyData.value.propertyFacing;
    facingRoadWidth.value = propertyData.value.facingRoadWidth;
    facingRoadWidthUnit.value = propertyData.value.facingRoadWidthUnit;
    amenities.value.nearMetroStation = propertyData.value.nearMetroStation;
    amenities.value.nearSchool = propertyData.value.nearSchool;
    amenities.value.nearHospital = propertyData.value.nearHospital;
    amenities.value.nearMarket = propertyData.value.nearMarket;
    amenities.value.nearBusStand = propertyData.value.nearBusStand;
    amenities.value.nearRailwayStation = propertyData.value.nearRailwayStation;
    amenities.value.nearAirport = propertyData.value.nearAirport;
    amenities.value.nearMall = propertyData.value.nearMall;
    amenities.value.nearHighway = propertyData.value.nearHighway;
  }
});

onMounted(() => {});
</script>

<style scoped>
.heading {
  font-size: 26px;
}
.fieldheading {
  font-size: 18px;
  margin-bottom: 10px;
}

.radioGroup,
.checkboxGroup {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 5px;
}
.radioInput,
.checkboxInput {
  display: none;
}
.radioInput + label,
.checkboxInput + label {
  font-size: 15px;
  text-align: center;
  margin: 5px 15px 5px 0;
  border: solid 1px rgb(100, 100, 100);
  color: rgb(100, 100, 100);
  padding: 4px 0;
  border-radius: 20px;
}
.radioInput + label.propertyFacingLabel {
  width: 100px;
}
.checkboxInput + label.amenitiesLabel,
.checkboxInput + label.overlookingLabel,
.checkboxInput + label.otherFeaturesLabel,
.checkboxInput + label.locationAdvantageLabel {
  width: auto;
  padding: 4px 15px;
}
.radioInput + label:hover,
.checkboxInput + label:hover {
  cursor: pointer;
}
.radioInput:checked + label,
.checkboxInput:checked + label {
  background-color: #c2185b;
  border-color: #c2185b;
  color: white;
}
</style>