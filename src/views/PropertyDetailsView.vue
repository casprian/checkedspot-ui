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
    <v-container fluid class="pa-0 pt-10 px-4 bg-background">
        <v-row v-if="count < 1" no-gutters class="d-flex justify-center align-center" style="height: calc(100% - 64px);">
            <v-col cols="4">
                <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
            </v-col>
        </v-row>

        <v-row v-else no-gutters class="px-sm-10">
            <v-col cols="12" md="8" class="pr-0 pr-md-3">
                <v-row no-gutters class="mb-10">
                    <v-col cols="12" sm="9">
                        <div class="d-flex justify-space-between align-center justify-sm-start">
                            <div class="text-h6 text-sm-h5 font-weight-medium">
                                Checked Spot Property
                            </div>
                            <div v-if="property?.data">
                                <v-btn v-if="property?.data.propertyStatus" variant="flat" color="pink-accent-3"
                                    density="comfortable" class="rounded-pill ml-6">
                                    {{
                                        property?.data?.propertyStatus
                                        ? `${property?.data?.propertyStatus}`
                                        : "sale"
                                    }}
                                </v-btn>
                            </div>
                        </div>
                        <div class="py-2">
                            <v-icon size="15" class="mt-n1 mr-2" icon="mdi-map-marker" color="grey-darken-2"></v-icon>
                            <span class="text-body-1 text-md-h6 font-weight-regular text-grey-darken-2">{{
                                property?.data?.city
                                ? `${property?.data?.city}`
                                : 'Not Found'
                            }}</span>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="3" class="d-flex flex-column align-start align-sm-end">
                        <div class="text-h6 text-md-h5 font-weight-medium text-pink-accent-3">
                            {{ property?.data?.cost ? `₹ ${property?.data?.cost < 10000000 ? `${(property?.data?.cost /
                                100000.0).toFixed(2)} Lac` : `${(property?.data?.cost / 10000000.0).toFixed(2)} Cr`}` : ''
                            }} </div>
                                <div class="text-body-1 text-md-h6 font-weight-regular text-black">
                                    {{ costPerSqFt ? `₹ ${costPerSqFt} / sq ft` : '' }}
                                </div>
                    </v-col>
                </v-row>

                <!-- Gallery -->
                <v-row no-gutters class="mb-8" style="width: 100%; height: auto;">
                    <property-image :propertyId="property?.data?.propertyId" :image="property?.data?.image?.fileUrl" />
                </v-row>

                <!-- Description -->
                <v-row no-gutters class="mb-8" style="width: 100%; height: auto;">
                    <property-description :description="property?.data?.description" />
                </v-row>

                <!-- Document -->
                <v-row no-gutters class="mb-8" style="width: 100%; height: auto;">
                    <property-documents :propertyId="property?.data?.propertyId" />
                </v-row>

                <!-- Location -->
                <v-row v-if="property?.data?.longitude && property?.data?.latitude" no-gutters class="mb-8">
                    <property-location-map :latitude="property?.data?.latitude" :longitude="property?.data?.longitude" />
                </v-row>

                <!-- Property Videos -->
                <v-row no-gutters class="mb-8">
                    <property-video :propertyId="property?.data?.propertyId" :videosExist="property?.data?.videosExist" />
                </v-row>
            </v-col>

            <v-col cols="12" md="4" class="pl-0 pl-md-3">
                <v-row no-gutters>
                    <v-col cols="12" class="pb-5 d-flex justify-center align-center">
                        <v-btn variant="elevated" block color="primary"
                            @click.prevent.stop="() => { enquiryForm = !enquiryForm }">
                            Send Enquiry
                        </v-btn>
                        <v-dialog v-model="enquiryForm" transition="dialog-bottom-transition" width="auto">
                            <v-card>
                                <v-card-title class="pb-0 pt-5">
                                    <span class="text-h5 px-6">Enquiry Form</span>
                                </v-card-title>
                                <v-card-text class="pt-0">
                                    <v-container>
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <v-text-field v-model="name.value.value"
                                                    :error-messages="name.errorMessage.value" label="full name*"
                                                    required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="email.value.value"
                                                    :error-messages="email.errorMessage.value" label="email*"
                                                    required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="mobile.value.value"
                                                    :error-messages="mobile.errorMessage.value" label="mobile*"
                                                    required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="message.value.value"
                                                    :error-messages="message.errorMessage.value"
                                                    label="enquiry message"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <small class="px-6">*indicates required field</small>
                                </v-card-text>

                                <v-card-actions class="pa-6">
                                    <v-spacer></v-spacer>

                                    <v-btn color="blue-darken-1" variant="text" @click="handleReset">
                                        Reset
                                    </v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="enquiryForm = false">
                                        Close
                                    </v-btn>
                                    <v-btn color="blue-darken-1" variant="elevated" @click="handleEnquiry"
                                        :loading="enquiryloader">
                                        Send Enquiry
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-col>
                    <v-col v-if="isSold === true" cols="12">
                        <v-card class="rounded-0" elevation="2">
                            <v-card-item>
                                <div class="text-h3 font-weight-regular pa-10 bg-yellow">Property is Sold!</div>
                            </v-card-item>
                        </v-card>
                    </v-col>

                    <!-- PROPERTY aGENTS -->
                    <v-col v-else cols="12 pb-0">
                        <property-agents :propertyId="property?.data?.propertyId" />
                    </v-col>

                    <!-- Property Details -->
                    <v-col cols="12" class="mt-4 mb-8">
                        <v-card class="rounded-0" elevation="2">
                            <property-details :details="property?.data" />
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from '@/data/api/index.js';
import { onMounted, reactive, ref } from "vue";
import { useField, useForm } from 'vee-validate';
import { useRoute, useRouter } from "vue-router";
import { defineAsyncComponent } from 'vue';

