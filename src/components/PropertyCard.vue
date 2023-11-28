<template>
    <v-card class="mx-auto" style="max-width: 480px; min-height: auto;" position="relative">
        <v-hover v-if="!isMobileDevice" v-slot="{ isHovering, props }">
            <v-img @click="openPropertyDetail" v-bind="props"
                :src="property?.image !== undefined ? property?.image?.fileUrl : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
                height="200px" position="relative" cover class="hoverPointer">
                <v-expand-transition>
                    <div v-if="isHovering"
                        class="d-flex flex-column justify-center align-center transition-fast-in-fast-out v-card--reveal text-h4 font-weight-regular text-white"
                        style="height: 100%;background-color: #00000091;">
                        <p>Click Here</p>
                        <p>to</p>
                        <p>See Details</p>
                    </div>
                </v-expand-transition>
                <v-toolbar v-if="property?.title && property?.title !== 'unavailable'" class="propertyTitle" theme="dark"
                    height="35" style="background-color: rgba(0, 0, 0, 0.466);">
                    <div class="w-100 text-body-1 text-center px-3">
                        {{ property?.title ? property?.title : "Property title - like, Fit for home etc." }}
                    </div>
                </v-toolbar>

                <div class="verifiedTagContainer">
                    <v-card-title title="verified by Checked Spot" v-if="property?.isVerifiedByCheckedSpot"
                        class="px-0 py-1 verifiedTag">
                        <v-chip variant="elevated" color="green" density="comfortable">
                            Checked Spot verified <v-icon size="16" class="ml-2" icon="mdi-shield-check" color="white"></v-icon>
                        </v-chip>
                    </v-card-title>
                    <v-card-title title="Freehold Property" v-if="property?.isFreeHold" class="px-0 py-1 verifiedTag">
                        <v-chip variant="elevated" color="blue-grey-lighten-5" density="comfortable">
                            Freehold
                            <!-- <v-icon size="16" class="ml-2" icon="mdi-shield-check" color="white"></v-icon> -->
                        </v-chip>
                    </v-card-title>
                </div>
            </v-img>
        </v-hover>

        <v-img v-else @click="openPropertyDetail" v-bind="props"
            :src="property?.image !== undefined ? property?.image?.fileUrl : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
            height="200px" position="relative" cover class="hoverPointer">

            <v-toolbar v-if="property?.title && property?.title !== 'unavailable'" class="propertyTitle" theme="dark"
                height="35" style="background-color: rgba(0, 0, 0, 0.466);">
                <div class="w-100 text-body-1 text-center px-3">
                    {{ property?.title ? property?.title : "Property title - like, Fit for home etc." }}
                </div>
            </v-toolbar>

            <div class="showDetailsBtnContainer">
                <v-btn density="default" variant="elevated" class="text-none" color="pink-darken-3" append-icon="mdi-cursor-default-click">For details. Click here!</v-btn>
            </div>
            <div class="verifiedTagContainer">
                <v-card-title title="verified by Checked Spot" v-if="property?.isVerifiedByCheckedSpot"
                    class="px-0 py-1 verifiedTag">
                    <v-chip variant="elevated" color="green" density="comfortable">
                        Checked Spot verified <v-icon size="16" class="ml-2" icon="mdi-shield-check" color="white"></v-icon>
                    </v-chip>
                </v-card-title>
                <v-card-title title="Freehold Property" v-if="property?.isFreeHold" class="px-0 py-1 verifiedTag">
                    <v-chip variant="elevated" color="blue-grey-lighten-5" density="comfortable">
                        Freehold
                        <!-- <v-icon size="16" class="ml-2" icon="mdi-shield-check" color="white"></v-icon> -->
                    </v-chip>
                </v-card-title>
            </div>
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
                <v-dialog v-model="dialog" scroll-strategy="none" width="auto" transition="dialog-bottom-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn class="pa-0" variant="text" color="white" density="comfortable" v-bind="props">
                            <div class="text-body-2 text-grey-darken-2" title="total area of the property in square feet">
                                Total Area: {{
                                    property?.totalArea
                                }} {{ property?.totalAreaUnit ? property?.totalAreaUnit : "sqft" }}
                                <v-icon icon="mdi-information-outline"></v-icon>
                            </div>
                            <v-tooltip activator="parent" location="end">Show Areas</v-tooltip>
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
                                    <p title="guntha" class="pa-1 text-body-2 modalbody">{{ (parseFloat(property?.totalArea)
                                        / 1089.000000).toFixed(6) }}</p>
                                    <p title="square feet" class="pa-1 text-body-2 modalbody">{{
                                        (parseFloat(property?.totalArea)).toFixed(6) }}</p>
                                    <p title="square meter" class="pa-1 text-body-2 modalbody">{{
                                        (parseFloat(property?.totalArea) / 10.763915).toFixed(6) }}</p>
                                    <p title="acre" class="pa-1 text-body-2 modalbody">{{ (parseFloat(property?.totalArea) /
                                        43560.057264).toFixed(6) }}</p>
                                    <p title="hectare" class="pa-1 text-body-2 modalbody">{{
                                        (parseFloat(property?.totalArea) / 107639.150512).toFixed(6) }}</p>
                                    <p title="cent" class="pa-1 text-body-2 modalbody">{{ (parseFloat(property?.totalArea) /
                                        435.560000).toFixed(6) }}</p>
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

            <v-col v-if="property?.cost" cols="12" class="px-4">
                <div class="text-body-2 text-grey-darken-2 overflowText" title="property type">
                    Cost: {{
                        propertyCost
                    }}
                </div>
            </v-col>

            <v-col cols="12" class="px-4 pb-1">
                <div v-if="property?.address" class="text-body-2 text-grey-darken-2 overflowText" title="Property address">
                    Address: {{
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
import { ref, reactive, onMounted, computed } from 'vue';
const router = useRouter();

const details = ref(navigator.userAgent);
const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = ref(regexp.test(details.value));

const props = defineProps(['property', 'listingPath']);
const dialog = ref(false);
const propertyCost = ref(props?.property?.cost < 10000000 ? `${props?.property?.cost / 100000.0} Lac` : `${props?.property?.cost / 10000000.0} Cr`);

function openPropertyDetail() {
    router.push({ path: `/propertydetails/${props?.property?.propertyId}` })
}

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
])
const postedDate = ref(props?.property?.propertyAddedDate);

const computedDate = computed((postedDate) => {
    const yyyyddmm = (props?.property?.propertyAddedDate)?.split('-');
    const mm = parseInt(yyyyddmm[1]);
    return `${yyyyddmm[2]}-${months[mm - 1].name}-${yyyyddmm[0]}`;
})

</script>

<style scoped>
a {
    text-decoration: none !important;
}

a:hover {
    text-decoration: underline !important;
}

.showDetailsBtnContainer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
}

.verifiedTagContainer {
    width: 100%;
    padding: 0 12px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
}

.verifiedTag {
    height: 42px;
}

.cardBottom {
    border-top: solid 1px rgb(217, 216, 216);
    height: 85px;
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