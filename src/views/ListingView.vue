<template>
    <v-container fluid style="background-color: #FAFAFA; height: 100%;" id="prop_cont">
        <v-row class="px-sm-14 pt-5 pb-10">
            <v-col cols="12">
                <h1>Pick your plot</h1>
            </v-col>

            <v-col class="py-0 px-2 px-md-4" cols="12" sm="6" md="3">
                <v-combobox v-model="locationSelect" label="Choose Location" :items="locations" closable-chips="true"
                    prepend-inner-icon="mdi-map-marker" chips variant="outlined" multiple></v-combobox>
            </v-col>

            <!-- property type Filter -->
            <v-col class="py-0 px-2 px-md-4 my-3 mt-n2 my-sm-0 mt-sm-n2" cols="12" sm="6" md="3">
                <fieldset class="rounded pb-1">
                    <legend class="ml-2 text-body-2">Property Type:</legend>
                    <v-btn block variant="text" class="text-h6 d-flex justify-space-between text-grey-darken-3 text-capitalize"
                        style="margin-bottom: 3px; height: 39px;" append-icon="mdi-chevron-down" >
                        {{ propertyType }}

                        <v-overlay activator="parent" location-strategy="connected" location="bottom start"
                            scroll-strategy="reposition">
                            <v-card class="pa-3 mt-3 d-flex flex-column" color="#c2185b" variant="elevated">
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
                        </v-overlay>
                    </v-btn>
                </fieldset>
            </v-col>

            <!-- Verified Property Filter -->
            <v-col class="py-0 px-2 px-md-4 my-3 my-sm-0" cols="12"  sm="6" md="3">
                <v-switch class="px-4" v-model="isVerified" :true-value="true" :false-value="false" label="Verified Properties"
                    color="pink-accent-3" hide-details style="border: solid 1px grey; border-radius: 5px; height: 59px;"></v-switch>
            </v-col>

            <!-- Advanced Filter -->
            <v-col class="py-0 px-2 my-3 my-sm-0" cols="12" sm="6" md="3" style="position: relative">
                <v-btn block height="59" variant="outlined"
                    class="text-h6 d-flex justify-space-between text-grey-darken-3 text-capitalize"
                    append-icon="mdi-dots-vertical" @click="showAdvancedFilterOverlay = !showAdvancedFilterOverlay">
                    Advance Filter
                </v-btn>

                <v-card 
                    v-if="showAdvancedFilterOverlay"
                    class="pa-3 pt-5 pb-8 mt-3 d-flex flex-column showAFO"
                    variant="elevated"
                    elevation="7"
                >
                    <v-row no-gutters>
                        <v-col cols="12" md="9">
                            <!-- Area Filter -->
                            <v-col class="py-0 px-2 px-md-4 mb-5" cols="12">
                                <area-filter v-model="areaRange" />
                            </v-col>

                            <!-- Cost Filter -->
                            <v-col class="py-0 px-2 px-md-4 mt-8" cols="12" sm="">
                                <fieldset class="rounded-xl">
                                    <legend class="ml-6 text-h6">Cost Filter:</legend>
                                    <v-row class="pt-3 px-5 py-5">
                                        <v-col cols="12" class="py-0">
                                            <div class="">
                                                <h3 class="text-body-1 font-weight-medium">Choose Budget</h3>
                                            </div>
                                            <v-range-slider v-model="costRange" strict color="#880e4f" :max="500" :min="0"
                                                :step="5" hide-details justify="align-center">
                                            </v-range-slider>
                                        </v-col>
                                        <v-col cols="12" class="d-flex justify-space-between py-0">
                                            <span>₹ {{ costFrom }}</span>
                                            <span>₹ {{ costTo }}</span>
                                        </v-col>
                                    </v-row>
                                </fieldset>
                            </v-col>

                        </v-col>

                        <v-col cols="12" md="3" class="py-3 d-flex flex-column justify-space-between align-space-between">
                            <div class="">
                                <!-- Freehold Filter  -->
                                <v-col class="py-0 px-2 mb-4" cols="12">
                                    <v-switch class="px-4" v-model="isFreehold" :true-value="true" :false-value="false"
                                        label="Freehold Properties" color="pink-accent-3" hide-details style="border: solid 1px grey; border-radius: 5px;"></v-switch>
                                </v-col>

                                <!-- Date Filter -->
                                <v-col class="py-0 px-2 mb-4" cols="12">
                                    <v-select variant="outlined" v-model="selectDate" label="Posted on" :items="posted"
                                        item-title="title" item-value="value" return-object single-line>
                                    </v-select>
                                    <v-dialog v-model="dateDialog" scroll-strategy="none" persistent width="auto">
                                        <v-card title="Choose Date">
                                            <v-card-text class="d-flex">
                                                <v-text-field type="date" class="ma-3" v-model="selectedDateFrom"></v-text-field>
                                                <v-text-field type="date" class="ma-3" v-model="selectedDateTo"></v-text-field>
                                            </v-card-text>
    
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn text="Close Dialog" @click="hideDialog">close</v-btn>
                                                <v-btn text="Close Dialog" @click="hideDialog">Okay</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </div>

                            <div class="py-0 px-2 d-flex justify-center">                                
                                <v-btn @click="handleSubmit" class="text-white" variant="elevated" color="#880e4f" width="100%" height="45">Submit</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" class="py-0 px-2 d-flex justify-center pl-4 mt-4 mt-md-0">
                <v-btn @click="handleSubmit" class="text-white" variant="elevated" color="#880e4f" width="98%" height="45">Submit</v-btn>
            </v-col>
        </v-row>

        <v-row  v-if="receivedProperties" no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
            <v-col cols="5">
                <div class="text-center text-h3">
                    No data available of type {{ propertyFilterObj?.type }}.
                </div>
            </v-col>
        </v-row>
        <!-- property cards Section  -->

        <v-row no-gutters class="px-sm-14">
            <v-col class="px-2 my-2 px-md-4 my-md-4" v-for="(data, index) in propertiesData?.data" cols="12" md="6" lg="4"
                :key="index">
                <property-card :property="data" />
            </v-col>
        </v-row>

        <v-row v-if="!(propertiesData?.data?.length > 0)" no-gutters class="d-flex justify-center align-center"
            style="height: calc(100% - 54px);">
            <v-col cols="4">
                <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
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

