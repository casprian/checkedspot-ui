<template>
  <div>
    <!-- Other rooms (Optional) -->
    <div class="mt-10">
      <p class="fieldheading">Other rooms <i>(Optional)</i></p>

      <div class="checkboxGroup">
        <span v-for="room in rooms" :key="room.inputId" class="mb-3">
          <input
            type="checkbox"
            :id="room.inputId"
            class="checkboxInput"
            name="otherRoom"
            :value="room.value"
            @change="handleOtherRooms"
          />
          <label
            class="otherRoomLabel"
            :for="room.inputId"
            :title="room.labelTitle"
            >{{ room.labelTitle }}</label
          >
        </span>
      </div>

      <!-- Add More Room -->
      <div>
        <button
          class="mt-2 text-pink-darken-2"
          @click="() => (addMoreRooms = !addMoreRooms)"
        >
          <v-icon
            class="mt-n1"
            icon="mdi-plus-circle-outline"
            size="18"
          ></v-icon>
          Add Rooms
        </button>

        <v-row no-gutters class="pa-0 d-flex align-center" v-if="addMoreRooms">
          <v-col cols="8" class="pa-0 px-1">
            <v-text-field
              class="mt-4"
              label="Enter room name"
              variant="outlined"
              v-model="newRoom"
            >
            </v-text-field>
          </v-col>
          <v-col cols="4" class="pa-0 px-1 mt-n2">
            <v-btn
              @click="addRoomHandler"
              :disabled="!newRoom"
              color="pink-darken-2"
              height="55"
              width="100%"
              class="text-none text-body-1"
              >Add Room</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- Furnishing (optional) -->
    <div class="mt-7">
      <p class="fieldheading">Furnishing <i>(optional)</i></p>

      <div class="radioGroup">
        <input
          type="radio"
          id="furnished"
          class="radioInput"
          name="furnishedStatus"
          value="furnished"
          v-model="furnishedStatus"
        />
        <label class="furnishedStatusLabel" for="furnished" title="Furnished"
          >Furnished</label
        >

        <input
          type="radio"
          id="semiFurnished"
          class="radioInput"
          name="furnishedStatus"
          value="semiFurnished"
          v-model="furnishedStatus"
        />
        <label
          class="furnishedStatusLabel"
          for="semiFurnished"
          title="Semi-Furnished"
          >Semi-Furnished</label
        >

        <input
          type="radio"
          id="unFurnished"
          class="radioInput"
          name="furnishedStatus"
          value="unFurnished"
          v-model="furnishedStatus"
        />
        <label
          class="furnishedStatusLabel"
          for="unFurnished"
          title="Un-Furnished"
          >Un-Furnished</label
        >
      </div>

      <!-- Show if furnished status is full or semi furnushed  -->
      <v-expand-transition>
        <v-card
          v-show="expand"
          class="mx-auto pa-7"
          elevation="4"
          height="auto"
          width="100%"
        >
          <p class="text-body-1 mb-5">
            Choose Furnishings available in the property.
          </p>

          <v-row no-gutters>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Lights"
                v-model="amenities.light"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Fans"
                v-model="amenities.fan"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="AC"
                v-model="amenities.ac"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="TV"
                v-model="amenities.tv"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Beds"
                v-model="amenities.bed"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Wardrobe"
                v-model="amenities.wardrobe"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Geyser"
                v-model="amenities.geyser"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Sofa"
                v-model="amenities.sofa"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Washing Machine"
                v-model="amenities.washingMachine"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Stove"
                v-model="amenities.stove"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Microwave"
                v-model="amenities.microwave"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Modular Kitchen"
                v-model="amenities.modularKitchen"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Chimney"
                v-model="amenities.chimney"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Curtains"
                v-model="amenities.curtain"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="checkheight pa-0">
              <v-checkbox
                class="pa-0"
                label="Exhaust Fan"
                v-model="amenities.exhaustFan"
                :false-value="false"
                :true-value="true"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-card>
      </v-expand-transition>
    </div>

    <!-- Parking Available -->
    <div class="mt-7">
      <p class="fieldheading">Parking Available</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="parking"
          class="radioInput"
          name="parking"
          :value="true"
          v-model="parking"
        />
        <label class="parkingLabel" for="parking" title="Parking Available"
          >Yes</label
        >

        <input
          type="radio"
          id="noparking"
          class="radioInput"
          name="parking"
          :value="false"
          v-model="parking"
        />
        <label class="parkingLabel" for="noparking" title="no parking"
          >No</label
        >
      </div>
    </div>

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
          v-model="amenities.vaastuCompliant"
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

    <!-- Property Features -->
    <div class="mt-7">
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

    <!-- Additional Features -->
    <div class="mt-7">
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
          v-model="amenities.bankAttachedProperty"
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

    <!-- Water Source -->
    <div class="mt-7">
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

    <!-- Power Back-up -->
    <div class="mt-7">
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
        >Save and Submit</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, ref, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
