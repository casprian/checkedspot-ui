<template>
    <v-rating class=" rating pa-0 ma-0" v-model="rating" hover half-increments density="comfortable" active-color="pink-accent-3" color="pink-accent-3"></v-rating>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const rating = ref(3.5);

const props = defineProps(['rate']);
rating.value = props.rate ? props.rate : rating.value;

</script>

<style scoped>
.rating {
    height: 35px;
    display: flex;
    justify-content: end;
    align-items: start;
}

</style>