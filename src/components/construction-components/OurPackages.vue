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

<script lang="ts" setup>
//@ts-ignore
import SliderComp from "@/components/construction-components/slider-range-components/SliderComp.vue"
</script>

<style scoped>
    .customPlaceholder ::placeholder{
        color: white;
        opacity: 1;
    } 
</style>
