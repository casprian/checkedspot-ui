<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center pa-4">
                <h5 style="line-height: normal;">Message delivery Failed. Please try again!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h6 text-center d-flex align-center justify-center pa-4">
                <h5 style="line-height: normal;">
                    Message has been delivered. Checked Spot Team will contact you soon.
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-container fluid class="px-16 py-10" style="background-color:#fff6f4;">
        <v-row no-gutters class="px-md-10 pt-md-8">
            <v-col cols="12" md="6">
                <h2 class="text-h4 font-weight-medium" style="color:#1f0757">We construct your dream home.</h2>
                <p class="py-5 text-indigo-lighten-1">We construct homes and ensure peace of mind you deserve with our
                    project tracking service.</p>
                <div class="d-flex flex-column pb-5">
                    <!-- <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3" icon="mdi-check-circle-outline"></v-icon> 0 Homes</span>
                    <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3" icon="mdi-check-circle-outline"></v-icon> 0 Quality Checks</span> -->
                    <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3"
                            icon="mdi-check-circle-outline"></v-icon> Most competitive price</span>
                    <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3"
                            icon="mdi-check-circle-outline"></v-icon> 100% Safe Money Transaction</span>
                    <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3"
                            icon="mdi-check-circle-outline"></v-icon> 100% Transparency</span>
                    <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3"
                            icon="mdi-check-circle-outline"></v-icon> Dedicated labours</span>
                    <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3"
                            icon="mdi-check-circle-outline"></v-icon> Hastle free paperwork</span>
                </div>

                <!-- <v-btn color="pink-accent-3" height="45" width="250" append-icon="mdi-arrow-right" @click="router.push('/contactus')">Talk to our Experts</v-btn> -->
                <talk-to-expert-dialog :package="heading" @success="handleSuccess" @failure="handleFailure" />
            </v-col>
            
            <v-col cols="12" md="6" class="px-sm-16 pr-md-0 pl-md-5 d-flex align-center mt-10 mt-md-0">
                <v-img src="@/assets/construction.jpg" class="mr-sm-10 mr-md-0"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, defineAsyncComponent } from "vue";

const TalkToExpertDialog = defineAsyncComponent(() => import('@/components/quotation-view-components/slider-range-components/TalkToExpertDialog.vue'));

const heading = ref('');
const expandSuccess = ref(false);
const expandFailure = ref(false);

function handleSuccess() {
    expandSuccess.value = true;
    setTimeout(() => {
        expandSuccess.value = false;
    }, 2000);
}

function handleFailure() {
    expandFailure.value = true;
    setTimeout(() => {
        expandFailure.value = false;
    }, 2000);
}

const router = useRouter();
</script>

<style scoped></style>