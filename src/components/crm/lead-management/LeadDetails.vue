<template>
  <v-row no-gutters class="pa-0 ma-0 pa-5">
    <!--  -->
    <v-col
      cols="12"
      class="d-flex justify-space-between"
      style="border-bottom: solid grey 1px"
    >
      <v-tabs v-model="tab" align-tabs="center" color="blue-accent-4">
        <v-tab value="info" class="text-none text-body-1">Information</v-tab>
        <v-tab value="status" class="text-none text-body-1">Status</v-tab>
        <v-tab value="activity" class="text-none text-body-1">Activity</v-tab>
      </v-tabs>
      <div>
        <v-btn
          @click="router.back()"
          variant="outlined"
          color="blue"
          prepend-icon="mdi-arrow-left"
          >Back</v-btn
        >
      </div>
    </v-col>
    <!--  -->
    <v-col cols="12">
      <v-window v-model="tab">
        <!-- LEAD INFORMATION WINDOW -->
        <v-window-item value="info">
          <v-row class="d-flex justify-end align-center mt-5 pr-4">
            <v-btn
              @click="editLeadDialog = true"
              class="text-none text-body-1"
              prepend-icon="mdi-pencil"
              >Edit Details</v-btn
            >
          </v-row>

          <v-row no-gutters class="pa-0 mt-7 px-5">
            <v-col cols="12" sm="6" class="pa-2">
              <v-card class="rounded-lg pa-4">
                <p class="cardHeading text-body-1 font-weight-medium">
                  Basic Lead Information
                </p>
                <v-row no-gutters class="pa-0 mt-4">
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Name:
                    <p class="text-body-2 font-weight-regular">{{ "ABS" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Email:
                    <p class="text-body-2 font-weight-regular">
                      {{ "abs@gmail.com" }}
                    </p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Mobile:
                    <p class="text-body-2 font-weight-regular">
                      {{ "8756857654" }}
                    </p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Address:
                    <p class="text-body-2 font-weight-regular">
                      {{ "lead address, adsdas, asd, 213134" }}
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" class="pa-2">
              <v-card class="rounded-lg pa-4">
                <p class="cardHeading text-body-1 font-weight-medium">
                  Lead Assignment and Ownership
                </p>
                <v-row no-gutters class="pa-0 mt-4">
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Owner:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Assigned Agent:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Communication Preferences:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" class="pa-2">
              <v-card class="rounded-lg pa-4">
                <p class="cardHeading text-body-1 font-weight-medium">
                  Lead Source and Details
                </p>
                <v-row no-gutters class="pa-0 mt-4">
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Source:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Status:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Source Details:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Campaign:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Source Channel:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Source Medium:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Source Campaign:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Source Referral:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" class="pa-2">
              <v-card class="rounded-lg pa-4">
                <p class="cardHeading text-body-1 font-weight-medium">
                  Lead Scoring and Nurturing
                </p>
                <v-row no-gutters class="pa-0 mt-4">
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Score:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Nurturing Workflow:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Engagement Level:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Conversion Rate::
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Nurturing Stage:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                  <v-col cols="6" class="py-2 text-body-2 font-weight-medium">
                    Lead Next Action:
                    <p class="text-body-2 font-weight-regular">{{ "N/A" }}</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <!-- EDIT LEAD DETAILS DIALOG/MODAL -->
          <v-dialog v-model="editLeadDialog" class="dialog">
            <v-card class="rounded-lg" style="overflow: hidden">
              <!-- Heading -->
              <v-row
                no-gutters
                class="pa-0 px-5 pt-4 pb-4"
                style="border-bottom: solid 1px grey"
              >
                <v-col cols="10" class="pa-0 text-body-1 font-weight-medium"
                  >Edit Lead</v-col
                >
                <v-col cols="2" class="pa-0 d-flex justify-end">
                  <v-btn
                    @click="editLeadDialog = false"
                    icon="mdi-close"
                    size="30"
                    variant="tonal"
                    color="red-darken-1"
                  ></v-btn>
                </v-col>
              </v-row>

              <!-- Form -->
              <lead-form
                :editLead="editLead"
                actionName="editlead"
                @editLeadSuccess="editLeadSuccessHandler"
                @editLeadFailure="editLeadFailureHandler"
              />

              <!-- Action Section -->
              <v-row
                no-gutters
                class="pa-0 pa-2 d-flex justify-end align-center"
                style="border-top: solid 1px grey"
              >
                <v-btn
                  @click="editLeadDialog = false"
                  color="red"
                  variant="text"
                  class="text-none text-body-2 mr-3"
                  >Close</v-btn
                >
                <v-btn
                  @click="editLead = true"
                  color="blue"
                  class="text-none text-body-2"
                  >Save Changes</v-btn
                >
              </v-row>
            </v-card>
          </v-dialog>
        </v-window-item>

        <!-- Lead Status -->
        <v-window-item value="status">
          <v-row no-gutters class="pa-0 mt-7">
            <!-- Lead Score -->
            <v-col cols="12" sm="6" lg="4" class="pa-2">
              <v-card
                min-width="100%"
                height="180"
                class="relative rounded-xl pa-4 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  class="editBtn"
                  icon="mdi-pencil"
                  variant="text"
                  @click="leadScore = true"
                ></v-btn>
                <v-dialog v-model="leadScore" width="50%">
                  <v-card class="pa-10 text-center rounded-lg">Lead Score</v-card>
                </v-dialog>

                <div class="d-flex justify-center align-start">
                  <span class="text-h3">0</span>
                </div>
                <div class="text-h6 text-center">Lead Score</div>
              </v-card>
            </v-col>

            <!-- Lead Conversion Rate -->
            <v-col cols="12" sm="6" lg="4" class="pa-2">
              <v-card
                min-width="100%"
                height="180"
                class="relative rounded-xl pa-4 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  class="editBtn"
                  icon="mdi-pencil"
                  variant="text"
                  @click="leadConversionRate = true"
                ></v-btn>
                <v-dialog v-model="leadConversionRate" width="50%">
                  <v-card class="pa-10 text-center rounded-lg">Lead Conversion Rate</v-card>
                </v-dialog>

                <div class="d-flex justify-center align-start">
                  <span class="text-h3">0</span>
                </div>
                <div class="text-h6 text-center">Lead Conversion<br />Rate</div>
              </v-card>
            </v-col>

            <!-- Lead Engagement Level -->
            <v-col cols="12" sm="6" lg="4" class="pa-2">
              <v-card
                min-width="100%"
                height="180"
                class="relative rounded-xl pa-4 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  class="editBtn"
                  icon="mdi-pencil"
                  variant="text"
                  @click="leadEngagementLevel = true"
                ></v-btn>
                <v-dialog v-model="leadEngagementLevel" width="50%">
                  <v-card class="pa-10 text-center rounded-lg">Lead Engagement Level</v-card>
                </v-dialog>

                <div class="d-flex justify-center align-start">
                  <span class="text-h3">0</span>
                </div>
                <div class="text-h6 text-center">
                  Lead Engagement<br />Level
                </div>
              </v-card>
            </v-col>

            <!-- Lead Nurturing Stage -->
            <v-col cols="12" sm="6" lg="4" class="pa-2">
              <v-card
                min-width="100%"
                height="180"
                class="relative rounded-xl pa-4 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  class="editBtn"
                  icon="mdi-pencil"
                  variant="text"
                  @click="leadNurturingStage = true"
                ></v-btn>
                <v-dialog v-model="leadNurturingStage" width="50%">
                  <v-card class="pa-10 text-center rounded-lg">Lead Nurturing</v-card>
                </v-dialog>

                <div class="d-flex justify-center align-start">
                  <span class="text-h3">0</span>
                </div>
                <div class="text-h6 text-center">Lead Nurturing<br />Stage</div>
              </v-card>
            </v-col>

            <!-- Lead Nurturing Workflow -->
            <v-col cols="12" class="pa-2">
              <v-card
                min-width="100%"
                height="180"
                class="relative rounded-xl pa-4 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  class="editBtn"
                  icon="mdi-pencil"
                  variant="text"
                  @click="leadNurturingWorkflow = true"
                ></v-btn>
                <v-dialog v-model="leadNurturingWorkflow" width="50%">
                  <v-card class="pa-10 text-center rounded-lg">Lead Nurturing Workflow</v-card>
                </v-dialog>

                <div class="d-flex justify-center align-start">
                  <span class="text-h3">0</span>
                </div>
                <div class="text-h6 text-center">
                  Lead Nurturing<br />Workflow
                </div>
              </v-card>
            </v-col>

            <!-- Lead Next Action -->
            <v-col cols="12" class="pa-2">
              <v-card
                min-width="100%"
                height="180"
                class="relative rounded-xl pa-4 d-flex flex-column justify-center align-center"
              >
                <v-btn
                  class="editBtn"
                  icon="mdi-pencil"
                  variant="text"
                  @click="leadNextAction = true"
                ></v-btn>
                <v-dialog v-model="leadNextAction" width="50%">
                  <v-card class="pa-10 text-center rounded-lg">Lead Next Action</v-card>
                </v-dialog>

                <div class="d-flex justify-center align-start">
                  <span class="text-h3">0</span>
                </div>
                <div class="text-h6 text-center">Lead Next<br />Action</div>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- Activity WINDOW -->
        <v-window-item value="activity">
          <v-row no-gutters class="pa-0 mt-7 px-5">
            <v-col
              cols="12"
              class="text-h6 font-weight-medium"
              style="border-bottom: solid 1px black"
            >
              Communication
            </v-col>

            <v-col cols="12" sm="6" class="pa-2">
              <v-card class="rounded-lg pa-4" min-height="230">
                <div class="mb-5 d-flex justify-space-between align-center">
                  <p class="text-body-1 font-weight-medium">Email ({{ 0 }})</p>
                  <v-btn
                    variant="outlined"
                    color="blue"
                    prepend-icon="mdi-email-fast-outline"
                    class="text-none"
                    >Send Email</v-btn
                  >
                </div>

                <div>
                  <!-- DATA -->
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" class="pa-2">
              <v-card class="rounded-lg pa-4" min-height="230">
                <div class="mb-5 d-flex justify-space-between align-center">
                  <p class="text-body-1 font-weight-medium">Call ({{ 0 }})</p>
                  <v-btn
                    variant="outlined"
                    color="blue"
                    prepend-icon="mdi-phone"
                    class="text-none"
                    >Call</v-btn
                  >
                </div>

                <div>
                  <!-- DATA -->
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" class="pa-2">
              <v-card class="rounded-lg pa-4" min-height="230">
                <div class="mb-5 d-flex justify-space-between align-center">
                  <p class="text-body-1 font-weight-medium">Task ({{ 0 }})</p>
                  <v-btn
                    variant="outlined"
                    color="blue"
                    prepend-icon="mdi-plus"
                    class="text-none"
                    >Create Task</v-btn
                  >
                </div>

                <div>
                  <!-- DATA -->
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" class="pa-2">
              <v-card class="rounded-lg pa-4" min-height="230">
                <div class="mb-5 d-flex justify-space-between align-center">
                  <p class="text-body-1 font-weight-medium">
                    Meeting ({{ 0 }})
                  </p>
                  <v-btn
                    variant="outlined"
                    color="blue"
                    prepend-icon="mdi-laptop-account"
                    class="text-none"
                    >Add Meeting</v-btn
                  >
                </div>

                <div>
                  <!-- DATA -->
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
const LeadForm = defineAsyncComponent(
  () => import("@/components/crm/lead-management/LeadForm.vue")
);

const router = useRouter();
const tab = ref(1);

// Edit Lead
const editLeadDialog = ref(false);
const editLead = ref(false);
function editLeadSuccessHandler() {
  editLeadDialog.value = false;
}
function editLeadFailureHandler() {
  editLead.value = false;
}

const leadScore = ref(false);
const leadNurturingWorkflow = ref(false);
const leadEngagementLevel = ref(false);
const leadConversionRate = ref(false);
const leadNurturingStage = ref(false);
const leadNextAction = ref(false);
const details = ref([
  {
    name: "Total Leads",
    bgColor: "grey",
    doalog: false,
    leads: 10000,
  },
  {
    name: "Total Tasks",
    bgColor: "blue",
    doalog: false,
    leads: 10,
  },
  {
    name: "Total Contacts",
    bgColor: "red",
    doalog: false,
    leads: 100,
  },
  {
    name: "Total Properties",
    bgColor: "black",
    doalog: false,
    leads: 50,
  },
  {
    name: "Total Properties",
    bgColor: "black",
    doalog: false,
    leads: 50,
  },
  {
    name: "Total Properties",
    bgColor: "black",
    doalog: false,
    leads: 50,
  },
]);
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
@media screen and (max-width: 960px) and (min-width: 600px) {
  .dialog {
    width: 75%;
  }
}

.editBtn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.cardHeading {
  padding-bottom: 5px;
  border-bottom: solid grey 1px;
}
</style>