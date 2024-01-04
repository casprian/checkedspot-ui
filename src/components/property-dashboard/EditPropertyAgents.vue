<template>
    <v-row no-gutters>
        <!-- Property Agents -->
        <v-col cols="12">
            <v-row no-gutters class="mb-4 mx-3 py-3" style="border-bottom: solid 2px grey;">
                <div class="text-h5 text-grey-darken-2 font-weight-medium">Property Agents</div>
            </v-row>
            <v-row no-gutters>
                <v-col cols="12" md="6" lg="4" class="pa-3" v-for="agent in agents" :key="agent.userId">
                    <property-agent-card :agent="agent" @removeSuccess="removeUpdate" />
                </v-col>


                <v-col cols="12" md="6" lg="4" class="pa-3">
                    <v-btn elevation="2" class="text-h5 text-sm-h4" variant="tonal" color="pink-darken-2"
                        prepend-icon="mdi-plus" height="320" width="100%" @click="openAddAgentDialog">
                        Add New Agent
                    </v-btn>
                    <v-dialog v-model="dialog" width="auto">
                        <v-card color="grey-lighten-5">
                            <v-row no-gutters class="pa-10 pt-7">
                                <v-col cols="12" class="text-h6 pb-5">
                                    Enter Agent's Email
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                                        variant="outlined" class="" label="Agent's Email*"></v-text-field>
                                </v-col>

                                <v-col cols="12" class="pt-5 d-flex flex-column flex-md-row justify-center align-center">
                                    <v-btn class="mb-2" variant="elevated" color="primary" width="200" :loading="loader"
                                        @click="addNewPropertyAgent">
                                        Save
                                    </v-btn>
                                    <v-btn class="ml-4 mb-2" width="100" color="red-darken-2" variant="outlined"
                                        @click="dialog = false">Cancel</v-btn>
                                </v-col>

                                <v-col cols="12 mt-4" v-if="errorMessage">
                                    <div class="text-h6 text-center text-red">{{ errorMessage }}</div>
                                </v-col>
                                <v-col cols="12 mt-4" v-if="successMessage">
                                    <div class="text-h6 text-center text-green">Successfully added the agent</div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="12" class="mt-16">
            <v-row no-gutters class="mb-4 py-3" style="border-bottom: solid 2px grey;">
                <div class="text-h5 text-grey-darken-2 font-weight-medium">Property's Primary Agents</div>
            </v-row>
            <v-row no-gutters>

                <!-- Primary Agent -->
                <v-col cols="12" class="py-5 ">
                    <v-card class="rounded-0 primaryAgentCard" elevation="2">
                        <v-card-item>
                            <v-card-title class="pb-5 mx-3 mb-10 pt-2" style="border-bottom: 1px solid #e0e0e0">
                                Property Primary Agent
                            </v-card-title>

                            <v-row no-gutters class="mt-n3  ">
                                <v-col cols="12" sm="4" class="px-3">
                                    <v-img class="mx-2 rounded-0 primaryAgentImg" color="grey-darken-3" :src="primaryAgent.picture ?
                                        primaryAgent.picture :
                                        'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
                                        "></v-img>
                                </v-col>

                                <v-col cols="12" sm="8"
                                    class="px-3 px-sm-10 mb-5 mb-sm-0 d-flex flex-column justify-center align-center align-sm-start primaryAgentdetail">
                                    <div class="text-h6 pb-3">
                                        {{
                                            primaryAgent?.name
                                            ? primaryAgent?.name
                                            : 'Not Found'
                                        }}
                                    </div>

                                    <div cols="12" class="d-flex align-center pb-3">
                                        <v-icon icon="mdi-phone" size="19" color="#FF385C"></v-icon>
                                        <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                            {{
                                                primaryAgent?.mobile
                                                ? primaryAgent?.mobile
                                                : 'Not Found'
                                            }}
                                        </div>
                                    </div>
                                    <div v-cocols="12" class="d-flex align-center">
                                        <v-icon icon="mdi-email" size="19" color="#FF385C"></v-icon>
                                        <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                            {{
                                                primaryAgent?.email
                                                ? primaryAgent?.email
                                                : 'Not Found' }}
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-item>
                    </v-card>
                </v-col>

                <!-- Add new Primary Agent -->
                <v-col cols="12" class="py-5">
                    <v-card elevation="2" class="pb-10">
                        <v-list density="default" color="pink-darken-2" variant="tonal">
                            <div class="pb-5 pt-2 mx-5 mb-10" style="border-bottom: 1px solid #e0e0e0">
                                <v-list-subheader class="text-h6 text-grey-darken-4 font-weight-medium pa-0 ma-0">Select
                                    new primary agent</v-list-subheader>
                            </div>

                            <v-list-group value="Admin" class="px-10">
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props">
                                        <template v-slot:prepend>
                                            <v-avatar color="grey" size="80" rounded="0" class="my-3">
                                                <v-img cover
                                                    :src="activePrimaryAgent.picture ? activePrimaryAgent.picture : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"></v-img>
                                            </v-avatar>
                                        </template>

                                        <v-list-item-title class="text-h6">
                                            {{
                                                activePrimaryAgent.name
                                            }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </template>

                                <v-list-item v-for="agent in agents" :key="agent.userId" :value="agent"
                                    color="pink-darken-4" @click="() => { setNewAgent(agent) }">
                                    <template v-slot:prepend>
                                        <v-avatar color="pink-darken-2" size="50" rounded="0">
                                            <v-img cover
                                                :src="agent.picture ? agent.picture : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"></v-img>
                                        </v-avatar>
                                    </template>

                                    <v-list-item-title class="text-h6">{{ agent.name }}</v-list-item-title>
                                </v-list-item>
                            </v-list-group>
                        </v-list>

                        <div v-if="agentUpdateSuccess" class="pt-5 text-center text-h6 text-green">
                            Update is Successfull
                        </div>
                        <div v-if="agentUpdateFail" class="pt-5 text-center text-h6 text-red">
                            Update is Unsuccessfull
                        </div>

                        <div class="mt-5 d-flex justify-center align-center">
                            <v-btn width="200" color="blue" @click="setNewPropertyPrimaryAgent"
                                :loading="primaryAgentLoader">save</v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>

    </v-row>
</template>

<script lang="ts" setup>
//@ts-ignore
import api from '@/data/api/index.js';
import { useForm, useField } from 'vee-validate';
import { defineAsyncComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const PropertyAgentCard = defineAsyncComponent(() => import('@/components/property-dashboard/PropertyAgentCard.vue'));

const route = useRoute();
const props = defineProps(['propertyId', 'primaryAgentUserId'])
const primaryAgentsUserId = ref(props.primaryAgentUserId);

const loader = ref(false);
const dialog = ref(false);
const primaryAgentLoader = ref(false)
const agents = ref([
    {
        userId: '',
        name: '',
        picture: '',
        mobile: '',
        email: '',
    }
]);

const primaryAgent = ref({
    userId: '',
    name: '',
    picture: '',
    mobile: '',
    email: '',
})

const activePrimaryAgent = ref({
    userId: '',
    name: '',
    picture: '',
    mobile: '',
    email: '',
})

function setNewAgent(agent: any) {
    activePrimaryAgent.value = agent;
}


async function getPropertyAgents() {
    const res = await api?.property?.getPropertyAgents({ params: { propertyId: props.propertyId } });

    if (res.status === 200) {
        agents.value = res.data;
    } else {
        console.log("res : ", res)
        console.log("Status : ", res.status)
    }
}

async function getPropertyPrimaryAgent() {
    const res = await api?.agent.getAgent({ params: { userId: primaryAgentsUserId.value } })

    if (res.status === 200) {
        primaryAgent.value = res?.data;
        activePrimaryAgent.value = res?.data;
    } else {
        console.log("res : ", res)
        console.log("Status : ", res.status)
    }

}

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        email(value: any) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
                return true;
            }
            return 'Must be a valid e-mail.';
        }
    }
})
const email = useField('email');

