<template>
    <v-btn prepend-icon="mdi-plus" class="text-none text-body-1" color="blue" height="40"
        @click="dialog = !dialog">New Lead</v-btn>
        
    <v-dialog v-model="dialog" class="" width="50%">
        <v-card class="rounded-lg" style="overflow: hidden;">
            <!-- Heading -->
            <v-row no-gutters class="pa-0 px-5 pt-4 pb-4" style="border-bottom: solid 1px grey;">
                <v-col cols="10" class="pa-0 text-body-1 font-weight-medium">Add New Lead</v-col>
                <v-col cols="2" class="pa-0 d-flex justify-end">
                    <v-btn @click="dialog = false" icon="mdi-close" size="30" variant="tonal"
                        color="red-darken-1"></v-btn>
                </v-col>
            </v-row>

            <!-- Form -->
            <v-row no-gutters class="pa-5 d-block" style="height: 100%; overflow-y: scroll;">
                <!-- Basic Lead Information -->
                <p class="text-body-1 font-weight-medium px-2 mb-3">Basic Lead Information</p>
                <v-row no-gutters class="pa-0">
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="name.value.value"
                            :error-messages="name.errorMessage.value" label="name"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="email.value.value"
                            :error-messages="email.errorMessage.value" label="email"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="mobile.value.value"
                            :error-messages="mobile.errorMessage.value" label="mobile"></v-text-field>
                    </v-col>
                    <v-col cols="12" class="pa-0 px-2">
                        <v-textarea variant="outlined" density="compact" v-model="leadDetails.address"
                            label="address"></v-textarea>
                    </v-col>
                </v-row>

                <!-- Lead Source and Details -->
                <p class="text-body-1 font-weight-medium px-2 mb-3">Lead Source and Details</p>
                <v-row no-gutters class="pa-0">
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadSource"
                            label="Lead source"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-select v-model="leadDetails.leadStatus" variant="outlined" density="compact"
                            label="Lead Status" :items="status"></v-select>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadSourceDetail"
                            label="Lead source details"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadCampaign"
                            label="Lead compaign"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadSourceChannel"
                            label="Lead source channel"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadSourceMedium"
                            label="Lead source medium"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadSourceCampaign"
                            label="Lead source campaign"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadSourceReferral"
                            label="Lead source referral"></v-text-field>
                    </v-col>
                </v-row>

                <!-- Lead Assignment and Ownership -->
                <p class="text-body-1 font-weight-medium px-2 mb-3">Lead Assignment and Ownership</p>
                <v-row no-gutters class="pa-0">
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadAssignedAgent"
                            label="Lead Assigned Agent"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact" v-model="leadDetails.leadOwner"
                            label="Lead Owner"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0 px-2">
                        <v-text-field variant="outlined" density="compact"
                            v-model="leadDetails.leadCommunicationPreference"
                            label="Lead Communication Preferences"></v-text-field>
                    </v-col>
                </v-row>

            </v-row>

            <!-- Action Section -->
            <v-row no-gutters class="pa-0 pa-2 d-flex justify-end align-center" style="border-top: solid 1px grey;">
                <v-btn @click="dialog = false" color="red" variant="text"
                    class="text-none text-body-2 mr-3">Close</v-btn>
                <v-btn @click="addLeadHandler" color="blue"
                    class="text-none text-body-2">Add Lead</v-btn>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';

// const props = defineProps(['actionType']);
const emit = defineEmits(['leadAddSuccess'])

//form Validation
let { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value: any) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
                return true;
            }
            return 'Must be a valid e-mail.';
        },
        email(value: any) {
            if (!value) {
                return 'Required.'
            }
            if ((value.length < 8) || (value.length >= 8 && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value)))) {
                return 'Min 8 characters which must include atleast one lowercase, one uppercase character, one digit and one special character';
            }
            if (value.length >= 8 && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value))) {
                return true;
            }
        },
        mobile(value: any) {
            if (!value) {
                return 'required';
            } else if (value) {
                if (value?.length === 10 && /[0-9-]+/.test(value)) {
                    return true;
                } else if (value?.length > 10 && /[0-9-]+/.test(value)) {
                    return 'Phone number needs to be at exactly 10 digits.'
                } else {
                    return 'Phone number needs to be exactly 10 digits.'
                }
            }
        },
    }
})

const name = useField('name');
const email = useField('email');
const mobile = useField('mobile');
const status = ref(['default', 'pending', 'active', 'sold']);
const leadDetails = ref({
    // basic info
    name: null,
    email: null,
    mobile: null,
    address: null,
    // lead source details
    leadSource: null,
    leadStatus: 'default',
    leadCampaign: null,
    leadSourceDetail: null,
    leadSourceChannel: null,
    leadSourceMedium: null,
    leadSourceCampaign: null,
    leadSourceReferral: null,
    // Lead Assignment and ownership
    leadAssignedAgent: null,
    leadOwner: null,
    leadCommunicationPreference: null,
})

const dialog = ref(false);

function addLeadHandler() {

    // onsuccess
    // emit('leadAddSuccess')
}
</script>

<style scoped></style>