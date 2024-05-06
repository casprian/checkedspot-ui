<template>
  <div>
    <!-- Property Total area (Required) -->
    <div class="mt-8">
      <p class="fieldheading">*Add Total Area Details</p>
      <v-row no-gutters>
        <v-col cols="8" class="pa-0 px-1">
          <v-text-field
            v-model="totalArea.value.value"
            :error-messages="totalArea.errorMessage.value"
            variant="outlined"
            label="*flat/apartment Total Area"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0 px-1">
          <v-select
            :items="units"
            v-model="totalAreaUnit"
            item-title="unit"
            label="Unit"
            persistent-hint
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
    </div>

    <!-- Property Builtup Area (Required) -->
    <div class="mt-3">
      <p class="fieldheading">Add Builtup Area Details</p>
      <v-row no-gutters>
        <v-col cols="8" class="pa-0 px-1">
          <v-text-field
            v-model="builtupArea"
            variant="outlined"
            label="flat/apartment builtup area"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0 px-1">
          <v-select
            :items="units"
            v-model="builtupAreaUnit"
            item-title="unit"
            label="Unit"
            persistent-hint
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
    </div>

    <!-- Property Carpet Area (Required) -->
    <div class="mt-3">
      <p class="fieldheading">Add Carpet Area Details</p>
      <v-row no-gutters>
        <v-col cols="8" class="pa-0 px-1">
          <v-text-field
            v-model="carpetArea"
            variant="outlined"
            label="flat/apartment carpet area"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0 px-1">
          <v-select
            :items="units"
            v-model="carpetAreaUnit"
            item-title="unit"
            label="Unit"
            persistent-hint
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
    </div>

    <!-- No. of Bedrooms (Required) -->
    <div class="mt-7">
      <p class="fieldheading">*No. of Bedrooms</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="one"
          class="radioInput"
          name="bedrooms"
          value="1"
          :disabled="bedroomsMoreThanFour || propertyData.bedrooms > 4"
          v-model="bedrooms.value.value"
        />
        <label
          :class="[
            'bedroomsLabel',
            bedroomsMoreThanFour || propertyData.bedrooms > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="one"
          title="one"
          >1</label
        >

        <input
          type="radio"
          id="two"
          class="radioInput"
          name="bedrooms"
          value="2"
          :disabled="bedroomsMoreThanFour || propertyData.bedrooms > 4"
          v-model="bedrooms.value.value"
        />
        <label
          :class="[
            'bedroomsLabel',
            bedroomsMoreThanFour || propertyData.bedrooms > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="two"
          title="Two"
          >2</label
        >

        <input
          type="radio"
          id="three"
          class="radioInput"
          name="bedrooms"
          value="3"
          :disabled="bedroomsMoreThanFour || propertyData.bedrooms > 4"
          v-model="bedrooms.value.value"
        />
        <label
          :class="[
            'bedroomsLabel',
            bedroomsMoreThanFour || propertyData.bedrooms > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="three"
          title="Three"
          >3</label
        >

        <input
          type="radio"
          id="four"
          class="radioInput"
          name="bedrooms"
          value="4"
          :disabled="bedroomsMoreThanFour || propertyData.bedrooms > 4"
          v-model="bedrooms.value.value"
        />
        <label
          :class="[
            'bedroomsLabel',
            bedroomsMoreThanFour || propertyData.bedrooms > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="four"
          title="4"
          >4</label
        >
      </div>

      <!-- Add More Bedrooms -->
      <div>
        <button
          class="mt-2 text-pink-darken-2"
          @click="
            () => {
              bedroomsMoreThanFour = !bedroomsMoreThanFour;
              propertyData.bedrooms = null;
            }
          "
        >
          <v-icon
            class="mt-n1"
            icon="mdi-plus-circle-outline"
            size="18"
          ></v-icon>
          Add other
        </button>
        <v-text-field
          class="mt-4"
          label="Enter number of bedrooms"
          type="number"
          variant="outlined"
          v-model="bedrooms.value.value"
          v-if="bedroomsMoreThanFour || propertyData.bedrooms > 4"
        >
        </v-text-field>
      </div>
      <p
        v-if="bedrooms.errorMessage.value"
        class="pl-2 text-body-2 text-pink-darken-2"
      >
        This field is required! Please choose.
      </p>
    </div>

    <!-- No. of Bathrooms (Required) -->
    <div class="mt-7">
      <p class="fieldheading">*No. of Bathrooms</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="bathroomone"
          class="radioInput"
          name="bathrooms"
          value="1"
          :disabled="bathroomsMoreThanFour || propertyData.bathrooms > 4"
          v-model="bathrooms.value.value"
        />
        <label
          :class="[
            'bathroomsLabel',
            bathroomsMoreThanFour || propertyData.bathrooms > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="bathroomone"
          title="one"
          >1</label
        >

        <input
          type="radio"
          id="bathroomtwo"
          class="radioInput"
          name="bathrooms"
          value="2"
          :disabled="bathroomsMoreThanFour || propertyData.bathrooms > 4"
          v-model="bathrooms.value.value"
        />
        <label
          :class="[
            'bathroomsLabel',
            bathroomsMoreThanFour || propertyData.bathrooms > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="bathroomtwo"
          title="Two"
          >2</label
        >

        <input
          type="radio"
          id="bathroomthree"
          class="radioInput"
          name="bathrooms"
          value="3"
          :disabled="bathroomsMoreThanFour || propertyData.bathrooms > 4"
          v-model="bathrooms.value.value"
        />
        <label
          :class="[
            'bathroomsLabel',
            bathroomsMoreThanFour || propertyData.bathrooms > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="bathroomthree"
          title="Three"
          >3</label
        >

        <input
          type="radio"
          id="bathroomfour"
          class="radioInput"
          name="bathrooms"
          value="4"
          :disabled="bathroomsMoreThanFour || propertyData.bathrooms > 4"
          v-model="bathrooms.value.value"
        />
        <label
          :class="[
            'bathroomsLabel',
            bathroomsMoreThanFour || propertyData.bathrooms > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="bathroomfour"
          title="4"
          >4</label
        >
      </div>

      <!-- Add More bathrooms -->
      <div>
        <button
          class="mt-2 text-pink-darken-2"
          @click="
            () => {
              bathroomsMoreThanFour = !bathroomsMoreThanFour;
              propertyData.bathrooms = null;
            }
          "
        >
          <v-icon
            class="mt-n1"
            icon="mdi-plus-circle-outline"
            size="18"
          ></v-icon>
          Add other
        </button>
        <v-text-field
          class="mt-4"
          label="Enter number of bathrooms"
          type="number"
          variant="outlined"
          v-model="bathrooms.value.value"
          v-if="bathroomsMoreThanFour"
        >
        </v-text-field>
      </div>
      <p
        v-if="bathrooms.errorMessage.value"
        class="pl-2 text-body-2 text-pink-darken-2"
      >
        This field is required! Please choose.
      </p>
    </div>

    <!-- No. of Balconies (Required) -->
    <div class="mt-5">
      <p class="fieldheading">*No. of Balconies</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="balconyzero"
          class="radioInput"
          name="balconies"
          value="0"
          v-model="balconies.value.value"
        />
        <label class="balconiesLabel" for="balconyzero" title="zero">0</label>

        <input
          type="radio"
          id="balconyone"
          class="radioInput"
          name="balconies"
          value="1"
          v-model="balconies.value.value"
        />
        <label class="balconiesLabel" for="balconyone" title="one">1</label>

        <input
          type="radio"
          id="balconytwo"
          class="radioInput"
          name="balconies"
          value="2"
          v-model="balconies.value.value"
        />
        <label class="balconiesLabel" for="balconytwo" title="Two">2</label>

        <input
          type="radio"
          id="balconythree"
          class="radioInput"
          name="balconies"
          value="3"
          v-model="balconies.value.value"
        />
        <label class="balconiesLabel" for="balconythree" title="Three">3</label>

        <input
          type="radio"
          id="balconyfour"
          class="radioInput"
          name="balconies"
          value="3+"
          v-model="balconies.value.value"
        />
        <label class="balconiesLabel" for="balconyfour" title="More than 3"
          >More than 3</label
        >
      </div>

      <p
        v-if="balconies.errorMessage.value"
        class="pl-2 text-body-2 text-pink-darken-2"
      >
        This field is required! Please choose.
      </p>
    </div>

    <!-- Age Of Property (Optional) -->
    <div class="mt-7">
      <p class="fieldheading">Age Of Property</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="propertyAgeone"
          class="radioInput"
          name="propertyAge"
          value="1"
          :disabled="propertyAgeMoreThanFour || propertyData.propertyAge > 4"
          v-model="propertyAge"
        />
        <label
          :class="[
            'propertyAgeLabel',
            propertyAgeMoreThanFour || propertyData.propertyAge > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="propertyAgeone"
          title="one"
          >1</label
        >

        <input
          type="radio"
          id="propertyAgeTwo"
          class="radioInput"
          name="propertyAge"
          value="2"
          :disabled="propertyAgeMoreThanFour || propertyData.propertyAge > 4"
          v-model="propertyAge"
        />
        <label
          :class="[
            'propertyAgeLabel',
            propertyAgeMoreThanFour || propertyData.propertyAge > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="propertyAgeTwo"
          title="Two"
          >2</label
        >

        <input
          type="radio"
          id="propertyAgeThree"
          class="radioInput"
          name="propertyAge"
          value="3"
          :disabled="propertyAgeMoreThanFour || propertyData.propertyAge > 4"
          v-model="propertyAge"
        />
        <label
          :class="[
            'propertyAgeLabel',
            propertyAgeMoreThanFour || propertyData.propertyAge > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="propertyAgeThree"
          title="Three"
          >3</label
        >

        <input
          type="radio"
          id="propertyAgeFour"
          class="radioInput"
          name="propertyAge"
          value="4"
          :disabled="propertyAgeMoreThanFour || propertyData.propertyAge > 4"
          v-model="propertyAge"
        />
        <label
          :class="[
            'propertyAgeLabel',
            propertyAgeMoreThanFour || propertyData.propertyAge > 4
              ? 'disabled-mask'
              : '',
          ]"
          for="propertyAgeFour"
          title="4"
          >4</label
        >
      </div>

      <!-- Add Other Property Age -->
      <div>
        <button
          class="mt-2 text-pink-darken-2"
          @click="
            () => {
              propertyAgeMoreThanFour = !propertyAgeMoreThanFour;
              propertyData.propertyAge = null;
            }
          "
        >
          <v-icon
            class="mt-n1"
            icon="mdi-plus-circle-outline"
            size="18"
          ></v-icon>
          Add other
        </button>
        <v-text-field
          class="mt-4"
          label="Enter number of bathrooms"
          type="number"
          variant="outlined"
          v-model="propertyAge"
          v-if="propertyAgeMoreThanFour || propertyData.propertyAge > 4"
        >
        </v-text-field>
      </div>
    </div>

    <!-- Ownership (Optional) -->
    <div class="mt-7">
      <p class="fieldheading">Ownership</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="freehold"
          class="radioInput"
          name="ownership"
          value="freehold"
          v-model="ownershipType"
        />
        <label class="ownershipLabel" for="freehold" title="freehold"
          >Freehold</label
        >

        <input
          type="radio"
          id="coOperativeSociety"
          class="radioInput"
          name="ownership"
          value="Co-operative Society"
          v-model="ownershipType"
        />
        <label
          class="ownershipLabel"
          for="coOperativeSociety"
          title="Co-operative society"
          >Co-operative society</label
        >

        <input
          type="radio"
          id="lease"
          class="radioInput"
          name="ownership"
          value="lease"
          v-model="ownershipType"
        />
        <label class="ownershipLabel" for="lease" title="Lease">Lease</label>
        <input
          type="radio"
          id="onRegisteredAgreement"
          class="radioInput"
          name="ownership"
          value="On Registered Agreement"
          v-model="ownershipType"
        />
        <label
          class="ownershipLabel"
          for="onRegisteredAgreement"
          title="On Registered Agreement"
          >On Registered Agreement</label
        >

        <input
          type="radio"
          id="onNormalAgreement"
          class="radioInput"
          name="ownership"
          value="On Normal Agreement"
          v-model="ownershipType"
        />
        <label
          class="ownershipLabel"
          for="onNormalAgreement"
          title="On Normal Agreement"
          >On Normal Agreement</label
        >
      </div>
    </div>

    <!-- Which authority the property is approved by? (Optional) -->
    <div class="mt-10">
      <p class="fieldheading">Which authority the property is approved by?</p>

      <div class="checkboxGroup">
        <span
          v-for="authority in authorities"
          :key="authority.name"
          class="mb-3"
        >
          <input
            type="checkbox"
            :id="authority.inputId"
            class="checkboxInput"
            name="authority"
            :value="authority.name"
            @change="handleApprovingAuthorities"
          />
          <label
            class="authorityLabel"
            :for="authority.inputId"
            :title="authority.labelTitle"
            >{{ authority.labelTitle }}</label
          >
        </span>
      </div>
      <!-- Add More Authorities -->
      <div>
        <button
          class="mt-2 text-pink-darken-2"
          @click="() => (addMoreAuthorities = !addMoreAuthorities)"
        >
          <v-icon
            class="mt-n1"
            icon="mdi-plus-circle-outline"
            size="18"
          ></v-icon>
          Add other
        </button>

        <v-row
          no-gutters
          class="pa-0 d-flex align-center"
          v-if="addMoreAuthorities"
        >
          <v-col cols="8" class="pa-0 px-1">
            <v-text-field
              class="mt-4"
              label="Enter Name of Authority"
              variant="outlined"
              v-model="newAuthority"
            >
            </v-text-field>
          </v-col>
          <v-col cols="4" class="pa-0 px-1 mt-n2">
            <v-btn
              @click="addAuthorityHandler"
              :disabled="!newAuthority"
              color="pink-darken-2"
              height="55"
              width="100%"
              class="text-none text-body-1"
              >Add Authority</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- Price Details (Required)-->
    <div class="mt-10">
      <p class="fieldheading">*Price Details</p>
      <v-row no-gutters>
        <v-col cols="6" class="pa-0 px-1">
          <v-text-field
            v-model="cost.value.value"
            :error-messages="cost.errorMessage.value"
            variant="outlined"
            label="₹ Expected Price"
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="pa-0 px-1">
          <v-text-field
            v-model="costPerSqFt.value.value"
            :error-messages="costPerSqFt.errorMessage.value"
            variant="outlined"
            label="₹ Price per sq.ft"
          ></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex justify-start align-center">
          <input
            class="propcharges"
            type="radio"
            name="charges"
            id="chargesIncluded"
            value="Charges Included"
            v-model="otherChargesIncluded"
          />
          <label for="chargesIncluded" class="mx-1 mr-6"
            >All Charges Included</label
          >

          <input
            class="propcharges"
            type="radio"
            name="charges"
            id="chargesExcluded"
            value="Charges Excluded"
            v-model="otherChargesIncluded"
          />
          <label for="chargesExcluded" class="mx-1 mr-6"
            >Tax and Govt. Charges Excluded</label
          >
        </v-col>

        <v-col cols="12" class="pa-0">
          <v-checkbox
            v-model="isNegotiable"
            label="Price Negotiable"
            color="pink-darken-2"
            :true-value="true"
            :false-value="false"
          ></v-checkbox>
        </v-col>
      </v-row>
    </div>

    <!-- Property Description (Optional)-->
    <div class="mt-7">
      <p class="fieldheading mb-1">What makes your property unique</p>
      <p class="text-caption mb-7">
        Adding description will increase your listing visibility
      </p>

      <v-textarea
        v-model="description.value.value"
        :error-messages="description.errorMessage.value"
        variant="outlined"
        rows="5"
        label="Add some details about your property like metro 500m from property etc."
        persistent-counter
        counter="2000"
      ></v-textarea>
    </div>

    <!-- Continue button -->
    <div class="mt-10 d-flex justify-center">
      <v-btn
        @click="handleFormSubmit"
        append-icon="mdi-arrow-right-bold"
        variant="elevated"
        class="px-10 text-none text-body-1 elevation-4"
        height="48"
        color="#C2185B"
        >Continue</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";

