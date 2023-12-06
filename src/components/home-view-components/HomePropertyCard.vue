<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>Enquiry request is Failed!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>
                    Enquiry request is successful!
                </h5>
            </div>
        </v-card>
    </v-expand-transition>

    <v-card class="mx-2 mb-4 elevation-2" style="max-width: 220px;" position="relative">
        <v-hover v-slot="{ isHovering, props }">
            <v-img @click="router.push(`/propertydetails/${property?.propertyId}`)" v-bind="props"
                :src="property?.image !== undefined ? property?.image?.fileUrl : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
                height="130px" width="100%" position="relative" cover class="hoverPointer">
                <v-expand-transition>
                    <div v-if="isHovering"
                        class="d-flex flex-column justify-center align-center transition-fast-in-fast-out v-card--reveal text-white"
                        style="height: 100%;background-color: #00000091;">
                        <p class="overlayText">Click Here</p>
                        <p class="overlayText">to</p>
                        <p class="overlayText">See Details</p>
                    </div>
                </v-expand-transition>
                <v-toolbar v-if="property?.title && property?.title !== 'unavailable'" class="propertyTitle" theme="dark"
                    height="30" style="background-color: rgba(0, 0, 0, 0.466);">
                    <div class="w-100 text-caption text-center px-1">
                        {{
                            property?.title ?
                            property?.title :
                            "Property title - like, Fit for home etc."
                        }}
                    </div>
                </v-toolbar>
                <v-card-title title="verified by Checked Spot" v-if="property?.isVerifiedByCheckedSpot"
                    class="px-2 py-1 verifiedTag">
                    <v-chip variant="elevated" color="green" density="comfortable">
                        Checked Spot verified <v-icon size="16" class="ml-2" icon="mdi-shield-check" color="white"></v-icon>
                    </v-chip>
                </v-card-title>
            </v-img>
        </v-hover>

        <v-sheet>
            <v-container class="pa-0">
                <v-row no-gutters>
                    <v-col cols="6" class="pa-0 pl-2 pt-2" style="height: 20px;">
                        <a target="_blank" v-if="property?.googleMapLink" :href="property?.googleMapLink">
                            <v-icon size="16" class="mt-n1 mr-2" icon="mdi-google-maps" color="grey-darken-2"></v-icon>
                            <span class="text-body-2 text-grey-darken-2" title="google map link">Location</span>
                        </a>
                    </v-col>
                    <v-col cols="12" class="pa-0">
                        <v-card-text class="px-3 pt-3 pb-0">
                            Property type: <span class="text-pink-accent-3">{{
                                property?.type ?
                                property?.type : 'Not Found' }}</span>
                        </v-card-text>
                        <v-card-subtitle v-if="property?.address" class="px-3 py-0 font-weight-regular">
                            {{ property?.address }}
                        </v-card-subtitle>
                        <v-card-subtitle v-else class="px-3 text-body-2 text-grey-lighten-1">
                            address unavailable
                        </v-card-subtitle>
                    </v-col>

                    <v-col cols="12">


                        <v-hover v-if="!isMobileDevice" v-slot="{ isHovering, props }">
                            <v-row no-gutters v-bind="props" class="cardBottom">
                                <v-row v-if="!isHovering" no-gutters
                                    class="pa-0 mx-6 my-2 d-flex justify-space-between align-center">
                                    <v-col cols="auto" class="px-0 my-1 d-flex justify-center align-center">
                                        <v-avatar class="pa-0 mr-2" :image="property?.agent?.picture" size="45"></v-avatar>
                                        <div class="text-body-2 mt-1 ml-0 text-uppercase text-center text-grey-darken-2">
                                            <p class="text-start pa-0 ma-0">{{ property?.agent?.name }}</p>
                                            <p class="text-start pa-0 ma-0">{{ property?.agent?.mobile }}</p>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-expand-transition>
                                    <div v-if="isHovering"
                                        class="d-flex justify-center align-center v-card--reveal text-h2 mb-2"
                                        style="height: 100%; width: 100%;">
                                        <v-btn variant="outlined" color="primary"
                                            @click.prevent.stop="() => { enquiryForm = !enquiryForm }">
                                            Send Enquiry
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-row>
                        </v-hover>

                        <v-row v-else no-gutters v-bind="props" class="cardBottom">
                            <v-row no-gutters class="pa-0 mx-6 my-2 d-flex justify-space-between align-center">
                                <v-col cols="auto" class="px-0 my-1 d-flex justify-center align-center">
                                    <v-avatar class="pa-0 mr-2" :image="property?.agent?.picture" size="45"></v-avatar>
                                    <div class="text-body-2 mt-1 ml-0 text-uppercase text-center text-grey-darken-2">
                                        <p class="text-start pa-0 ma-0">{{ property?.agent?.name }}</p>
                                        <p class="text-start pa-0 ma-0">{{ property?.agent?.mobile }}</p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-card>

    <v-dialog v-model="enquiryForm" transition="dialog-bottom-transition" width="auto">
        <v-card>
            <v-card-title class="pb-0">
                <span class="text-h5">Enquiry Form</span>
            </v-card-title>
            <v-card-text class="pt-0">
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="12">
                            <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value"
                                label="full name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                                label="email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value"
                                label="mobile*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="message.value.value" :error-messages="message.errorMessage.value"
                                label="enquiry message"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="blue-darken-1" variant="text" @click="handleReset">
                    Reset
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="enquiryForm = false">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="elevated" @click="handleEnquiry" :loading="enquiryloader">
                    Send Enquiry
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useField, useForm } from 'vee-validate';
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['property']);
const router = useRouter();

const property = ref(props.property);

const details = ref(navigator.userAgent);
const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = ref(regexp.test(details.value));

const dialog = ref(false);
const enquiryForm = ref(false);
const enquiryloader = ref(false);
const expandFailure = ref(false);
const expandSuccess = ref(false);


//form validation
let { meta, values, errors, handleSubmit, handleReset, defineComponentBinds } = useForm({
    validationSchema: {
        name(value: any) {
            if (value?.length >= 2) return true

            return 'Name should be at least 2 characters long.'
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
        email(value: any) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
        message(value: any) {
            return true;
        }
    }
})
const email = useField('email');
const name = useField('name');
const mobile = useField('mobile');
const message = useField('message');

async function onSuccess(values: any) {
    enquiryloader.value = true;
    const res = await api?.email?.sendEnquiry({
        propertyId: props?.property?.propertyId,
        email: values?.email,
        name: values?.name,
        mobile: values?.mobile,
        message: values?.message
    })

    if (res.status === 200) {
        // show message that the enquirey message has been forwarded
        enquiryForm.value = false;
        enquiryloader.value = false;
        expandSuccess.value = true;
    } else {
        enquiryForm.value = false;
        enquiryloader.value = false;
        expandFailure.value = true;
    }

    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 2000);
}

function onInvalidSubmit(invalidData: any) {
    console.log("meta : ", meta.value)
    console.log(invalidData?.values); // current form values
    console.log(invalidData?.errors); // a map of field names and their first error message
    console.log(invalidData?.results); // a detailed map of field names and their validation results
}

// This handles both valid and invalid submissions
const handleEnquiry = handleSubmit(onSuccess, onInvalidSubmit);

</script>

<style scoped>
.cardBottom {
    border-top: solid 1px rgb(217, 216, 216);
    height: 85px;
}
</style>