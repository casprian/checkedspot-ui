


<template>
    <v-col cols="12" class="py-1 px-3">
        <v-file-input v-model="imgfile.value.value" :error-messages="imgfile.errorMessage.value"
            label="File input (required)" variant="filled" prepend-icon="mdi-camera" multiple name="imgfile"
            accept=".jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg" @input="uploadfile"></v-file-input>
    </v-col>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

const emit = defineEmits(['uploadImages'])

const images = ref([]);

async function uploadfile() {

    // const response =  await axios.post)

    emit('uploadImages', images);
}
</script>

<style scoped>

</style>