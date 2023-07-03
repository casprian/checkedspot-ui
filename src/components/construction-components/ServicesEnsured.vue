<template>
    <v-container class="mt-8">
        <v-row no-gutters>
            <v-col cols="12">
                <h2
                class="text-h4 font-weight-medium text-center"
                style="color: #1f0757"
                >
                ‘Best in class’ service ensured
                </h2>
                <p class="py-2 text-indigo-lighten-1 text-center text-body-1">
                Making construction reliable, simple, and transparent.
                </p>
            </v-col>
            <v-col cols="12" class="pa-3 mt-4">
                <v-row no-gutters>
                    <v-col cols="6" md="4" class="px-1 my-1" v-for="(service,index) in serviceDetail" :key= index>
                        <div class="py-6 px-4 d-flex flex-column justify-center align-center" style="border:1px solid rgb(216, 205, 205); height:100%;">
                            <v-img :src= service.image width="60"></v-img>
                            <p class="pt-4 text-indigo-lighten-1 text-center text-body-2">{{service.details}}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="d-flex justify-center my-5">
                <v-btn color="pink-accent-3" variant="flat" class="text-capitalize text-body-1 font-weight-bold rounded-lg" width="250" height="50" append-icon="mdi-arrow-right">Book Free Consultation</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'

    const serviceDetail = reactive([
        {
            image : "https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-quality-control-approved-and-rejected-bearicons-flat-bearicons-3.png",
            details : "We provide with 430+ quality checks conducted by our site engineers"
        },
        {
            image : "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-price-digital-currency-wanicon-lineal-color-wanicon.png",
            details : "No price escalations once the project starts. No Cost Overrun Policy."
        },
        {
            image : "https://img.icons8.com/external-wanicon-two-tone-wanicon/64/000000/external-warranty-online-shopping-wanicon-two-tone-wanicon.png",
            details : "5 years warranty covered on super and sub structure including underground sump"
        },
        {
            image : "https://img.icons8.com/color/64/000000/verified-badge.png",
            details : "Only verified contractors are provided by us to ensure quality work"
        },
        {
            image : "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/64/000000/external-document-business-vitaliy-gorbachev-flat-vitaly-gorbachev-2.png",
            details : "Quotations are transparent & cover every detail that goes into construction"
        },
        {
            image : "https://img.icons8.com/dusk/64/000000/road-worker.png",
            details : "Buying building materials & supplies made easier, at just a tap of a finger"
        },
    ])
</script>

<style scoped>

</style>
