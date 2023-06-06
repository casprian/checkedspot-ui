<template>
    <v-container class="ownerPropCont">
        <v-row no-gutters>
            <v-col cols="12">
                <h2 class="text-h5 mx-13 mb-5">Popular owner properties</h2>
            </v-col>
            <v-col cols="12" class="mb-10">
                <v-sheet class="mx-auto" elevation="0" max-width="1250">
                    <v-slide-group show-arrows>
                        <v-slide-group-item v-for="(property, index) in verifiedProperties?.data" :key="index">

                            <v-card class="mr-4 mb-4 elevation-2" style="max-width: 220px;" position="relative"
                                @click="router.push(`/propertydetails/${property?.propertyId}`)">
                                <v-img
                                    :src="property?.propertyImage ? property?.propertyImage[0] : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
                                    height="130px" width="100%" position="relative" cover></v-img>

                                <v-sheet>
                                    <v-container class="pa-0">
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <v-chip class="ml-2 mt-2" v-if="property?.isVerifiedByCheckedSpot" variant="elevated" color="green" density="comfortable">
                                                    Checked Spot <v-icon size="16" class="ml-2" icon="mdi-shield-check" color="white"></v-icon>
                                                </v-chip>
                                                <v-card-text class="pl-3 py-2 pb-0">
                                                    3BHK Flat
                                                </v-card-text>
                                                <v-card-title class="px-3 py-0 text-subtitle-1">
                                                    ₹ 2.25 Cr - 1700 sqft
                                                </v-card-title>
                                                <v-card-subtitle class="px-3 py-0">
                                                    Hegde Nagar, Bengaaluru
                                                </v-card-subtitle>
                                                <v-card-subtitle class="px-3 py-0">
                                                    Ready to move
                                                </v-card-subtitle>
                                            </v-col>

                                            <v-col cols="12">
                                                <v-row
                                                    class="cardBottom pa-0 mx-3 my-2 d-flex flex-row justify-space-between align-center">
                                                    <v-col cols="auto" class="px-0 my-1">
                                                        <v-avatar class="pa-0 mr-3" image="/src/assets/photos/parvez1.jpeg"
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
                                                            <v-col cols="auto mt-1 pt-0 mb-n1">
                                                                <span
                                                                    class="text-body-2 text-grey-lighten-1 mt-0 pt-0">Posted:
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
import { onMounted, reactive } from 'vue';
import api from '@/data/api/index.js';
import { useRouter } from 'vue-router';

const data = reactive({
    item: null,
})

const router = useRouter();
const verifiedProperties = reactive({
    data: null
})

async function getAllVerifiedProperties() {
    const res = await api?.property?.getProperties({ params: { isVerifiedByCheckedSpot: true } });
    if (res.status === 200) {
        verifiedProperties.data = res?.data;
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}
onMounted(async () => {
    await getAllVerifiedProperties();
})
</script>

<style scoped>
.ownerPropCont {
    margin-top: 150px;
}
</style>