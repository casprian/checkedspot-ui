<template>
    <v-card class="mx-2 mb-4 pa-4" elevation="8" style="width: 288px;" position="relative">
        <v-hover v-if="!isMobileDevice" v-slot="{ isHovering, props }">
            <v-img @click="openPropertyDetail" v-bind="props"
                :src="property?.image !== undefined ? property?.image?.fileUrl : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
                height="197" width="100%" position="relative" cover class="hoverPointer">
                <v-expand-transition>
                    <div v-if="isHovering"
                        class="d-flex flex-column justify-center align-center transition-fast-in-fast-out v-card--reveal text-h4 font-weight-regular text-white"
                        style="height: 100%;background-color: #00000091;">
                        <p class="overlayText">Click Here</p>
                        <p class="overlayText">to</p>
                        <p class="overlayText">See Details</p>
                    </div>
                </v-expand-transition>
                <v-toolbar v-if="property?.title && property?.title !== 'unavailable'" class="propertyTitle"
                    theme="dark" height="30" style="background-color: rgba(0, 0, 0, 0.466);">
                    <div class="w-100 text-caption text-center px-1">
                        {{
            property?.title
                ? property?.title
                : "Property title - like, Fit for home etc."
        }}
                    </div>
                </v-toolbar>

                <div class="verifiedTagContainer">
                    <v-card-title title="Freehold Property" v-if="property?.isFreeHold" class="px-0 py-1">
                        <v-chip variant="elevated" color="blue-grey-lighten-5" density="comfortable">
                            Freehold
                        </v-chip>
                    </v-card-title>
                    <v-card-title title="verified by Checked Spot" v-if="property?.isVerifiedByCheckedSpot"
                        class="px-0 py-1 verifiedTag">
                        <v-btn icon="mdi-shield-check" color="green" size="small"></v-btn>
                    </v-card-title>
                </div>
            </v-img>
        </v-hover>

        <v-img v-else @click="openPropertyDetail" v-bind="props"
            :src="property?.image !== undefined ? property?.image?.fileUrl : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
            height="150" width="100%" position="relative" cover class="hoverPointer">

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

            <div class="showDetailsBtnContainer">
                <div class="d-flex flex-column flex-md-row justify-center align-center">
                    <v-btn density="compact" variant="elevated" class="text-none text-caption my-1"
                        color="pink-darken-3" append-icon="mdi-cursor-default-click">For details. Click here!</v-btn>
                </div>
            </div>

            <div class="verifiedTagContainer">
                <v-card-title title="Freehold Property" v-if="property?.isFreeHold" class="px-0 py-1">
                    <v-chip variant="elevated" color="blue-grey-lighten-5" density="comfortable">
                        Freehold
                    </v-chip>
                </v-card-title>
                <v-card-title title="verified by Checked Spot" v-if="property?.isVerifiedByCheckedSpot"
                    class="px-0 py-1 verifiedTag">
                    <v-btn icon="mdi-shield-check" color="green" size="small"></v-btn>
                </v-card-title>
            </div>
        </v-img>
        <!--            
             <v-col cols="6" class="pa-0 pl-2 mb-1" style="height: 20px;">
                <a target="_blank" v-if="property?.googleMapLink" :href="property?.googleMapLink">
                    <v-icon size="16" class="mt-n1 mr-2" icon="mdi-google-maps" color="grey-darken-2"></v-icon>
                    <span class="text-body-2 text-grey-darken-2" title="google map link">Location</span>
                </a>
            </v-col>
        -->
        <!-- Property Details -->
        <v-row no-gutters class="mt-1">
            <v-col cols="12" class="pa-0 mt-2">
                <v-card-text class="propType pa-0 font-weight-medium">
                    Property type:
                    <span class="text-pink-accent-3 font-weight-regular">
                        {{
            property?.type ?
                property?.type :
                'Not Found'
        }}
                    </span>
                </v-card-text>

                <!-- Location -->
                <v-card-text v-if="property?.address" class="address pa-0 font-weight-medium">
                    Location:
                    <span class="font-weight-regular" :title="property?.address">
                        {{ property?.address }}
                    </span>
                </v-card-text>
                <v-card-text v-else class="unavailable pa-0 text-body-2 text-grey-darken-1">
                    Location: unavailable
                </v-card-text>

                <!-- agent Name -->
                <v-card-text v-if="property?.agent?.name" class="name pa-0 font-weight-medium">
                    Name:
                    <span class="font-weight-regular" :title="property?.agent?.name">
                        {{ property?.agent?.name }}
                    </span>
                </v-card-text>
                <v-card-text v-else class="unavailable pa-0 text-body-2 text-grey-darken-1">
                    Name: unavailable
                </v-card-text>

                <!-- Agent Mobile -->
                <v-card-text v-if="property?.agent?.mobile" class="mobile pa-0 font-weight-medium">
                    Mobile:
                    <span class="font-weight-regular" :title="property?.agent?.mobile">
                        {{ property?.agent?.mobile }}</span>
                </v-card-text>
                <v-card-text v-else class="unavailable pa-0 text-body-2 text-grey-darken-1">
                    Mobile: unavailable
                </v-card-text>

                <v-card-actions class="sendEnquiry">
                    <v-btn block variant="outlined" color="#C2185B"
                        @click.prevent.stop="() => { enquiryForm = !enquiryForm }">Send Enquiry</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>

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
                    <div class="text-caption">*indicates required field</div>
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
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useField, useForm } from 'vee-validate';
//@ts-ignore
import api from '@/data/api/index.js';

const emit = defineEmits(['success', 'failure']);
const props = defineProps(['property']);
const router = useRouter();

const property = ref(props.property);

const details = ref(navigator.userAgent);
const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = ref(regexp.test(details.value));

const dialog = ref(false);
const enquiryForm = ref(false);
const enquiryloader = ref(false);


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

function openPropertyDetail() {
    router.push({ path: `/propertydetails/${props?.property?.propertyId}` })
}


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
        emit('success');
    } else {
        enquiryForm.value = false;
        enquiryloader.value = false;
        emit('failure');
    }
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
.verifiedTagContainer {
    width: 100%;
    padding: 0 10px;
    position: absolute;
    top: 30px;
    display: flex;
    justify-content: space-between;
}

.verifiedTag {
    position: absolute;
    right: 10px;
}

.hoverPointer {
    border-radius: 4px;
}

.hoverPointer:hover {
    cursor: pointer;
}

.showDetailsBtnContainer {
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
}

.overlayText {
    margin: 0;
    line-height: normal;
    font-size: 20px;
}

.propType,
.address,
.name,
.mobile,
.unavailable {
    margin-top: 10px;
    font-size: 15px;
}

.address,
.name,
.mobile {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sendEnquiry button {
    margin-top: 10px;
}

.cardBottom {
    height: 60px;
}

a {
    text-decoration: none !important;
}

a:hover {
    text-decoration: underline !important;
}
</style>