<template>
    <fieldset class="rounded-xl"> 
        <legend class="ml-6 text-h6 textColor legendText">Cost Filter:</legend>
        <v-row class="pt-3 px-5 py-5">
            <v-col cols="12" class="py-0">
                <div class="">
                    <h3 class="text-body-1 font-weight-regular textColor">Choose Budget</h3>
                </div>
                <v-range-slider v-model="costRange" strict color="#c46d9a" :max="5000" :min="0" :step="50" hide-details
                    justify="align-center">
                </v-range-slider>
            </v-col>
            <v-col cols="12" class="d-flex justify-space-between py-0">
                <span>₹ {{ costFrom }}</span>
                <span>₹ {{ costTo }}</span>
            </v-col>
        </v-row>
    </fieldset>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

//Cost filter
const costRange = ref([0, 5000])
const costFrom = ref("0 Lac");
const costTo = ref("50.00 Cr");
watch(costRange, (newCostRange) => {
    if (newCostRange[0] >= 100) {
        costFrom.value = (newCostRange[0] / 100).toFixed(2) + " Cr";
    } else {
        costFrom.value = (newCostRange[0]).toString() + " Lac";
    }

    if (newCostRange[1] >= 100) {
        costTo.value = (newCostRange[1] / 100).toFixed(2) + " Cr";
    } else {
        costTo.value = (newCostRange[1]).toString() + " Lac";
    }
    emit('update:modelValue', { costFrom: costFrom.value, costTo: costTo.value  });
});

onMounted(() => {
    emit('update:modelValue', { costFrom: costFrom.value, costTo: costTo.value  });
});
</script>