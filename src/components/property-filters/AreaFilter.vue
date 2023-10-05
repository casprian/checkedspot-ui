<template>
    <fieldset class="rounded-xl">
        <legend class="ml-6 text-h6">Area Filter:</legend>
        <v-row class="d-flex justify-space-between pt-3 px-5">
            <v-col cols="12" md="4" class="d-flex align-end pb-0 pb-md-3">
                <v-select variant="outlined" v-model="areaUnit" label="choose area unit"
                    :items="['sqft', 'sqyrd', 'sqm']"></v-select>
            </v-col>
            <v-col cols="12" md="8" class="pt-0 pb-6 pb-md-0">
                <div class="">
                    <h3 class="text-body-1 font-weight-medium">Choose Area</h3>
                </div>
                <v-range-slider class="" v-model="areaRange" strict color="#880e4f" :max="areaRangeMax" :min="0"
                    :step="areaStep" hide-details justify="align-center">
                </v-range-slider>
                <div class="d-flex justify-space-between">
                    <span>{{ areaFrom }}</span>
                    <span>{{ areaTo }}</span>
                </div>
            </v-col>
        </v-row>
    </fieldset>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

//Area Filter
const sqftAreaRange = ref([0, 50000]); // step 200
const sqyrdAreaRange = ref([0, 5500]); // step 50
const sqmAreaRange = ref([0, 5000]); // step 50
const areaRangeMax = ref(sqftAreaRange.value[1]);
const areaStep = ref(200);

const areaUnit = ref("sqft");
const areaRange = ref(sqftAreaRange.value);

const areaFrom = ref("0 sqft");
const areaTo = ref("50000 sqft");

watch(areaUnit, (newAreaUnit, oldAreaUnit) => {
    if (newAreaUnit !== oldAreaUnit) {
        if (newAreaUnit === "sqyrd") {
            areaRange.value = sqyrdAreaRange.value;
            areaStep.value = 50;
            areaRangeMax.value = sqyrdAreaRange.value[1];
        } else if (newAreaUnit === "sqm") {
            areaRange.value = sqmAreaRange.value;
            areaStep.value = 50;
            areaRangeMax.value = sqmAreaRange.value[1];
        } else {
            areaRange.value = sqftAreaRange.value;
            areaStep.value = 200;
            areaRangeMax.value = sqftAreaRange.value[1];
        }

        emit('update:modelValue', { areaFrom: areaRange.value[0], areaTo: areaRange.value[1] })
    }
});

watch(areaRange, (newAreaRange, oldAreaRange) => {
    if (newAreaRange !== oldAreaRange) {
        areaFrom.value = `${newAreaRange[0]} ${areaUnit.value}`;
        areaTo.value = `${newAreaRange[1]} ${areaUnit.value}`;

        emit('update:modelValue', { areaFrom: areaFrom.value, areaTo: areaTo.value })
    }
})

onMounted(() => {
    emit('update:modelValue', { areaFrom: areaFrom.value, areaTo: areaTo.value  })
})

</script>

<!-- 1 sqm = 10.7639 sqft -->
<!-- 1 sqyrd = 9 sqft -->