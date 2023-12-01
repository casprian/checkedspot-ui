<template>
    <v-row no-gutters class="pa-5 previewContainer">
        <!-- Header Details section -->
        <v-col class="pa-2" cols="12">
            <v-card class="pa-4" color="cyan-accent-2">
                <property-details :details="props?.property?.details" />

                <v-card-actions class="d-flex justify-end">
                    <v-btn variant="elevated" color="deep-purple-accent-4" @click="$emit('edit', 'Details')">
                        Add More details
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>


        <!-- Property Images -->
        <v-col class="pa-2" cols="12">
            <v-card class="pa-4 px-6" color="red-accent-2">
                <div class="titleCont pb-2">
                    <v-card-title class="title pl-0">Property Images</v-card-title>
                </div>
                <v-item-group multiple>
                    <v-row class="mt-2">
                        <div v-if="props?.property?.images?.length === 0" class="text-h4 text-center pa-8 pt-6">
                            No Image has been uploaded for this property.
                        </div>
                        <v-col v-for="image in props?.property?.images" :key="image.id" cols="12" md="6">
                            <v-img :src="image?.fileUrl" cover height="250" class="text-right pa-2"></v-img>
                        </v-col>
                    </v-row>
                </v-item-group>
                <v-card-actions class="d-flex justify-end">
                    <v-btn variant="elevated" color="deep-purple-accent-4" @click="$emit('edit', 'Images')">
                        Add More Images
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>


        <!-- Property Videos -->
        <v-col class="pa-2" cols="12">
            <v-card class="pa-4 px-6" color="green-accent-2">
                <div class="titleCont pb-2">
                    <v-card-title class="title pl-0">Property Videos</v-card-title>
                </div>
                <v-item-group multiple>
                    <v-row class="mt-2">
                        <div v-if="props?.property?.videos?.length === 0" class="text-h4 text-center pa-8 pt-6">
                            No video has been uploaded for this property.
                        </div>
                        <v-col v-else class="pa-2 d-flex justify-center" v-for="(item, i) in props?.property?.videos"
                            :key="i" cols="12" md="6">
                            <video id="propVideo" muted controls
                                style="height: 250px; height:33vh; object-fit: contain;">
                                <source :src="item?.fileUrl" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </v-col>
                    </v-row>
                </v-item-group>
                <v-card-actions class="d-flex justify-end">
                    <v-btn variant="elevated" color="deep-purple-accent-4" @click="$emit('edit', 'Videos')">
                        Add More Videos
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>


        <!-- Property Documents -->
        <v-col class="pa-2" cols="12">
            <v-card class="pa-4 px-6" color="yellow-accent-2">
                <div class="titleCont pb-2">
                    <v-card-title class="title pl-0">Property Documents</v-card-title>
                </div>
                <v-item-group multiple>
                    <v-row class="mt-2">
                        <div v-if="props?.property?.documents?.length === 0" class="text-h4 text-center pa-8 pt-6">
                            No Document has been uploaded for this property.
                        </div>
                        <property-documents :propertyId="props?.property?.propertyId" :documentsExist="props?.property?.documents?.length > 0"/>
                    </v-row>
                </v-item-group>
                <v-card-actions class="d-flex justify-end">
                    <v-btn variant="elevated" color="deep-purple-accent-4" @click="$emit('edit', 'Documents')">
                        Add More Documents
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const props = defineProps(['property']);
const emit = defineEmits(['edit']);

const PropertyDetails = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyDetails.vue'))
const PropertyDocuments = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyDocuments.vue'))
</script>

<style scoped>
.previewContainer {
    height: 100vh;
    overflow-y: scroll;
}

.titleCont {
    position: relative;
}

.title::before {
    content: "";
    width: 50px;
    height: 3px;
    background-color: #f50057;
    position: absolute;
    top: 43px;
}
.pdLH {
    line-height: 30px;
}
</style>