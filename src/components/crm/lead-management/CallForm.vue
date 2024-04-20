<template>
    <v-row no-gutters class="pa-5 d-block" style="height: 100%; overflow-y: auto;">
        <!-- Basic Lead Information -->
        <p class="text-body-1 font-weight-medium px-2 mb-3">Basic Lead Information</p>
        <v-row no-gutters class="pa-0 d-flex justify-space-between">
            <v-col cols="12" md="6" class="pa-0 px-2 py-1">
                <v-text-field disabled variant="outlined" density="comfortable" v-model="leadCallLog.name"
                    label="Lead Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 px-2 py-1">
                <v-text-field disabled variant="outlined" density="comfortable" v-model="leadCallLog.mobile"
                    label="Lead Mobile"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pa-0 px-2 py-1">
                <v-text-field disabled variant="outlined" density="comfortable" v-model="leadCallLog.email"
                    label="Lead Email"></v-text-field>
            </v-col>
        </v-row>
        <!-- Call Start Date -->
        <v-col cols="12" class="pa-0 px-2 py-1">
            <v-text-field type="date" variant="outlined" density="comfortable" v-model="startDate.value.value"
                :error-messages="startDate.errorMessage.value" label="Call Start Date"></v-text-field>
        </v-col>
        <!-- Call End Date -->
        <v-col cols="12" class="pa-0 px-2 py-1">
            <v-text-field type="date" variant="outlined" density="comfortable" v-model="endDate.value.value"
                :error-messages="endDate.errorMessage.value" label="Call End Date"></v-text-field>
        </v-col>
        <!-- Call Duration -->
        <v-col cols="12" class="pa-0 px-2 py-1">
            <v-text-field variant="outlined" density="comfortable" v-model="duration.value.value"
                :error-messages="duration.errorMessage.value" label="Call Duration"></v-text-field>
        </v-col>
        <!-- Call Note -->
        <v-col cols="12" class="pa-0 px-2 py-1">
            <v-textarea variant="outlined" density="comfortable" v-model="callNote.value.value"
                :error-messages="callNote.errorMessage.value" label="Call Note"></v-textarea>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useField, useForm } from 'vee-validate';

const props = defineProps(['leadDetails', 'callLead']);
const emit = defineEmits(['callLeadSuccess', 'callLeadFailure'])

//form Validation
let { handleSubmit, handleReset, meta } = useForm({
    validationSchema: {
        startDate(value: any) {
            if (value) {
                return true;
            }
            return 'call start date is required field.';
        },
        endDate(value: any) {
            if (value) {
                return true
            }
            return 'call start date is required field.'
        },
        duration(value: any) {
            if (value && value >= 0) {
                return true;
            } 
            return 'call duration is required field.'
        },
        callNote(value: any) {
            if (value) {
                return true;
            } 
            return "call notes is required field."
        },
    }
});

const startDate = useField('startDate');
const endDate = useField('endDate');
const duration = useField('duration');
const callNote = useField('callNote');

const leadCallLog = ref({
    name: props?.leadDetails?.name || "xyz",
    email: props?.leadDetails?.email || "xyz@gmail.com",
    mobile: props?.leadDetails?.mobile || 8767876578,
    startDate: null,
    endDate: null,
    duration: null,
    callNotes: null
})

function onSuccess() {

    // Call api and add the lead to the DB

    // onsuccess
    // emit('callLeadSuccess')
    console.log("CAAAAALLLLLLLLLLLLL")
}

function onInvalidSubmit(invalidData: any) {
    emit('callLeadFailure')
    console.log("meta : ", meta.value)
    console.log(invalidData?.values); // current form values
    console.log(invalidData?.errors); // a map of field names and their first error message
    console.log(invalidData?.results); // a detailed map of field names and their validation results
    // alert.value = true;
}

const addLeadCallLog = handleSubmit(onSuccess, onInvalidSubmit);

watch(() => props.callLead, (newcall, oldcall) => {
    addLeadCallLog();
})

</script>

<style scoped></style>