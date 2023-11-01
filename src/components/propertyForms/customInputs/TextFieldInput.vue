<script lang="ts" setup>
const props = defineProps(['modelValue', '']);
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <v-col cols="12">
        <!-- <v-text-field label="text" variant="outlined" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" :error-messages="error" /> -->
    </v-col>
</template>