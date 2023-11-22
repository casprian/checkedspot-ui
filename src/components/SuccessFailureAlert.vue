<template>
  <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>Message delivery Failed. Please try again!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>
                    Message has been delivered. Plotwala Team will contact you soon.
                </h5>
            </div>
        </v-card>
    </v-expand-transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['expand']);
const expandSuccess = ref(false);
const expandFailure = ref(false);

onMounted(() => {
    if(props.expand === 'expandSuccess') {
        expandSuccess.value = true;
        setTimeout(() => {
            expandSuccess.value = false;
        }, 2000);
    }else if(props.expand === 'expandFailure') {
        expandFailure.value = true;
        setTimeout(() => {
            expandFailure.value = false;
        }, 2000);
    } 
})
</script>

<style scoped>
</style>