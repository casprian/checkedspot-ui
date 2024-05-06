<template>
  <div>
    <!-- Amenities -->
    <div class="mt-8">
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
          id="securityOrFireAlarm"
          class="checkboxInput"
          name="securityOrFireAlarm"
          value="securityOrFireAlarm"
          v-model="amenities.securityOrFireAlarm"
        />
        <label
          class="amenitiesLabel"
          for="securityOrFireAlarm"
          title="Security / Fire Alarm"
          >Security / Fire Alarm</label
        >

        <input
          type="checkbox"
          id="visitorParking"
          class="checkboxInput"
          name="visitorParking"
          value="Visitor Parking"
          v-model="amenities.visitorParking"
        />
        <label
          class="amenitiesLabel"
          for="visitorParking"
          title="Visitor Parking"
          >Visitor Parking</label
        >

        <input
          type="checkbox"
          id="vaastuCompliant"
          class="checkboxInput"
          name="vaastuCompliant"
          value="Vaastu Compliant"
          v-model="amenities.vaastuComplaint"
        />
        <label
          class="amenitiesLabel"
          for="vaastuCompliant"
          title="Vaastu Compliant"
          >Vaastu Compliant</label
        >

        <input
          type="checkbox"
          id="intercomFacility"
          class="checkboxInput"
          name="intercomFacility"
          value="Intercom Facility"
          v-model="amenities.intercomFacility"
        />
        <label
          class="amenitiesLabel"
          for="intercomFacility"
          title="Intercom Facility"
          >Intercom Facility</label
        >

        <input
          type="checkbox"
          id="elevator"
          class="checkboxInput"
          name="elevator"
          value="elevator"
          v-model="amenities.elevator"
        />
        <label class="amenitiesLabel" for="elevator" title="Elevator/Lift"
          >Elevator/Lift</label
        >

        <input
          type="checkbox"
          id="park"
          class="checkboxInput"
          name="park"
          value="park"
          v-model="amenities.park"
        />
        <label class="amenitiesLabel" for="park" title="Park">Park</label>
      </div>
    </div>

    <!-- Additional Features -->
    <div class="mt-8">
      <p class="fieldheading">Additional Features</p>

      <div class="checkboxGroup">
        <input
          type="checkbox"
          id="seperateServentRoomEntry"
          class="checkboxInput"
          name="seperateServentRoomEntry"
          value="Seperate Servent Room Entry"
          v-model="amenities.seperateServentRoomEntry"
        />
        <label
          class="additionalFeaturesLabel"
          for="seperateServentRoomEntry"
          title="Seperate Servent Room Entry"
          >Seperate Servent Room Entry</label
        >

        <input
          type="checkbox"
          id="wasteDisposal"
          class="checkboxInput"
          name="wasteDisposal"
          value="Waste Disposal"
          v-model="amenities.wasteDisposal"
        />
        <label
          class="additionalFeaturesLabel"
          for="wasteDisposal"
          title="Waste Disposal"
          >Waste Disposal</label
        >

        <input
          type="checkbox"
          id="openDrainageAround"
          class="checkboxInput"
          name="openDrainageAround"
          value="Open Drainage Around"
          v-model="amenities.openDrainageAround"
        />
        <label
          class="additionalFeaturesLabel"
          for="openDrainageAround"
          title="Open Drainage Around"
          >Open Drainage Around</label
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
          class="additionalFeaturesLabel"
          for="rainWaterHarvesting"
          title="Rain Water Harvesting"
          >Rain Water Harvesting</label
        >

        <input
          type="checkbox"
          id="bankAttachedProperty"
          class="checkboxInput"
          name="bankAttachedProperty"
          value="Bank Attached Property"
          v-model="amenities.vaastuComplaint"
        />
        <label
          class="additionalFeaturesLabel"
          for="bankAttachedProperty"
          title="Bank Attached Property"
          >Bank Attached Property</label
        >

        <input
          type="checkbox"
          id="lowDenseSociety"
          class="checkboxInput"
          name="lowDenseSociety"
          value="Low Dense Society"
          v-model="amenities.lowDenseSociety"
        />
        <label
          class="additionalFeaturesLabel"
          for="lowDenseSociety"
          title="Low Dense Society"
          >Low Dense Society</label
        >
      </div>
    </div>

    <!-- Society/ Building feature -->
    <div class="mt-8">
      <p class="fieldheading">Society/ Building feature</p>
      <div></div>
    </div>

    <!-- Water Source -->
    <div class="mt-8">
      <p class="fieldheading">Water Source</p>

      <div class="checkboxGroup">
        <input
          type="checkbox"
          id="municipalCorporationWaterSupply"
          class="checkboxInput"
          name="municipalCorporationWaterSupply"
          value="Municipal Corporation"
          v-model="amenities.municipalCorporationWaterSupply"
        />
        <label
          class="additionalFeaturesLabel"
          for="municipalCorporationWaterSupply"
          title="Municipal Corporation"
          >Municipal Corporation</label
        >

        <input
          type="checkbox"
          id="borewell"
          class="checkboxInput"
          name="borewell"
          value="Borewell"
          v-model="amenities.borewell"
        />
        <label class="additionalFeaturesLabel" for="borewell" title="Borewell"
          >Borewell</label
        >

        <input
          type="checkbox"
          id="twentyFourBySevenWater"
          class="checkboxInput"
          name="twentyFourBySevenWater"
          value="twentyFourBySevenWater"
          v-model="amenities.twentyFourBySevenWater"
        />
        <label
          class="additionalFeaturesLabel"
          for="twentyFourBySevenWater"
          title="24*7 Water Available"
          >24*7 Water</label
        >
      </div>
    </div>

    <!-- Overlooking -->
    <div class="mt-8">
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
        <label class="overlookingLabel" for="park_garden" title="Garden"
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
      </div>
    </div>

    <!-- Other Features -->
    <div class="mt-8">
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

        <input
          type="checkbox"
          id="isPetFriendly"
          class="checkboxInput"
          name="isPetFriendly"
          value="Pet Friendly"
          v-model="amenities.isPetFriendly"
        />
        <label
          class="otherFeaturesLabel"
          for="isPetFriendly"
          title="Pet Friendly"
          >Pet Friendly</label
        >

        <input
          type="checkbox"
          id="isWheelchairFriendly"
          class="checkboxInput"
          name="isWheelchairFriendly"
          value="Wheelchair Friendly"
          v-model="amenities.isWheelchairFriendly"
        />
        <label
          class="otherFeaturesLabel"
          for="isWheelchairFriendly"
          title="Wheelchair Friendly"
          >Wheelchair Friendly</label
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

    <!-- Power Back-up -->
    <div class="mt-8">
      <p class="fieldheading">Power Back-up</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="nobackup"
          class="radioInput"
          name="powerBackup"
          value="none"
          v-model="powerBackup"
        />
        <label class="powerBackupLabel" for="nobackup" title="No backup"
          >None</label
        >

        <input
          type="radio"
          id="partial"
          class="radioInput"
          name="powerBackup"
          value="partial"
          v-model="powerBackup"
        />
        <label class="powerBackupLabel" for="partial" title="Partial Back-Up"
          >Partial</label
        >

        <input
          type="radio"
          id="fullbackup"
          class="radioInput"
          name="powerBackup"
          value="full"
          v-model="powerBackup"
        />
        <label class="powerBackupLabel" for="fullbackup" title="Full Back-Up"
          >full</label
        >
      </div>
    </div>

    <!-- Property Features -->
    <div class="mt-8">
      <p class="fieldheading">Property Features</p>

      <div class="checkboxGroup">
        <input
          type="checkbox"
          id="highCeilingHeight"
          class="checkboxInput"
          name="highCeilingHeight"
          value="High Ceiling Height"
          v-model="amenities.highCeilingHeight"
        />
        <label
          class="propFeatureLabel"
          for="highCeilingHeight"
          title="High Ceiling Height"
          >High Ceiling Height</label
        >

        <input
          type="checkbox"
          id="falseCeilingLighting"
          class="checkboxInput"
          name="falseCeilingLighting"
          value="False Ceiling Lighting"
          v-model="amenities.falseCeilingLighting"
        />
        <label
          class="propFeatureLabel"
          for="falseCeilingLighting"
          title="False Ceiling Lighting"
          >False Ceiling Lighting</label
        >

        <input
          type="checkbox"
          id="gasPipeline"
          class="checkboxInput"
          name="gasPipeline"
          value="Gas Pipeline"
          v-model="amenities.gasPipeline"
        />
        <label class="propFeatureLabel" for="gasPipeline" title="Gas Pipeline"
          >Gas Pipeline</label
        >

        <input
          type="checkbox"
          id="wifi"
          class="checkboxInput"
          name="wifi"
          value="wifi"
          v-model="amenities.wifi"
        />
        <label class="propFeatureLabel" for="wifi" title="Wi-Fi">Wi-Fi</label>

        <input
          type="checkbox"
          id="centralizedAirConditioning"
          class="checkboxInput"
          name="centralizedAirConditioning"
          value="Centralized Air Conditioning"
          v-model="amenities.centralizedAirConditioning"
        />
        <label
          class="propFeatureLabel"
          for="centralizedAirConditioning"
          title="Centralized Air Conditioning"
          >Centralized Air Conditioning</label
        >

        <input
          type="checkbox"
          id="waterPurifier"
          class="checkboxInput"
          name="waterPurifier"
          value="Water Purifier"
          v-model="amenities.waterPurifier"
        />
        <label
          class="propFeatureLabel"
          for="waterPurifier"
          title="Water Purifier"
          >Water Purifier</label
        >

        <input
          type="checkbox"
          id="recentlyRenovated"
          class="checkboxInput"
          name="recentlyRenovated"
          value="Recently Renovated"
          v-model="amenities.recentlyRenovated"
        />
        <label
          class="propFeatureLabel"
          for="recentlyRenovated"
          title="Recently Renovated"
          >Recently Renovated</label
        >

        <input
          type="checkbox"
          id="privateGarden"
          class="checkboxInput"
          name="privateGarden"
          value="Private Garden"
          v-model="amenities.privateGarden"
        />
        <label
          class="propFeatureLabel"
          for="privateGarden"
          title="Private Garden"
          >Private Garden</label
        >

        <input
          type="checkbox"
          id="naturalLight"
          class="checkboxInput"
          name="naturalLight"
          value="Natural Light"
          v-model="amenities.naturalLight"
        />
        <label class="propFeatureLabel" for="naturalLight" title="Natural Light"
          >Natural Light</label
        >

        <input
          type="checkbox"
          id="airyRooms"
          class="checkboxInput"
          name="airyRooms"
          value="Airy Rooms"
          v-model="amenities.airyRooms"
        />
        <label class="propFeatureLabel" for="airyRooms" title="Airy Rooms"
          >Airy Rooms</label
        >

        <input
          type="checkbox"
          id="spaciousInterior"
          class="checkboxInput"
          name="spaciousInterior"
          value="Spacious Interior"
          v-model="amenities.spaciousInterior"
        />
        <label
          class="propFeatureLabel"
          for="spaciousInterior"
          title="Spacious Interior"
          >Spacious Interior</label
        >
      </div>
    </div>

    <!-- Flooring Type -->
    <div class="mt-8">
      <p class="fieldheading mb-4">Width of facing road</p>
      <v-row no-gutters class="">
        <v-col cols="12" class="pa-0 px-1">
          <v-combobox
            variant="outlined"
            v-model="flooringType"
            :items="flooringTypes"
            label="Choose Flooring Types used."
            multiple
          ></v-combobox>
        </v-col>
      </v-row>
    </div>

    <!-- Width of facing road-->
    <div class="mt-8">
      <p class="fieldheading mb-4">Width of facing road</p>
      <v-row no-gutters class="">
        <v-col cols="8" class="pa-0 px-1">
          <v-text-field
            variant="outlined"
            label="Enter the width"
            v-model="facingRoadWidth"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0 px-1">
          <v-select
            :items="units"
            item-title="unit"
            label="Unit"
            persistent-hint
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
    </div>

    <!-- Location Advantage -->
    <div class="mt-8">
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
        @click="router.push({ path: '/postproperty/amenities' })"
        append-icon="mdi-arrow-right-bold"
        variant="elevated"
        class="px-10 text-none text-body-1 elevation-4"
        height="48"
        color="#C2185B"
        >Save and Submit</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const propertyData = ref();

