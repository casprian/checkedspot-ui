<template>
    <v-container fluid class="container">
        <v-row no-gutters class="d-flex justify-center align-center row">
            <v-col v-if="status == 401" cols="auto">
                <div class="text-h1 font-weight-bold text-white text-center ma-4">
                    Unauthorized Access!
                </div> 
                <div class="text-h4 font-weight-bold text-white text-center ma-4">
                    Please login to continue...
                </div> 
                <div width="100%" class="d-flex flex-column justify-center align-center pa-7">
                    <v-btn prepend-icon="mdi-arrow-left-bold" width="200px"  height="48px" variant="elevated" color="pink-accent-3" class="text-h5 ma-2" @click="router.back()">Back</v-btn>
                    <v-btn prepend-icon="mdi-home" width="200px"  height="48px" variant="elevated" color="pink-accent-3" class="text-h5 ma-2" @click="router.push('/')">Home</v-btn>
                </div>       
            </v-col>
            <v-col v-else-if="status >= 400  && status <= 499" cols="auto">
                <div class="text-h2 text-center font-weight-bold text-white">
                    Client Side Error 
                </div> 
                <div width="100%" class="d-flex flex-column justify-center align-center pa-7">
                    <v-btn prepend-icon="mdi-arrow-left-bold" width="200px"  height="48px" variant="elevated" color="pink-accent-3" class="text-h5 ma-2" @click="router.back()">Back</v-btn>
                    <v-btn prepend-icon="mdi-home" width="200px"  height="48px" variant="elevated" color="pink-accent-3" class="text-h5 ma-2" @click="router.push('/')">Home</v-btn>
                </div>       
            </v-col>
            <v-col v-else-if="500 <= status && status <= 599" cols="auto">
                <div class="text-h2 text-center font-weight-bold text-white">
                    Server Error
                </div>
                <div width="100%" class="d-flex flex-column justify-center align-center pa-7">
                    <v-btn prepend-icon="mdi-arrow-left-bold" width="200px"  height="48px" variant="elevated" color="pink-accent-3" class="text-h5 ma-2" @click="router.back()">Back</v-btn>
                    <v-btn prepend-icon="mdi-home" width="200px"  height="48px" variant="elevated" color="pink-accent-3" class="text-h5 ma-2" @click="router.push('/')">Home</v-btn>
                </div>   
            </v-col>
            <v-col v-else cols="auto">
                <div class="text-h2 text-center font-weight-bold text-white">
                    {{ status || 'Unexpected' }} Error!
                </div> 
                <div class="text-h4 font-weight-bold text-white text-center my-4">
                    Please check your internet connection...
                </div> 
                <div width="100%" class="d-flex flex-column justify-center align-center pa-7">
                    <v-btn prepend-icon="mdi-arrow-left-bold" width="200px"  height="48px" variant="elevated" color="pink-accent-3" class="text-h5 ma-2" @click="router.back()">Back</v-btn>
                    <v-btn prepend-icon="mdi-home" width="200px"  height="48px" variant="elevated" color="pink-accent-3" class="text-h5 ma-2" @click="router.push('/')">Home</v-btn>
                </div>  
            </v-col>

        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const status = ref(200);

status.value = parseInt(JSON.parse(JSON.stringify(route?.query?.status ? route?.query?.status : '')));

</script>

<style scoped>
.container {
    height: 100vh; 
    background-image: url('https://checkedspot.blob.core.windows.net/assets/b-12.jpg');
    background-size: cover;   
    background-position-y: bottom;
}
.row {
    height: 100%;
}
</style>