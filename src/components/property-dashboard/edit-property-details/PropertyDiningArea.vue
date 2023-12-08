<template>
    <div class="my-4 d-flex justify-space-between align-center">
        <span class="wraplink" style="width:85%;">
            Dining Area : &nbsp; <span class="text-blue-grey-darken-1">{{ props.diningArea }}</span>
        </span>
        <span class="d-flex justify-end" style="width:15%;">
            <v-btn variant="text" color="secondary" @click="dialog = true">
                Edit
            </v-btn>
        </span>
    </div>
    <v-dialog v-model="dialog" width="auto">
        <v-card color="grey-lighten-5">
            <v-row no-gutters class="pa-10 pt-7">
                <v-col cols="12" class="text-h6 pb-5">
                    Update Property Dining Area
                </v-col>
                <v-col cols="12">
                    <v-select v-model="diningArea" :items="status" label="dining area" variant="outlined" clearable
                        hint="choose for the availability of dining area in property."></v-select>
                </v-col>
                <v-col cols="12" class="pt-5 d-flex flex-column flex-md-row justify-center align-center">
                    <v-btn class="my-2" variant="elevated" color="primary" width="200" :loading="loader" @click="update">Save</v-btn>
                    <v-btn class="ml-4 my-2" width="100" color="green-darken-2" variant="outlined"
                        @click="dialog = false">Cancel</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['propertyId', 'diningArea']);
const emit = defineEmits(['success', 'failure']);
const dialog = ref(false);
const loader = ref(false);

const diningArea = ref(props.diningArea);
const status = ref(['available', 'unavailable']);

async function update() {
    loader.value = true;

    const res = await api?.property?.updateDetails({
        "propertyId": props.propertyId,
        "updatingFields": { "diningArea": diningArea.value }
    });

    if (res.status === 200) {
        emit('success');
    } else {
        emit('failure');
    }
    loader.value = false;
    dialog.value = false;
}
</script>

<style scoped>
.wraplink {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.wraplink:hover {
    white-space: normal;
}
</style>