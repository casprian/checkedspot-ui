<template>
  <v-row
    no-gutters
    class="pa-5 d-block"
    style="height: 100%; overflow-y: scroll"
  >
    <!-- Lead For -->
    <p class="text-body-1 font-weight-medium px-2 mb-3">Lead For</p>
    <v-row no-gutters class="pa-0">
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-select
          v-model="leadDetails.leadFor"
          variant="outlined"
          density="comfortable"
          label="Lead For"
          :items="['builder1', 'builder2']"
        ></v-select>
      </v-col>
    </v-row>

    <!-- Basic Lead Information -->
    <p class="text-body-1 font-weight-medium px-2 mb-3">
      Basic Lead Information
    </p>
    <v-row no-gutters class="pa-0">
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
          label="name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="mobile.value.value"
          :error-messages="mobile.errorMessage.value"
          label="mobile"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="pa-0 px-2 py-1">
        <v-textarea
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.address"
          label="address"
        ></v-textarea>
      </v-col>
    </v-row>

    <!-- Lead Source and Details -->
    <p class="text-body-1 font-weight-medium px-2 mb-3">
      Lead Source and Details
    </p>
    <v-row no-gutters class="pa-0">
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadSource"
          label="Lead source"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-select
          v-model="leadDetails.leadStatus"
          variant="outlined"
          density="comfortable"
          label="Lead Status"
          :items="status"
        ></v-select>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadSourceDetail"
          label="Lead source details"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadCampaign"
          label="Lead compaign"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadSourceChannel"
          label="Lead source channel"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadSourceMedium"
          label="Lead source medium"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadSourceCampaign"
          label="Lead source campaign"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadSourceReferral"
          label="Lead source referral"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Lead Assignment and Ownership -->
    <p class="text-body-1 font-weight-medium px-2 mb-3">
      Lead Assignment and Ownership
    </p>
    <v-row no-gutters class="pa-0">
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadAssignedAgent"
          label="Lead Assigned Agent"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadOwner"
          label="Lead Owner"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 px-2 py-1">
        <v-text-field
          variant="outlined"
          density="comfortable"
          v-model="leadDetails.leadCommunicationPreference"
          label="Lead Communication Preferences"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-row>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useField, useForm } from "vee-validate";

const props = defineProps(["addLead", "editLead", "actionName"]);
const emit = defineEmits([
  "addLeadSuccess",
  "addLeadFailure",
  "editLeadSuccess",
  "editLeadFailure",
]);

//form Validation
const { handleSubmit, handleReset, meta } = useForm({
  validationSchema: {
    name(value: any) {
      if (value?.length >= 2) return true;
      return "Name should be at least 2 characters long.";
    },
    email(value: any) {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
        return true;
      }
      return "Must be a valid e-mail.";
    },
    mobile(value: any) {
      if (!value) {
        return "required";
      } else if (value) {
        if (value?.length === 10 && /[0-9-]+/.test(value)) {
          return true;
        } else if (value?.length > 10 && /[0-9-]+/.test(value)) {
          return "Phone number needs to be at exactly 10 digits.";
        } else {
          return "Phone number needs to be exactly 10 digits.";
        }
      }
    },
  },
});

const name = useField("name");
const email = useField("email");
const mobile = useField("mobile");
const status = ref(["default", "pending", "active", "sold"]);
const leadDetails = ref({
  // leadFor is the employeer example: builder
  leadFor: null,
  // basic info
  name: null,
  email: null,
  mobile: null,
  address: null,
  // lead source details
  leadSource: null,
  leadStatus: "default",
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
});

function onAddLeadSuccess() {
  // Call api and add the lead to the DB

  // onsuccess
  // emit('addLeadSuccess')
  console.log("ADDDDDDDDDDDDDDDDDDDD");
}

function onEditLeadSuccess() {
  // Call api and add the lead to the DB

  // onsuccess
  // emit('editLeadSuccess')
  console.log("EDDIIIIIIIIIIIIIIIIIIIIi");
}

function onInvalidSubmit(invalidData: any) {
  if (props.addLead) {
    emit("addLeadFailure");
  } else if (props.editLead) {
    emit("editLeadFailure");
  }
  console.log("meta : ", meta.value);
  console.log(invalidData?.values); // current form values
  console.log(invalidData?.errors); // a map of field names and their first error message
  console.log(invalidData?.results); // a detailed map of field names and their validation results
  // alert.value = true;
}

const addLeadHandler = handleSubmit(onAddLeadSuccess, onInvalidSubmit);
const editLeadHandler = handleSubmit(onEditLeadSuccess, onInvalidSubmit);

watch(
  () => props.addLead,
  (newadd, oldnewadd) => {
    addLeadHandler();
  }
);

watch(
  () => props.editLead,
  (newedit, oldedit) => {
    editLeadHandler();
  }
);

onMounted(() => {
  if (props.actionName === "editlead") {
    console.log("aslk fdjkldjf alksdj fasd : ", props.actionName);
    // Call api fetch Leda Details and autofill in the form whichever is available
  }
});
</script>

<style scoped></style>
