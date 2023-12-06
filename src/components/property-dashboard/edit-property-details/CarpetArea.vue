<template>
    <div class="my-4 d-flex justify-space-between align-center">
        <span class="wraplink" style="width:85%;">
            Carpet Area : &nbsp; <span class="text-blue-grey-darken-1">{{ props.carpetArea }} <i>square feet</i></span>
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
                    Update with Carpet Area
                </v-col>
                <v-col cols="12" sm="8">
                    <v-text-field label="Carpet Area (required)" v-model="carpetArea.value.value"
                        :error-messages="carpetArea.errorMessage.value" clearable hint="Enter Carpet area of the property"
                        variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" class="pl-1">
                    <v-select v-model="builtupAreaUnit" :hint="builtupAreaUnit" :items="units" item-title="unit" label="Select"
                        persistent-hint variant="outlined"></v-select>
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
import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
//@ts-ignore
import { convertToSqft } from '@/composables/area.js'
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['propertyId', 'carpetArea']);
const emit = defineEmits(['success', 'failure'])
const dialog = ref(false);
const loader = ref(false);

const area = ref(props.carpetArea);
const units = ref(["guntha", "hectare", "acre", "cent", "square feet", "square meter"]);
const carpetAreaUnit = ref('square feet');

let { meta, values, errors, handleSubmit } = useForm({
    validationSchema: {
        carpetArea(value: any) {
            if (!value) {
                return "Required.";
            } else if (value > 0 && /^[0.0-9.0]*$/.test(value)) {
                return true;
            }
            return "carpet area should be greater than 0.";
        },
    },
});
const carpetArea = useField("carpetArea");
carpetArea.value.value = area.value;

async function onSuccess(values: any) {
    loader.value = true;
    const carpetarea = convertToSqft(carpetAreaUnit.value, values.carpetArea);

    const res = await api?.property?.updateDetails({
        "propertyId": props.propertyId,
        "updatingFields": { "carpetArea": carpetarea }
    });

    if (res.status === 200) {
        emit('success');
    } else {
        emit('failure');
    }
    loader.value = false;
    dialog.value = false;
}

function onInvalidSubmit(invalidData: any) {
    console.log("meta : ", meta.value)
    console.log(invalidData?.values); // current form values
    console.log(invalidData?.errors); // a map of field names and their first error message
    console.log(invalidData?.results); // a detailed map of field names and their validation results
}


// This handles both valid and invalid submissions
const update = handleSubmit(onSuccess, onInvalidSubmit);

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