<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center pa-4">
                <h5 style="line-height: normal;">Message delivery Failed. Please try again!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h6 text-center d-flex align-center justify-center pa-4">
                <h5 style="line-height: normal;">
                    Message has been delivered. Checked Spot Team will contact you soon.
                </h5>
            </div>
        </v-card>
    </v-expand-transition>


    <v-slide-group v-if="isPackagesExist" selected-class="bg-primary" multiple show-arrows>
        <v-slide-group-item v-for="constructionPackage in constructionPackages" :key="constructionPackage?.packageId">
            <div class="border pa-2 mr-5 d-flex flex-column justify-space-between" style="max-width:360px;">
                <div>
                    <h4 class="py-3 px-4 bg-pink-accent-3"><span style="text-transform: capitalize;">{{ constructionPackage.type }} </span> - ₹ {{ constructionPackage.price }}/sqft (Incl. GST)</h4>
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="packageFeature in packageFeatures" :key="packageFeature?.type" elevation="0">
                            <v-expansion-panel-title class="text-caption font-weight-black" expand-icon="mdi-plus"
                                collapse-icon="mdi-minus">
                                {{ packageFeature?.type }}
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="text-indigo-lighten-1" v-for="(item, index) in packageFeature?.items"
                                :key="index">
                                {{ item.name }} {{ item.description ? " - " + item.description : "" }}
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="pb-3 pt-3 d-flex flex-column align-center mt-2">
                    <talk-to-expert-dialog :package="constructionPackage.type" @success="handleSuccess" @failure="handleFailure" />
                </div>
            </div>
        </v-slide-group-item>
    </v-slide-group>

    <v-row  v-else class="py-10 d-flex justify-center align-center bg-grey-lighten-5 rounded-lg">
        <v-col cols="4" v-if="errorOccured">            
            <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
        </v-col>
        <v-col  v-else cols="12" class="text-h6 text-sm-h5 text-center font-weight-medium text-grey-darken-1">            
            ERROR OCCURED
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
//@ts-ignore
import api from "@/data/api";
import { reactive, ref, defineAsyncComponent, onMounted } from "vue";

const TalkToExpertDialog = defineAsyncComponent(() => import('@/components/quotation-view-components/slider-range-components/TalkToExpertDialog.vue'));

const isPackagesExist = ref(false);
const errorOccured = ref(false);
const constructionPackages = ref([
    {
        packageId: "",
        price: "1750",
        type: "basic"
    }
]);

const packageFeatures = ref([
    {
        type: "",
        items: [
            {
                name: "",
                description: ""
            }
        ]
    }
]);

const expandSuccess = ref(false);
const expandFailure = ref(false);

async function getPackages() {
    errorOccured.value = false;
    isPackagesExist.value = false;

    const res = await api?.property?.getConstructionPackages({ params: {} });

    if (res?.status === 200) {
        constructionPackages.value = res?.data[0]?.package;
        packageFeatures.value = res?.data[0]?.packageFeatures;
        isPackagesExist.value = true;
    } else {
        errorOccured.value = true;
        console.log("ERROR: ", res);
    }
}

function handleSuccess() {
    expandSuccess.value = true;
    setTimeout(() => {
        expandSuccess.value = false;
    }, 2000);
}

function handleFailure() {
    expandFailure.value = true;
    setTimeout(() => {
        expandFailure.value = false;
    }, 2000);
}

const headings = reactive([
    "Basic - ₹ 1750/sqft (Incl. GST)",
    "Classic - ₹ 1850/sqft (Incl. GST)",
    "Premium - ₹ 1990/sqft (Incl. GST)",
    "Royale - ₹ 2140/sqft (Incl. GST)",
    "Imperia - ₹ 2270/sqft (Incl. GST)"
])

const expansionArr = reactive([
    {
        item: "Designs & Drawings",
        description: [
            "3D Elevation", "Aritectural Layout | 2D", "Basic Elevation", "Structural Design"
        ]
    },
    {
        item: "Structure",
        description: [
            "Aggregates - 20mm & 40mm",
            "Blocks - Standard Solid Concrete blocks. 6 inch 4 inch",
            "Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)",
            "Cement - Dalmia, Coromandal or Zuari or equivalent 43 or 53 grade",
            "RCC Design Mix - As per the structural designer recommendation",
            "Steel - Sunvik, Meenakshi, Kamdhenu or equivalent"]
    },
    {
        item: "Kitchen",
        description: [
            "Any Other Faucet & Accessories - ISI Marked",
            "Ceramic Wall Tiles ( 2 feet above kitchen slab ) - Upto Rs.40 per Sqft",
            "Kitchen Sink - Stainless Steel Single Sink worth Rs.3000",
            "Main Sink Faucet - Upto Rs.1300"
        ]
    },
    {
        item: "Bathroom",
        description: [
            "Bathroom Ceramic Wall Tiles with 7 feet height - Upto Rs.40 per Sqft",
            "Bathroom doors - Waterproof flush doors",
            "CPVC Pipe - Astral or equivalent",
            "Sanitary ware & CP Fittings - Upto Rs.30000 per 1000 sqft of construction"
        ]
    },
    {
        item: "Doors & Windows",
        description: [
            "Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch",
            "Main Door - Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth Rs.13000 including fixtures",
            "Windows - Aluminium Windows with glass shutters and mesh shutters(3 track with 1 mesh)"
        ]
    },
    {
        item: "Painting",
        description: [
            "Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent",
            "Interior Painting - JK Putty + Tractor Emulsion or equivalent"
        ]
    },
    {
        item: "Flooring",
        description: [
            "Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.40 per sqft",
            "Living and Dining Flooring - Tiles of value upto Rs.50 per sqft",
            "Parking Tiles - Anti-skid tiles of value upto ₹40 per sqft",
            "Rooms and Kitchen Flooring - Tiles upto Rs.50 per sqft",
            "Staircase Flooring - Sadarahalli Granite of value upto ₹ 70 per sqft"
        ]
    },
    {
        item: "Electrial",
        description: [
            "Switches & Sockets - Anchor Roma",
            "Wires - Fireproof wires by Finolex"
        ]
    },
    {
        item: "Miscellaneous",
        description: [
            "Overhead Tank - Sintex Double Layered 1000 ltrs",
            "Staircase Railing - MS Railing",
            "Underground Sump - 4000 litres",
            "Window Grills - Basic MS Grill with enamel Paint at Rs. 150 per Sqft"
        ]
    }

])

onMounted(async () => {
    await getPackages()
})
</script>

<style scoped>
.border {
    border: 1px solid grey;
}
</style>
