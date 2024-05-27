<template>
  <div>
    <!-- Property Total Area (Required)-->
    <div class="mt-8">
      <p class="fieldheading">*Add Area Details</p>
      <v-row no-gutters>
        <v-col cols="8" class="pa-0 px-1">
          <v-text-field
            type="number"
            v-model="totalArea.value.value"
            :error-messages="totalArea.errorMessage.value"
            variant="outlined"
            label="*plot/land Total Area"
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

    <!-- Property Dimension (Optional) -->
    <div class="mt-7">
      <p class="fieldheading">Property Dimension in feet <i>(Optional)</i></p>
      <v-text-field
        type="number"
        v-model="length.value.value"
        :error-messages="length.errorMessage.value"
        variant="outlined"
        label="Length"
      ></v-text-field>
      <v-text-field
        type="number"
        v-model="bredth.value.value"
        :error-messages="bredth.errorMessage.value"
        variant="outlined"
        label="Breadth"
      ></v-text-field>
    </div>

    <!-- Floor Allowed for Construction (Optional) -->
    <div class="mt-7">
      <p class="fieldheading">Floor Allowed For Construction</p>
      <v-text-field
        type="number"
        v-model="floorAllowed.value.value"
        :error-messages="floorAllowed.errorMessage.value"
        variant="outlined"
        label="No. of floors"
      ></v-text-field>
    </div>

    <!-- Is there a boundary wall around the property? (Required) -->
    <div class="mt-8">
      <p class="fieldheading">*Is there a boundary wall around the property?</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="yesboundary"
          class="radioInput"
          name="boundary"
          :value="true"
          v-model="isBoundaryWallExist.value.value"
        />
        <label class="boundaryLabel" for="yesboundary" title="yesboundary"
          >yes</label
        >

        <input
          type="radio"
          id="noboundary"
          class="radioInput"
          name="boundary"
          :value="false"
          v-model="isBoundaryWallExist.value.value"
        />
        <label class="boundaryLabel" for="noboundary" title="noboundary"
          >No</label
        >
      </div>
      <p
        v-if="isBoundaryWallExist.errorMessage.value"
        class="pl-2 text-body-2 text-pink-darken-2"
      >
        This field is required! Please choose.
      </p>
    </div>

    <!-- No. of open side (Required) -->
    <div class="mt-10">
      <p class="fieldheading">*No. of open side</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="one"
          class="radioInput"
          name="noOfOpenSide"
          value="1"
          v-model="noOfOpenSide.value.value"
        />
        <label class="noOfOpenSideLabel" for="one" title="one">1</label>

        <input
          type="radio"
          id="two"
          class="radioInput"
          name="noOfOpenSide"
          value="2"
          v-model="noOfOpenSide.value.value"
        />
        <label class="noOfOpenSideLabel" for="two" title="Two">2</label>

        <input
          type="radio"
          id="three"
          class="radioInput"
          name="noOfOpenSide"
          value="3"
          v-model="noOfOpenSide.value.value"
        />
        <label class="noOfOpenSideLabel" for="three" title="Three">3</label>

        <input
          type="radio"
          id="threeplus"
          class="radioInput"
          name="noOfOpenSide"
          value="3+"
          v-model="noOfOpenSide.value.value"
        />
        <label class="noOfOpenSideLabel" for="threeplus" title="3+">3+</label>
      </div>
      <p
        v-if="noOfOpenSide.errorMessage.value"
        class="pl-2 text-body-2 text-pink-darken-2"
      >
        This field is required! Please choose.
      </p>
    </div>

    <!-- Any construction done on this property? (Required) -->
    <div class="mt-10">
      <p class="fieldheading">*Any construction done on this property?</p>

      <div class="radioGroup">
        <input
          type="radio"
          id="constructionDone"
          class="radioInput"
          name="constructionStatus"
          :value="true"
          v-model="isConstructionDoneOnProperty.value.value"
        />
        <label
          class="constructionLabel"
          for="constructionDone"
          title="Construction done on the property"
          >yes</label
        >

        <input
          type="radio"
          id="noConstruction"
          class="radioInput"
          name="constructionStatus"
          :value="false"
          v-model="isConstructionDoneOnProperty.value.value"
        />
        <label
          class="constructionLabel"
          for="noConstruction"
          title="No Construction on the property"
          >No</label
        >
      </div>
      <p
        v-if="isConstructionDoneOnProperty.errorMessage.value"
        class="pl-2 text-body-2 text-pink-darken-2"
      >
        This field is required! Please choose.
      </p>
    </div>

    <!-- What construction has been done on this property -->
    <div class="mt-7" v-if="isConstructionDoneOnProperty.value.value">
      <p class="fieldheading">*What type of construction has been done?</p>
      <div class="checkboxGroup">
        <input
          type="checkbox"
          id="shed"
          class="checkboxInput"
          name="constructions"
          value="shed"
          @change="handleConstructions"
        />
        <label class="constructionLabel" for="shed" title="shed">Shed</label>

        <input
          type="checkbox"
          id="rooms"
          class="checkboxInput"
          name="constructions"
          value="rooms"
          @change="handleConstructions"
        />
        <label class="constructionLabel" for="rooms" title="rooms"
          >Room(s)</label
        >

        <input
          type="checkbox"
          id="washroom"
          class="checkboxInput"
          name="constructions"
          value="washroom"
          @change="handleConstructions"
        />
        <label class="constructionLabel" for="washroom" title="washroom"
          >Washroom</label
        >

        <input
          type="checkbox"
          id="other"
          class="checkboxInput"
          name="constructions"
          value="other"
          @change="handleConstructions"
        />
        <label class="constructionLabel" for="other" title="other">Other</label>
      </div>
      <p
        v-if="constructions.length <= 0"
        class="pl-2 text-body-2 text-pink-darken-2"
      >
        This field is required! Please choose.
      </p>
    </div>

    <!-- Possession By (Required) -->
    <div class="mt-10">
      <p class="fieldheading">*Possession By</p>
      <v-select
        v-model="possessionBy.value.value"
        :items="possessions"
        :error-messages="possessionBy.errorMessage.value"
        item-title="unit"
        label="Expected By"
        persistent-hint
        variant="outlined"
      ></v-select>
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
          @click="addMoreAuthorities = !addMoreAuthorities"
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
            type="number"
            v-model="cost.value.value"
            :error-messages="cost.errorMessage.value"
            variant="outlined"
            label="₹ Expected Price"
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="pa-0 px-1">
          <v-text-field
            type="number"
            v-model="costPerSqft.value.value"
            :error-messages="costPerSqft.errorMessage.value"
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
import { onBeforeMount, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";

const emits = defineEmits(['onContinue']);
const router = useRouter();

const propertyData = ref();

const totalAreaUnit = ref("square feet");
const units = ref([
  "square feet",
  "acre",
  "cent",
  "guntha",
  "square meter",
  "hectare",
]);
const possessions = ref([
  "Immediate",
  "Within 3 Months",
  "Within 6 Months",
  "By 2024",
  "By 2025",
  "By 2026",
  "By 2027",
  "By 2028",
  "By 2029",
  "By 2030",
  "By 2031",
  "By 2032",
  "By 2033",
  "By 2034",
]);

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

const constructions = ref([]);
const ownershipType = ref("");
const otherChargesIncluded = ref("");
const isNegotiable = ref(false);

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
    length(value: number) {
      if (!value) {
        return true;
      } else if (value > 0 && /^[0.0-9.0]*$/.test(`${value}`)) {
        return true;
      } else {
        return "data must be a number and must be greater than 0";
      }
    },
    bredth(value: number) {
      if (!value) {
        return true;
      } else if (value > 0 && /^[0.0-9.0]*$/.test(`${value}`)) {
        return true;
      } else {
        return "data must be a number and must be greater than 0";
      }
    },
    floorAllowed(value: number) {
      if (!value) {
        return true;
      } else if (value > 0 && /^[0-9]*$/.test(`${value}`)) {
        return true;
      } else {
        return "data must be a number but not a decimal number and must be greater than 0";
      }
    },
    isBoundaryWallExist(value: boolean) {
      if (value === true || value === false) {
        return true;
      } else {
        return false;
      }
    },
    noOfOpenSide(value: any) {
      if (!value) {
        return false;
      } else {
        return true;
      }
    },
    isConstructionDoneOnProperty(value: any) {
      if (value === true || value === false) {
        return true;
      } else {
        return false;
      }
    },
    possessionBy(value: string) {
      if (value) {
        return true;
      } else {
        return "This field is required. Please choose possession duration.";
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
    costPerSqft(value: any) {
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
const length = useField("length");
const bredth = useField("bredth");
const floorAllowed = useField("floorAllowed");
const isBoundaryWallExist = useField("isBoundaryWallExist");
const noOfOpenSide = useField("noOfOpenSide");
const isConstructionDoneOnProperty = useField("isConstructionDoneOnProperty");
const possessionBy = useField<string>("possessionBy");
const cost = useField("cost");
const costPerSqft = useField("costPerSqft");
const description = useField("description");

watch(isConstructionDoneOnProperty.value, (newValue) => {
  if (newValue === false) {
    constructions.value = [];
  }
});

function onSuccess() {
  propertyData.value.constructions = constructions.value;
  propertyData.value.approvedByAuthorities = approvedByAuthorities.value;
  propertyData.value.ownershipType = ownershipType.value;
  propertyData.value.otherChargesIncluded = otherChargesIncluded.value;
  propertyData.value.isNegotiable = isNegotiable.value;
  propertyData.value.totalArea = totalArea.value.value;
  propertyData.value.totalAreaUnit = totalAreaUnit.value;
  propertyData.value.length = length.value.value;
  propertyData.value.bredth = bredth.value.value;
  propertyData.value.floorAllowed = floorAllowed.value.value;
  propertyData.value.isBoundaryWallExist = isBoundaryWallExist.value.value;
  propertyData.value.noOfOpenSide = noOfOpenSide.value.value;
  propertyData.value.isConstructionDoneOnProperty =
    isConstructionDoneOnProperty.value.value;
  propertyData.value.possessionBy = possessionBy.value.value;
  propertyData.value.cost = cost.value.value;
  propertyData.value.costPerSqft = costPerSqft.value.value;
  propertyData.value.description = description.value.value;

  localStorage.setItem("plotData", JSON.stringify(propertyData.value));

  emits('onContinue');
  router.push({ path: "/postproperty/gallery" });
}

function onInvalidSubmit(invalidData: any) {
  console.log(invalidData?.values); // current form values
  console.log(invalidData?.errors); // a map of field names and their first error message
  console.log(invalidData?.results); // a detailed map of field names and their validation results
}

const handleFormSubmit = handleSubmit(onSuccess, onInvalidSubmit);

function handleConstructions(event: any) {
  event.stopPropagation();
  const value = event.target.value;
  if (event.target.checked) {
    // @ts-ignore
    constructions.value.push(value);
  } else {
    const index = constructions.value.findIndex((item) => item === value);
    constructions.value.splice(index, 1);
  }
}

function handleApprovingAuthorities(event: any) {
  console.log(event.target);
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
  propertyData.value = JSON.parse(localStorage.getItem("plotData"));

  if (propertyData.value) {
    constructions.value = propertyData.value.constructions;
    approvedByAuthorities.value = propertyData.value.approvedByAuthorities;
    ownershipType.value = propertyData.value.ownershipType;
    otherChargesIncluded.value = propertyData.value.otherChargesIncluded;
    isNegotiable.value = propertyData.value.isNegotiable;
    totalArea.value.value = propertyData.value.totalArea;
    totalAreaUnit.value = propertyData.value.totalAreaUnit;
    length.value.value = propertyData.value.length;
    bredth.value.value = propertyData.value.bredth;
    floorAllowed.value.value = propertyData.value.floorAllowed;
    isBoundaryWallExist.value.value = propertyData.value.isBoundaryWallExist;
    noOfOpenSide.value.value = propertyData.value.noOfOpenSide;
    isConstructionDoneOnProperty.value.value =
      propertyData.value.isConstructionDoneOnProperty;
    possessionBy.value.value = propertyData.value.possessionBy;
    cost.value.value = propertyData.value.cost;
    costPerSqft.value.value = propertyData.value.costPerSqft;
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

  if (propertyData.value.constructions) {
    // @ts-ignore
    propertyData.value.constructions.forEach((item) => {
      const checkbox = document.querySelector(`input[value="${item}"]`);
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
  border: solid 1px rgb(100, 100, 100);
  color: rgb(100, 100, 100);
  padding: 4px 0;
  border-radius: 20px;
}
.radioInput + label.boundaryLabel,
.radioInput + label.constructionLabel {
  width: 100px;
}
.radioInput + label.noOfOpenSideLabel {
  width: 35px;
}
.radioInput + label.ownershipLabel,
.checkboxInput + label.constructionLabel,
.checkboxInput + label.authorityLabel {
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