<template>
    <v-container fluid class="py-10 px-md-14">
        <v-row no-guters>
        <v-col cols="12" class="d-flex flex-column align-center">
            <h2 class="text-h4 font-weight-medium" style="color:#1f0757">Our Packages.</h2>
            <p class="py-2 text-body-1 text-indigo-lighten-1">Find the best home construction packages.</p>
            <div class="d-flex">
                <pre class="py-2 text-body-1 text-indigo-lighten-1">Currently showing for  </pre>
                <v-select
                placeholder="Select"
                class="customPlaceholder"
                bg-color="pink-accent-3"
                density="compact"
                style="width:125px;"
                :items="['Bengaluru', 'Hassan', 'Mysuru']"
                variant="solo"
                ></v-select>
            </div>
        </v-col>
        <v-col cols="12">
            <!-- <v-row no-gutters style="overflow-x:scroll;">
                <v-col cols="12" md="4" class="pr-md-5" v-for="n in 5" :key=n>
                    <div class="border pa-2">
                        <h4 class="py-3 px-4 bg-pink-accent-3">Budget - ₹ 1590/sqft (Incl. GST)</h4>
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
                        <div class="pb-5 pt-2 d-flex flex-column align-center mt-2 packageBottom">
                            <p class="text-indigo-lighten-1 text-center">Get in touch with us!</p>
                            <v-btn color="pink-accent-3" variant="flat" class="text-capitalize" width="230" append-icon="mdi-arrow-right">Talk to our Experts</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row> -->
            <slider-comp/>
            <div class="d-flex justify-end">
                <RouterLink to="/termsofservices" class="text-caption text-end pr-md-14 pt-2 text-pink-accent-3">*T&C Apply</RouterLink>
            </div>
            
        </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import SliderComp from "@/components/construction-components/slider-range-components/SliderComp.vue"
// import { reactive } from "vue";

//     const expansionArr= reactive([
//         {
//             item:"Designs & Drawings",
//             description: [
//                 "3D Elevation", "Aritectural Layout | 2D", "Basic Elevation","Structural Design"
//                 ]           
//         },
//         {
//             item:"Structure",
//             description:[
//                 "Aggregates - 20mm & 40mm",
//                 "Blocks - Standard Solid Concrete blocks. 6 inch 4 inch",
//                 "Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)",
//                 "Cement - Dalmia, Coromandal or Zuari or equivalent 43 or 53 grade",
//                 "RCC Design Mix - As per the structural designer recommendation",
//                 "Steel - Sunvik, Meenakshi, Kamdhenu or equivalent"]
//         },
//         {
//             item:"Kitchen",
//             description:[
//                 "Any Other Faucet & Accessories - ISI Marked",
//                 "Ceramic Wall Tiles ( 2 feet above kitchen slab ) - Upto Rs.40 per Sqft",
//                 "Kitchen Sink - Stainless Steel Single Sink worth Rs.3000",
//                 "Main Sink Faucet - Upto Rs.1300" 
//             ]
//         },
//         {
//             item:"Bathroom",
//             description:[
//                 "Bathroom Ceramic Wall Tiles with 7 feet height - Upto Rs.40 per Sqft",
//                 "Bathroom doors - Waterproof flush doors",
//                 "CPVC Pipe - Astral or equivalent",
//                 "Sanitary ware & CP Fittings - Upto Rs.30000 per 1000 sqft of construction"
//             ]
//         },
//         {
//             item:"Doors & Windows",
//             description:[
//                 "Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.8000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch",
//                 "Main Door - Flush Door With Veneer. Sal wood frame of 5 inch by 3 inch, worth Rs.13000 including fixtures",
//                 "Windows - Aluminium Windows with glass shutters and mesh shutters(3 track with 1 mesh)"
//             ]
//         },
//         {
//             item:"Painting",
//             description:[
//                 "Exterior Painting - Asian Primer + Ace Exterior Emulsion Paint or equivalent",
//                 "Interior Painting - JK Putty + Tractor Emulsion or equivalent"
//             ]
//         },
//         {
//             item:"Flooring",
//             description:[
//                 "Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.40 per sqft",
//                 "Living and Dining Flooring - Tiles of value upto Rs.50 per sqft",
//                 "Parking Tiles - Anti-skid tiles of value upto ₹40 per sqft",
//                 "Rooms and Kitchen Flooring - Tiles upto Rs.50 per sqft",
//                 "Staircase Flooring - Sadarahalli Granite of value upto ₹ 70 per sqft"
//             ]
//         },
//         {
//             item:"Electrial",
//             description:[
//                 "Switches & Sockets - Anchor Roma",
//                 "Wires - Fireproof wires by Finolex"
//             ]
//         },
//         {
//             item:"Miscellaneous",
//             description:[
//                 "Overhead Tank - Sintex Double Layered 1000 ltrs",
//                 "Staircase Railing - MS Railing",
//                 "Underground Sump - 4000 litres",
//                 "Window Grills - Basic MS Grill with enamel Paint at Rs. 150 per Sqft"
//             ]
//         }
        
//     ])
</script>

<style scoped>
    .customPlaceholder ::placeholder{
        color: white;
        opacity: 1;
    } 

  /*  .border{
        border: 1px solid grey;
    }

    .v-expansion-panel:not(:first-child)::after{
        border: none !important;
    }
    .v-expansion-panels{
        border-bottom-style: solid;
        border-bottom-width: thin;
        border-color: rgb(216, 216, 236);
    } */


</style>
