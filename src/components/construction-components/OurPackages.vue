<template>
    <v-container fluid class="px-0 py-10 px-md-14">
        <v-row no-gutters>
            <v-col cols="12" class="d-flex flex-column align-center px-0">
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
            <v-col cols="12" class="pa-0">
                <slider-comp/>
                <div class="d-flex justify-end pr-5">
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
</style>