const route = useRoute();
const router = useRouter();

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


let cities: any = null;
if (!Array.isArray(route.query.city) && (typeof (route.query.city) === 'string')) {
    cities = [route.query.city];
} else if (Array.isArray(route.query.city)) {
    cities = [...route.query.city];
}




//Date Selection Filter
function formatDate(date: Date, delemitter: String = "/", format: String = "ddmmyyyy") {
    if (format === "yyyymmdd") {
        const ddmmyyyyFormat = date.getFullYear().toString() + delemitter + (date.getMonth() + 1) + delemitter + date.getDate();
        return ddmmyyyyFormat;
    } else {
        const ddmmyyyyFormat = date.getDate().toString() + delemitter + (date.getMonth() + 1) + delemitter + date.getFullYear();
        return ddmmyyyyFormat;
    }
}

function getDate(dateLabel: String) {
    let today = new Date();
    let from;
    let to = formatDate(new Date(), "-", "ddmmyyyy");
    if (dateLabel === "Today") {
        from = formatDate(new Date(), "-", "ddmmyyyy");
        return { from, to };
    } else if (dateLabel === "This week") {
        from = formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7,), "-", "ddmmyyyy");
        return { from, to };
    } else if (dateLabel === "This month") {
        from = formatDate(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate(),), "-", "ddmmyyyy");
        return { from, to };
    } else {
        from = formatDate(new Date(), "-", "ddmmyyyy");
        to = formatDate(new Date(), "-", "ddmmyyyy");
        return { from, to };
    }
}
const dateDialog = ref(false);
const selectedDateFrom = ref('');
const selectedDateTo = ref('');
const selectDate = ref({
    title: "Today",
    value: getDate("Today")
});
const posted = ref([
    {
        title: "Today",
        value: getDate("Today")
    },
    {
        title: "This week",
        value: getDate("This week")
    },
    {
        title: "This month",
        value: getDate("This month")
    },
    {
        title: "Select",
        value: getDate("Select")
    },
])
watch(selectDate, (newValue) => {
    if (newValue.title === 'Select') {
        dateDialog.value = true;
    }
},
    { deep: true }
);

