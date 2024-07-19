<template>
    <v-container fluid class="px-0 py-10 px-md-14">
        <v-row no-gutters>
            <v-col cols="12" class="pa-0">
                <slider-comp />
                <div class="d-flex justify-end pr-5">
                    <RouterLink to="/termsofservices" class="text-caption text-end pr-md-14 pt-2 text-pink-accent-3">*T&C Apply</RouterLink>
                </div>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
//@ts-ignore
import SliderComp from "@/components/quotation-view-components/slider-range-components/SliderComp.vue";
</script>

<style scoped>
</style>