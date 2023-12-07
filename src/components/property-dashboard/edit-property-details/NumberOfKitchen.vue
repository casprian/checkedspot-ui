<template>
    <div class="my-4 d-flex justify-space-between align-center">
        <span class="wraplink" style="width:85%;">
            Number of Kitchen : &nbsp; <span class="text-blue-grey-darken-1">{{ props.noOfKitchen }}</span>
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
                    Update Number of Kitchen
                </v-col>
                <v-col cols="12">
                    <v-text-field label="Number of Kitchen (required)" v-model="noOfKitchen.value.value"
                        :error-messages="noOfKitchen.errorMessage.value" clearable
                        hint="Enter number of Kitchen in the property" variant="outlined"></v-text-field>
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
import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['propertyId', 'noOfKitchen']);
const emit = defineEmits(['success', 'failure'])
const dialog = ref(false);
const loader = ref(false);

const kitchens = ref(props.noOfKitchen);

let { meta, values, errors, handleSubmit } = useForm({
    validationSchema: {
        noOfKitchen(value: any) {
            if (!value) {
                return "Required.";
            } else if (value.length >= 0 && /^[0-9]*$/.test(value)) {
                return true;
            }
            return "it should contain only numbers";
        },
    },
});
const noOfKitchen = useField("noOfKitchen");
noOfKitchen.value.value = kitchens.value;

async function onSuccess(values: any) {
    loader.value = true;

    const res = await api?.property?.updateDetails({
        "propertyId": props.propertyId,
        "updatingFields": { "noOfKitchen": parseInt(values.noOfKitchen) }
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