// @ts-ignore
import { convertToSqft, convertTofeet } from "@/composables/area";

const emits = defineEmits(['onContinue'])
const router = useRouter();

const propertyData = ref();

const furnishedStatus = ref("");
const expand = ref(false);
watch(furnishedStatus, (status) => {
  if (status !== "unFurnished") {
    expand.value = true;
  } else {
    expand.value = false;
  }
});
const parking = ref(false);
const powerBackup = ref("");
const propertyFacing = ref("");
const facingRoadWidth = ref(0);
const units = ref(["feet", "meter", "yard"]);
const facingRoadWidthUnit = ref("feet");
const flooringTypes = ref([
  "Cement or lime concrete",
  "Polished concrete",
  "Bricks",
  "Granite",
  "stone",
  "marble",
  "Glass",
  "Mosaic",
  "Vinyl",
  "Ceramic",
  "Plastic",
  "Mud and murram",
  "Wood",
  "Cork",
  "Linoleum",
  "Asphalt",
  "Rubber",
  "IPSFinish",
  "Vitrified",
  "Spartex",
]);
const flooringType = ref([]);

const amenities = ref({
  parking: false,
  maintenanceStaff: false,
  waterStorage: false,
  securityOrFireAlarm: false,
  visitorParking: false,
  vaastuCompliant: false,
  park: false,
  garden: false,
  intercomFacility: false,
  elevator: false,
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
  seperateServentRoomEntry: false,
  wasteDisposal: false,
  openDrainageAround: false,
  rainWaterHarvesting: false,
  bankAttachedProperty: false,
  lowDenseSociety: false,
  municipalCorporationWaterSupply: false,
  borewell: false,
  twentyFourBySevenWater: false,
  pool: false,
  club: false,
  mainRoad: false,
  isInGatedSociety: false,
  isCornerProperty: false,
  isPetFriendly: false,
  isWheelchairFriendly: false,
  nearMetroStation: false,
  nearSchool: false,
  nearHospital: false,
  nearMarket: false,
  nearRailwayStation: false,
  nearAirport: false,
  nearBusStand: false,
  nearMall: false,
  nearHighway: false,
  // Furnished addons
  light: false,
  fan: false,
  ac: false,
  tv: false,
  bed: false,
  wardrobe: false,
  geyser: false,
  refrigerator: false,
  sofa: false,
  washingMachine: false,
  stove: false,
  microwave: false,
  modularKitchen: false,
  chimney: false,
  curtain: false,
  exhaustFan: false,
});

// Other Rooms
const rooms = ref([
  {
    inputId: "poojaRoom",
    value: true,
    labelTitle: "Pooja Room",
  },
  {
    inputId: "studyRoom",
    value: true,
    labelTitle: "Study Room",
  },
  {
    inputId: "servantRoom",
    value: true,
    labelTitle: "Servant Room",
  },
  {
    inputId: "stoorRoom",
    value: true,
    labelTitle: "Stoor Room",
  },
]);
const otherRooms = ref([]);
const addMoreRooms = ref(false);
const newRoom = ref("");
function handleOtherRooms(event: any) {
  event.stopPropagation();
  if (event.target.checked) {
    const index = rooms.value.findIndex(
      // @ts-ignore
      (item) => item.inputId === event.target.id
    );
    // @ts-ignore
    otherRooms.value.push(rooms.value[index]);
  } else {
    const index = otherRooms.value.findIndex(
      // @ts-ignore
      (item) => item.inputId === event.target.id
    );
    otherRooms.value.splice(index, 1);
  }
}
function addRoomHandler() {
  rooms.value.push({
    inputId: newRoom.value,
    value: true,
    labelTitle: newRoom.value,
  });
  addMoreRooms.value = false;
  newRoom.value = "";
}

