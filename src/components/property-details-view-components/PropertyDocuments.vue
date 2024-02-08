<template>
    <v-col cols="12">
        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
            <v-card-item class="titleCont mb-5">
                <v-card-title class="title">Document</v-card-title>
            </v-card-item>
            
            <v-row no-gutters class="px-4 pb-5">
                <v-cols cols="12" style="height: 500px; width: 100%;">
                    <PDFViewer style="min-width: 300px !important;" :rendering-text="'Loading Plan PDF'"
                        :source="documents[0]?.fileUrl ? documents[0]?.fileUrl : 'https://checkedspot.blob.core.windows.net/assets/defaultdocument.pdf'"
                        @download="handleDownload" :controls="['download', 'print', 'zoom', 'switchPage', 'catalog']" />
                </v-cols>
            </v-row>
        </v-card>
    </v-col>
</template>

<script lang="ts" setup>
import PDFViewer from 'pdf-viewer-vue';
import { onMounted, ref } from 'vue';

//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['propertyId'])
let documents = ref([{fileUrl: ""}]);

function handleDownload() {
    window.location.href = documents.value[0]?.fileUrl;
}

async function loadDocuments() {
    const res = await api?.property?.getPropertyDocument({ params: { propertyId: props.propertyId } })
    documents.value = res?.data;
}

onMounted(async () => {
    await loadDocuments();
})
</script>

<style scoped>
.titleCont {
    position: relative;
}

.title::before {
    content: "";
    width: 50px;
    height: 3px;
    background-color: #f50057;
    position: absolute;
    top: 43px;
}
</style>