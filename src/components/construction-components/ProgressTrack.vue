<template>
    <v-container fluid class="px-16 py-10" style="background-color:#fff6f4;">
        <v-row no-gutters class="px-md-10 pt-md-8">
            <v-col cols="12" md="6">
                <h2 class="text-h4 font-weight-medium" style="color:#1f0757">We construct your dream home.</h2>
                <p class="py-5 text-indigo-lighten-1">We construct homes and ensure peace of mind you deserve with our project tracking service.</p>
                <div class="d-flex flex-column pb-5">
                    <!-- <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3" icon="mdi-check-circle-outline"></v-icon> 0 Homes</span>
                    <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3" icon="mdi-check-circle-outline"></v-icon> 0 Quality Checks</span> -->
                    <span class="text-indigo-lighten-1 py-1"><v-icon color="pink-accent-3" icon="mdi-check-circle-outline"></v-icon> 100% Safe Money Transaction</span>
                </div>
                <v-btn color="pink-accent-3" height="45" width="250" append-icon="mdi-arrow-right" @click="router.push('/contactus')">Talk to our Experts</v-btn>
            </v-col>
            <v-col cols="12" md="6" class="px-sm-16 pr-md-0 pl-md-5 d-flex align-center mt-10 mt-md-0">
                <v-img src="@/assets/construction.jpg" class="mr-sm-10 mr-md-0"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
</style>