<template>
  <v-row no-gutters class="px-4 px-md-12 py-4 py-md-6">
    <!-- Heads section -->
    <v-col cols="12" class="d-flex justify-space-between align-center">
      <p class="text-h6">Lead-Management</p>

      <!-- ADD lead BUTTON and Model/Dialog box -->
      <div>
        <v-btn
          prepend-icon="mdi-plus"
          class="text-none text-body-1"
          color="blue"
          height="40"
          @click="addLeadDialog = !addLeadDialog"
          >New Lead</v-btn
        >

        <v-dialog v-model="addLeadDialog" class="addDialog">
          <v-card class="rounded-lg" style="overflow: hidden">
            <!-- Heading -->
            <v-row
              no-gutters
              class="pa-0 px-5 pt-4 pb-4"
              style="border-bottom: solid 1px grey"
            >
              <v-col cols="10" class="pa-0 text-body-1 font-weight-medium"
                >Add New Lead</v-col
              >
              <v-col cols="2" class="pa-0 d-flex justify-end">
                <v-btn
                  @click="addLeadDialog = false"
                  icon="mdi-close"
                  size="30"
                  variant="tonal"
                  color="red-darken-1"
                ></v-btn>
              </v-col>
            </v-row>

            <!-- Form -->
            <lead-form
              :addLead="addLead"
              @addLeadSuccess="addLeadSuccessHandler"
              @addLeadFailure="addLeadFailureHandler"
            />

            <!-- Action Section -->
            <v-row
              no-gutters
              class="pa-0 pa-2 d-flex justify-end align-center"
              style="border-top: solid 1px grey"
            >
              <v-btn
                @click="addLeadDialog = false"
                color="red"
                variant="text"
                class="text-none text-body-2 mr-3"
                >Close</v-btn
              >
              <v-btn
                @click="addLead = true"
                color="blue"
                class="text-none text-body-2"
                >Add Lead</v-btn
              >
            </v-row>
          </v-card>
        </v-dialog>
      </div>
    </v-col>

    <v-col cols="12" class="pa-0">
      <v-card
        elevation="0"
        width="100%"
        height="auto"
        class="mt-10 mb-5 rounded-lg"
      >
        <p class="my-5 mx-5 text-h6">Leads ({{ totalLeads }})</p>

        <!-- Filters -->
        <v-row no-gutters class="pa-0 px-1">
          <v-col
            cols="12"
            sm="8"
            class="pa-0 pl-2 d-flex justify-start align-center"
          >
            <v-btn variant="text" color="blue" class="text-body-1 px-2">
              <v-icon icon="mdi-filter" class="mr-n2"></v-icon>&nbsp; Filter

              <v-menu
                activator="parent"
                location="bottom start"
                transition="fade-transition"
              >
                <v-list density="compact" min-width="250" rounded="lg" slim>
                  <v-list-item title="Copy link" link></v-list-item>
                </v-list>
              </v-menu>
            </v-btn>

            <v-btn variant="text" color="blue" class="text-body-1 mr-2 px-2">
              <v-icon icon="mdi-view-column" class="mr-n2"></v-icon>&nbsp;
              Columns

              <v-menu
                activator="parent"
                location="bottom start"
                transition="fade-transition"
              >
                <v-list
                  density="compact"
                  :min-width="250"
                  rounded="lg"
                  slim
                  v-model="columns"
                >
                  <v-list-item
                    value="column"
                    title="Copy link"
                    link
                  ></v-list-item>
                </v-list>
              </v-menu>
            </v-btn>

            <div style="max-width: 170px">
              <v-select
                color="blue"
                variant="underlined"
                prepend-inner-icon="mdi-sort"
                v-model="sort"
                :items="sortOptions"
              ></v-select>
            </div>
          </v-col>
          <v-col cols="12" sm="4" class="pa-0 search">
            <v-text-field
              placeholder="Search"
              density="comfortable"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Leads List -->
        <div class="listCont">
          <v-row no-gutters class="tableHeaders pa-0 px-4 py-4">
            <v-col class="pa-0 tableHead">Name</v-col>
            <v-col class="pa-0 tableHead">Status</v-col>
            <!-- <v-col class="pa-0 tableHead">Email</v-col> -->
            <v-col class="pa-0 tableHead">Mobile</v-col>
            <v-col class="pa-0 d-none d-sm-block tableHead">Owner</v-col>
            <v-col class="pa-0 d-none d-sm-block tableHead">Score</v-col>
            <v-col class="pa-0 tableHead">Action</v-col>
          </v-row>

          <v-row
            no-gutters
            class="tableDataCont pa-0 px-4 py-4"
            v-for="lead in leads"
            :key="lead.email"
          >
            <v-col class="pa-0 px-1 tableData">{{ lead.name }}</v-col>
            <v-col class="pa-0 px-1 tableData">
              <v-btn
                v-if="lead.status === 'pending'"
                class="text-none mb-1 text-white text-body-1"
                density="comfortable"
                color="amber-darken-2"
                >Pending</v-btn
              >
              <v-btn
                v-else-if="lead.status === 'sold'"
                class="text-none mb-1 text-body-1"
                density="comfortable"
                color="red"
                >Sold</v-btn
              >
              <v-btn
                v-else-if="lead.status === 'active'"
                class="text-none mb-1 text-body-1"
                density="comfortable"
                color="green-darken-2"
                >Active</v-btn
              >
              <v-btn
                v-else
                class="text-none mb-1 text-body-1"
                density="comfortable"
                color="grey-darken-1"
                >Default</v-btn
              >
            </v-col>
            <!-- <v-col class="pa-0 px-1 tableData">{{ lead.email }}</v-col> -->
            <v-col class="pa-0 px-1 tableData">{{ lead.mobile }}</v-col>
            <v-col class="pa-0 px-1 d-none d-sm-block tableData">{{
              lead.owner
            }}</v-col>
            <v-col class="pa-0 px-1 d-none d-sm-block tableData">{{
              lead.score
            }}</v-col>

            <!-- Action Button Menu option -->
            <v-col class="pa-0 px-1">
              <lead-action-menu :leadMobile="lead.mobile" />
            </v-col>
          </v-row>
        </div>

        <!-- meta section -->
        <div
          class="pagenation py-5 px-5 d-flex justify-space-between align-center"
        >
          <div class="d-flex justify-end align-center">
            <div class="d-flex align-center mr-10">
              Rows per page:
              <v-select
                class="ml-3 mb-n2"
                :items="rows"
                v-model="rowsPerpage"
                density="compact"
                variant="underlined"
              ></v-select>
            </div>

            <div class="d-flex align-center">
              {{ "3" }} of {{ "3" }}
              <span class="ml-5">
                <v-icon icon="mdi-code-less-than" class="mx-1"></v-icon>
                <v-icon icon="mdi-code-greater-than" class="mx-1"></v-icon>
              </span>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref, defineAsyncComponent } from "vue";

