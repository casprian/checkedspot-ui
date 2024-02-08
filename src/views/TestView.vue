<template>
    <v-container class="mt-10">
        <v-row no-gutters>
            <v-col cols="auto" class="ma-2" v-for="item in documents" :key="item.id">
                <PropertyDocument :fileInputId="`plotform${item.type}`" :docType="item.type" @uploadSuccess="docUploaded" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";

const PropertyDocument = defineAsyncComponent(() => import('@/components/propertyForms/customInputs/PropertyDocument.vue'));

const documents = ref([
    {
        id: "1",
        type: 'RTC',
        title: "",
        description: "",
        fileUrl: "",
    },
    {
        id: "2",
        type: 'Mother Deed',
        title: "",
        description: "",
        fileUrl: "",
    },
    {
        id: "3",
        type: 'Sale Deed',
        title: "",
        description: "",
        fileUrl: "",
    },
    {
        id: "4",
        type: 'EC',
        title: "",
        description: "",
        fileUrl: "",
    },
]);
const uploadDocs = ref([]);

function docUploaded(doc: Object) {
    console.log("dsafSAFD : ", doc);
    documents.value.forEach((item) => {
        //@ts-ignore
        if (doc?.type !== item?.type) {
            //@ts-ignore
            uploadDocs.value.push(item);
        } else {
            //@ts-ignore
            uploadDocs.value.push(doc);
        }
    })
}
</script>

<style></style>