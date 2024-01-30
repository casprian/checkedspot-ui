<template>
    <v-container v-if="isAllowed" class="pa-0">
        <v-row no-gutters class="">
            <v-col cols="12" sm="6" class="px-4">
                <v-row no-gutters>
                    <v-col cols="12" class="py-5 text-h5 font-weight-medium">
                        Capture Lead
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value"
                            label="Enter lead's full name"></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value"
                            label="Enter lead's mobile number"></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" label="Enter lead's email"></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <v-select :items="items" v-model="leadFor"
                            hint="Enter the company name for which you are collecting this lead(Checked Spot)"
                            label="Lead for" persistent-hint></v-select>
                    </v-col>

                    <v-col cols="12">
                        <v-text-field v-model="leadSource" label="Lead source"></v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <v-text-field v-model="otherDetails" label="Other details"></v-text-field>
                    </v-col>

                    <v-col cols="12" class="mt-3 mb-8 d-flex justify-center">
                        <v-btn :loading="loader" width="250" color="pink-darken-2" @click.prevent="addLead">Submit</v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider class="border-opacity-75 d-none d-sm-block" :thickness="1" :vertical="true"></v-divider>
            <v-col cols="12" sm="6" class="px-4">
                <v-row no-gutters>
                    <v-col cols="12" class="py-5 text-h5 font-weight-medium">
                        Leads
                    </v-col>
                    <v-col v-if="isDataFetched" cols="12">
                        <v-table class="mb-8">
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Name
                                    </th>
                                    <th class="text-left">
                                        Mobile
                                    </th>
                                    <th class="text-left">
                                        View Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="lead in leads" :key="lead._id">
                                    <td>{{ lead.name }}</td>
                                    <td>{{ lead.mobile }}</td>
                                    <td>
                                        <router-link :to="`/lead-detail?leadId=${lead._id}`">
                                            <v-btn density="compact" color="grey" variant="flat">View Details</v-btn>
                                        </router-link> 
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-col>
                    
                    <div v-else class="d-flex justify-center align-center" style="width: 100%; height: 200px;">
                        <div style="width: 40%;">
                            <v-progress-linear color="pink-accent-3" indeterminate rounded height="10" widht="200"></v-progress-linear>
                        </div>
                    </div>

                    <div v-if="errorOccured" class="d-flex justify-center align-center" style="width: 100%; height: 100px;">
                        <div class="text-h5 font-weight-medium text-red-darken-2">Failed to load Data.</div>
                    </div>
                    
                    
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <v-dialog v-model="alert" width="auto">
      <v-card append-icon="$close" class="mx-auto" elevation="16" max-width="500">
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="alert = false"></v-btn>
        </template>
        <template v-slot:title>
          <div class="text-h4 font-weight-bold">Warning</div>
        </template>

        <v-divider></v-divider>

        <div class="pa-10 text-center">
          <v-icon class="mb-6" color="amber" icon="mdi-alert" size="100"></v-icon>

          <div v-if="failedLeadAddition" class="text-h5 text-red">Lead add Failed !!!</div>
          <div v-else class="text-h5">Please fill all the required Fields inorder to post the property !!!</div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
            @click="alert = false">
            Close
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { useField, useForm } from "vee-validate";
import { onMounted, ref } from "vue";
import { useCookies } from "vue3-cookies";
import jwtDecode from "jwt-decode";
import { useRouter } from "vue-router";
//@ts-ignore
import api from '@/data/api/index.js'


const isDataFetched = ref(false);
const errorOccured = ref(false);
const failedLeadAddition = ref(false);
const isAllowed = ref(false);
const router = useRouter();
const { cookies } = useCookies();

const loader = ref(false)
const alert = ref(false);
const leads = ref([
    {
        _id: '',
        name: "",
        mobile: "",
    }
])

const leadFor = ref('checked spot');
const items = ref(['checked spot']);
const leadSource = ref('');
const otherDetails = ref('');

const { meta, errors, handleSubmit, handleReset } = useForm({
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
            if(!value) {
                return true;
            } else {
                if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return true

                return 'Must be a valid e-mail.'
            }
        },
    }
});
const email = useField('email');
const name = useField('name');
const mobile = useField('mobile');


async function getAllLeads(leadFor: string) {
    failedLeadAddition.value = false;
    alert.value = false;
    errorOccured.value = false;
    isDataFetched.value = false;

    const res = await api?.lead?.getLeads({ params: { leadFor: leadFor } });

    if (res?.status === 200) {
        leads.value = res?.data?.data;
        isDataFetched.value = true;
    } else {
        errorOccured.value = true;
    }
}

async function postLead(lead: Object) {
    failedLeadAddition.value = false;
    alert.value = false;
    loader.value = true;
    const res = await api?.lead?.addLead(lead);

    if (res?.status === 200) {
        loader.value = false;
        await getAllLeads('checked spot');
        handleReset();
    } else {
        alert.value = true;
        failedLeadAddition.value = true;
        loader.value = false;
    }
}

async function onSuccess(values: any) {
    const lead = {
        ...values,
        leadFor: leadFor.value,
        leadSource: leadSource.value,
        otherDetails: otherDetails.value
    }

    await postLead(lead);
}

function onInvalidSubmit(invalidData: any) {
    console.log("meta : ", meta.value)
    console.log(invalidData?.values); // current form values
    console.log(invalidData?.errors); // a map of field names and their first error message
    console.log(invalidData?.results); // a detailed map of field names and their validation results
    alert.value = true;
}


// This handles both valid and invalid submissions
const addLead = handleSubmit(onSuccess, onInvalidSubmit);


onMounted(async () => {
    if (cookies.get('token')) {
        const jwt = cookies?.get("token")?.split("Bearer ")[1];

        //@ts-ignore
        if (jwtDecode(jwt)?.userData?.roles?.includes("management")) {
            isAllowed.value = true;
        } else {
            isAllowed.value = false;
            router.back();
        }
    } else {
        router.back();
    }

    await getAllLeads("checked spot");
})

</script>

<style scoped></style>