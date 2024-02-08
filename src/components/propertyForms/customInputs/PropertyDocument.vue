<template>
    <span>
        <v-hover v-slot="{ isHovering, props }" open-delay="50">
            <v-card class="pa-5 pt-2" color="grey-lighten-3" :elevation="isHovering ? 10 : 2" v-bind="props">
                <div class="font-weight-medium">{{ documentType }}</div>
                <v-row class="d-flex flex-column justify-center align-center">
                    <v-col cols="auto" class="pb-0">
                        <label :for="props.fileInputId" class="docfile">
                            <v-icon icon="mdi-file" size="100" color="grey-darken-1"></v-icon>
                            <input type="file" accept=".pdf" :id="props.fileInputId" style="width: 0;" @change="uploadDoc">
                        </label>
                    </v-col>

                    <v-col cols="12" class="pt-0" style="min-width: 195px;">
                        <div class="" v-if="!isDocUploaded">No document uploaded</div>
                        <div class="" v-else-if="isDocUploaded && fileuploadprogress < 100">Uploading...</div>
                        <div class="" v-else>Document uploaded</div>
                        <v-progress-linear class="mt-1 rounded-pill" :color="progresscolor" height="15"
                            v-model="fileuploadprogress"></v-progress-linear>
                    </v-col>
                </v-row>
            </v-card>
        </v-hover>
    </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js'

const emit = defineEmits(['uploadSuccess']);
const props = defineProps(['docType', 'fileInputId']);
const documentType = ref(props.docType);

const document = ref({
    type: props.docType,
    title: "",
    description: ""
});

const isDocUploaded = ref(false);
const fileuploadprogress = ref(1);
const progresscolor = ref('red-darken-1');
const interval = ref(0);

function startBuffer() {
    progresscolor.value = 'green-darken-1'
    clearInterval(interval.value)
    //@ts-ignore
    interval.value = setInterval(() => {
        if (fileuploadprogress.value >= 0 && fileuploadprogress.value <= 100) {
            fileuploadprogress.value += 1;
        } else {
            clearInterval(interval.value);
        }
    }, 15)
}


async function uploadDoc(event: any) {
    const formData = new FormData();
    formData.append('document', event?.target?.files[0]);

    const res = await api?.property?.uploadDocument(formData);

    if (res?.status === 200) {
        document.value = { ...res?.data?.document, type: props.docType };
        isDocUploaded.value = true;
        startBuffer();
        emit('uploadSuccess', document.value);
    } else {
        console.log(res);
    }
}
</script>

<style scoped>
.docfile:hover {
    cursor: pointer;
}
</style>
