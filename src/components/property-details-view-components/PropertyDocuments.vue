<template>
    <v-col cols="12">
        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
            <v-card-item class="titleCont mb-5">
                <v-card-title class="title">Document</v-card-title>
            </v-card-item>

            <v-row v-if="props.documents.length > 0" no-gutters class="px-4 pb-5">
                <v-cols cols="12" style="height: 500px; width: 100%;">
                    <PDFViewer style="min-width: 300px !important;" :rendering-text="'Loading Plan PDF'"
                        :source="props.documents ? props.documents[0] : ''"
                        @download="handleDownload" :controls="['download', 'print', 'zoom', 'switchPage', 'catalog']" />
                </v-cols>
            </v-row>
            <div v-else class="text-h4 text-center pa-8">
                No Document has been uploaded for property.
            </div>
        </v-card>
    </v-col>
</template>

<script lang="ts" setup>
import PDFViewer from 'pdf-viewer-vue';
const props = defineProps(['documents']);

function handleDownload() {
    window.location.href = props.documents[0];
}

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