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
        <!-- property cards Section -->
        <v-row no-gutters class="px-sm-14">
            <v-col class="px-2 my-2 px-md-4 my-md-4" v-for="(data, index) in propertiesData?.data" cols="12" md="6" lg="4"
                :key="index">
                <property-card :property="data"/>
            </v-col>
        </v-row>
        <v-row no-gutters class="px-sm-14">
            <h1 v-if="!propertiesData?.data">
                ....Loading
            </h1>
        </v-row>

    </v-container>
</template>

<script lang="ts" setup>
import PropertyCard from '@/components/PropertyCard.vue'
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import api from "@/data/api/index.js";

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

onMounted(async () => {
    const formData = {
        params: {
            verified: propertyFilterObj?.verified,
            location: propertyFilterObj?.location,
            propertyStatus: propertyFilterObj?.propertyStatus,
            areaFrom: propertyFilterObj?.areaFrom,
            areaTo: propertyFilterObj?.areaTo,
            costFrom: propertyFilterObj?.costFrom,
            costTo: propertyFilterObj?.costTo
        },
    };
    const res = await api.property.getProperties(formData);
    propertiesData.data = res.data;
});

</script>

<style scoped>
    .cardCont:hover {
        cursor: pointer; 
    }
</style>