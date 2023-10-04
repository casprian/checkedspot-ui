<template>
    <v-container fluid style="background-color: #FAFAFA; height: 100%;" id="prop_cont">
        <v-row class="px-sm-14 py-10">
            <v-col cols="12">
                <h1>Pick your plot</h1>
            </v-col>
            <v-col class="py-0 px-2 px-md-4" cols="12" sm="3">
                <v-select variant="outlined" label="Property Type"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
            </v-col>
            <v-col class="py-0 px-2 px-md-4" cols="12" sm="3">
                <v-select variant="outlined" label="Location"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
            </v-col>
            <v-col class="py-0 px-2 px-md-4" cols="12" sm="3">
                <v-select variant="outlined" v-model="selectDate" label="Posted on" :items="posted" item-title="title"
                    item-value="value" return-object single-line>
                </v-select>
                <v-dialog v-model="dateDialog" scroll-strategy="none" persistent width="auto">
                    <v-card title="Choose Date">
                        <v-card-text class="d-flex">
                            <v-text-field type="date" class="ma-3" v-model="selectedDateFrom"
                                :rules="validateDateFrom"></v-text-field>
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
            <v-col class="py-0 px-2 px-md-4" cols="12" sm="3">
                <v-expansion-panels>
                    <v-expansion-panel expand-icon="mdi-menu-down" collapse-icon="mdi-menu-up" title="Title">
                        <v-expansion-panel-text>kjjfdkjsadflkjsj fdlksjl</v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col class="py-0 px-2 px-md-4" cols="12" sm="3">
                <v-switch :v-model="'people'" true-value="true" false-value="false" label="Verified Properties"
                    color="pink-accent-3" hide-details></v-switch>
            </v-col>
            <v-col class="py-0 px-2 px-md-4" cols="12" sm="6">
                <div class="pa-0 pb-3">
                    <h3 class="text-body-1 font-weight-medium">Choose Area</h3> 
                </div>
                <v-row class="d-flex justify-space-between">
                    <v-col cols="12" md="4">
                        <v-select variant="outlined" v-model="areaUnit" label="choose area unit" :items="['sqft', 'sqyrd', 'sqm']"></v-select>
                    </v-col>
                    <v-col cols="12" md="8" class="py-0 pt-md-4">
                        <div class="d-flex justify-space-between">                            
                            <span>{{ areaRange[0] }} {{ areaUnit }}</span>
                            <span>{{ areaRange[1] }} {{ areaUnit }}</span>
                        </div>
                        <v-range-slider class="" v-model="areaRange" strict color="#880e4f" :max="areaRangeMax" :min="0"
                            :step="areaStep" hide-details justify="align-center">
                        </v-range-slider>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="py-0 px-2 px-md-4 mt-8" cols="12" sm="6">
                <v-row>
                    <v-col cols="12" class="pb-0">
                        <h3 class="text-body-1 font-weight-medium">Choose Budget</h3>
                    </v-col>
                    <v-col cols="12" class="py-0 pt-md-4">
                        <v-range-slider v-model="costRange" strict color="#880e4f" :max="500" :min="0" :step="5"
                            hide-details justify="align-center">
                        </v-range-slider>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-space-between py-0">
                        <span>₹ {{ costFrom }}</span>
                        <span>₹ {{ costTo }}</span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row v-if="receivedProperties" no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
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
import { title } from "process";

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



//Area Filter
const sqftAreaRange = ref([0, 50000]); // step 200
const sqyrdAreaRange = ref([0, 5500]); // step 50
const sqmAreaRange = ref([0, 5000]); // step 50
const areaRange = ref(sqftAreaRange.value);
const areaRangeMax = ref(sqftAreaRange.value[1]);
const areaStep = ref(200);
const  areaUnit = ref("sqft");
watch(areaUnit, (newAreaUnit, oldAreaUnit) => {
    if(newAreaUnit !== oldAreaUnit) {
        if(newAreaUnit === "sqyrd") {
            areaRange.value = sqyrdAreaRange.value;
            areaStep.value = 50;
            areaRangeMax.value = sqyrdAreaRange.value[1];
        } else if(newAreaUnit === "sqm") {
            areaRange.value = sqmAreaRange.value;
            areaStep.value = 50;
            areaRangeMax.value = sqmAreaRange.value[1];
        } else {
            areaRange.value = sqftAreaRange.value;
            areaStep.value = 200;
            areaRangeMax.value = sqftAreaRange.value[1];
        }
    }
})



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

<style scoped></style>