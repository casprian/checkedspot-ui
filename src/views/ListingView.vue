<template>
    <v-container fluid style="background-color: #FAFAFA; height: 100%;" id="prop_cont">
        <v-row class="px-sm-14 pt-5 pb-10" id="filterSection">
            <v-col cols="12">
                <h1>Pick your plot</h1>
            </v-col>

            <v-col class="py-0 px-2 px-md-4" cols="12" sm="6" md="3">
                <v-combobox v-model="locationSelect" label="Choose Location" :items="locations"
                    prepend-inner-icon="mdi-map-marker" chips variant="outlined" multiple></v-combobox>
            </v-col>

            <!-- property type Filter -->
            <v-col class="py-0 px-2 px-md-4 my-3 mt-n2 my-sm-0 mt-sm-n2" cols="12" sm="6" md="3">
                <fieldset class="rounded pb-1">
                    <legend class="ml-2 text-body-2">Property Type:</legend>

                    <v-menu transition="slide-x-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" block variant="text"
                                class="text-h6 d-flex justify-space-between text-grey-darken-3 text-capitalize"
                                style="margin-bottom: 3px; height: 39px;" append-icon="mdi-chevron-down">
                                {{ propertyType }}
                            </v-btn>
                        </template>

                        <v-card class="pa-3 mt-3 d-flex flex-column" color="#c46d9a" variant="elevated">
                            <input id="all" checked class="typeRadio" type="radio" name="propertytype" value="all"
                                v-model="propertyType">
                            <label for="all" title="All">All</label>

                            <input id="plot" class="typeRadio" type="radio" name="propertytype" value="plot"
                                v-model="propertyType">
                            <label for="plot" title="Plot">Plot</label>

                            <input id="farmland" class="typeRadio" type="radio" name="propertytype" value="farmland"
                                v-model="propertyType">
                            <label for="farmland" title="Farm Land">Farm Land</label>
                        </v-card>
                    </v-menu>
                </fieldset>
            </v-col>

            <!-- Verified Property Filter -->
            <v-col class="py-0 px-2 px-md-4 my-3 my-sm-0" cols="12" sm="6" md="3">
                <v-switch class="px-4" v-model="isVerified" :true-value="true" :false-value="false"
                    label="Verified Properties" color="pink-accent-3" hide-details
                    style="border: solid 1px grey; border-radius: 5px; height: 59px;"></v-switch>
            </v-col>

            <!-- Advanced Filter -->
            <v-col class="py-0 px-2 my-3 my-sm-0" cols="12" sm="6" md="3" style="position: relative">
                <v-btn block height="59" variant="outlined"
                    class="text-h6 d-flex justify-space-between text-grey-darken-3 text-capitalize"
                    append-icon="mdi-dots-vertical" @click="showAdvancedFilterOverlay = !showAdvancedFilterOverlay">
                    Advance Filter
                </v-btn>

                <!-- ADVANCED FILTER CARD -->
                <v-card v-if="showAdvancedFilterOverlay" class="pa-3 pt-3 pb-8 mt-3 d-flex flex-column showAFO"
                    variant="elevated" elevation="7">
                    <v-row no-gutters>
                        <v-col cols="12" md="9">
                            <v-row no-gutters>
                                <!-- Posted by filter -->
                                <v-col class="py-0 px-2 px-md-4 mb-4" cols="12" md="8">
                                    <fieldset class="rounded-xl">
                                        <legend class="ml-6 legendText textColor">Properties Posted By:</legend>
                                        <div class="mb-3">
                                            <v-radio-group v-model="ownershipType" inline color="#c46d9a"
                                                class="d-flex justify-center">
                                                <v-radio label="None" value="" class="mr-2"></v-radio>
                                                <v-radio label="Owners" value="owner" class="mr-2"></v-radio>
                                                <v-radio label="Agents" value="agent" class="mx-2"></v-radio>
                                                <v-radio label="Developers" value="developer" class="mx-2"></v-radio>
                                            </v-radio-group>
                                        </div>
                                    </fieldset>
                                </v-col>

                                <!-- Freehold Filter  -->
                                <v-col class="py-0 px-2 mb-4 mt-md-3 d-flex justify-center align-center" cols="12" md="4">
                                    <v-switch class="px-3 textColor font-weight-medium text-body-2" v-model="isFreeHold"
                                        :true-value="true" :false-value="false" label="Freehold Properties"
                                        color="pink-accent-3" hide-details
                                        style="border: solid 1px grey; border-radius: 5px;"
                                        append-icon="mdi-information"></v-switch>
                                    <v-tooltip location="bottom center" origin="top center" activator="parent">
                                        <div class="text-caption text-center" style="">Freehold property is inheritable and
                                            there
                                            <br> are no restrictions on the right of the property
                                            <br> owner to further transfer the property.
                                            <br>In a free hold property, there is no encumbrance to
                                            <br>the absolute title of the property.
                                            <br>A free hold is not akin to a condominium wherein
                                            <br>the owner of the individual unit pays a maintenance charge.
                                            <br>Free hold property can be inherited by a legal guardian.
                                            <br>A freehold property can be transferred by
                                            <br>registration of sale deed.
                                        </div>
                                    </v-tooltip>
                                </v-col>

                                <!-- Area Filter -->
                                <v-col class="py-0 px-2 px-md-4 mb-5" cols="12">
                                    <area-filter v-model="areaRange" />
                                </v-col>

                                <!-- Cost Filter -->
                                <v-col class="py-0 px-2 px-md-4" cols="12" sm="">
                                    <cost-filter v-model="costRange" />
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="12" md="3" class="py-3 d-flex flex-column justify-space-between align-space-between">
                            <div class="mt-1">
                                <!-- Date Filter -->
                                <date-filter v-model="selectedDate" />

                                <!-- Sorting Filter -->
                                <v-menu transition="slide-x-transition" :close-on-content-click="false">
                                    <template v-slot:activator="{ props }">
                                        <div class="px-2">
                                            <v-btn class="d-flex justify-space-between" width="100%" height="50"
                                                color="#000000b3" variant="outlined" v-bind="props"
                                                append-icon="mdi-sort">Sort</v-btn>
                                        </div>
                                    </template>

                                    <v-card class="pa-0 ma-0 py-1" color="#c46d9a">
                                        <div>
                                            <div class="pl-3 py-1 text-text-body-1 font-weight-medium text-white">Sort By
                                            </div>
                                            <v-divider color="white" :thickness="2"></v-divider>
                                            <div class="pl-5 pr-4 d-flex flex-column">
                                                <input id="none" checked class="typeRadio" type="radio" name="sortby"
                                                    value="none" v-model="sort.sortBy">
                                                <label for="none" title="None">None</label>

                                                <input id="date" class="typeRadio" type="radio" name="sortby" value="date"
                                                    v-model="sort.sortBy">
                                                <label for="date" title="Date">Date</label>

                                                <input id="cost" class="typeRadio" type="radio" name="sortby" value="cost"
                                                    v-model="sort.sortBy">
                                                <label for="cost" title="Cost">Cost</label>

                                                <input id="area" class="typeRadio" type="radio" name="sortby" value="area"
                                                    v-model="sort.sortBy">
                                                <label for="area" title="Area">Area</label>
                                            </div>
                                        </div>

                                        <div v-if="sort.sortBy !== 'none'">
                                            <div class="pl-3 py-1 text-text-body-1 font-weight-medium text-white">Order By
                                            </div>
                                            <v-divider color="white" :thickness="2"></v-divider>
                                            <div class="pl-5 pr-4 d-flex flex-column">
                                                <input id="asc" checked class="typeRadio" type="radio" name="orderby"
                                                    value="asc" v-model="sort.orderBy">
                                                <label for="asc" title="Low-to-High">Low-to-High</label>

                                                <input id="desc" class="typeRadio" type="radio" name="orderby" value="desc"
                                                    v-model="sort.orderBy">
                                                <label for="desc" title="High-to-Low">High-to-Low</label>
                                            </div>
                                        </div>
                                    </v-card>
                                </v-menu>
                            </div>

                            <div class="py-0 px-2 pt-7 d-flex justify-center">
                                <v-btn @click="handleSubmit" class="text-white" variant="elevated" color="#880e4f"
                                    width="100%" height="45">Submit</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" class="py-0 px-2 d-flex justify-center pl-4 mt-4 mt-md-0">
                <v-btn @click="handleSubmit" class="text-white" variant="elevated" color="#880e4f" width="98%"
                    height="45">Submit</v-btn>
            </v-col>
        </v-row>

        <v-row v-if="zeroProperties" no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
            <v-col cols="5">
                <div class="text-center text-h3">
                    No data available for the particular filter. Please Try again!
                </div>
            </v-col>
        </v-row>

        <v-row v-else-if="!(propertiesData?.data?.length > 0)" no-gutters class="d-flex justify-center align-center"
            style="height: calc(100% - 287px);">
            <v-col cols="4">
                <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
            </v-col>
        </v-row>

        <!-- property cards Section  -->
        <v-row v-else no-gutters class="px-sm-14">
            <v-col class="px-2 my-2 px-md-4 my-md-4" v-for="(data, index) in propertiesData?.data" cols="12" md="6" lg="4"
                :key="index">
                <property-card :property="data" />
            </v-col>
        </v-row>

        <v-snackbar v-model="isFetchingData" color="pink">
            {{ 'Loading properties...' }}

            <template v-slot:actions>
                <v-btn white icon="mdi-close" @click="isFetchingData = false">
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from "@/data/api/index.js";
//@ts-ignore
import PropertyCard from '@/components/PropertyCard.vue';
import { computed, watch, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AreaFilter from '@/components/property-filters/AreaFilter.vue';
import CostFilter from "@/components/property-filters/CostFilter.vue";
import DateFilter from "@/components/property-filters/DateFilter.vue";


const route = useRoute();
const router = useRouter();
const propertiesData = reactive({ data: [] });
const pageNumber = ref(1);
const limit = ref(6);
const noOfPage = ref(0);
const zeroProperties = ref(false);
const isFetchingData = ref(false);
const propertyFilterObj = reactive({ ...route?.query });

//these cities are collected from the qyery parameter of the path routing from home page to listing page.
let cities: any = null;
if (!Array.isArray(route.query.city) && (typeof (route.query.city) === 'string')) {
    cities = [route.query.city];
} else if (Array.isArray(route.query.city)) {
    cities = [...route.query.city];
}

//Location filter
const locationSelect = ref(cities || null) // ["string"]
const locations = ref(['Bangalore', 'Hassan', 'Mysore']);

//Property filter
const propertyType = ref('all'); // string

const showAdvancedFilterOverlay = ref(false);
//AdvancedFilter
const ownershipType = ref("");
const isVerified = ref(propertyFilterObj?.isVerifiedByCheckedSpot || false); // boolean
const isFreeHold = ref(false); //boolean
const areaRange = ref(null); // {areaFrom: "0 sqft", areaTo: "50000 sqft"}
const costRange = ref(null); //{costFrom: '0 Lac', costTo: '5.00 Cr'}
const selectedDate = ref(null); // {title: 'Today', value: {from: '6-10-2023', to: '6-10-2023'}}
const sort = ref({ sortBy: 'none', orderBy: 'asc' }) // sorting based on (date, area, cost) and order (asc || desc)

const propertyFilters = reactive({
    //@ts-ignore
    type: (propertyFilterObj?.type)?.length > 0 ? propertyFilterObj?.type : null,
    cities: locationSelect.value,
    isVerified: isVerified.value,
    areaRange: areaRange.value,
    costRange: costRange.value,
    isFreeHold: isFreeHold.value,
    selectedDate: selectedDate.value,
    ownershipType: ownershipType.value,
    sort: sort.value,
    limit: limit.value,
    pageNumber: pageNumber.value,
})

watch([locationSelect, propertyType, isVerified, isFreeHold, areaRange, costRange, selectedDate, ownershipType, sort], (newValues, oldValues) => {
    propertyFilters.cities = locationSelect.value;
    propertyFilters.type = propertyType.value !== "all" ? propertyType.value : null;
    propertyFilters.isVerified = isVerified.value;
    propertyFilters.areaRange = areaRange.value;
    propertyFilters.costRange = costRange.value;
    propertyFilters.isFreeHold = isFreeHold.value;
    propertyFilters.selectedDate = selectedDate.value;
    propertyFilters.ownershipType = ownershipType.value;
    propertyFilters.limit = limit.value;
    propertyFilters.pageNumber = pageNumber.value;
    propertyFilters.sort = sort.value;
});

async function handleSubmit() {
    zeroProperties.value = false;
    pageNumber.value = 1;
    propertyFilters.pageNumber = pageNumber.value;
    propertiesData.data = [];
    showAdvancedFilterOverlay.value = false;
    await getAllProperty()
}


async function getAllProperty() {
    // console.log(filterOptions)
    const filterData = {
        params: {
            filters: JSON.stringify({ ...propertyFilters })
        },
    };

    const res = await api.property.getProperties(filterData);

    // console.log(res)
    if (res.status === 200) {
        const data = res?.data;
        //@ts-ignore
        propertiesData?.data?.push(...data);
        noOfPage.value = Math.ceil(res?.noOfdata / limit.value);
        if (res.noOfdata <= 0) {
            zeroProperties.value = true;
        }
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

window.addEventListener('scroll', async () => {
    if (isFetchingData.value) return;

    const scrollY = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (scrollY + viewportHeight > pageHeight - 240 && noOfPage.value > pageNumber.value) {
        // User has reached the 240px above the end of the page

        /* isFetchingData is important to run the getAllProperty method only once when satisfy above conditions 
        and the snackbar appearence is secondary */

        isFetchingData.value = true;
        pageNumber.value++;
        propertyFilters.pageNumber = pageNumber.value
        await getAllProperty();
        isFetchingData.value = false;
    }
});

onMounted(async () => {
    if (pageNumber.value === 1) {
        await getAllProperty();
    }
});

</script>

<script lang="ts" setup>

</script>

<style scoped>
.radioGroup {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 5px;
}

.typeRadio+label {
    margin: 10px 10px 10px 0;
    border: solid 1px #d7d7d7;
    color: white;
    padding: 8px 25px;
    border-radius: 20px;
    text-align: center;
}

.typeRadio+label:hover {
    cursor: pointer;
}

.typeRadio {
    display: none;
}

.typeRadio:checked+label {
    background-color: #fdfdfd;
    border-color: #757273;
    color: black;
}

.showAFO {
    z-index: 1;
    position: absolute;
    right: 10px;
    width: calc(100vw - 160px);
}

@media screen and (max-width: 599px) {
    .showAFO {
        width: calc(100vw - 30px)
    }
}
</style>