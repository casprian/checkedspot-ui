<template>
    <v-slide-group
      selected-class="bg-primary"
      multiple
      show-arrows
    >
      <v-slide-group-item
        v-for="(heading, index) in headings"
        :key="index"
      >
        <div class="border pa-2 mr-5 d-flex flex-column justify-space-between" style="max-width:360px;">
            <div>
                <h4 class="py-3 px-4 bg-pink-accent-3">{{ heading }}</h4>
                <v-expansion-panels variant="accordion">
                    <v-expansion-panel v-for="(item,index) in expansionArr" :key="index" elevation="0">
                        <v-expansion-panel-title class="text-caption font-weight-black"  expand-icon="mdi-plus" collapse-icon="mdi-minus">
                        {{item.item}}
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="text-indigo-lighten-1" v-for="(des,index) in item.description" :key="index">
                        {{des}}
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
            <div class="pb-5 pt-2 d-flex flex-column align-center mt-2 packageBottom">
                <p class="text-indigo-lighten-1 text-center">Get in touch with us!</p>
                <v-btn color="pink-accent-3" variant="flat" class="text-capitalize rounded-lg" width="230" append-icon="mdi-arrow-right" @click="router.push('/contactus')">Talk to our Experts</v-btn>
            </div>
        </div>
      </v-slide-group-item>
    </v-slide-group>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
    const headings = reactive([
        "Budget - ₹ 1590/sqft (Incl. GST)",
        "Basic - ₹ 1750/sqft (Incl. GST)",
        "Classic - ₹ 1850/sqft (Incl. GST)",
        "Premium - ₹ 1990/sqft (Incl. GST)",
        "Royale - ₹ 2140/sqft (Incl. GST)",
        "Imperia - ₹ 2270/sqft (Incl. GST)"
    ])

    const expansionArr= reactive([
        {
            item:"Designs & Drawings",
            description: [
                "3D Elevation", "Aritectural Layout | 2D", "Basic Elevation","Structural Design"
                ]           
        },
        {
            item:"Structure",
            description:[
                "Aggregates - 20mm & 40mm",
                "Blocks - Standard Solid Concrete blocks. 6 inch 4 inch",
                "Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)",
                "Cement - Dalmia, Coromandal or Zuari or equivalent 43 or 53 grade",
                "RCC Design Mix - As per the structural designer recommendation",
                "Steel - Sunvik, Meenakshi, Kamdhenu or equivalent"]
        },
        {
            item:"Kitchen",
            description:[
                "Any Other Faucet & Accessories - ISI Marked",
                "Ceramic Wall Tiles ( 2 feet above kitchen slab ) - Upto Rs.40 per Sqft",
                "Kitchen Sink - Stainless Steel Single Sink worth Rs.3000",
                "Main Sink Faucet - Upto Rs.1300" 
            ]
        },
        {
            item:"Bathroom",
            description:[
                "Bathroom Ceramic Wall Tiles with 7 feet height - Upto Rs.40 per Sqft",
                "Bathroom doors - Waterproof flush doors",
                "CPVC Pipe - Astral or equivalent",
                "Sanitary ware & CP Fittings - Upto Rs.30000 per 1000 sqft of construction"
            ]
        },
        {
            item:"Doors & Windows",
            description:[
                "Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch",
                "Main Door - Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth Rs.13000 including fixtures",
                "Windows - Aluminium Windows with glass shutters and mesh shutters(3 track with 1 mesh)"
            ]
        },
        {
            item:"Painting",
            description:[
                "Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent",
                "Interior Painting - JK Putty + Tractor Emulsion or equivalent"
            ]
        },
        {
            item:"Flooring",
            description:[
                "Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.40 per sqft",
                "Living and Dining Flooring - Tiles of value upto Rs.50 per sqft",
                "Parking Tiles - Anti-skid tiles of value upto ₹40 per sqft",
                "Rooms and Kitchen Flooring - Tiles upto Rs.50 per sqft",
                "Staircase Flooring - Sadarahalli Granite of value upto ₹ 70 per sqft"
            ]
        },
        {
            item:"Electrial",
            description:[
                "Switches & Sockets - Anchor Roma",
                "Wires - Fireproof wires by Finolex"
            ]
        },
        {
            item:"Miscellaneous",
            description:[
                "Overhead Tank - Sintex Double Layered 1000 ltrs",
                "Staircase Railing - MS Railing",
                "Underground Sump - 4000 litres",
                "Window Grills - Basic MS Grill with enamel Paint at Rs. 150 per Sqft"
            ]
        }
        
    ])
</script>

<style scoped>


    .border{
        border: 1px solid grey;
    }

    .v-expansion-panel:not(:first-child)::after{
        border: none !important;
    }
    .v-expansion-panels{
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-color: rgb(216, 216, 236);
    }
</style>
