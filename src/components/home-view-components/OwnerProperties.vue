<template>
    <v-container class="ownerPropCont">
        <v-row no-gutters>
            <v-col cols="12">
                <h2 class="text-h5 mx-13 mb-5">Popular owner properties</h2>
            </v-col>
            <v-col cols="12" class="mb-10">
                <v-sheet class="mx-auto" elevation="0" max-width="1250">
                    <v-row v-if="!props.properties" no-gutters class="px-sm-14 my-16 d-flex justify-center">
                        <v-col cols="auto" class="loader">
                            <!-- <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear> -->
                            <v-progress-circular :size="70" :width="7" color="pink-accent-3" indeterminate></v-progress-circular>
                        </v-col>
                    </v-row>
                    <v-slide-group v-else show-arrows>
                        <v-slide-group-item v-for="(property, index) in props.properties" :key="index">
                            <v-card class="mr-4 mb-4 elevation-2" style="max-width: 220px;" position="relative"
                                @click="router.push(`/propertydetails/${property?.propertyId}`)">
                                <v-img
                                    :src="property?.propertyImage ? property?.propertyImage[0] : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
                                    height="130px" width="100%" position="relative" cover></v-img>

                                <v-sheet>
                                    <v-container class="pa-0">
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <v-chip class="ml-2 mt-2" v-if="property?.isVerifiedByCheckedSpot"
                                                    variant="elevated" color="green" density="comfortable">
                                                    Checked Spot <v-icon size="16" class="ml-2" icon="mdi-shield-check"
                                                        color="white"></v-icon>
                                                </v-chip>
                                                <v-card-text class="pl-3 py-2 pb-0">
                                                    {{ property?.type ? property?.type: 'Not Found' }}
                                                </v-card-text>
                                                <v-card-title :title="`₹ ${property?.cost} Lacs - ${property?.totalArea} sqft`" class="px-3 py-0 text-subtitle-1">
                                                    ₹ {{ property?.cost ? property?.cost : 'Not Found' }} Lacs - {{ property?.totalArea ? property?.totalArea : 'Not Found' }} sqft
                                                </v-card-title>
                                                <v-card-subtitle class="px-3 py-0">
                                                    Hegde Nagar, Bengaaluru
                                                </v-card-subtitle>
                                                <v-card-subtitle class="text-caption text-pink-accent-3 px-3 py-0">
                                                    Ready to move
                                                </v-card-subtitle>
                                            </v-col>

                                            <v-col cols="12">
                                                <v-row
                                                    class="cardBottom pa-0 mx-3 my-2 d-flex flex-row justify-space-between align-center">
                                                    <v-col cols="auto" class="px-0 my-1">
                                                        <v-avatar class="pa-0 mr-3" image="https://checkedspot.blob.core.windows.net/assets/parvez1.jpeg"
                                                            size="32"></v-avatar>
                                                    </v-col>
                                                    <v-col class="px-0">
                                                        <v-row no-gutters class="d-flex flex-column">
                                                            <v-col cols="auto mb-n2 pb-0">
                                                                <span
                                                                    class="text-body-2 mt-3 ml-0 mb-0 pb-0 text-uppercase text-center text-grey-darken-2 font-weight-medium">
                                                                    Parvez Shariff
                                                                </span>
                                                            </v-col>
                                                            <v-col cols="auto mt-0 pt-0 mb-n1">
                                                                <span
                                                                    class="text-caption text-grey-lighten-1 mt-0 pt-0">Posted:
                                                                    2 weaks ago</span>
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
.ownerPropCont {
    margin-top: 150px;
}
.v-progress-circular {
    margin: 1rem;
}
</style>