const PropertyDetails = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyDetails.vue'))
const PropertyVideo = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyVideo.vue'))
const PropertyImage = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyImage.vue'))
const PropertyDocuments = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyDocuments.vue'))
const PropertyAgents = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyAgents.vue'))
const PropertyLocationMap = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyLocationMap.vue'))
const PropertyDescription = defineAsyncComponent(() => import('@/components/property-details-view-components/PropertyDescription.vue'))

const route = useRoute();
const router = useRouter();
const isSold = ref(false);
const costPerSqFt = ref(0);
const count = ref(0);
const enquiryForm = ref(false);
const enquiryloader = ref(false);
const expandSuccess = ref(false);
const expandFailure = ref(false);

const property = reactive({
    data: {
        'propertyId': null,
        'type': null,
        'wifi': null,
        'swimmingPool': null,
        'propertyStatus': [''],
        'laundryRoom': null,
        'city': null,
        'tvCable': null,
        'cost': null,
        'noOfBedroom': null,
        'dishWasher': null,
        'elevator': null,
        'airConditioning': null,
        'refrigerator': null,
        'yearOfBuilt': null,
        'noOfBathroom': null,
        'email': null,
        'description': null,
        'image': { fileUrl: "" },
        'videosExist': null,
        'documentsExist': null,
        'address': null,
        'name': null,
        'parkingLot': null,
        'longitude': null,
        'latitude': null,
    },
});


async function propertydata() {
    let res;

    if (route?.query?.isPrivate && route?.params?.propertyId) {
        res = await api?.property?.getUserProperty({
            params: {
                propertyId: route?.params?.propertyId,
            },
        })
    } else if (route?.params?.propertyId) {
        res = await api?.property?.getProperty({
            params: {
                propertyId: route?.params?.propertyId,
            },
        })
    }

    if (res?.status === 200) {
        count.value++;
        property.data = res?.data;
        costPerSqFt.value = res?.data?.totalArea !== 0 ? Math.ceil(res?.data?.cost / res?.data?.totalArea) : 0;
        //@ts-ignore
        isSold.value = property?.data?.propertyStatus?.includes("sold");
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

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
        propertyId: route?.params?.propertyId,
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


onMounted(async () => {
    await propertydata();
});
</script>

<style scoped></style>