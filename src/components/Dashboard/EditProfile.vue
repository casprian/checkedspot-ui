<template>
    <v-row no-gutters class="px-6 py-5">
        <v-col cols="12" class="mt-2 mb-5">
            <v-btn @click="router.push('/dashboard')">Back to Profile</v-btn>
        </v-col>
        <v-col cols="12" class="d-none d-md-block" :class="[showEdit ? 'd-none d-md-block' : 'd-block']">
            <v-form>
                <v-row no-gutters>

                    <v-col cols="12" class="px-10 py-5 mb-5 elevation-2 d-flex justify-space-between align-center bg-white">
                        <h1 class="text-h5 text-sm-h4 font-weight-medium">Edit Profile</h1>
                        <span>
                            <v-img style="width: 80px; height: 80px;"
                                lazy-src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                :src="userdata?.picture ? userdata?.picture : profilePicture">
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                    </div>
                                </template>
                            </v-img>
                        </span>
                    </v-col>

                    <v-row no-gutters class="pa-10 elevation-2 bg-white mb-6">
                        <v-col cols="12">
                            <div class="text-body-1 font-weight-medium">Name</div>
                            <v-text-field placeholder="Enter your Name" clearable v-model="name.value.value"
                                :error-messages="name.errorMessage.value" variant="outlined">
                                <template v-slot:loader>
                                    <v-progress-linear v-if="loading" indeterminate color="pink-accent-2">
                                    </v-progress-linear>
                                </template>
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" class="pt-1">
                            <div class="text-body-1 font-weight-medium">Contact Number</div>
                            <v-text-field placeholder="Enter your Number" clearable v-model="mobile.value.value"
                                :error-messages="mobile.errorMessage.value" variant="outlined">
                                <template v-slot:loader>
                                    <v-progress-linear v-if="loading" indeterminate color="pink-accent-2">
                                    </v-progress-linear>
                                </template>
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" class="pt-1">
                            <div class="text-body-1 font-weight-medium">Address</div>
                            <v-text-field placeholder="Enter your Address" clearable v-model="userdata.address"
                                variant="outlined">
                                <template v-slot:loader>
                                    <v-progress-linear v-if="loading" indeterminate color="pink-accent-2">
                                    </v-progress-linear>
                                </template>
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" class="py-1">
                            <div class="text-body-1 font-weight-medium">City</div>
                            <v-select placeholder="Select" clearable :items="cityitems" v-model="userdata.city"
                                variant="outlined">
                                <template v-slot:loader>
                                    <v-progress-linear v-if="loading" indeterminate color="pink-accent-2">
                                    </v-progress-linear>
                                </template>
                            </v-select>
                        </v-col>

                        <v-col cols="12" class="pt-1">
                            <div class="text-body-1 font-weight-medium">State</div>
                            <v-select placeholder="Select" clearable :items="Stateitems" v-model="userdata.state"
                                variant="outlined">
                                <template v-slot:loader>
                                    <v-progress-linear v-if="loading" indeterminate color="pink-accent-2">
                                    </v-progress-linear>
                                </template>
                            </v-select>
                        </v-col>

                        <v-col cols="12" class="py-1">
                            <div class="text-body-1 font-weight-medium">Country</div>
                            <v-select placeholder="Select" clearable :items="countryitems" v-model="userdata.country"
                                variant="outlined">
                                <template v-slot:loader>
                                    <v-progress-linear v-if="loading" indeterminate color="pink-accent-2">
                                    </v-progress-linear>
                                </template>
                            </v-select>
                        </v-col>

                        <v-col cols="12" class="mt-4 d-flex justify-center">
                            <v-btn :loading="loader" @click.prevent="uploadData" width="100%" height="40" color="blue"
                                variant="flat">Save</v-btn>
                        </v-col>
                    </v-row>
                </v-row>
            </v-form>
        </v-col>
    </v-row>
</template>
  
<script lang="ts" setup>
//@ts-ignore
import api from "@/data/api/index.js";
import jwtDecode from "jwt-decode";
import { onMounted, reactive, ref } from "vue";
import { useCookies } from "vue3-cookies";
import { useField, useForm } from 'vee-validate';

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
const loader = ref(false)
const profilePicture = ref('https://checkedspot.blob.core.windows.net/assets/loader.gif');

let { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value: any) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        mobile(value: any) {
            if (!value) {
                return true
            } else if (value) {
                if (value?.length === 10 && /[0-9-]+/.test(value)) {
                    return true
                } else if (value?.length > 10 && /[0-9-]+/.test(value)) {
                    return 'Phone number needs to be at exactly 10 digits.'
                } else {
                    return 'Phone number needs to be exactly 10 digits.'
                }
            }
        }
    }
})
const name = useField('name');
const mobile = useField('mobile');

let userdata = ref({
    picture: null,
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
}

async function getUser() {
    const res = await api?.user?.getUserData({ params: { email: user?.email } });
    if (res?.data?.status === 200) {
        userdata.value = res?.data?.data;
        name.value.value = res?.data?.data?.name;
        mobile.value.value = res?.data?.data?.mobile;
    }
    loading.value = false;
}

const uploadData = handleSubmit(async (values) => {
    for (let item in values) {
        if (values[item]) {
            //@ts-ignore
            userdata.value[item] = values[item];
        }
    }
    loader.value = true;
    const res = await api?.user?.updateProfile(userdata.value);
    if (res?.data?.status === 200) {
        loader.value = false;
        router.push('/dashboard')
    } else {
        router.push({ path: '/error', query: { status: res?.data?.status } })
    }
})

setTimeout(() => {
    profilePicture.value = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
}, 5000);

onMounted(async () => {
    await getUser();
});

</script>
  
<style scoped>
.myProfileDetails>h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    font-size: 18px;
    font-weight: 300;
    text-overflow: ellipsis;
}

.myProfileDetails>h2>div {
    display: inline-block;
    width: 100px;
    font-size: 22px;
    font-weight: 400;
}</style>