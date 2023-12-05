<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>Deletion Canceled!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>
                    Property has been deleted successfully!
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-card class="mx-auto" style="max-width: 480px; min-height: auto;" position="relative">
        <v-img
            :src="property?.image !== undefined ? property?.image?.fileUrl : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
            height="200px" position="relative" cover class="hoverPointer" alt="property Images">
            <v-toolbar v-if="property?.title && property?.title !== 'unavailable'" class="propertyTitle" theme="dark"
                height="35" style="background-color: rgba(0, 0, 0, 0.466);">
                <div class="w-100 text-body-1 text-center px-3">
                    {{ property?.title ? property?.title : "Property title - like, Fit for home etc." }}
                </div>
            </v-toolbar>
            <v-card-title v-if="property?.isVerifiedByCheckedSpot" title="verified by Checked Spot"
                class="px-4 py-1 verifiedTag">
                <v-chip variant="elevated" color="green-darken-2" density="comfortable">
                    Checked Spot verified <v-icon size="16" class="ml-2" icon="mdi-shield-check" color="white"></v-icon>
                </v-chip>
            </v-card-title>
            <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-space-between">
                    <v-btn @click="router.push({ path: '/propertydashboard', query: { propertyId: property.propertyId } })"
                        height="30" class="ma-2" variant="flat" elevation="4" color="green-darken-2" disabled>Edit</v-btn>

                    <v-btn height="30" class="ma-2" variant="flat" elevation="4" color="pink-darken-3">Delete
                        <v-dialog v-model="confirmDialog" width="auto" activator="parent">
                            <v-card class="pa-5 pt-2">
                                <v-card-text class="text-h6">
                                    Confirm deleting the property!
                                </v-card-text>
                                <v-card-actions class="d-flex justify-center">
                                    <v-btn width="100" color="red-darken-2" variant="flat"
                                        @click="confirmDeletion(property.propertyId)" :loading="loader">Delete</v-btn>
                                    <v-btn width="100" color="green-darken-2" variant="outlined"
                                        @click="cancelDeletion">Cancel</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="auto" class="showDetailsBtnContainer">
                    <v-btn @click="router.push(`/propertydetails/${property?.propertyId}`)" density="default"
                        variant="elevated" class="text-none" color="pink-darken-3"
                        append-icon="mdi-cursor-default-click">Preview Details</v-btn>
                </v-col>
            </v-row>
        </v-img>

        <v-row no-gutters>
            <v-card-text class="px-4 py-0 pt-4 d-flex justify-space-between">
                <v-col cols="6" class="pa-0">
                    <v-icon size="18" class="mt-n1 mr-2" icon="mdi-city" color="grey-darken-2"></v-icon>
                    <span class="text-body-1 text-grey-darken-2" title="City">
                        {{
                            property.city
                            ? property.city
                            : 'Not Found'
                        }}
                    </span>
                </v-col>
                <v-col v-if="property?.googleMapLink" cols="6" class="pa-0">
                    <a :href="property?.googleMapLink" target="_blank">
                        <v-icon size="18" class="mt-n1 mr-2" icon="mdi-google-maps" color="grey-darken-2"></v-icon>
                        <span class="text-body-1 text-grey-darken-2" title="google map link">Location</span>
                    </a>
                </v-col>
            </v-card-text>
        </v-row>

        <v-row no-gutters class="pt-2">
            <v-col v-if="property?.type" cols="12" class="px-4">
                <div class="text-body-2 text-grey-darken-2 overflowText" title="property type">
                    Property type: {{
                        property?.type
                    }}
                </div>
            </v-col>

            <v-col v-if="property?.totalArea" cols="12" class="px-4">
                <v-dialog v-model="dialog" width="auto" scroll-strategy="none" transition="dialog-bottom-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn class="pa-0" variant="text" color="white" density="comfortable" v-bind="props">
                            <div class="text-body-2 text-grey-darken-2" title="total area of the property in square feet">
                                Total Area: {{
                                    property?.totalArea
                                }} {{ property?.totalAreaUnit ? property?.totalAreaUnit : "sqft" }}
                            </div>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-text class="mx-2">
                            <div class="text-h6">Total Area in other Units</div>
                        </v-card-text>
                        <v-card-text class="mx-2">
                            <v-row no-gutters>
                                <v-col cols="8">
                                    <p class="pa-1 text-body-1 font-weight-bold modalHead">Value</p>
                                    <p title="guntha" class="pa-1 text-body-2 modalbody">
                                        {{ (parseFloat(property?.totalArea) / 1089.000000).toFixed(6) }}
                                    </p>
                                    <p title="square feet" class="pa-1 text-body-2 modalbody">
                                        {{ (parseFloat(property?.totalArea)).toFixed(6) }}
                                    </p>
                                    <p title="square meter" class="pa-1 text-body-2 modalbody">
                                        {{ (parseFloat(property?.totalArea) / 10.763915).toFixed(6) }}
                                    </p>
                                    <p title="acre" class="pa-1 text-body-2 modalbody">
                                        {{ (parseFloat(property?.totalArea) / 43560.057264).toFixed(6) }}
                                    </p>
                                    <p title="hectare" class="pa-1 text-body-2 modalbody">
                                        {{ (parseFloat(property?.totalArea) / 107639.150512).toFixed(6) }}
                                    </p>
                                    <p title="cent" class="pa-1 text-body-2 modalbody">
                                        {{ (parseFloat(property?.totalArea) / 435.560000).toFixed(6) }}
                                    </p>
                                </v-col>
                                <v-col cols="4">
                                    <p class="pa-1 text-body-1 font-weight-bold modalHead">Unit</p>
                                    <p title="guntha" class="pa-1 text-body-2 modalbody">guntha</p>
                                    <p title="square feet" class="pa-1 text-body-2 modalbody">sqft</p>
                                    <p title="square meter" class="pa-1 text-body-2 modalbody">sqm</p>
                                    <p title="acre" class="pa-1 text-body-2 modalbody">acre</p>
                                    <p title="hectare" class="pa-1 text-body-2 modalbody">hectare</p>
                                    <p title="cent" class="pa-1 text-body-2 modalbody">cent</p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn @click="dialog = false">OK</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>

            <v-col cols="12" class="px-4 pb-1">
                <div v-if="property?.address" class="text-body-2 text-grey-darken-2 overflowText" title="Property address">
                    address: {{
                        property?.address
                    }}
                </div>
                <div v-else class="text-body-2 text-grey-darken-2">&nbsp;</div>
            </v-col>
        </v-row>

        <v-row class="cardBottom pa-0 mx-6 my-2 d-flex justify-space-between align-center">
            <v-col cols="auto" class="px-0 my-1 d-flex justify-center align-center">
                <v-avatar class="pa-0 mr-2" :image="property?.agent?.picture"
                    size="45"></v-avatar>
                <div class="text-body-2 mt-1 ml-0 text-uppercase text-center text-grey-darken-2">
                    <p class="text-start pa-0 ma-0">{{ property?.agent?.name }}</p>
                    <p class="text-start pa-0 ma-0">{{ property?.agent?.mobile }}</p>
                </div>
            </v-col>
            <v-col v-if="property?.propertyAddedDate" cols="auto" class="px-0">
                <div class="mt-1 ml-0 text-uppercase text-center bg-blue-grey-lighten-4 rounded-be-lg rounded-bs-lg">
                    <p class="text-caption text-center pa-0 px-2 ma-0 bg-blue-grey-lighten-2">Posted on</p>
                    <p class="text-caption text-center pa-2 pb-1 ma-0 mt-n1">{{ computedDate }}</p>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, reactive, computed } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['property', 'getUsersProperties']);
