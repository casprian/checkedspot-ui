<template>
    <div>
        <v-btn color="pink-accent-3" variant="flat" class="text-capitalize rounded-lg" width="230"
            append-icon="mdi-arrow-right" @click="dialog = true">Talk to our Experts</v-btn>

        <v-dialog v-model="dialog" max-width="600">
            <v-card class="pa-5 dialogCard">

                <v-btn variant="text" color="pink-darken-2" icon="mdi-close-thick" class="closeDialog"
                    @click="dialog = false"></v-btn>

                <v-card-title class="pa-0 text-grey-darken-4">
                    Talk to Our Experts
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="text-body-1 py-5 text-grey-darken-2">
                    You can contact us on the given numbers, <sapn class="font-weight-medium text-grey-darken-3">Call now!
                    </sapn>
                    <ul class="px-10 mt-3 text-grey-darken-3">
                        <li>9606937470</li>
                        <li>9606937471</li>
                    </ul>
                </v-card-text>

                <div class="divider mt-5 mb-10">
                    <v-divider></v-divider>
                    <div class="circle-icon">
                        OR
                    </div>
                </div>


                <div class="pa-3 text-body-1 font-weight-medium text-grey-darken-4">Share your contact, our experts will
                    connect within 30 minutes.</div>

                <form>
                    <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value" density="comfortable"
                        class="ma-2" counter="40" label="Name*" variant="outlined"></v-text-field>

                    <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value"
                        density="comfortable" class="ma-2" counter="10" label="Whatsapp Number*"
                        variant="outlined"></v-text-field>

                    <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                        density="comfortable" class="ma-2" counter="30" label="Email*" variant="outlined"></v-text-field>

                    <small>*indicates required field</small>

                    <v-sheet class="d-flex flex-column justify-center align-center">
                        <v-btn type="submit" :loading="loader" variant="elevated" elevation="5" color="blue" width="300px"
                            class="my-2" @click.prevent="callWhatsappCloudApi">
                            Send Enquiry
                        </v-btn>
                        <v-btn @click.prevent="handleReset" elevation="4" variant="text" color="red" width="300px"
                            class="my-2">
                            Reset Form
                        </v-btn>
                    </v-sheet>
                </form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from "vee-validate";
//@ts-ignore
import api from "@/data/api/index.js";

const props = defineProps(['package']);
const emit = defineEmits(['success', 'failure']);

const dialog = ref(false);
const loader = ref(false);

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

const enquiryMessage = ref(`I want to know more about ${props.package} package.`);

const callWhatsappCloudApi = handleSubmit(async (values) => {
    dialog.value = false;
    loader.value = true;

    api?.user
        ?.sendEnquiry({ ...values, enquiryMessage: enquiryMessage.value })
        .then((res: any) => {
            if (res?.data?.status === 200) {
                loader.value = false;
                dialog.value = false;
                emit('success');
            } else {
                loader.value = false;
                emit('failure');
                dialog.value = false;
            }
        })
        .catch((err: Error) => {
            console.log(err);
            emit('failure');
        });
});

</script>

<style scoped>
.divider {
    position: relative;
}

.circle-icon {
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    font-weight: bold;
    background-color: #f5f4f4;
    color: #D81B60;
    padding: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialogCard {
    position: relative;
}

.dialogCard::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
}

.dialogCard::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
}

.dialogCard::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: linear-gradient(to top, rgb(217, 122, 157) 44%, rgb(189, 73, 117) 72%, rgb(148, 28, 78) 86%);
}

.closeDialog {
    position: absolute;
    right: 5px;
    top: 5px;
}
</style>