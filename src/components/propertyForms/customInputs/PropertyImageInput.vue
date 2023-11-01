<script lang="ts" setup>

const props = ['mode']
</script>


<template>
    <v-col cols="12" class="py-1 px-3">
        <v-file-input v-model="imgfile.value.value" :error-messages="imgfile.errorMessage.value"
            label="File input (required)" variant="filled" prepend-icon="mdi-camera" multiple name="imgfile"
            accept=".jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg"></v-file-input>
    </v-col>
</template>


<style scoped>
</style>