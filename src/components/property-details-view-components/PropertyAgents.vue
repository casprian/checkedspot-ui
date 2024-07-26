<template>
    <v-card class="rounded-0 mb-5" elevation="2">
        <v-card-item>
            <v-card-title class="pb-3 mx-3 mb-4 pt-2" style="border-bottom: 1px solid #e0e0e0">Sales
                Coordinator
            </v-card-title>
            <v-sheet>
                <v-row no-gutters class="mb-2">
                    <v-col cols="4" class="d-flex align-center justify-center">
                        <v-avatar class="mx-2 rounded" size="65" color="grey-darken-3"
                            image="https://checkedspot.blob.core.windows.net/gallery/8a213c41-9394-4f94-9d13-8a3d08c43433.png"></v-avatar>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>Checked Spot</v-card-title>
                        <div class="my-2 d-flex justify-start align-center">
                            <v-icon icon="mdi-phone" size="19" color="#FF385C"></v-icon>
                            <div class="text-subtitle-1 pl-3 text-grey-darken-1">9606937470</div>
                        </div>
                        <div class="my-2 d-flex justify-start align-center">
                            <v-icon icon="mdi-email" size="19" color="#FF385C"></v-icon>
                            <div class="text-subtitle-1 pl-3 text-grey-darken-1">info@checkedspot.com</div>
                        </div>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-card-item>
    </v-card>

    <div v-if="agents.length > 0">
        <v-card class="rounded-0 mb-5" elevation="2" v-for="agent in agents" :key="agent?.email">
            <v-card-item>
                <v-card-title class="pb-3 mx-3 mb-4 pt-2" style="border-bottom: 1px solid #e0e0e0">
                    Property Owner
                </v-card-title>
                <v-sheet>
                    <v-row no-gutters class="mb-2">
                        <v-col cols="4" class="d-flex align-center justify-center">
                            <v-avatar class="mx-2 rounded" size="75" color="grey-darken-3"
                                :image="agent?.picture ? agent?.picture : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"></v-avatar>
                        </v-col>
                        <v-col cols="8">
                            <v-card-title>
                                {{
                                    agent?.name
                                    ? agent?.name
                                    : 'Not Found'
                                }}
                            </v-card-title>
                            <div class="my-2 d-flex justify-start align-center">
                                <v-icon icon="mdi-phone" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 pl-3 text-grey-darken-1">
                                    {{
                                        agent?.mobile
                                        ? agent?.mobile
                                        : 'Not Found'
                                    }}
                                </div>
                            </div>
                            <div class="my-2 d-flex justify-start align-center">
                                <v-icon icon="mdi-email" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 pl-3 text-grey-darken-1">
                                    {{
                                        agent?.email
                                        ? agent?.email
                                        : 'Not Found' }}
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-card-item>
        </v-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// @ts-ignore
import api from '@/data/api/index.js';

const router = useRouter();

const props = defineProps(['propertyId']);

const agents = ref([{
    'name': null,
    'email': '',
    'mobile': '',
    'picture': ''

}]);

async function agentdata() {
    agents.value = [];

    const res = await api?.property?.getPropertyAgents({
        params: {
            propertyId: props.propertyId,
        },
    })

    if (res.status === 200) {
        //@ts-ignore
        const data = [];
        //@ts-ignore
        res?.data?.forEach(item => {
            if (item?.email !== "info@checkedspot.com") {
                data.push(item);
            }
        });
        //@ts-ignore
        agents.value = data;
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

onMounted(async () => {
    await agentdata();
});
</script>

<style scoped></style>