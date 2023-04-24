<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" style="background-color: lightgoldenrodyellow">
                <v-breadcrumbs :items="items">
                    <template v-slot:prepend>
                        <v-icon size="small" icon="mdi-vuetify"></v-icon>
                    </template>
                </v-breadcrumbs>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12" class="pt-6 pb-6">
                <div class="text-h4 font-weight-medium">Grid View</div>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="12" lg="8" class="" style="background-color: antiquewhite">
                <v-row no-gutters>
                    <v-col cols="12" md="6" class="d-flex justify-start align-center pt-4 pb-4">
                        <div class="text-body-1 font-weight-medium text-primary">
                            8 Search Results
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="pt-2 pb-2">
                        <v-row no-gutters>
                            <v-col cols="8" class="">
                                <v-select style="width: 250px" v-model="selectedItem" prepend-icon="mdi-sort"
                                    class="rounded-0" :items="sortItems" variant="underlined"></v-select>
                            </v-col>

                            <v-col cols="4" class="d-flex justify-end align-center pr-4">
                                <v-icon size="40" icon="mdi-view-list"></v-icon>
                                <v-icon size="32" icon="mdi-view-grid"></v-icon>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- property cards Section -->
                <v-row no-gutters>
                    <v-col v-for="(data, index) in propertiesData?.data" cols="12" md="6" :key="index">
                        <!-- <v-card
              prepend-icon="mdi-home"
              color="secondary"
              variant="outlined"
              width="100%"
              height="400px"
              image=""
              loading="black"
              :title="'Property For: ' + data?.propertyStatus"
              :subtitle="'Location: ' + data?.location"
              :text="
                'cost: ' + data.cost + ' ' + ' Total Area: ' + data.totalArea
              "
            >
                <template v-slot:image>
                    <v-img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></v-img>
                </template>
            </v-card> -->
                    
                        <property-card :property="data"/>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" lg="4" style="background-color: darkkhaki">
                Filter section
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
            costTo: propertyFilterObj?.costTo,
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

<style scoped></style>