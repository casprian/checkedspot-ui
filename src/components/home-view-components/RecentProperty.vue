<template>
    <v-container class="ownerPropCont" fluid>
        <v-row no-gutters>
            <v-col cols="12">
                <h2 class="text-h5 mx-2 mx-xl-2 mb-5">Recently added properties</h2>
            </v-col>
            <v-col cols="12" class="mb-10">
                <v-sheet class="mx-auto" elevation="0">
                    <v-row v-if="!props.properties" no-gutters class="px-14 my-16 d-flex justify-center">
                        <v-col cols="auto" class="loader">
                            <v-progress-circular :size="70" :width="7" color="pink-accent-3"
                                indeterminate></v-progress-circular>
                        </v-col>
                    </v-row>
                    <v-row v-else-if="props.properties?.status === 200" no-gutters>
                        <v-col v-if="props.properties?.data?.length > 0" cols="12">
                            <v-slide-group show-arrows>
                                <v-slide-group-item v-for="(property) in props.properties?.data" :key="property.propertyId">
                                    <v-card class="mx-2 mb-4 elevation-2" style="max-width: 220px;" position="relative">
                                        <v-hover v-slot="{ isHovering, props }">
                                            <v-img @click="router.push(`/propertydetails/${property?.propertyId}`)" v-bind="props"
                                                :src="property?.image !== undefined ? property?.image?.fileUrl : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
                                                height="130px" width="100%" position="relative" cover class="hoverPointer">
                                                <v-expand-transition>
                                                    <div v-if="isHovering"
                                                        class="d-flex flex-column justify-center align-center transition-fast-in-fast-out v-card--reveal text-white"
                                                        style="height: 100%;background-color: #00000091;">
                                                        <p class="overlayText">Click Here</p>
                                                        <p class="overlayText">to</p>
                                                        <p class="overlayText">See Details</p>
                                                    </div>
                                                </v-expand-transition>
                                                <v-toolbar v-if="property?.title && property?.title !== 'unavailable'"
                                                    class="propertyTitle" theme="dark" height="30"
                                                    style="background-color: rgba(0, 0, 0, 0.466);">
                                                    <div class="w-100 text-caption text-center px-1">
                                                        {{
                                                            property?.title ?
                                                            property?.title :
                                                            "Property title - like, Fit for home etc."
                                                        }}
                                                    </div>
                                                </v-toolbar>
                                                <v-card-title title="verified by Checked Spot"
                                                    v-if="property?.isVerifiedByCheckedSpot" class="px-2 py-1 verifiedTag">
                                                    <v-chip variant="elevated" color="green" density="comfortable">
                                                        Checked Spot verified <v-icon size="16" class="ml-2" icon="mdi-shield-check"
                                                            color="white"></v-icon>
                                                    </v-chip>
                                                </v-card-title>
                                            </v-img>
                                        </v-hover>
                                        <v-sheet>
                                            <v-container class="pa-0">
                                                <v-row no-gutters>
                                                    <v-col cols="6" class="pa-0 pl-2 pt-2" style="height: 20px;">
                                                        <a target="_blank" v-if="property?.googleMapLink"
                                                            :href="property?.googleMapLink">
                                                            <v-icon size="16" class="mt-n1 mr-2" icon="mdi-google-maps"
                                                                color="grey-darken-2"></v-icon>
                                                            <span class="text-body-2 text-grey-darken-2"
                                                                title="google map link">Location</span>
                                                        </a>
                                                    </v-col>
                                                    <v-col cols="12" class="pa-0">
                                                        <v-card-text class="px-3 pt-3 pb-0">
                                                            Property type: <span class="text-pink-accent-3">{{
                                                                property?.type ?
                                                                property?.type : 'Not Found' }}</span>
                                                        </v-card-text>
                                                        <v-card-subtitle v-if="property?.address"
                                                            class="px-3 py-0 font-weight-regular">
                                                            {{ property?.address }}
                                                        </v-card-subtitle>
                                                        <v-card-subtitle v-else
                                                            class="px-3 text-body-2 text-grey-lighten-1">
                                                            address unavailable
                                                        </v-card-subtitle>
                                                    </v-col>

                                                    <v-col cols="12">
                                                        <v-row
                                                            class="cardBottom pa-0 mx-3 my-0 d-flex flex-row justify-space-between align-center">
                                                            <v-col cols="auto" class="px-0 my-1">
                                                                <v-avatar class="pa-0 mr-3"
                                                                    :image="property?.agent?.picture"
                                                                    size="32"></v-avatar>
                                                            </v-col>
                                                            <v-col class="px-0">
                                                                <v-row no-gutters class="d-flex flex-column">
                                                                    <v-col cols="auto pb-0" style="line-height: 16px;">
                                                                        <span
                                                                            class="text-body-2 mt-3 ml-0 mb-0 pb-0 text-uppercase text-center text-grey-darken-2 font-weight-medium">
                                                                            {{ property?.agent?.name ? property?.agent?.name :
                                                                                "" }}
                                                                        </span>
                                                                    </v-col>
                                                                    <v-col cols="auto mt-0 pt-0 mb-n1"
                                                                        style="line-height: 14px;">
                                                                        <span
                                                                            class="text-caption text-grey-darken-1 mt-0 pt-0">{{
                                                                                property?.agent?.mobile ? property?.agent?.mobile :
                                                                                "" }}</span>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-sheet>
                                    </v-card>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-col>
                        <v-col class="px-2" v-else-if="props.properties?.data?.length === 0" cols="12">
                            <h1 class="text-grey-darken-1">0 Properties found</h1>
                        </v-col>
                        <v-col class="px-2" v-else cols="12">
                            <h1 class="text-grey-darken-1">Unexpected Error</h1>
                        </v-col>
                    </v-row>
                    <v-row v-else>                        
                        <v-col class="px-2" cols="12">
                            <h1 class="text-grey-darken-1">{{ props.properties?.status }} Error!</h1>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts" setup>
import { reactive } from "vue"
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps(['properties'])
const data = reactive({
    item: null,
})
</script>

<style scoped>
a {
    text-decoration: none !important;
}

a:hover {
    text-decoration: underline !important;
}

.overlayText {
    margin: 0;
    line-height: normal;
    font-size: 20px;
}

.ownerPropCont {
    margin-top: 150px;
}


.verifiedTag {
    height: 42px;
    position: absolute;
    bottom: 0;
}

.hoverPointer:hover {
    cursor: pointer;
}

.toolBar {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 11px;
}
</style>