<template>
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
                                    <home-property-card :property="property" />
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
import { defineAsyncComponent, reactive, ref,  } from "vue";
import { useRouter } from 'vue-router';
const HomePropertyCard = defineAsyncComponent(() => import('@/components/home-view-components/HomePropertyCard.vue'));

const router = useRouter();
const props = defineProps(['properties']);
const data = reactive({
    item: null,
});

const errorOccure = ref(false);

if (props.properties?.status && props.properties?.status !== 200) {
    errorOccure.value = true;
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