<template>
    <v-container fluid style="background-color: #FAFAFA">
        <v-row no-gutters class="px-sm-14">
            <v-col cols="12">
                <v-breadcrumbs :items="items">
                    <template v-slot:prepend>
                        <v-icon size="small" icon="mdi-vuetify"></v-icon>
                    </template>
                </v-breadcrumbs>
            </v-col>
        </v-row>

        <v-row no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
            <v-col cols="5">
                <div class="text-center">
                    <v-pagination @click="getAllProperty" v-model="pageNumber" :length="noOfPage" prev-icon="mdi-menu-left"
                        next-icon="mdi-menu-right"></v-pagination>
                </div>
            </v-col>
        </v-row>
        <!-- property cards Section -->
        <v-row no-gutters class="px-sm-14">
            <v-col class="px-2 my-2 px-md-4 my-md-4" v-for="(data, index) in propertiesData?.data" cols="12" md="6" lg="4"
                :key="index">
                <property-card :property="data" />
            </v-col>
        </v-row>
        <v-row v-if="!propertiesData?.data" no-gutters class="px-sm-14">
            <v-col cols="4" class="loader">
                <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
            </v-col>
        </v-row>

        <v-row no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
            <v-col cols="5">
                <div class="text-center">
                    <v-pagination @click="getAllProperty" v-model="pageNumber" :length="noOfPage" prev-icon="mdi-menu-left"
                        next-icon="mdi-menu-right"></v-pagination>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import PropertyCard from '@/components/PropertyCard.vue'
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
// import api from "@/data/api/index.js";
import axios from 'axios';

const route = useRoute();

const items = reactive([
    {
        title: "Home",
        disabled: false,
        href: "/",
    },
    {
        title: "Listing",
        disabled: true,
        href: "/listing",
    },
]);

const sortItems = reactive([
    "Top Selling",
    "Most Viewed",
    "Price(low to high)",
    "Price(high to low)",
]);

const selectedItem = ref(sortItems[0]);

let propertiesData = reactive({ data: null });
const propertyFilterObj = reactive({ ...route?.params });
const pageNumber = ref(1)
const limit = ref(10);
const noOfPage = ref(1);
const noOfData = ref(0);
const noOfDataComputed =  computed(() => {
    return noOfData.value;
})

function getAllProperty() {
    const formData = {
        params: {
            verified: propertyFilterObj?.verified,
            location: propertyFilterObj?.location,
            propertyStatus: propertyFilterObj?.propertyStatus,
            areaFrom: propertyFilterObj?.areaFrom,
            areaTo: propertyFilterObj?.areaTo,
            costFrom: propertyFilterObj?.costFrom,
            costTo: propertyFilterObj?.costTo,
            limit: limit.value,
            pageNumber: pageNumber.value,
        },
    };
    // const res = await api.property.getProperties(formData);
    axios.get('http://localhost:8080/property/getAllProperties', formData)
        .then((res) => {
            propertiesData.data = res?.data?.data;
            noOfData.value = res?.data?.noOfdata;
            noOfPage.value = Math.ceil(noOfDataComputed.value/limit.value);
            console.log(noOfPage.value)
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
}
// onMounted(async () => {
//     const formData = {
//         params: {
//             verified: propertyFilterObj?.verified,
//             location: propertyFilterObj?.location,
//             propertyStatus: propertyFilterObj?.propertyStatus,
//             areaFrom: propertyFilterObj?.areaFrom,
//             areaTo: propertyFilterObj?.areaTo,
//             costFrom: propertyFilterObj?.costFrom,
//             costTo: propertyFilterObj?.costTo
//         },
//     };
//     const res = await api.property.getProperties(formData);
//     propertiesData.data = res.data;
// });
onMounted(async () => {
    getAllProperty();
});
</script>

<style scoped>
.cardCont:hover {
    cursor: pointer;
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>