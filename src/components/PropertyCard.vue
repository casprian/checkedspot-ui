<template>
    <v-card class="mx-auto" style="max-width: 480px;" position="relative">
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
                                    <v-icon size="22px" class="ma-0 pa-0" icon="mdi-link-variant" color="grey-lighten-5"></v-icon>
                                </v-col>
                                <v-col cols="auto" class="px-2 py-1 ma-0 mr-3 bg-grey-darken-2 rounded">                                    
                                    <v-icon size="22px" class="ma-0 pa-0" icon="mdi-video" color="grey-lighten-5"></v-icon>
                                </v-col>
                                <v-col cols="auto" class="px-2 py-1 ma-0 bg-grey-darken-2 rounded">                                    
                                    <v-icon size="22px" class="ma-0 pa-0" icon="mdi-image-filter-hdr" color="grey-lighten-5"></v-icon>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-img>

        <v-sheet height="260px">            
            <v-card-title>
                Property For: {{ property.propertyStatus }}
            </v-card-title>
    
            <v-card-subtitle>
                Location: {{ property.location }}
            </v-card-subtitle>
            
            <v-card-actions>
                <v-btn variant="outlined">Button</v-btn>
            </v-card-actions>
        </v-sheet>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
defineProps(['property'])

const show = ref(false)
</script>

<style scoped></style>