const router = useRouter();

const propertyData = ref();

const builtupArea = ref();
const carpetArea = ref();
const totalAreaUnit = ref("square feet");
const builtupAreaUnit = ref("square feet");
const carpetAreaUnit = ref("square feet");
const units = ref([
  "guntha",
  "hectare",
  "acre",
  "cent",
  "square feet",
  "square meter",
]);
const ownershipType = ref("");
const propertyAge = ref("");
const propertyAgeMoreThanFour = ref(false);
const bedroomsMoreThanFour = ref(false);
const bathroomsMoreThanFour = ref(false);
const otherChargesIncluded = ref(false);
const isNegotiable = ref(false);

const addMoreAuthorities = ref(false);
const newAuthority = ref("");
const authorities = ref([
  {
    inputId: "dtcp",
    name: "dtcp",
    labelTitle: "DTCP",
  },
  {
    inputId: "bmrda",
    name: "bmrda",
    labelTitle: "BMRDA",
  },
  {
    inputId: "bbmp",
    name: "bbmp",
    labelTitle: "BBMP",
  },
  {
    inputId: "bmicap",
    name: "bmicap",
    labelTitle: "BMICAP",
  },
  {
    inputId: "cuda",
    name: "cuda",
    labelTitle: "CUDA",
  },
  {
    inputId: "npa",
    name: "npa",
    labelTitle: "NPA",
  },
  {
    inputId: "bda",
    name: "bda",
    labelTitle: "BDA",
  },
  {
    inputId: "dpa",
    name: "dpa",
    labelTitle: "DPA",
  },
  {
    inputId: "biaapa",
    name: "biaapa",
    labelTitle: "BIAAPA",
  },
]);
const approvedByAuthorities = ref([]);

