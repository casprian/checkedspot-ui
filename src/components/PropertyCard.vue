<template>
    <v-card class="mx-auto" style="max-width: 480px;" position="relative" @click="openPropertyDetail">
        <v-img
            :src="property?.propertyImage ? property?.propertyImage[0] : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'" height="260px" position="relative" cover>
            <v-sheet position="absolute" style="background-color: transparent; width: 100%; height: 100%;">
                <v-container style="position: absolute; bottom: 0;">
                    <v-row class="d-flex justify-space-between">
                        <v-col cols="auto">
                            <div class="text-grey-lighten-5 text-h6">
                                {{
                                    property.cost
                                    ? `₹ ${property.cost}`
                                    : ''
                                }}
                            </div>
                        </v-col>
                        <v-col cols="auto">
                            <v-row no-gutters>
                                <v-col cols="auto" class="px-2 py-1 ma-0 mr-3 bg-grey-darken-2 rounded">
                                    <v-icon size="22px" class="ma-0 pa-0" icon="mdi-link-variant"
                                        color="grey-lighten-5"></v-icon>
                                </v-col>
                                <v-col cols="auto" class="px-2 py-1 ma-0 mr-3 bg-grey-darken-2 rounded">
                                    <v-icon size="22px" class="ma-0 pa-0" icon="mdi-video" color="grey-lighten-5"></v-icon>
                                </v-col>
                                <v-col cols="auto" class="px-2 py-1 ma-0 bg-grey-darken-2 rounded">
                                    <v-icon size="22px" class="ma-0 pa-0" icon="mdi-image-filter-hdr"
                                        color="grey-lighten-5"></v-icon>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-img>

        <v-sheet height="260px">
            <v-container class="pa-0">
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-card-title class="px-4 py-1 verifiedTag">
                            <v-chip v-if="property?.isVerifiedByCheckedSpot" variant="elevated" color="green" density="comfortable">
                                Checked Spot <v-icon size="16" class="ml-2" icon="mdi-shield-check" color="white"></v-icon>
                            </v-chip>
                        </v-card-title>
                        <v-card-text class="px-4 py-0">
                            <v-icon size="16" class="mt-n1 mr-2" icon="mdi-map-marker" color="grey-darken-2"></v-icon>
                            <span class="text-body-1 text-grey-darken-2" title="City">
                                {{
                                    property.city
                                    ? property.city
                                    : 'Not Found'
                                }}
                            </span>
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" class="px-4 py-3">
                        <v-row no-gutters>
                            <v-col cols="6" class="my-2">
                                <v-icon size="25" class="mr-2 mt-n2" icon="mdi-bed-double-outline"
                                    color="grey-darken-2"></v-icon>
                                <span class="text-body-1 text-grey-darken-2" title="Bedroom">
                                    {{
                                        property?.bedroom
                                        ? `${property?.bedroom} Bedrooms`
                                        : 'Not Found'
                                    }}
                                </span>
                            </v-col>
                            <v-col cols="6" class="my-2">
                                <v-icon size="25" class="mr-2 mt-n2" icon="mdi-shower" color="grey-darken-2"></v-icon>
                                <span class="text-body-1 text-grey-darken-2" title="Bathroom">
                                    {{
                                        property?.bathroom
                                        ? `${property?.bathroom} Bathrooms`
                                        : 'Not Found'
                                    }}
                                </span>
                            </v-col>
                            <v-col cols="6" class="my-2">
                                <v-icon size="25" class="mr-2 mt-n2" icon="mdi-set-square" color="grey-darken-2"></v-icon>
                                <span class="text-body-1 text-grey-darken-2" title="Total Area of Property">
                                    {{
                                        property?.totalArea
                                        ? `${property?.totalArea} sq ft`
                                        : 'Not Found'
                                    }}
                                </span>
                            </v-col>
                            <v-col cols="6" class="my-2">
                                <v-icon size="25" class="mr-2 mt-n2" icon="mdi-car-outline" color="grey-darken-2"></v-icon>
                                <span class="text-body-1 text-grey-darken-2" title="Parking Lot">
                                    {{
                                        property?.parkingLot === "unavailable"
                                        ? 'Not Found'
                                        : `${property?.parkingLot} Garages`
                                    }}
                                </span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-row class="cardBottom pa-0 mx-6 my-2 d-flex justify-space-between align-center">
                            <v-col cols="auto" class="px-0 my-1">
                                <v-avatar class="pa-0 mr-2" image="https://checkedspot.blob.core.windows.net/assets/parvez1.jpeg" size="45"></v-avatar>
                                <span class="text-body-2 mt-3 ml-0 text-uppercase text-center text-grey-darken-2">
                                    Parvez Shariff
                                </span>
                            </v-col>
                            <v-col cols="auto" class="px-0">
                                <span class="text-grey-darken-2">2 months ago</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>


        </v-sheet>
    </v-card>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps(['property', 'listingPath'])

function openPropertyDetail() {
    router.push({ path: `/propertydetails/${props?.property?.propertyId}` })
}
</script>

<style scoped>

.verifiedTag {
    height: 42px;
}
.cardBottom {
    border-top: solid 1px rgb(217, 216, 216);
}
</style>