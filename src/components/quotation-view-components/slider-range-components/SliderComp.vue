<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center pa-4">
                <h5 style="line-height: normal;">Message delivery Failed. Please try again!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h6 text-center d-flex align-center justify-center pa-4">
                <h5 style="line-height: normal;">
                    Message has been delivered. Checked Spot Team will contact you soon.
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-row no-gutters>
        <v-col cols="12" class="d-flex flex-column align-center px-0">
            <h2 class="text-h4 font-weight-medium" style="color:#1f0757">Our Packages.</h2>
            <p class="py-2 text-body-1 text-indigo-lighten-1 text-center">Find the best home construction packages.</p>
            <div class="d-flex">
                <pre class="py-2 text-body-1 text-indigo-lighten-1 text-center">Currently showing for  </pre>
                <v-select placeholder="Select" class="customPlaceholder" v-model="city" :items="cities"
                    @update:model-value=callGetPackage bg-color="pink-accent-3" density="compact" style="width:125px;"
                    variant="solo"></v-select>
            </div>
        </v-col>
    </v-row>

    <v-slide-group v-if="isPackagesExist" selected-class="bg-primary" multiple show-arrows>
        <v-slide-group-item v-for="constructionPackage in constructionPackages" :key="constructionPackage?.packageId">
            <div class="border pa-2 mr-5 d-flex flex-column justify-space-between" style="max-width:360px;">
                <div>
                    <h4 class="py-3 px-4 bg-pink-accent-3"><span style="text-transform: capitalize;">{{
                        constructionPackage.type }} </span> - ₹ {{ constructionPackage.price }}/sqft (Incl. GST)
                    </h4>
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="packageFeature in constructionPackage.features"
                            :key="packageFeature?.type" elevation="0">
                            <v-expansion-panel-title class="text-caption font-weight-black" expand-icon="mdi-plus"
                                collapse-icon="mdi-minus">
                                {{ packageFeature?.type }}
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="text-indigo-lighten-1"
                                v-for="(item, index) in packageFeature?.items" :key="index">
                                {{ item.name }} {{ item.description ? " - " + item.description : "" }}
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="pb-3 pt-3 d-flex flex-column align-center mt-2">
                    <talk-to-expert-dialog :package="constructionPackage.type" @success="handleSuccess"
                        @failure="handleFailure" />
                </div>
            </div>
        </v-slide-group-item>
    </v-slide-group>

    <v-row v-else class="py-10 d-flex justify-center align-center bg-grey-lighten-5 rounded-lg">
        <v-col v-if="errorOccured" cols="12" class="text-h6 text-sm-h5 text-center font-weight-medium text-grey-darken-1">
            ERROR OCCURED
        </v-col>
        <v-col v-else cols="4">
            <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
//@ts-ignore
import api from "@/data/api";
import { ref, defineAsyncComponent, onMounted } from "vue";

const TalkToExpertDialog = defineAsyncComponent(() => import('@/components/quotation-view-components/slider-range-components/TalkToExpertDialog.vue'));


const cities = ref(['Bengaluru', 'Hassan']);
const city = ref('Bengaluru');

const isPackagesExist = ref(false);
const errorOccured = ref(false);
const constructionPackages = ref([
    {
        packageId: "",
        price: 0,
        type: "basic",
        features: [{
            type: "",
            items: [{
                name: "",
                description: "",
            }],
        }]
    }
]);

const expandSuccess = ref(false);
const expandFailure = ref(false);

async function getPackages(city: string) {
    errorOccured.value = false;
    isPackagesExist.value = false;

    const res = await api.constructionPackage.getConstructionPackages({ params: { city: city } });

    if (res?.status === 200) {
        const data = res?.data;
        constructionPackages.value = [
            { ...data?.basic },
            { ...data?.classic },
            { ...data?.premium }
        ];
        isPackagesExist.value = true;
    } else {
        errorOccured.value = true;
        console.log("ERROR: ", res);
    }
}

async function callGetPackage() {
    isPackagesExist.value = false;

    await getPackages(city.value);
}

function handleSuccess() {
    expandSuccess.value = true;
    setTimeout(() => {
        expandSuccess.value = false;
    }, 2000);
}

function handleFailure() {
    expandFailure.value = true;
    setTimeout(() => {
        expandFailure.value = false;
    }, 2000);
}

onMounted(async () => {
    await getPackages(city.value)
})
</script>

<style scoped>
.border {
    border: 1px solid grey;
}
</style>