const { meta, handleSubmit, handleReset } = useForm({
  validationSchema: {
    totalArea(value: any) {
      if (!value) {
        return "Required.";
      } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
        return true;
      }
      return "total area should be greater than 0.";
    },
    bedrooms(value: any) {
      if (value && value > 0) {
        return true;
      } else {
        return false;
      }
    },
    bathrooms(value: any) {
      if (value && value > 0) {
        return true;
      } else {
        return false;
      }
    },
    balconies(value: any) {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
    cost(value: any) {
      if (!value) {
        return "Required.";
      } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
        return true;
      }
      return "cost should be greater than 0.";
    },
    costPerSqFt(value: any) {
      if (!value) {
        return "Required.";
      } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
        return true;
      }
      return "cost per sqft should be greater than 0.";
    },
    description(value: string) {
      if (!value || (value && value.length <= 2000)) {
        return true;
      } else {
        return "Please wrap the property description under 2000 characters/letters.";
      }
    },
  },
});
const totalArea = useField("totalArea");
const bedrooms = useField("bedrooms");
const bathrooms = useField("bathrooms");
const balconies = useField("balconies");
const cost = useField("cost");
const costPerSqFt = useField("costPerSqFt");
const description = useField("description");

const onSuccess = () => {
  propertyData.value.totalArea = totalArea.value.value;
  propertyData.value.builtupArea = builtupArea.value;
  propertyData.value.carpetArea = carpetArea.value;
  propertyData.value.totalAreaUnit = totalAreaUnit.value;
  propertyData.value.builtupAreaUnit = builtupAreaUnit.value;
  propertyData.value.carpetAreaUnit = carpetAreaUnit.value;
  propertyData.value.bedrooms = bedrooms.value.value;
  propertyData.value.bathrooms = bathrooms.value.value;
  propertyData.value.balconies = balconies.value.value;
  propertyData.value.ownershipType = ownershipType.value;
  propertyData.value.approvedByAuthorities = approvedByAuthorities.value;
  propertyData.value.propertyAge = propertyAge.value;
  propertyData.value.cost = cost.value.value;
  propertyData.value.costPerSqFt = costPerSqFt.value.value;
  propertyData.value.otherChargesIncluded = otherChargesIncluded.value;
  propertyData.value.isNegotiable = isNegotiable.value;
  propertyData.value.description = description.value.value;

  sessionStorage.setItem("flatData", JSON.stringify(propertyData.value));

  router.push({ path: "/postproperty/gallery" });
};

