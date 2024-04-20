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

        <!-- Email Subject -->
        <v-col cols="12" class="pa-0 px-2 py-1">
            <v-text-field variant="outlined" density="comfortable" v-model="subject.value.value"
                :error-messages="subject.errorMessage.value" label="Email Subject"></v-text-field>
        </v-col>
        <!-- Call Start Date -->
        <v-col cols="12" class="pa-0 px-2 py-1">
            <v-text-field type="date" variant="outlined" density="comfortable" v-model="startDate.value.value"
                :error-messages="startDate.errorMessage.value" label="Start Date"></v-text-field>
        </v-col>
        <!-- Call End Date -->
        <v-col cols="12" class="pa-0 px-2 py-1">
            <v-text-field type="date" variant="outlined" density="comfortable" v-model="endDate.value.value"
                :error-messages="endDate.errorMessage.value" label="End Date"></v-text-field>
        </v-col>
        <!-- Call Note -->
        <v-col cols="12" class="pa-0 px-2 py-1">
            <v-textarea variant="outlined" density="comfortable" v-model="message.value.value"
                :error-messages="message.errorMessage.value" label="email message"></v-textarea>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useField, useForm } from 'vee-validate';

const props = defineProps(['leadDetails', 'emailLead']);
const emit = defineEmits(['emailLeadSuccess', 'emailLeadFilure'])

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
        subject(value: any) {
            if (value) {
                return true;
            } 
            return 'email subject is required field.'
        },
        message(value: any) {
            if (value) {
                return true;
            } 
            return "email message is required field."
        },
    }
});

const startDate = useField('startDate');
const endDate = useField('endDate');
const subject = useField('subject');
const message = useField('message');

const leadCallLog = ref({
    name: props?.leadDetails?.name || "xyz",
    email: props?.leadDetails?.email || "xyz@gmail.com",
    mobile: props?.leadDetails?.mobile || 8767876578,
    startDate: null,
    endDate: null,
    subject: null,
    message: null
})

function onSuccess() {

    // Call api and add the lead to the DB

    // onsuccess
    // emit('emailLeadSuccess')
    console.log("EMAILLLLLLLLLLLLLLLLLLlll")
}

function onInvalidSubmit(invalidData: any) {
    emit('emailLeadFilure')
    console.log("meta : ", meta.value)
    console.log(invalidData?.values); // current form values
    console.log(invalidData?.errors); // a map of field names and their first error message
    console.log(invalidData?.results); // a detailed map of field names and their validation results
    // alert.value = true;
}

const addLeadEmailLog = handleSubmit(onSuccess, onInvalidSubmit);

watch(() => props.emailLead, (newcall, oldcall) => {
    addLeadEmailLog();
})

</script>

<style scoped></style>