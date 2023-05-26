<template>
    <v-container>
        <form>
            <v-row no-gutters>
                <v-col cols="12" class="py-1 px-3">
                    <div class="py-3 text-h5 font-weight-medium text-pink-accent-1">Choose Property Type</div>
                    <v-radio-group v-model="propertyType" inline>
                        <v-radio class="px-3" color="pink-accent-3" label="Plot" value="plot"></v-radio>
                        <v-radio class="px-3" color="pink-accent-3" label="Flat" value="flat"></v-radio>
                    </v-radio-group>
                </v-col>

                <plot-form v-if="propertyType==='plot'" type="plot" />

                <flat-form v-if="propertyType==='flat'" type="flat" />

                <!-- Property Document Section -->
                <!-- <v-row no-gutters class="py-3 mt-7 type">
                    <v-col cols="12" class="pt-2 pb-7 px-4">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Property
                            Documents details
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Document Id" v-model="bodyData.documentId" clearable hint="Enter Document Id"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Document Type" v-model="bodyData.documentType" clearable hint="Enter Document Type"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Document Description" v-model="bodyData.documentDescription"
                            clearable hint="Enter Document Description" variant="outlined"></v-text-field>
                    </v-col>
                </v-row> -->

                <!-- Property Agent Section -->
                <!-- <v-row no-gutters class="py-3 mt-7 type">
                    <v-col cols="12" class="pt-2 pb-7 px-4">
                        <div class="text-h5 font-weight-medium text-decoration-underline text-pink-accent-1">Property Agent
                            details
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Agent Name" v-model="bodyData.agentName" clearable hint="Enter Agent's Name"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Agent Email" v-model="bodyData.agentEmail" clearable hint="Enter Agent's Email"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Agent Mobile" v-model="bodyData.agentMobile" clearable hint="Enter Agent's Mobile"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-1 px-3">
                        <v-text-field label="Agent Address" v-model="bodyData.agentAddress" clearable hint="Enter Agent's Address"
                            variant="outlined"></v-text-field>
                    </v-col>
                </v-row> -->
            </v-row>
        </form>
    </v-container>
</template>

<script lang="ts" setup>
import PlotForm from '@/components/propertyForms/PlotForm.vue';
import FlatForm from '@/components/propertyForms/FlatForm.vue';
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const propertyType = ref('plot')

if (!sessionStorage.getItem('token')) {
    router.push('/')
}
</script>

<style scoped>
.type {
    border: solid 2px grey;
    border-radius: 8px;
}

.checkheight {
    height: 60px;
    overflow: hidden;
}
</style>