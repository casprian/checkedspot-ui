<template>
    <div class="mt-4 mb-2 text-h6 text-decoration-underline">
        Aminities
    </div>
    <div class="mb-4 d-flex justify-space-between align-center">
        <span style="width:85%;">
            <div class="wraplink my-2">
                Lobby : &nbsp; <span :class="bodyData.lobby === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.lobby }}</span>
            </div>
            <div class="wraplink my-2">
                Balcony : &nbsp; <span :class="bodyData.balcony === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.balcony }}</span>
            </div>    
            <div class="wraplink my-2">
                Dining Area : &nbsp; <span :class="bodyData.diningArea === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.diningArea }}</span>
            </div>
            <div class="wraplink my-2">
                Garden : &nbsp; <span :class="bodyData.garden === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.garden }}</span>
            </div>
            <div class="wraplink my-2">
                Parking Lot : &nbsp; <span :class="bodyData.parkingLot === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.parkingLot }}</span>
            </div>    
            <div class="wraplink my-2">
                Elivator : &nbsp; <span :class="bodyData.elivator === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.elivator }}</span>
            </div>
            <div class="wraplink my-2">
                Air Conditioning : &nbsp; <span :class="bodyData.airConditioning === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.airConditioning }}</span>
            </div>    
            <div class="wraplink my-2">
                Swimming Pool : &nbsp; <span :class="bodyData.swimmingPool === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.swimmingPool }}</span>
            </div>
            <div class="wraplink my-2">
                Laundry Room : &nbsp; <span :class="bodyData.laundryRoom === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.laundryRoom }}</span>
            </div>
            <div class="wraplink my-2">
                Gym : &nbsp; <span :class="bodyData.gym === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.gym }}</span>
            </div>    
            <div class="wraplink my-2">
                Wifi : &nbsp; <span :class="bodyData.wifi === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.wifi }}</span>
            </div>
            <div class="wraplink my-2">
                TV Cable : &nbsp; <span :class="bodyData.tvCable === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.tvCable }}</span>
            </div>
            <div class="wraplink my-2">
                Dish Washer : &nbsp; <span :class="bodyData.dishWasher === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.dishWasher }}</span>
            </div>    
            <div class="wraplink my-2">
                Refrigerator : &nbsp; <span :class="bodyData.refrigerator === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.refrigerator }}</span>
            </div>
            <div class="wraplink my-2">
                Outdoor Shower : &nbsp; <span :class="bodyData.outdoorShower === 'available'  ? 'text-blue-grey-darken-1' : 'text-red-darken-1'">{{ bodyData.outdoorShower }}</span>
            </div>
        </span>
        <span class="d-flex justify-end" style="width:15%;">
            <v-btn variant="text" color="secondary" @click="dialog = true">
                Edit
            </v-btn>
        </span>
    </div>
    <v-dialog v-model="dialog" width="auto">
        <v-card width="50vw" color="grey-lighten-5">
            <v-row no-gutters class="pa-10 pt-7">
                <v-col cols="12" class="text-h6 pb-5">
                    Update Flat Aminities
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Lobby" v-model="bodyData.lobby" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Balcony" v-model="bodyData.balcony" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Garden" v-model="bodyData.garden" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Dining Area" v-model="bodyData.diningArea" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Parking Lot" v-model="bodyData.parkingLot" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Elivator" v-model="bodyData.elivator" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Air Conditioning" v-model="bodyData.airConditioning"
                        false-value="unavailable" true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Swimming Pool" v-model="bodyData.swimmingPool" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Laundry Room" v-model="bodyData.laundryRoom" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Gym" v-model="bodyData.gym" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Wifi" v-model="bodyData.wifi" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="TV Cable" v-model="bodyData.tvCable" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Dishwasher" v-model="bodyData.dishWasher" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Refrigerator" v-model="bodyData.refrigerator" false-value="unavailable"
                        true-value="available"></v-checkbox>
                </v-col>
                <v-col cols="12" md="4" class="py-1 px-2">
                    <v-checkbox class="pa-0" label="Outdoor Shower" v-model="bodyData.outdoorShower"
                        false-value="unavailable" true-value="available"></v-checkbox>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps(['propertyId']);
const emit = defineEmits(['success', 'failure']);
const dialog = ref(false);
const loader = ref(false);

const bodyData = ref({
    lobby: null,
    balcony: null,
    diningArea: null,
    garden: null,
    parkingLot: null,
    elivator: null,
    airConditioning: null,
    swimmingPool: null,
    laundryRoom: null,
    gym: null,
    wifi: null,
    tvCable: null,
    dishWasher: null,
    refrigerator: null,
    outdoorShower: null,
})


async function update() {
    loader.value = true;
    console.log(bodyData.value)

    const res = await api?.property?.updateDetails({
        "propertyId": props.propertyId,
        "updatingFields": bodyData.value
    });

    if (res.status === 200) {
        emit('success');
    } else {
        emit('failure');
    }
    loader.value = false;
    dialog.value = false;
}

async function fetchPropertydetails() {
    const res = await api?.property?.getProperty({ params: { propertyId: props?.propertyId } })
    if (res.status === 200) {
        Object.keys(bodyData.value).forEach((key) => {
            //@ts-ignore
            bodyData.value[key] = res.data[key];
        })
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

onMounted(async() => {
    await fetchPropertydetails();
})
</script>

<style></style>