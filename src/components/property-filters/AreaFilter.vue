<template>
    <fieldset class="rounded-xl">
        <legend class="ml-6 text-h6 textColor legendText">Area Filter:</legend>
        <v-row class="d-flex justify-space-between pt-3 px-5">
            <v-col cols="12" md="4" class="d-flex align-end pb-0 pb-md-3">
                <v-select variant="outlined" v-model="areaUnit" label="choose area unit"
                    :items="['sqft', 'sqyrd', 'sqm']"></v-select>
            </v-col>
            <v-col cols="12" md="8" class="pt-0 pb-6 pb-md-0">
                <div class="">
                    <h3 class="text-body-1 font-weight-regular textColor">Choose Area</h3>
                </div>
                <v-range-slider class="" v-model="areaRange" strict color="#c46d9a" :max="50000" :min="0"
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
const areaStep = ref(200);

const areaUnit = ref("sqft");
const areaRange = ref([0, 50000]);

const areaFrom = ref("0 sqft");
const areaTo = ref("50000 sqft");

watch(areaUnit, (newAreaUnit, oldAreaUnit) => {
    if (newAreaUnit !== oldAreaUnit) {
        areaFrom.value = `${Number.parseInt(areaFrom.value)} ${newAreaUnit}`;
        areaTo.value = `${Number.parseInt(areaTo.value)} ${newAreaUnit}`;

        emit('update:modelValue', { areaFrom: areaFrom.value, areaTo: areaTo.value })
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