const router = useRouter();
const loader = ref(false);
const dialog = ref(false);
const confirmDialog = ref(false);
const expandFailure = ref(false);
const expandSuccess = ref(false);
const months = reactive([
    { "name": "Jan" },
    { "name": "Feb" },
    { "name": "Mar" },
    { "name": "Apr" },
    { "name": "May" },
    { "name": "Jun" },
    { "name": "Jul" },
    { "name": "Aug" },
    { "name": "Sep" },
    { "name": "Oct" },
    { "name": "Nov" },
    { "name": "Dec" },
]);

const postedDate = ref(props?.property?.propertyAddedDate);
const computedDate = computed((postedDate) => {
    const yyyyddmm = (props?.property?.propertyAddedDate)?.split('-');
    const mm = parseInt(yyyyddmm[1]);
    return `${yyyyddmm[2]}-${months[mm - 1].name}-${yyyyddmm[0]}`;
});

async function cancelDeletion() {
    confirmDialog.value = false;
    expandFailure.value = true;
    setTimeout(() => {
        expandFailure.value = false;
    }, 1000);
}

async function confirmDeletion(propertyId: String) {
    loader.value = true;
    expandSuccess.value = false;
    expandFailure.value = false;
    const res = await api?.property?.deleteProperty({ params: { propertyId } });

    if (res?.status === 200) {
        expandSuccess.value = true;
        confirmDialog.value = false;
        setTimeout(async () => {
            loader.value = false;
            await props.getUsersProperties();
            expandSuccess.value = false;
        }, 1000)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        expandFailure.value = true;
        setTimeout(() => {
            expandFailure.value = false;
        }, 1000);
    }
}
</script>

<style scoped>
a {
    text-decoration: none !important;
}

a:hover {
    text-decoration: underline !important;
}

.verifiedTag {
    height: 42px;
    position: absolute;
    bottom: 0;
}

.cardBottom {
    border-top: solid 1px rgb(217, 216, 216);
    height: 85px;
    /* position: absolute;
    bottom: 0; */
}

.hoverPointer:hover {
    cursor: pointer;
}

.overflowText {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.overflowText:hover {
    white-space: normal;
}


.showDetailsBtnContainer {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);

}


.toolBar {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 11px;
}

.modalHead {
    border: solid 1px black;
}

.modalbody {
    border: solid 1px black;
    border-top: none;
}

.v-overlay__content {
    margin: 0;
}

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}

th,
td {
    padding: 10px 10px;
}
</style>