const errorMessage = ref('');
const successMessage = ref(false);
function openAddAgentDialog() {
    email.value.value = '';
    errorMessage.value = '';
    successMessage.value = false;
    dialog.value = true;
}

const addNewPropertyAgent = handleSubmit(async (values: any) => {
    loader.value = true;

    const res = await api?.property?.allocateNewAgent({
        agentEmail: values.email,
        propertyId: route?.query?.propertyId,
    });

    if (res?.status === 200) {
        successMessage.value = true;
        dialog.value = false;
        setTimeout(async () => {
            await getPropertyAgents();
            email.value.value = '';
            successMessage.value = false;
        }, 2000);
    } else if (res.status === 404) {
        errorMessage.value = 'This user does not exist!';
    } else if (res.status === 400) {
        errorMessage.value = 'This user is not an agent. Please ask this user to update his/her profile!';
    } else {
        errorMessage.value = 'Server Error! If this error persists, please contact us at info@checkedspot.com';
    }
    loader.value = false
})


const agentUpdateSuccess = ref(false);
const agentUpdateFail = ref(false);
async function setNewPropertyPrimaryAgent() {
    primaryAgentLoader.value = true;
    const res = await api?.property?.allocateNewPrimaryAgent({
        propertyId: props.propertyId,
        userId: activePrimaryAgent.value.userId,
    })

    if (res?.status === 200) {
        primaryAgentsUserId.value = activePrimaryAgent.value.userId;
        await getPropertyPrimaryAgent();
        primaryAgentLoader.value = false;
        agentUpdateSuccess.value = true;

        setTimeout(() => {
            agentUpdateSuccess.value = false;
        }, 2000);
    } else {
        agentUpdateFail.value = true;
        console.log("res : ", res);
        console.log("res.status : ", res.status);

        primaryAgentLoader.value = false;
        setTimeout(() => {
            agentUpdateFail.value = false;
        }, 2000);
    }
}

async function removeUpdate() {
    await getPropertyPrimaryAgent();
    await getPropertyAgents(); 
}

onMounted(async () => {
    await getPropertyAgents();
    await getPropertyPrimaryAgent();
})

</script>

<style scoped>
.primaryAgentCard {
    height: 330px;
}

.primaryAgentImg {
    height: 200px;
    width: 100%;
    object-fit: contain;
}

@media screen and (max-width: 600px) {
    .primaryAgentCard {
        height: auto;
    }

    .primaryAgentImg {
        margin-bottom: 20px;

    }

    .primaryAgentdetail {
        justify-items: center;
    }

}
</style>