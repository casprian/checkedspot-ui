<template>
    <v-col cols="12" md="6" lg="4" class="pa-3" v-for="agent in agents" :key="agent.userId">
        <v-card class="rounded-0" elevation="2" height="330">
            <v-btn icon="mdi-close-circle" color="pink-darken-2" class="removeAgent pa-0" variant="text"
                @click="removeDialog = true"></v-btn>
            <v-dialog v-model="removeDialog" width="auto">
                <v-card class="pa-8">
                    <div>Confirm remove agent: {{ agent.name }}</div>
                    <div class="my-2">
                        <v-btn class="ma-2" width="150" color="blue">Remove</v-btn>
                        <v-btn class="ma-2" width="150" color="green" variant="outlined"
                            @click="removeDialog = false">cancel</v-btn>
                    </div>
                </v-card>
            </v-dialog>

            <v-card-item>
                <v-card-title class="pb-5 mx-3 mb-10 pt-2" style="border-bottom: 1px solid #e0e0e0">
                    Property Agent
                </v-card-title>
                <v-card-actions>
                    <v-avatar class="mx-2" size="75" color="grey-darken-3"
                        :image="agent.picture ? agent.picture : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"></v-avatar>
                    <v-sheet class="px-5 mt-n7">
                        <v-card-title>
                            {{
                                agent?.name
                                ? agent?.name
                                : 'Not Found'
                            }}
                        </v-card-title>
                    </v-sheet>
                </v-card-actions>
                <v-row no-gutters class="pt-7 px-3 mx-3 pb-2 mb-2">
                    <v-col cols="12" class="d-flex align-center pb-3">
                        <v-icon icon="mdi-phone" size="19" color="#FF385C"></v-icon>
                        <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                            {{
                                agent?.mobile
                                ? agent?.mobile
                                : 'Not Found'
                            }}
                        </div>
                    </v-col>
                    <v-col cols="12" class="d-flex align-center">
                        <v-icon icon="mdi-email" size="19" color="#FF385C"></v-icon>
                        <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                            {{
                                agent?.email
                                ? agent?.email
                                : 'Not Found' }}
                        </div>
                    </v-col>
                </v-row>
            </v-card-item>
        </v-card>
    </v-col>

    <v-col cols="12" md="6" lg="4" class="pa-3">
        <v-btn elevation="2" class="text-h5 text-sm-h4" variant="tonal" color="pink-darken-2" prepend-icon="mdi-plus"
            height="330" width="100%" @click="dialog = true">
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
                        <v-btn class="ml-4 mb-2" width="100" color="green-darken-2" variant="outlined"
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
</template>

<script lang="ts" setup>
//@ts-ignore
import api from '@/data/api/index.js';
import { useForm, useField } from 'vee-validate';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const dialog = ref(false);
const removeDialog = ref(false);
const loader = ref(false);

const agents = ref([
    {
        userId: '',
        name: '',
        picture: '',
        mobile: '',
        email: '',
    }
]);


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

async function getPropertyAgents() {
    const res = await api?.property?.getPropertyAgents({ params: { propertyId: route?.query?.propertyId } });
    if (res.status === 200) {
        console.log("ASFASDFASDFAS : ", res.data);
        agents.value = res.data;
    } else {
        console.log("res : ", res)
        console.log("Status : ", res.status)
    }
}

const errorMessage = ref('');
const successMessage = ref(false);
const addNewPropertyAgent = handleSubmit(async (values: any) => {
    loader.value = true;

    const res = await api?.property?.allocateNewAgent({
        agentEmail: values.email,
        propertyId: route?.query?.propertyId,
    });

    if (res?.status === 200) {
        console.log("ASFASDFASDFAS : ", res.data);
        successMessage.value = true;
        setTimeout(async () => {
            dialog.value = false;
            await getPropertyAgents();
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

onMounted(async () => {
    await getPropertyAgents()
})

</script>

<style scoped>
.removeAgent {
    position: absolute;
    right: 5px;
    top: 5px;
}
</style>