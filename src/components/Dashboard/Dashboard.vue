<template>
    <v-row no-gutters>
        <v-col cols="12" class="d-flex align-center justify-center">
            <v-avatar color="grey-darken-3" :image="userdata?.picture
                ? userdata?.picture
                : profilePicture
                " size="170"></v-avatar>
        </v-col>

        <v-col cols="12" class="pt-3 myProfileDetails">

            <h2 class="py-3" :title="userdata?.name ? userdata?.name : 'unavailable user name'">
                <div>Name</div>:&emsp;<v-progress-linear v-if="loading" indeterminate location="left"
                    color="pink-accent-2"></v-progress-linear><span v-else>{{ userdata?.name ? userdata?.name : "Not Found"}}</span>
            </h2>

            <h2 class="py-3" :title="userdata?.email ? userdata?.email : 'unavailable user email'">
                <div>Email</div>&emsp;<v-progress-linear v-if="loading" indeterminate location="left"
                    color="pink-accent-2"></v-progress-linear><span v-else>{{ userdata?.email ? userdata?.email : "Not Found" }}</span>
            </h2>

            <h2 class="py-3" :title="userdata?.mobile ? userdata?.mobile : 'unavailable user mobile'">
                <div>Contact</div>:&emsp;<v-progress-linear v-if="loading" indeterminate location="left"
                    color="pink-accent-2"></v-progress-linear><span v-else>{{ userdata?.mobile ? userdata?.mobile : "Not Found" }}</span>
            </h2>

            <h2 class="py-3" :title="userdata?.address ? userdata?.address : 'unavailable user address'">
                <div>Adress</div>:&emsp;<v-progress-linear v-if="loading" indeterminate location="left"
                    color="pink-accent-2"></v-progress-linear><span v-else>{{ userdata?.address ? userdata?.address : "NotFound" }}</span>
            </h2>

            <h2 class="py-3" :title="userdata?.city ? userdata?.city : 'unavailable user city'">
                <div>City</div>:&emsp;<v-progress-linear v-if="loading" indeterminate location="left"
                    color="pink-accent-2"></v-progress-linear><span v-else>{{ userdata?.city ? userdata?.city : "Not Found"}}</span>
            </h2>

            <h2 class="py-3" :title="userdata?.state ? userdata?.state : 'unavailable user state'">
                <div>State</div>:&emsp;<v-progress-linear v-if="loading" indeterminate location="left"
                    color="pink-accent-2"></v-progress-linear><span v-else>{{ userdata?.state ? userdata?.state : "Not Found"}}</span>
            </h2>

            <h2 class="py-3" :title="userdata?.country ? userdata?.country : 'unavailable user country'">
                <div>Country</div>:&emsp;<v-progress-linear v-if="loading" indeterminate location="left"
                    color="pink-accent-2"></v-progress-linear><span v-else>{{ userdata?.country ? userdata?.country : "NotFound" }}</span>
            </h2>

        </v-col>

        <v-col class="mt-4">
            <v-btn prepend-icon="mdi-pencil" class="d-md-none rounded-lg" variant="outlined"
                @click="showEdit = !showEdit">Edit</v-btn>
        </v-col>
    </v-row>
</template>
  
<script lang="ts" setup>
//@ts-ignore
import api from "@/data/api/index.js";
import jwtDecode from "jwt-decode";
import { onMounted, reactive, ref } from "vue";
import { useCookies } from "vue3-cookies";

import { useRouter } from "vue-router";
const router = useRouter();
const { cookies } = useCookies();
if (!cookies.get("token")) {
    router.push("/");
}

const cityitems = reactive(["Bangalore", "Hassan", "Mysore"]);
const Stateitems = reactive(["Karnataka"]);
const countryitems = reactive(["India"]);
const showEdit = ref(false);
const loading = ref(true);
const profilePicture = ref('https://checkedspot.blob.core.windows.net/assets/loader.gif');

let userdata = ref({
    name: null,
    picture: null,
    mobile: null,
    email: null,
    address: null,
    city: null,
    state: null,
    country: null,
});

let user = reactive({
    email: null,
});

if (cookies.get("token")) {
    //@ts-ignore
    user = jwtDecode(cookies.get("token"))?.userData;
    console.log( jwtDecode(cookies.get("token"))?.userData)
}


async function getUser() {
    const res = await api?.user?.getUserData({ params: { email: user?.email } });
    if (res?.data?.status === 200) {
        userdata.value = res?.data?.data;
    }
    loading.value = false
}

function pri() {
    console.log("USERDATA: ", userdata);
}

setTimeout(() => {
    profilePicture.value = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
}, 5000);

onMounted(async () => {
    await getUser();
});

</script>
  
<style scoped></style>