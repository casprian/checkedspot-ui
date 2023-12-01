<template>
    <div>
        <p>Fusce a</p>

        <p class="mb-0">
            Cras sagittis. P, ultricies nec,m at tortor in tellus interdum
            sagittis.
        </p>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['videos', 'propertyId'])

console.log(props.videos);
</script>

<style scoped></style>