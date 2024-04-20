<template>
    <div>
        <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
                <button v-bind="props" variant="text" class="px-0 actionBtn">
                    <v-icon icon="mdi-dots-vertical"></v-icon>
                </button>
                <a :href="`tel:${props.leadMobile}`" v-if="isMobileDevice">
                    <v-btn v-if="isMobileDevice" class="ml-2" size="small" color="blue" icon="mdi-phone">
                    </v-btn>
                </a>
            </template>
            <v-list>
                <v-list-item v-for="item in actionItems" :key="item.name" :value="item.name" :active-color="'blue'"
                    @Click="handleChange(item.action)">
                    <v-list-item-title :class="`text-${item.color}`">
                        <v-icon :icon="item.icon" :color="item.iconColor" class="mr-2"></v-icon>{{ item.name }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>


        <!-- EDIT LEAD DETAILS DIALOG/MODAL -->
        <v-dialog v-model="editLeadDialog" class="dialog">
            <v-card class="rounded-lg" style="overflow: hidden;">
                <!-- Heading -->
                <v-row no-gutters class="pa-0 px-5 pt-4 pb-4" style="border-bottom: solid 1px grey;">
                    <v-col cols="10" class="pa-0 text-body-1 font-weight-medium">Edit Lead</v-col>
                    <v-col cols="2" class="pa-0 d-flex justify-end">
                        <v-btn @click="editLeadDialog = false" icon="mdi-close" size="30" variant="tonal"
                            color="red-darken-1"></v-btn>
                    </v-col>
                </v-row>

                <!-- Form -->
                <lead-form :editLead="editLead" actionName="editlead" @editLeadSuccess="editLeadSuccessHandler" @editLeadFailure="editLeadFailureHandler" />

                <!-- Action Section -->
                <v-row no-gutters class="pa-0 pa-2 d-flex justify-end align-center" style="border-top: solid 1px grey;">
                    <v-btn @click="editLeadDialog = false" color="red" variant="text"
                        class="text-none text-body-2 mr-3">Close</v-btn>
                    <v-btn @click="editLead = true" color="blue" class="text-none text-body-2">Save Changes</v-btn>
                </v-row>
            </v-card>
        </v-dialog>


        <!-- CALL Lead Dialog/Modal -->
        <v-dialog v-model="callLeadDialog" class="dialog">
            <v-card class="rounded-lg" style="overflow: hidden;">
                <!-- Heading -->
                <v-row no-gutters class="pa-0 px-5 pt-4 pb-4" style="border-bottom: solid 1px grey;">
                    <v-col cols="10" class="pa-0 text-body-1 font-weight-medium">Call Lead</v-col>
                    <v-col cols="2" class="pa-0 d-flex justify-end">
                        <v-btn @click="callLeadDialog = false" icon="mdi-close" size="30" variant="tonal"
                            color="red-darken-1"></v-btn>
                    </v-col>
                </v-row>

                <!-- Form -->
                <call-form :callLead="callLead" :leadDetails="null" @callLeadSuccess="callLeadSuccessHandler" @callLeadFailure="callLeadFailureHandler"/>

                <!-- Action Section -->
                <v-row no-gutters class="pa-0 pa-2 d-flex justify-end align-center" style="border-top: solid 1px grey;">
                    <v-btn @click="callLeadDialog = false" color="red" variant="text"
                        class="text-none text-body-2 mr-3">Close</v-btn>
                    <v-btn @click="callLead = true" color="blue" prepend-icon="mdi-phone" class="text-none text-body-2">Save Log</v-btn>
                </v-row>
            </v-card>
        </v-dialog>


        <!-- Email Lead Dialog/Modal -->
        <v-dialog v-model="emailLeadDialog" class="dialog">
            <v-card class="rounded-lg" style="overflow: hidden;">
                <!-- Heading -->
                <v-row no-gutters class="pa-0 px-5 pt-4 pb-4" style="border-bottom: solid 1px grey;">
                    <v-col cols="10" class="pa-0 text-body-1 font-weight-medium">Email Lead</v-col>
                    <v-col cols="2" class="pa-0 d-flex justify-end">
                        <v-btn @click="emailLeadDialog = false" icon="mdi-close" size="30" variant="tonal"
                            color="red-darken-1"></v-btn>
                    </v-col>
                </v-row>

                <!-- Form -->
                <email-form :emailLead="emailLead" :leadDetails="null" @emailLeadSuccess="emailLeadSuccessHandler" @emailLeadFilure="emailLeadFailureHandler" />

                <!-- Action Section -->
                <v-row no-gutters class="pa-0 pa-2 d-flex justify-end align-center" style="border-top: solid 1px grey;">
                    <v-btn @click="emailLeadDialog = false" color="red" variant="text"
                        class="text-none text-body-2 mr-3">Close</v-btn>
                    <v-btn @click="emailLead = true" color="blue" prepend-icon="mdi-email-fast-outline" class="text-none text-body-2">Save Log</v-btn>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';

const LeadForm = defineAsyncComponent(() => import('@/components/crm/lead-management/LeadForm.vue'));
const CallForm = defineAsyncComponent(() => import('@/components/crm/lead-management/CallForm.vue'));
const EmailForm = defineAsyncComponent(() => import('@/components/crm/lead-management/EmailForm.vue'));

const props = defineProps(['leadMobile'])

// Check for mobileDevice
const details = ref(navigator.userAgent);
const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = ref(regexp.test(details.value));


const router = useRouter();

const actionItems = ref([
    {
        name: "View",
        icon: "mdi-eye",
        iconColor: 'blue',
        color: 'grey-darken-1',
        action: 'view'
    },
    {
        name: "Edit",
        icon: "mdi-pencil",
        iconColor: 'grey-darken-1',
        color: 'grey-darken-1',
        action: 'edit'
    },
    {
        name: "Add Call",
        icon: "mdi-phone",
        iconColor: 'grey-darken-1',
        color: 'grey-darken-1',
        action: 'call'
    },
    {
        name: "Add Email",
        icon: "mdi-email-fast-outline",
        iconColor: 'grey-darken-1',
        color: 'grey-darken-1',
        action: 'email'
    },
    {
        name: "Delete",
        icon: "mdi-delete",
        iconColor: 'red-darken-1',
        color: 'red-darken-1',
        action: 'delete'
    },
]);
function handleChange(action: string) {
    if (action === 'edit') {
        editLeadDialog.value = true;
    } else if (action === 'call') {
        // console.log("Open Form in a modal to add Call details");
        callLeadDialog.value = true;
    } else if (action === 'email') {
        // console.log("Open Form in a modal to add Email details");
        emailLeadDialog.value = true;
    } else if (action === 'view') {
        router.push({ path: '/crm/lead', query: { id: "*" } })
    } else if (action === 'delete') {
        console.log("Open a modal to confirm the deletion of the lead");
    }
}

// Edit Lead 
const editLeadDialog = ref(false);
const editLead = ref(false);
function editLeadSuccessHandler() {
    editLeadDialog.value = false;
}
function editLeadFailureHandler() {
    editLead.value = false;
}


// Call Lead
const callLeadDialog = ref(false);
const callLead = ref(false);
function callLeadSuccessHandler() {
    callLeadDialog.value = false;
}
function callLeadFailureHandler() {
    callLead.value = false;
}

// Send Email Lead
const emailLeadDialog = ref(false);
const emailLead = ref(false);
function emailLeadSuccessHandler() {
    emailLeadDialog.value = false;
}
function emailLeadFailureHandler() {
    emailLead.value = false;
}


</script>

<style scoped>
.dialog {
  width: 50%;
}
@media screen and (max-width: 600px) {
  .dialog {
    width: 90%;
  }
}
@media screen and  (max-width: 960px) and (min-width: 600px) {
  .dialog {
    width: 75%;
  }
}

.actionBtn:hover {
  padding: 2px 5px;
  border-radius: 4px;
  background-color: #d4d4d4;
}
</style>