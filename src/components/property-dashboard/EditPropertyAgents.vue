<template>
    <v-row no-gutters>
        <v-card elevation="4" width="100%" height="100%">
            <!-- Property Agents -->
            <v-col cols="12">
                <v-row no-gutters class="mb-4 mx-3 py-3" style="border-bottom: solid 2px grey;">
                    <div class="text-h5 text-grey-darken-2 font-weight-medium">Property Agents</div>
                </v-row>
                <v-row no-gutters>
                    <property-agent-card />
                </v-row>
            </v-col>
        </v-card>


        <v-card elevation="4" width="100%" height="100%" class="mt-16 px-3">
            <v-col cols="12">
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

                                    <v-list-item v-for="agent in agents" :key="agent.userId" :value="agent" color="pink-darken-4"
                                        @click="() => { setNewAgent(agent) }">
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
        </v-card>

    </v-row>
</template>

<script lang="ts" setup>
//@ts-ignore
import api from '@/data/api/index.js';
import { defineAsyncComponent, onMounted, ref } from 'vue';

const PropertyAgentCard = defineAsyncComponent(()=> import('@/components/property-dashboard/PropertyAgentCard.vue'))

const props = defineProps(['propertyId', 'primaryAgentUserId'])
const primaryAgentsUserId = ref(props.primaryAgentUserId);

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