function hideDialog() {
    const from = selectedDateFrom.value.split('-');
    const to = selectedDateTo.value.split('-')
    if (from.length === 3 && to.length === 3) {
        const fromDate = from[2] + "-" + from[1] + "-" + from[0];
        const toDate = to[2] + "-" + to[1] + "-" + to[0];

        selectDate.value.value.from = fromDate;
        selectDate.value.value.to = toDate;
    }
    console.log("selectedDateFrom : ", selectDate.value)
    dateDialog.value = false;
}


//Location filter
const locationSelect = ref("Bangalore")
const locations = ref(['Bangalore', 'Hassan', 'Mysore']);

//Property filter
const propertyType = ref("All");

//AdvancedFilter
const showAdvancedFilterOverlay = ref(false);
const isVerified = ref(false);
const areaRange = ref({});
const isFreehold = ref(false);
   

//Cost filter
const costRange = ref([0, 500])
const costFrom = ref("0 Lac");
const costTo = ref("5.00 Cr");
watch(costRange, (newCostRange) => {
    if (newCostRange[0] >= 100) {
        costFrom.value = (newCostRange[0] / 100).toFixed(2) + " Cr";
    } else {
        costFrom.value = (newCostRange[0]).toString() + " Lac";
    }

    if (newCostRange[1] >= 100) {
        costTo.value = (newCostRange[1] / 100).toFixed(2) + " Cr";
    } else {
        costTo.value = (newCostRange[1]).toString() + " Lac";
    }
});


function handleSubmit() {
    console.log("location : ", locationSelect.value)
    console.log("type : ", propertyType.value)
    console.log("isVerified : ",isVerified.value)
    console.log("areaRange : ", areaRange.value)
    console.log("costFrom : ", costFrom.value, "  costTo : ", costTo.value)
    console.log("isFreehold : ", isFreehold.value)
    console.log("date : ", selectDate.value)
}

const propertiesData = reactive({ data: [] });
const propertyFilterObj = reactive({ ...route?.query });
const filterOptions = reactive({
    //@ts-ignore
    type: (propertyFilterObj?.type)?.length > 0 ? propertyFilterObj?.type : null,
    isVerifiedByCheckedSpot: propertyFilterObj?.isVerifiedByCheckedSpot || null,
    city: cities || null,
    areaFrom: propertyFilterObj?.areaFrom || null,
    areaTo: propertyFilterObj?.areaTo || null,
    costFrom: propertyFilterObj?.costFrom || null,
    costTo: propertyFilterObj?.costTo || null,
})

const pageNumber = ref(1);
const limit = ref(6);
const noOfPage = ref(0);
const receivedProperties = ref(false);
const isFetchingData = ref(false);



async function getAllProperty() {
    // console.log(filterOptions)
    const filterData = {
        params: {
            ...filterOptions,
            limit: limit.value,
            pageNumber: pageNumber.value,
        },
    };

    const res = await api.property.getProperties(filterData);
    if (res.status === 200) {
        const data = res?.data;
        //@ts-ignore
        propertiesData?.data?.push(...data);
        noOfPage.value = Math.ceil(res?.noOfdata / limit.value);
        if (res.noOfdata.value <= 0) {
            receivedProperties.value = true;
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
    width: 87vw;
}
</style>