function onInvalidSubmit(invalidData: any) {
  console.log(invalidData?.values); // current form values
  console.log(invalidData?.errors); // a map of field names and their first error message
  console.log(invalidData?.results); // a detailed map of field names and their validation results
}

const handleFormSubmit = handleSubmit(onSuccess, onInvalidSubmit);

function handleApprovingAuthorities(event: any) {
  event.stopPropagation();
  const value = event.target.value;
  if (event.target.checked) {
    const index = authorities.value.findIndex((item) => item.name === value);
    // @ts-ignore
    approvedByAuthorities.value.push(authorities.value[index]);
  } else {
    const index = approvedByAuthorities.value.findIndex(
      // @ts-ignore
      (item) => item.name === value
    );
    approvedByAuthorities.value.splice(index, 1);
  }
}
function addAuthorityHandler() {
  authorities.value.push({
    inputId: newAuthority.value.toLocaleLowerCase(),
    name: newAuthority.value.toLocaleLowerCase(),
    labelTitle: newAuthority.value.toLocaleLowerCase(),
  });
  addMoreAuthorities.value = false;
  newAuthority.value = "";
}

onBeforeMount(() => {
  // @ts-ignore
  propertyData.value = JSON.parse(sessionStorage.getItem("flatData"));

  if (propertyData.value) {
    totalArea.value.value = propertyData.value.totalArea;
    builtupArea.value = propertyData.value.builtupArea;
    carpetArea.value = propertyData.value.carpetArea;
    totalAreaUnit.value = propertyData.value.totalAreaUnit;
    builtupAreaUnit.value = propertyData.value.builtupAreaUnit;
    carpetAreaUnit.value = propertyData.value.carpetAreaUnit;
    bedrooms.value.value = propertyData.value.bedrooms;
    bathrooms.value.value = propertyData.value.bathrooms;
    bedroomsMoreThanFour.value = propertyData.value.bedrooms > 4 ? true : false;
    bathroomsMoreThanFour.value =
      propertyData.value.bathrooms > 4 ? true : false;
    balconies.value.value = propertyData.value.balconies;
    ownershipType.value = propertyData.value.ownershipType;
    approvedByAuthorities.value = propertyData.value.approvedByAuthorities;
    propertyAge.value = propertyData.value.propertyAge;
    propertyAgeMoreThanFour.value =
      propertyData.value.propertyAge > 4 ? true : false;
    cost.value.value = propertyData.value.cost;
    costPerSqFt.value.value = propertyData.value.costPerSqFt;
    otherChargesIncluded.value = propertyData.value.otherChargesIncluded;
    isNegotiable.value = propertyData.value.isNegotiable;
    description.value.value = propertyData.value.description;
  }

  // Adding the extra added autorities bu user in the form
  approvedByAuthorities.value.forEach((item) => {
    const isValueExist = authorities.value.find(
      // @ts-ignore
      (authority) => authority.name === item.name
    );

    if (!isValueExist) {
      authorities.value.push(item);
    }
  });
});

