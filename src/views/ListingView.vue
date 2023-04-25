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
        <v-row no-gutters class="px-sm-14">
            <v-col cols="12" class="pt-6 pb-6">
                <div class="text-h4 font-weight-medium">Grid View</div>
            </v-col>
        </v-row>

        <v-row no-gutters class="d-flex justify-between align-center px-sm-14">
            <v-col cols="12" md="6" class="d-flex justify-start align-center pt-4 pb-4">
                <div class="text-body-1 font-weight-medium text-primary">
                    8 Search Results
                </div>
            </v-col>
            <v-col cols="12" md="6" class="pt-2 pb-2">
                <v-row no-gutters class="d-flex align-md-center justify-md-end justify-space-between">
                    <v-col cols="auto" class="">
                        <v-select style="width: 250px" v-model="selectedItem" prepend-icon="mdi-sort" class="rounded-0 pr-3"
                            :items="sortItems" variant="underlined"></v-select>
                    </v-col>

                    <v-col cols="auto" class="d-flex justify-end align-center pr-4">
                        <v-icon size="40" icon="mdi-view-list"></v-icon>
                        <v-icon size="32" icon="mdi-view-grid"></v-icon>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <!-- property cards Section -->
        <v-row no-gutters class="px-sm-14">
            <v-col class="px-2 my-2 px-md-4 my-md-4" v-for="(data, index) in propertiesData?.data" cols="12" md="6" lg="4"
                :key="index">
                <property-card :property="data"/>
            </v-col>
        </v-row>

    </v-container>
</template>

<script lang="ts" setup>
import PropertyCard from '@/components/PropertyCard.vue'
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
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

let propertiesData = reactive({ data: [] });
const propertyFilterObj = reactive({ ...route?.params });

onMounted(() => {
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
    // const formData = {
    //     params: {
    //         verified: true,
    //         location: "Bangalore",
    //         propertyStatus: "sale",
    //         areaFrom: 1000,
    //         areaTo: 6000,
    //         costFrom: 1000000,
    //         costTo: 6000000
    //     }
    // }
    // let data;
    console.log(formData);
    axios
        .get(`http://localhost:8080/property/getAllProperties`, formData)
        .then((response) => {
            propertiesData.data = response.data.data;
            // console.log("response.data : ", response?.data?.data)
        })
        .catch((error) => {
            console.log(error);
        });
});

</script>

<style scoped>
.cardCont:hover {
    cursor: pointer; 
}
</style>