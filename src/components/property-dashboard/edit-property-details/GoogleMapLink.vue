<template>
    <div class="my-4 d-flex justify-space-between align-center">
        <span class="wraplink" style="width:85%;"> Google Map link : &nbsp; <span class="text-blue-grey-darken-1">{{ link }}</span></span>
        <span class="d-flex justify-end" style="width:15%;"><v-btn variant="text" color="secondary" @click="dialog = true"> Edit
            </v-btn></span>
    </div>
    <v-dialog v-model="dialog" width="auto">
        <v-card width="50vw" color="grey-lighten-5">
            <v-row no-gutters class="pa-10 pt-7">
                <v-col cols="12" class="text-h6 pb-5">
                    Update with Location(Google Map link)
                </v-col>
                <v-col cols="12" sm="8">
                    <v-text-field prepend-inner-icon="mdi-link" label="Google Map Link" v-model="googleMapLink.value.value"
                        :error-messages="googleMapLink.errorMessage.value" clearable
                        hint="Enter Google map link of the location" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" class="pt-5 d-flex justify-center">
                    <v-btn variant="elevated" color="primary" width="200" :loading="loader"
                        @click="update">Save</v-btn>
                    <v-btn class="ml-4" width="100" color="green-darken-2" variant="outlined"
                        @click="dialog = false">Cancle</v-btn>
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

const props = defineProps(['propertyId', 'gMapLink']);
const emit = defineEmits(['success', 'failure']);
const dialog = ref(false);
const loader = ref(false);

const link = ref(props.gMapLink);

let { meta, values, errors, handleSubmit } = useForm({
    validationSchema: {
        googleMapLink(value: string) {
            if (!value) {
                return true;
            } else if (value) {
                try {
                    value.toString().split("@")[1].split(",")[0];
                    value.toString().split("@")[1].split(",")[1];
                    return true;
                } catch (error) {
                    return "Please enter Valid Google map url/link OR leave it BLANK";
                }
            } else {
                return true;
            }
        },
    },
});

const googleMapLink = useField("googleMapLink");
googleMapLink.value.value = link.value;

async function onSuccess(values: any) {
    loader.value = true;

    const res = await api?.property?.updateDetails({ 
        "propertyId": props.propertyId, 
        "updatingFields": { "googleMapLink": values.googleMapLink } 
    });

    if(res.status === 200) {
        link.value = values.googleMapLink;
        emit('success');
    }else {
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