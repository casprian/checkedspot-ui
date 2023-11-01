<template>
    <v-row no-gutters class="pl-7">
        <v-col cols="11" class="py-1 px-3">
            <!-- Display Input Sets -->
            <v-row no-gutters class="mb-1" v-for="(set, index) in documents" :key="index">
                <v-col cols="11" class="pa-0">
                    <v-row no-gutters>
                        <v-col cols="12" sm="6" class="pa-0 px-2">
                            <v-select v-model="set.type" :items="selectOptions" label="Select Document Type"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" class="pa-0 px-2">
                            <v-file-input accept=".pdf" hint="upload PDF File only" persistent-hint
                                prepend-inner-icon="mdi-file" prepend-icon="" label="upload file"
                                v-model="set.file"></v-file-input>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="1" class="d-flex justify-start align-center pa-0 pb-5">
                    <v-btn @click="removeDocument(set.id)" icon="mdi-close" size="30" variant="elevated"
                        color="red-darken-3"></v-btn>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="auto" class="d-flex justify-center align-end pb-7 pt-1">
            <!-- Add More Sets Button -->
            <v-hover v-slot="{ isHovering, props }" open-delay="10">
                <v-btn v-bind="props" :elevation="isHovering ? 10 : 2" :class="{ 'on-hover': isHovering }" height="100%"
                    color="pink-darken-2" @click="addInputSet" :disabled="!isLastSetFilled" title="Add more"><v-icon
                        size="30" icon="mdi-plus"></v-icon></v-btn>
            </v-hover>
        </v-col>
    </v-row>
</template>
  
<script lang="ts" setup>
import { ref, computed, watch, toRaw, reactive } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js';

const emit = defineEmits(['addDocument'])

const selectOptions = ref(['RTC', 'EC', 'Sale Deed', 'Mother Deed']);
const documents = ref([
    {
        id: Math.floor(1000 + Math.random() * 9000),
        type: null,
        file: [],
    },
]);


// Function to deep copy an array of objects with files
function deepCopyArrayWithFiles(originalArray: Array<Object>) {
    return originalArray.map((originalItem: any) => {
        const newItem = { ...toRaw(originalItem) }; // Shallow copy of the object

        // For each object, create a new File object if one exists
        if (originalItem.file instanceof File) {
            newItem.file = new File([originalItem.file], originalItem.file.name, {
                type: originalItem.file.type,
            });
        }

        return newItem;
    });
}

// Deep copy the array of objects with files
let deepCopyDocuments = deepCopyArrayWithFiles(documents.value);
let emitDocuments = reactive([]);

const isLastSetFilled = computed(() => {
    const lastSet = documents.value[documents.value.length - 1];
    return lastSet.type !== null && lastSet.file.length !== 0;
});

const addInputSet = () => {
    // Add a new input set only if the last set is filled
    if (isLastSetFilled.value) {
        documents.value.push({
            id: Math.floor(1000 + Math.random() * 9000),
            type: null,
            file: [],
        });
    }
};

function removeDocument(id: any) {
    if (documents.value.length === 1) {
        documents.value[0].type = null;
        documents.value[0].file = [];
    } else {
        const index = documents.value.findIndex(document => {
            return document.id === id
        })
        //deleting the deleted data form the documents array.
        documents.value.splice(index, 1);
    }
    //@ts-ignore
    const emitIndex = emitDocuments?.findIndex(document => document?.id === id);
    if (emitIndex > -1) {
        emitDocuments.splice(emitIndex, 1);
    }
    emit('addDocument', emitDocuments);
}

watch(documents, async (newDocuments) => {
    // emitDocuments = toRaw(newDocuments);
    if (toRaw(newDocuments) !== deepCopyDocuments) {
        toRaw(newDocuments).forEach(async (document) => {
            const newId = document.id;
            const deepCopyIndex = deepCopyDocuments.findIndex((document: any) => document.id === newId)
            //@ts-ignore
            const emitIndex = emitDocuments?.findIndex(document => document?.id === newId);

            if (deepCopyIndex > -1) {
                if (deepCopyDocuments[deepCopyIndex].type !== document?.type) {
                    deepCopyDocuments[deepCopyIndex].type = document?.type;
                    if (emitIndex > -1) {
                        //@ts-ignore
                        emitDocuments[emitIndex].type = document?.type;
                        emit('addDocument', emitDocuments);
                    }
                }
                if (deepCopyDocuments[deepCopyIndex].file !== document?.file) {
                    deepCopyDocuments[deepCopyIndex].file = document?.file;

                    if (document?.file.length !== 0) {
                        const file = await uploadfile(document?.file[0]);

                        if (emitIndex > -1) {
                            //@ts-ignore
                            emitDocuments[emitIndex].file = file;
                        } else {
                            //@ts-ignore
                            emitDocuments.push({ id: newId, type: document.type, file: file });
                        }
                        emit('addDocument', emitDocuments);
                    } else {
                        //@ts-ignore
                        const index = emitDocuments?.findIndex(document => document?.id === newId);
                        if (emitIndex > -1) {
                            emitDocuments.splice(index, 1);
                        }
                    }
                }
            } else {
                deepCopyDocuments = deepCopyArrayWithFiles(newDocuments);
            }
        })
    }

}, { immediate: true, deep: true });

async function uploadfile(file: File) {
    const formData = new FormData();
    formData.append('document', file);

    const res = await api?.property?.uploadDocument(formData);

    if (res?.data.status === 200) {
        return res?.data?.document;
    }
}
</script>

  