<template>
    <v-row no-gutters class="statcont pa-0 ma-0 py-8 d-flex justify-center align-center">
        <v-col cols="12" md="4" class="py-8">
            <div class="stat text-center text-white">100+</div>
            <div class="detail text-center text-white">Quality Check</div>
        </v-col>
        <v-col cols="12" md="4" class="py-8">
            <div class="stat text-center text-white">60+</div>
            <div class="detail text-center text-white">Projects Completed</div>
        </v-col>
        <v-col cols="12" md="4" class="py-8">
            <div class="stat text-center text-white">1.5X</div>
            <div class="detail text-center text-white">Saving to customer</div>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.statcont {
    margin-top: 80px !important;
    height: auto;
    border-radius: 16px;
    background-color: #3F3F3F;
}

.stat {
    font-size: 60px;
    font-weight: 700;
}

.detail {
    font-size: 18px;
    font-weight: 500;
}
</style>