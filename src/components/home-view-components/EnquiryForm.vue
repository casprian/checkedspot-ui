<template>
    <v-expand-transition>
        <v-card style="position: absolute; top: 0; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center pa-4">
                <h5 style="line-height: normal;">Message delivery Failed. Please try again!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: absolute; top: 0; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h6 text-center d-flex align-center justify-center pa-4">
                <h5 style="line-height: normal;">
                    Message has been delivered. Checked Spot Team will contact you soon.
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card class="px-5 pt-3 pb-10 elevation-7 rounded-0" width="100%">
            <div class="pa-3 text-h5 font-weight-bold">Send enquiry for {{ enquiry }}</div>
            <form>
                <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value" density="comfortable"
                    class="ma-2" counter="40" label="Name*" variant="outlined"></v-text-field>

                <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value" density="comfortable"
                    class="ma-2" counter="10" label="Whatsapp Number*" variant="outlined"></v-text-field>

                <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" density="comfortable"
                    class="ma-2" counter="30" label="Email*" variant="outlined"></v-text-field>

                <small>*indicates required field</small>

                <v-sheet class="d-flex flex-column justify-center align-center">
                    <v-btn type="submit" variant="elevated" elevation="5" color="blue" width="300px" class="my-2"
                        @click.prevent="callWhatsappCloudApi">
                        Send Enquiry
                    </v-btn>
                    <v-btn @click.prevent="handleReset" elevation="4" variant="text" color="red" width="300px" class="my-2">
                        Reset Form
                    </v-btn>
                </v-sheet>
            </form>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from "vee-validate";
//@ts-ignore
import api from "@/data/api/index.js";

const props = defineProps(['enquiryFor', 'dialog'])
const enquiryMessage = ref('');
const enquiry = ref('');
const dialog = ref(false);

if (props.dialog) {
    dialog.value === true;
}

//form validation
const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value: any) {
            if (value?.length >= 2 && value?.length <= 40) {
                return true;
            }
            if (!value) {
                return "Required";
            }
            return "Name needs to be at least 2 and maximum 40 characters.";
        },
        email(value: any) {
            if (
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value) &&
                value.length <= 30
            ) {
                return true;
            }
            if (!value) {
                return "Required";
            }
            return "Must be a valid e-mail.";
        },
        mobile(value: any) {
            if (!value) {
                return "Required";
            } else if (value) {
                if (value?.length === 10 && /^\d+$/.test(value)) {
                    return true;
                } else if (value?.length > 10 && /^\d+$/.test(value)) {
                    return "Phone number needs to be at exactly 10 digits.";
                } else {
                    return "Phone number needs to be exactly 10 digits.";
                }
            }
        }
    },
});
const name = useField("name");
const email = useField("email");
const mobile = useField("mobile");

const expandSuccess = ref(false);
const expandFailure = ref(false);

if (props.enquiryFor === 'decoration') {
    enquiry.value = 'Interior Decoration Services'
} else if (props.enquiryFor === 'maintenance') {
    enquiry.value = 'Maintenance Services'
} else if (props.enquiryFor === 'legal') {
    enquiry.value = 'Legal Services'
} else if (props.enquiryFor === 'rentCollection') {
    enquiry.value = 'Rent Collection Services'
}


const callWhatsappCloudApi = handleSubmit(async (values) => {
    dialog.value = false;
    if (props.enquiryFor === 'decoration') {
        enquiryMessage.value = `Mr. ${values.name} wanted more Information About Your Interior decoration Services.`
    } else if (props.enquiryFor === 'maintenance') {
        enquiryMessage.value = `Mr. ${values.name} wanted more Information About Your Maintenance Services.`
    } else if (props.enquiryFor === 'legal') {
        enquiryMessage.value = `Mr. ${values.name} wanted more Information About Your Legal Services.`
    } else if (props.enquiryFor === 'rentCollection') {
        enquiryMessage.value = `Mr. ${values.name} wanted more Information About Your Rent Collection Services.`
    }

    api?.user
        ?.sendEnquiry({ ...values, enquiryMessage: enquiryMessage.value })
        .then((res: any) => {
            if (res?.data?.status === 200) {
                expandSuccess.value = true;
            } else {
                expandFailure.value = true;
            }
            setTimeout(() => {
                expandSuccess.value = false;
                expandFailure.value = false;
            }, 5000);
        })
        .catch((err: Error) => {
            console.log(err);
            expandFailure.value = true;
            setTimeout(() => {
                expandSuccess.value = false;
                expandFailure.value = false;
            }, 5000);
        });
});
</script>

<style scoped></style>