//@ts-ignore
const LeadForm = defineAsyncComponent(
  () => import("@/components/crm/lead-management/LeadForm.vue")
);
const LeadActionMenu = defineAsyncComponent(
  () => import("@/components/crm/lead-management/LeadActionMenu.vue")
);

const sortOptions = ref([
  "mobile asc",
  "mobile desc",
  "date new first",
  "date old first",
]);
const sort = ref("mobile asc");
const rows = ref([25, 50, 100]);
const rowsPerpage = ref(25);

const addLeadDialog = ref(false);
const addLead = ref(false);
function addLeadSuccessHandler() {
  addLeadDialog.value = false;
}
function addLeadFailureHandler() {
  addLead.value = false;
}

const columns = ref(["column", "column2"]);
const leads = ref([
  {
    name: "lead 1",
    status: "default",
    email: "lead1@gmail.com",
    mobile: 9876575432,
    owner: "",
    score: 4,
  },
  {
    name: "lead 2",
    status: "sold",
    email: "lead2@gmail.com",
    mobile: 1264575432,
    owner: "",
    score: 4,
  },
  {
    name: "lead 3",
    status: "active",
    email: "lead3@gmail.com",
    mobile: 6365575432,
    owner: "",
    score: 4,
  },
  {
    name: "lead 4",
    status: "pending",
    email: "lead4@gmail.com",
    mobile: 2342475432,
    owner: "",
    score: 4,
  },
]);
const totalLeads = ref(leads.value.length);
// const editLeadDialog = ref(false);

// const actionItems = ref([
//   {
//     name: "Edit",
//     icon: "mdi-pencil",
//     iconColor: 'grey-darken-1',
//     color: 'grey-darken-1',
//     action: 'edit'
//   },
//   {
//     name: "Create Call",
//     icon: "mdi-phone",
//     iconColor: 'grey-darken-1',
//     color: 'grey-darken-1',
//     action: 'call'
//   },
//   {
//     name: "Send Email",
//     icon: "mdi-email-fast-outline",
//     iconColor: 'grey-darken-1',
//     color: 'grey-darken-1',
//     action: 'email'
//   },
//   {
//     name: "View",
//     icon: "mdi-eye",
//     iconColor: 'blue',
//     color: 'grey-darken-1',
//     action: 'view'
//   },
//   {
//     name: "Delete",
//     icon: "mdi-delete",
//     iconColor: 'red-darken-1',
//     color: 'red-darken-1',
//     action: 'delete'
//   },
// ]);

// function handleChange(action: string) {
//   if (action === 'edit') {
//     editLeadDialog.value = true;
//   } else if (action === 'call') {
//     console.log("Open Form in a modal to add Call details");
//   } else if (action === 'email') {
//     console.log("Open Form in a modal to add Email details");
//   } else if (action === 'view') {
//     router.push({ path: '/crm/lead', query: { id: "*" } })
//   } else if (action === 'delete') {
//     console.log("Open a modal to confirm the deletion of the lead");
//   }
// }
</script>

<style scoped>
.addDialog {
  width: 50%;
}
@media screen and (max-width: 600px) {
  .addDialog {
    width: 90%;
  }
}
@media screen and  (max-width: 960px) and (min-width: 600px) {
  .addDialog {
    width: 75%;
  }
}

.tableHeaders {
  background-color: #f4f6f8;
  display: flex;
  align-items: center;
}

.tableHead {
  font-size: 16px;
  font-weight: 500;
}

.tableDataCont:hover {
  background-color: #f4f6f8;
}

.tableData {
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tableData:hover {
  white-space: wrap;
}

.pagenation {
  margin-top: 30px;
  border-top: solid grey 2px;
}

</style>
