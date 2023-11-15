<template>
    <v-container fluid class="pa-0" v-if="cookies.get('token')" style="height: 100%;">
        <v-row no-gutters class="bg-grey-lighten-2 pb-2 mb-5">
            <v-col cols="12">
                <h1 class="py-3 text-h3 text-center font-weight-regular text-decoration-underline text-pink-darken-2">
                    My Properties</h1>
            </v-col>
        </v-row>
        <v-container v-if="propertyLoaded" class="mb-5" style="height: calc(100% - 102px);">
            <v-row v-if="properties.length > 0">
                <v-col cols="12" md="6" lg="4" v-for="property in properties" :key="property.propertyId">
                    <UserPropertyCard :property="property" :getUsersProperties="getUsersProperties" />
                </v-col>
            </v-row>
            <v-row v-else class="d-flex justify-center align-center" style="width:100%; height: 100%;">
                <h1 class="pa-7">You haven't posted any properties! 
                    <RouterLink to="/createproperty">Post property</RouterLink>
                </h1>
            </v-row>
        </v-container>
        <v-container v-else class="mb-5" style="height: calc(100% - 102px);">
            <v-row no-gutters class="d-flex justify-center align-center" style="width:100%; height: 100%;">
                <v-col cols="4">
                    <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useCookies } from 'vue3-cookies';
import jwtDecode from 'jwt-decode';
//@ts-ignore
import api from '@/data/api/index.js';
//@ts-ignore
import UserPropertyCard from '@/components/user-dashboard/UserPropertyCard.vue'

const { cookies } = useCookies();
const router = useRouter();
const jwt = cookies?.get("token")?.split("Bearer ")[1];

if (!cookies.get('token')) {
    router.back();
}

const propertyLoaded = ref(false);
const properties = ref([{ propertyId: "" }]);
const pageNum = ref(1);
const limit = ref(6);

async function getUsersProperties() {
    //@ts-ignore
    const res = await api?.property?.getPropertyForUser({ params: { email: jwtDecode(jwt)?.userData?.email, pageNumber: pageNum.value, limit: limit.value } })
    if (res.status === 200) {
        properties.value = res.data;
        propertyLoaded.value = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

onMounted(async () => {
    await getUsersProperties();
})

</script>

<style scoped>
a {
    text-decoration: none !important;
}

a:hover {
    text-decoration: underline !important;
}

.verifiedTag {
    height: 42px;
    position: absolute;
    bottom: 0;
}

.cardBottom {
    border-top: solid 1px rgb(217, 216, 216);
    height: 85px;
    /* position: absolute;
    bottom: 0; */
}

.hoverPointer:hover {
    cursor: pointer;
}

.overflowText {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.overflowText:hover {
    white-space: normal;
}

.toolBar {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 11px;
}

.modalHead {
    border: solid 1px black;
}

.modalbody {
    border: solid 1px black;
    border-top: none;
}

.v-overlay__content {
    margin: 0;
}

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}

th,
td {
    padding: 10px 10px;
}
</style>