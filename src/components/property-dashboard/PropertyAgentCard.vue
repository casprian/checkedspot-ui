<template>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandFailure" height="60" width="100%"
            class="mx-auto bg-red">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>Deletion Canceled!</h5>
            </div>
        </v-card>
    </v-expand-transition>
    <v-expand-transition>
        <v-card style="position: fixed; top: 56px; left: 0; z-index: 1" v-show="expandSuccess" height="60" width="100%"
            class="mx-auto bg-green">
            <div style="height: 100%" class="text-h5 text-center d-flex align-center justify-center">
                <h5>
                    Property has been deleted successfully!
                </h5>
            </div>
        </v-card>
    </v-expand-transition>


    <v-card class="rounded-0" elevation="2" height="320">
        <v-btn icon="mdi-close-circle" color="pink-darken-2" title="Remove Agent" class="removeAgent pa-0" variant="text"
            @click="() => { handleConfirmRemove(agent) }"></v-btn>

        <v-dialog v-model="removeDialog" width="auto">
            <v-card class="pa-8">
                <div>Confirm remove agent: {{ agent?.name }}</div>
                <div class="my-2">
                    <v-btn class="ma-2" width="150" color="blue" @click="handleRemoveAgent" :loading="loader">Remove</v-btn>
                    <v-btn class="ma-2" width="150" color="red-darken-2" variant="outlined"
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
            <v-row no-gutters class="pt-2 px-3 mx-3 pb-2 mb-2">
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
</template>

<script lang="ts" setup>
//@ts-ignore
import api from '@/data/api/index.js';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps(['agent']);
const emit = defineEmits(['removeSuccess'])

const expandFailure = ref(false);
const expandSuccess = ref(false);

const removeDialog = ref(false);
const loader = ref(false);

const removeAgent = ref({ email: '', userId: '' });

function handleConfirmRemove(item: any) {
    removeAgent.value = item;
    removeDialog.value = true;
}

async function handleRemoveAgent() {
    loader.value = true;

    const res = await api?.property?.removeAgent({
        agentEmail: removeAgent.value?.email,
        agentUserId: removeAgent.value?.userId,
        propertyId: route?.query?.propertyId
    })

    if (res?.status === 200) {
        loader.value = false;
        removeDialog.value = false;
        expandSuccess.value = true;

        emit('removeSuccess');
    } else {
        loader.value = false;
        removeDialog.value = false;
        expandFailure.value = true;
    }

    setTimeout(() => {
        expandSuccess.value = false;
        expandFailure.value = false;
    }, 2000)
}

</script>

<style scoped>
.removeAgent {
    position: absolute;
    right: 5px;
    top: 5px;
}
</style>