function saveDataTolocalStorage() {
  propertyData.value.maintenanceStaff = amenities.value.maintenanceStaff;
  propertyData.value.waterStorage = amenities.value.waterStorage;
  propertyData.value.securityOrFireAlarm = amenities.value.securityOrFireAlarm;
  propertyData.value.visitorParking = amenities.value.visitorParking;
  propertyData.value.vaastuCompliant = amenities.value.vaastuCompliant;
  propertyData.value.park = amenities.value.park;
  propertyData.value.garden = amenities.value.garden;
  propertyData.value.intercomFacility = amenities.value.intercomFacility;
  propertyData.value.elevator = amenities.value.elevator;
  propertyData.value.highCeilingHeight = amenities.value.highCeilingHeight;
  propertyData.value.falseCeilingLighting =
    amenities.value.falseCeilingLighting;
  propertyData.value.gasPipeline = amenities.value.gasPipeline;
  propertyData.value.wifi = amenities.value.wifi;
  propertyData.value.centralizedAirConditioning =
    amenities.value.centralizedAirConditioning;
  propertyData.value.waterPurifier = amenities.value.waterPurifier;
  propertyData.value.recentlyRenovated = amenities.value.recentlyRenovated;
  propertyData.value.privateGarden = amenities.value.privateGarden;
  propertyData.value.naturalLight = amenities.value.naturalLight;
  propertyData.value.airyRooms = amenities.value.airyRooms;
  propertyData.value.spaciousInterior = amenities.value.spaciousInterior;
  propertyData.value.seperateServentRoomEntry =
    amenities.value.seperateServentRoomEntry;
  propertyData.value.wasteDisposal = amenities.value.wasteDisposal;
  propertyData.value.openDrainageAround = amenities.value.openDrainageAround;
  propertyData.value.rainWaterHarvesting = amenities.value.rainWaterHarvesting;
  propertyData.value.bankAttachedProperty =
    amenities.value.bankAttachedProperty;
  propertyData.value.lowDenseSociety = amenities.value.lowDenseSociety;
  propertyData.value.municipalCorporationWaterSupply =
    amenities.value.municipalCorporationWaterSupply;
  propertyData.value.borewell = amenities.value.borewell;
  propertyData.value.twentyFourBySevenWater =
    amenities.value.twentyFourBySevenWater;
  propertyData.value.twentyFourBySevenWater =
    amenities.value.twentyFourBySevenWater;
  propertyData.value.pool = amenities.value.pool;
  propertyData.value.club = amenities.value.club;
  propertyData.value.mainRoad = amenities.value.mainRoad;
  propertyData.value.isInGatedSociety = amenities.value.isInGatedSociety;
  propertyData.value.isCornerProperty = amenities.value.isCornerProperty;
  propertyData.value.isPetFriendly = amenities.value.isPetFriendly;
  propertyData.value.isWheelchairFriendly =
    amenities.value.isWheelchairFriendly;
  propertyData.value.furnishedStatus = furnishedStatus.value;
  propertyData.value.parking = parking.value;
  propertyData.value.powerBackup = powerBackup.value;
  propertyData.value.propertyFacing = propertyFacing.value;
  propertyData.value.facingRoadWidth = facingRoadWidth.value;
  propertyData.value.facingRoadWidthUnit = facingRoadWidthUnit.value;
  propertyData.value.flooringType = flooringType.value;
  propertyData.value.otherRooms = otherRooms.value;
  propertyData.value.nearMetroStation = amenities.value.nearMetroStation;
  propertyData.value.nearSchool = amenities.value.nearSchool;
  propertyData.value.nearHospital = amenities.value.nearHospital;
  propertyData.value.nearMarket = amenities.value.nearMarket;
  propertyData.value.nearBusStand = amenities.value.nearBusStand;
  propertyData.value.nearRailwayStation = amenities.value.nearRailwayStation;
  propertyData.value.nearAirport = amenities.value.nearAirport;
  propertyData.value.nearMall = amenities.value.nearMall;
  propertyData.value.nearHighway = amenities.value.nearHighway;
  propertyData.value.light = amenities.value.light;
  propertyData.value.fan = amenities.value.fan;
  propertyData.value.ac = amenities.value.ac;
  propertyData.value.tv = amenities.value.tv;
  propertyData.value.bed = amenities.value.bed;
  propertyData.value.wardrobe = amenities.value.wardrobe;
  propertyData.value.geyser = amenities.value.geyser;
  propertyData.value.refrigerator = amenities.value.refrigerator;
  propertyData.value.sofa = amenities.value.sofa;
  propertyData.value.washingMachine = amenities.value.washingMachine;
  propertyData.value.stove = amenities.value.stove;
  propertyData.value.microwave = amenities.value.microwave;
  propertyData.value.modularKitchen = amenities.value.modularKitchen;
  propertyData.value.chimney = amenities.value.chimney;
  propertyData.value.curtain = amenities.value.curtain;
  propertyData.value.exhaustFan = amenities.value.exhaustFan;

  localStorage.setItem("flatData", JSON.stringify(propertyData.value));

  propertyData.value.totalArea = convertToSqft(
    propertyData.value.totalAreaUnit,
    propertyData.value.totalArea
  );
  propertyData.value.builtupArea = convertToSqft(
    propertyData.value.builtupAreaUnit,
    propertyData.value.builtupArea
  );
  propertyData.value.carpetArea = convertToSqft(
    propertyData.value.carpetAreaUnit,
    propertyData.value.carpetArea
  );
  propertyData.value.facingRoadWidth = convertTofeet(
    facingRoadWidthUnit.value,
    facingRoadWidth.value
  );
  return propertyData.value;
}

