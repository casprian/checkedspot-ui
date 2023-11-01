<template>
    <v-card class="rounded-0" elevation="2">
        <v-card-item>
            <v-card-title class="pb-5 mx-3 mb-10 pt-2" style="border-bottom: 1px solid #e0e0e0">Sales
                Coordinator
            </v-card-title>
            <v-card-actions>
                <v-avatar class="mx-2" size="75" color="grey-darken-3"
                    image="https://checkedspot.blob.core.windows.net/assets/parvez1.jpeg"></v-avatar>
                <v-sheet class="px-5 mt-n7">
                    <v-card-title>
                        {{
                            agent?.data?.name
                            ? agent?.data?.name
                            : 'Not Found'
                        }}
                    </v-card-title>
                </v-sheet>
            </v-card-actions>
            <v-row no-gutters class="pt-7 px-3 mx-3 pb-2 mb-2">
                <!-- <v-col cols="12" class="d-flex align-center pb-3">
                    <v-icon icon="mdi-map-marker" size="19" color="#FF385C"></v-icon>
                    <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                        {{
                            agent?.data?.address
                            ? agent?.data?.address
                            : 'Not Found'
                        }}
                    </div>
                </v-col> -->
                <v-col cols="12" class="d-flex align-center pb-3">
                    <v-icon icon="mdi-phone" size="19" color="#FF385C"></v-icon>
                    <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                        {{
                            agent?.data?.mobile
                            ? agent?.data?.mobile
                            : 'Not Found'
                        }}
                    </div>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                    <v-icon icon="mdi-email" size="19" color="#FF385C"></v-icon>
                    <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                        {{
                            agent?.data?.email
                            ? agent?.data?.email
                            : 'Not Found' }}
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// @ts-ignore
import api from '@/data/api/index.js';

const router = useRouter();

const props = defineProps(['propertyId']);

const agent = ref({
    data: {
        'name': null,
        'email': [],
        'mobile': [],
        'address': []
    }
});

async function agentdata() {
    const res = await api?.agent?.getAgent({
        params: {
            propertyId: props.propertyId,
        },
    })

    if (res.status === 200) {
        agent.value.data = res.data
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

onMounted(async () => {
    await agentdata();
});
</script>

<style scoped></style>