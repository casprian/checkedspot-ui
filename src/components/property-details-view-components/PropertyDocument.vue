<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="50">
        <v-card class="pa-5 pt-2" color="grey-lighten-3" @click="previewDocument(document.fileUrl)"
            :elevation="isHovering ? 10 : 2" v-bind="props">
            <div class="font-weight-medium">{{ document.type }}</div>
            <v-row class="d-flex flex-column justify-center align-center">
                <v-col cols="auto" class="pb-0">
                    <v-icon icon="mdi-file" size="100" color="grey-darken-1"></v-icon>
                </v-col>

                <v-col cols="12" class="pt-0" style="min-width: 195px;">
                    <div class="" v-if="!document.fileUrl">No document uploaded</div>
                    <div class="" v-else>Document uploaded</div>
                    <v-progress-linear class="mt-1 rounded-pill"
                        :color="document.fileUrl ? 'green-darken-1' : 'red-darken-1'" height="15"
                        :model-value="document.fileUrl ? 100 : 1"></v-progress-linear>
                </v-col>
            </v-row>
        </v-card>
        
        <v-dialog v-model="dialog">
            <v-card class="ma-0" style="height: 100vh;">
                <v-row no-gutters class="pdfViewerCard pa-5">
                    <v-col cols="12" class="px-sm-5">
                        <div class="text-h6">
                            PDF Viewer
                        </div>
                        <v-btn class="closeBtn" density="compact" color="red" icon="mdi-close"
                            @click="dialog = false"></v-btn>

                            <!-- iFrame will use browsers default prd viewer -->
                        <iframe style="width: 100%; height: 95%;"
                            :src="document.fileUrl ? document.fileUrl : 'https://checkedspot.blob.core.windows.net/assets/defaultdocument.pdf'"
                            frameborder="0"></iframe>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </v-hover>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps(['document']);
const document = ref(props.document);
const previewFileUrl = ref('');
const dialog = ref(false);

function previewDocument(fileUrl: string) {
    previewFileUrl.value = fileUrl;
    dialog.value = true;
}

</script>

<style scoped>
.pdfViewerCard {
    position: relative;
    height: auto;
}

.closeBtn {
    position: absolute;
    top: 20px;
    right: 20px;
}
</style>