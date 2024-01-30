<template>
    <v-container v-if="isAllowed" class="pa-0">
        <v-row no-gutters class="d-flex justify-center align-center" style="height: auto;">
            <v-col cols="12" sm="8" md="6">
                <v-card class="pa-5 mx-3 my-10 rounded-lg" variant="tonal" elevation="4">
                    <v-card-title class="">Lead Details</v-card-title>
                    <div class="my-2">
                        <v-card-text class="leadData text-body-1">Lead Id:&nbsp; {{ route.query?.leadId }}</v-card-text>
                        <v-card-text class="leadData text-body-1">Name:&nbsp; {{ lead?.name }}</v-card-text>
                        <v-card-text class="leadData text-body-1">Mobile:&nbsp; {{ lead?.mobile }}</v-card-text>
                        <v-card-text class="leadData text-body-1">Email:&nbsp; {{ lead?.email }}</v-card-text>
                        <v-card-text class="leadData text-body-1">Lead Source:&nbsp; {{ lead?.leadSource }}</v-card-text>
                        <v-card-text class="leadData text-body-1">Other Details:&nbsp; {{ lead?.otherDetails
                        }}</v-card-text>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useCookies } from "vue3-cookies";
import jwtDecode from "jwt-decode";
import { useRoute, useRouter } from "vue-router";
//@ts-ignore
import api from "@/data/api/index";

const router = useRouter();
const route = useRoute()
const { cookies } = useCookies();

const isAllowed = ref(false);

const lead = ref({
    _id: '1',
    name: "lead1",
    mobile: "1234567890",
    email: "",
    leadSource: "",
    otherDetails: "",
})

async function getleadDetails() {
    const res = await api?.lead?.getLead({ params: { leadId: route?.query?.leadId } })
    
    if(res?.status === 200) {
        lead.value = res?.data?.data;
    }else {
        console.log(res)
    }
}

onMounted(async () => {
    if (cookies.get('token')) {
        const jwt = cookies?.get("token")?.split("Bearer ")[1];
        //@ts-ignore
        if (jwtDecode(jwt)?.userData?.roles?.includes("management")) {
            isAllowed.value = true;
        } else {
            isAllowed.value = false;
            router.back();
        }
    } else {
        router.back();
    }

    await getleadDetails()
})
</script>

<style scoped>
.leadData {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.leadData:hover {
    white-space: normal;
}
</style>