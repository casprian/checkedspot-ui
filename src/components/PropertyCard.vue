<template>
    <v-card class="mx-auto" style="max-width: 480px;" position="relative" @click="router.push(`/propertydetails/${property?.propertyID}`)">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="260px" position="relative" cover>
            <v-sheet position="absolute" style="background-color: transparent; width: 100%; height: 100%;">
                <v-container>
                    <v-row no-gutters class="d-flex justify-end">
                        <v-col cols="auto">
                            <v-btn variant="flat" color="grey-darken-2" rounded="0" width="auto">
                                For {{ property.propertyStatus }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container style="position: absolute; bottom: 0;">
                    <v-row class="d-flex justify-space-between">
                        <v-col cols="auto">
                            <div class="text-grey-lighten-5 text-h6">₹ {{ property.cost }}</div>
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
                        <v-card-title class="px-4 py-1">
                            Checkedspot Property
                        </v-card-title>
                        <v-card-text class="px-4 py-0">
                            <v-icon size="16" class="mt-n1 mr-2" icon="mdi-map-marker" color="grey-darken-2"></v-icon>
                            <span class="text-body-1 text-grey-darken-2">{{ property.location }}</span>
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" class="px-4 py-3">
                        <v-row no-gutters>
                            <v-col cols="6" class="my-2">
                                <v-icon size="25" class="mr-2 mt-n2" icon="mdi-bed-double-outline"
                                    color="grey-darken-2"></v-icon>
                                <span class="text-body-1 text-grey-darken-2">{{ property?.bedroom ? property?.bedroom : 0
                                }} Bedrooms</span>
                            </v-col>
                            <v-col cols="6" class="my-2">
                                <v-icon size="25" class="mr-2 mt-n2" icon="mdi-shower" color="grey-darken-2"></v-icon>
                                <span class="text-body-1 text-grey-darken-2">{{ property?.bathroom ? property?.bathroom :
                                    0 }} Bathrooms</span>
                            </v-col>
                            <v-col cols="6" class="my-2">
                                <v-icon size="25" class="mr-2 mt-n2" icon="mdi-set-square" color="grey-darken-2"></v-icon>
                                <span class="text-body-1 text-grey-darken-2">{{ property?.totalArea ? property?.totalArea
                                    : 0 }} sq ft</span>
                            </v-col>
                            <v-col cols="6" class="my-2">
                                <v-icon size="25" class="mr-2 mt-n2" icon="mdi-car-outline" color="grey-darken-2"></v-icon>
                                <span class="text-body-1 text-grey-darken-2">{{ property?.parkingLot === "NOT_AVAILABLE" ?
                                    0 : property?.parkingLot }} Garages</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-row class="cardBottom pa-0 mx-6 my-2 d-flex justify-space-between align-center">
                            <v-col cols="auto" class="px-0 my-1">
                                <v-avatar class="pa-0 mr-2" image="https://cdn.vuetifyjs.com/images/john.png"
                                    size="45"></v-avatar>
                                <span
                                    class="text-body-2 mt-3 ml-0 text-uppercase text-center text-grey-darken-2">
                                    Mark Smith
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps(['property'])

const show = ref(false)
</script>

<style scoped>
.cardBottom {
    border-top: solid 1px rgb(217, 216, 216);
}
</style>