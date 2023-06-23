<template>
    <v-container class="py-10">
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
            <v-row no-gutters>
                <v-col cols="4" class="pr-md-5">
                    <div class="border pa-2">
                        <h4 class="py-3 px-2 bg-pink-accent-3">Budget - ₹ 1590/sqft (Incl. GST)</h4>
                        <v-expansion-panels variant="accordion">
                            <v-expansion-panel v-for="(item,index) in expansionArr" :key="index" elevation="0">
                                <v-expansion-panel-title  expand-icon="mdi-plus" collapse-icon="mdi-minus">
                                {{item.item}}
                                </v-expansion-panel-title>
                                <v-expansion-panel-text v-for="(des,index) in item.description" :key="index">
                                {{des}}
                                </v-expansion-panel-text>
                            
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </v-col>
            </v-row>
        </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { reactive } from "vue";

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
        }
        
    ])
</script>

<style scoped>
    .customPlaceholder ::placeholder{
        color: white;
        opacity: 1;
    }

    .border{
        border: 1px solid grey;
    }

    .v-expansion-panel:not(:first-child)::after{
        border: none !important;
    }
</style>
