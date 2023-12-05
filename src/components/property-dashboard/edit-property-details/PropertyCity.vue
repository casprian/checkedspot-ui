<template>
    <div class="my-4 d-flex justify-space-between align-center">
        <span class="wraplink" style="width:85%;">
            City : &nbsp; <span class="text-blue-grey-darken-1">{{ props.city }}</span>
        </span>
        <span class="d-flex justify-end" style="width:15%;">
            <v-btn variant="text" color="secondary" @click="getCities">
                Edit
            </v-btn>
        </span>
    </div>
    <v-dialog v-model="dialog" width="auto">
        <v-card width="50vw" color="grey-lighten-5">
            <v-row no-gutters class="pa-10 pt-7">
                <v-col cols="12" class="text-h6 pb-5">
                    Update City
                </v-col>
                <v-col cols="12">
                    <v-select v-model="city" :items="cities" label="city" variant="outlined" clearable
                        hint="Choose from the Cities List"></v-select>
                </v-col>
                <v-col cols="12" class="pt-5 d-flex justify-center">
                    <v-btn variant="elevated" color="primary" width="200" :loading="loader" @click="update">Save</v-btn>
                    <v-btn class="ml-4" width="100" color="green-darken-2" variant="outlined"
                        @click="dialog = false">Cancel</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['propertyId', 'city', 'state']);
const emit = defineEmits(['success', 'failure']);
const dialog = ref(false);
const loader = ref(false);

const city = ref(props.city);
const cities = ref([]);

async function update() {
    loader.value = true;

    const res = await api?.property?.updateDetails({
        "propertyId": props.propertyId,
        "updatingFields": { "city": city.value }
    });

    if (res.status === 200) {
        emit('success');
    } else {
        emit('failure');
    }
    loader.value = false;
    dialog.value = false;
}

async function getCities() {
    dialog.value = true;
    //@ts-ignore
    const stateList = JSON.parse(localStorage.getItem('location'));

    //@ts-ignore
    const stateObj = stateList?.states?.find(state => state.name === props.state);
    cities.value = stateObj?.cities;
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