const powerBackup = ref("");
const propertyFacing = ref("");
const facingRoadWidth = ref(0);
const flooringType = ref([]);
const flooringTypes = ref([
  "Cement or lime concrete",
  "Bricks",
  "Flagstones",
  "marble",
  "Glass",
  "Ceramic",
  "Plastic",
  "Mud and murram",
  "Wood",
  "Cork",
  "Linoleum",
  "Asphalt",
  "Rubber",
]);
const units = ref(["feet", "meter", "yard"]);

const amenities = ref({
  maintenanceStaff: false,
  waterStorage: false,
  securityOrFireAlarm: false,
  visitorParking: false,
  vaastuComplaint: false,
  park: false,
  intercomFacility: false,
  securityGuard: false,
  seperateServentRoomEntry: false,
  wasteDisposal: false,
  openDrainageAround: false,
  rainWaterHarvesting: false,
  bankAttachedProperty: false,
  lowDenseSociety: false,
  gym: false,
  municipalCorporationWaterSupply: false,
  borewell: false,
  twentyFourBySevenWater: false,
  pool: false,
  garden: false,
  club: false,
  mainRoad: false,
  isInGatedSociety: false,
  isCornerProperty: false,
  isPetFriendly: false,
  isWheelchairFriendly: false,
  highCeilingHeight: false,
  falseCeilingLighting: false,
  gasPipeline: false,
  wifi: false,
  centralizedAirConditioning: false,
  waterPurifier: false,
  recentlyRenovated: false,
  privateGarden: false,
  naturalLight: false,
  airyRooms: false,
  spaciousInterior: false,
  nearMetroStation: false,
  nearSchool: false,
  nearHospital: false,
  nearMarket: false,
  nearRailwayStation: false,
  nearAirport: false,
  nearButStand: false,
  nearMall: false,
  nearHighway: false,
});

function handleSubmit() {
  // Submit data to Backend
  // ON SUCCESS -> remove 'activeForm' and 'faltData' from sessionStorage and redirect user to the posted property's Details page.
  // ON Failure -> Save Data of flatOrApartmentAmenities in the 'flatData' and keep control on this page
  // and show errors according to the status code or accordingly.
}

onBeforeMount(() => {});

onMounted(() => []);
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
  border: solid 1px #000000;
  padding: 4px 0;
  border-radius: 20px;
}
.radioInput + label.furnishedStatusLabel,
.radioInput + label.parkingLabel,
.radioInput + label.propertyFacingLabel,
.radioInput + label.powerBackupLabel {
  width: auto;
  padding: 4px 15px;
}
.checkboxInput + label.otherRoomLabel,
.checkboxInput + label.amenitiesLabel,
.checkboxInput + label.propFeatureLabel,
.checkboxInput + label.additionalFeaturesLabel,
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