onMounted(() => {
  if (approvedByAuthorities.value) {
    approvedByAuthorities.value.forEach((item) => {
      // @ts-ignore
      const checkbox = document.querySelector(`input[value="${item.name}"]`);
      // @ts-ignore
      checkbox.checked = true;
    });
  }
});
</script>

<style scoped>
.fieldheading {
  font-size: 18px;
  margin-bottom: 15px;
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
.radioInput + label.bedroomsLabel,
.radioInput + label.bathroomsLabel,
.radioInput + label.propertyAgeLabel {
  width: 32px;
}
.radioInput + label.balconiesLabel {
  width: auto;
  padding: 4px 11px;
}
.radioInput + label.ownershipLabel {
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
.checkboxInput + label.authorityLabel {
  width: auto;
  padding: 4px 15px;
}
.disabled-mask {
  position: relative;
}

.disabled-mask::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(
    94,
    94,
    94,
    0.671
  ); /* Adjust the alpha value (4th parameter) to control the opacity of the mask */
  pointer-events: none; /* Ensures the mask doesn't block pointer events */
}

.propcharges {
  height: 20px;
  width: 20px;
  accent-color: #c2185b;
  margin-left: 10px;
}
.propcharges + label {
  color: grey;
}
.propcharges:checked + label {
  color: #c2185b;
}
</style>