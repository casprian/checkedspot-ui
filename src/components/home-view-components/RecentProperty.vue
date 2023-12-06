<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>Enquiry request is Failed!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>
                    Enquiry request is successful!
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-container class="ownerPropCont" fluid>
        <v-row no-gutters>
            <v-col cols="12">
                <h2 class="mx-2 mx-xl-2 mb-5 text-h5 font-weight-medium">Recently added properties</h2>
            </v-col>
            <v-col cols="12" class="mb-10">
                <v-sheet class="mx-auto" elevation="0">
                    <v-row v-if="!props.properties.status" no-gutters class="px-14 my-16 d-flex justify-center">
                        <v-col cols="auto" class="loader">
                            <v-progress-circular :size="70" :width="7" color="pink-accent-3"
                                indeterminate></v-progress-circular>
                        </v-col>
                    </v-row>

                    <v-row v-else-if="props.properties?.status === 200" no-gutters>
                        <v-col v-if="props.properties?.data?.length > 0" cols="12">
                            <v-slide-group show-arrows>
                                <v-slide-group-item v-for="(property) in props.properties?.data" :key="property.propertyId">
                                    <home-property-card :property="property" @success="handleUpdateSuccess" @failure="handleUpdateFailure" />
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

                    <v-row no-gutters v-if="errorOccure">
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
import { defineAsyncComponent, ref, } from "vue";
const HomePropertyCard = defineAsyncComponent(() => import('@/components/home-view-components/HomePropertyCard.vue'));

const props = defineProps(['properties']);

const errorOccure = ref(false);
const expandFailure = ref(false);
const expandSuccess = ref(false);

if (props.properties?.status && props.properties?.status !== 200) {
    errorOccure.value = true;
}

async function handleUpdateSuccess() {
    expandSuccess.value = true;

    setTimeout(() => {
        expandSuccess.value = false;
    }, 3000);
}

function handleUpdateFailure() {
    expandFailure.value = true;
    setTimeout(() => {
        expandFailure.value = false;
    }, 3000);
}
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
</style>