async function handleSubmit() {
  const postPropertyData = saveDataTolocalStorage();

  // deleting unit before sending data to backend because unit will be either sqft. for areas, and feet for length
  delete postPropertyData.totalAreaUnit;
  delete postPropertyData.carpetAreaUnit;
  delete postPropertyData.builtupAreaUnit;
  delete postPropertyData.facingRoadWidthUnit;
  emits('onContinue');

  // Submit data to Backend
  const res = await axios.post(
    "http://localhost:8080/property/post",
    propertyData,
    {
      withCredentials: true,
    }
  );
  if (res.status === 200) {
    localStorage.removeItem("activeForm");
    localStorage.removeItem("flatData");

    //  Redirect user to the posted property's Details page.
    router.push(`/propertydetails/${res.data.propertyId}`);
  } else {
    alert("Property Posting Failed!");
  }
}

onBeforeMount(() => {
  // @ts-ignore
  propertyData.value = JSON.parse(localStorage.getItem("flatData"));

  if (propertyData.value) {
    amenities.value.maintenanceStaff = propertyData.value.maintenanceStaff;
    amenities.value.waterStorage = propertyData.value.waterStorage;
    amenities.value.securityOrFireAlarm =
      propertyData.value.securityOrFireAlarm;
    amenities.value.visitorParking = propertyData.value.visitorParking;
    amenities.value.vaastuCompliant = propertyData.value.vaastuCompliant;
    amenities.value.park = propertyData.value.park;
    amenities.value.garden = propertyData.value.garden;
    amenities.value.intercomFacility = propertyData.value.intercomFacility;
    amenities.value.elevator = propertyData.value.elevator;
    amenities.value.highCeilingHeight = propertyData.value.highCeilingHeight;
    amenities.value.falseCeilingLighting =
      propertyData.value.falseCeilingLighting;
    amenities.value.gasPipeline = propertyData.value.gasPipeline;
    amenities.value.wifi = propertyData.value.wifi;
    amenities.value.centralizedAirConditioning =
      propertyData.value.centralizedAirConditioning;
    amenities.value.waterPurifier = propertyData.value.waterPurifier;
    amenities.value.recentlyRenovated = propertyData.value.recentlyRenovated;
    amenities.value.privateGarden = propertyData.value.privateGarden;
    amenities.value.naturalLight = propertyData.value.naturalLight;
    amenities.value.airyRooms = propertyData.value.airyRooms;
    amenities.value.spaciousInterior = propertyData.value.spaciousInterior;
    amenities.value.seperateServentRoomEntry =
      propertyData.value.seperateServentRoomEntry;
    amenities.value.wasteDisposal = propertyData.value.wasteDisposal;
    amenities.value.openDrainageAround = propertyData.value.openDrainageAround;
    amenities.value.rainWaterHarvesting =
      propertyData.value.rainWaterHarvesting;
    amenities.value.bankAttachedProperty =
      propertyData.value.bankAttachedProperty;
    amenities.value.lowDenseSociety = propertyData.value.lowDenseSociety;
    amenities.value.municipalCorporationWaterSupply =
      propertyData.value.municipalCorporationWaterSupply;
    amenities.value.borewell = propertyData.value.borewell;
    amenities.value.twentyFourBySevenWater =
      propertyData.value.twentyFourBySevenWater;
    amenities.value.twentyFourBySevenWater =
      propertyData.value.twentyFourBySevenWater;
    amenities.value.pool = propertyData.value.pool;
    amenities.value.club = propertyData.value.club;
    amenities.value.mainRoad = propertyData.value.mainRoad;
    amenities.value.isInGatedSociety = propertyData.value.isInGatedSociety;
    amenities.value.isCornerProperty = propertyData.value.isCornerProperty;
    amenities.value.isPetFriendly = propertyData.value.isPetFriendly;
    amenities.value.isWheelchairFriendly =
      propertyData.value.isWheelchairFriendly;
    furnishedStatus.value = propertyData.value.furnishedStatus;
    parking.value = propertyData.value.parking;
    powerBackup.value = propertyData.value.powerBackup;
    propertyFacing.value = propertyData.value.propertyFacing;
    facingRoadWidth.value = propertyData.value.facingRoadWidth;
    facingRoadWidthUnit.value = propertyData.value.facingRoadWidthUnit;
    flooringType.value = propertyData.value.flooringType;
    otherRooms.value = propertyData.value.otherRooms;
    amenities.value.nearMetroStation = propertyData.value.nearMetroStation;
    amenities.value.nearSchool = propertyData.value.nearSchool;
    amenities.value.nearHospital = propertyData.value.nearHospital;
    amenities.value.nearMarket = propertyData.value.nearMarket;
    amenities.value.nearBusStand = propertyData.value.nearBusStand;
    amenities.value.nearRailwayStation = propertyData.value.nearRailwayStation;
    amenities.value.nearAirport = propertyData.value.nearAirport;
    amenities.value.nearMall = propertyData.value.nearMall;
    amenities.value.nearHighway = propertyData.value.nearHighway;
    amenities.value.light = propertyData.value.light;
    amenities.value.fan = propertyData.value.fan;
    amenities.value.ac = propertyData.value.ac;
    amenities.value.tv = propertyData.value.tv;
    amenities.value.bed = propertyData.value.bed;
    amenities.value.wardrobe = propertyData.value.wardrobe;
    amenities.value.geyser = propertyData.value.geyser;
    amenities.value.refrigerator = propertyData.value.refrigerator;
    amenities.value.sofa = propertyData.value.sofa;
    amenities.value.washingMachine = propertyData.value.washingMachine;
    amenities.value.stove = propertyData.value.stove;
    amenities.value.microwave = propertyData.value.microwave;
    amenities.value.modularKitchen = propertyData.value.modularKitchen;
    amenities.value.chimney = propertyData.value.chimney;
    amenities.value.curtain = propertyData.value.curtain;
    amenities.value.exhaustFan = propertyData.value.exhaustFan;
  }

  // Adding the extra added rooms by user in the form
  otherRooms.value.forEach((item) => {
    const isValueExist = rooms.value.find(
      // @ts-ignore
      (room) => room.inputId === item.inputId
    );

    if (!isValueExist) {
      rooms.value.push(item);
    }
  });
});

onMounted(() => {
  if (otherRooms.value.length > 0) {
    otherRooms.value.forEach((item) => {
      // @ts-ignore
      const checkbox = document.querySelector(`input[id="${item.inputId}"]`);
      console.log(checkbox);
      // @ts-ignore
      checkbox.checked = true;
    });
  }
});
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