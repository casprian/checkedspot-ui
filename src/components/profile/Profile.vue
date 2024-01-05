<template>
    <v-row id="view" no-gutters class="px-10 py-10">
        <v-col cols="12" class="d-flex align-center justify-center">
            <v-card width="100%" height="200px" class="px-6 px-sm-10 d-flex align-center">
                <v-row no-gutters class="d-flex align-center">
                    <v-col cols="3" md="auto" class="d-flex justify-start">
                        <v-img style="width: 130px; height: 130px;"
                            lazy-src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            :src="userdata?.picture ? userdata?.picture : profilePicture">
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                    </v-col>

                    <v-col cols="9">
                        <v-row no-gutters class="pl-6 d-flex justify-space-between align-center">
                            <v-col cols="12" md="6" class="d-flex d-md-block flex-column justify-center mb-5 mb-md-0">
                                <h2 class="mb-2 text-center text-md-start">{{ userdata?.name ? name : "-----" }}</h2>
                                <update-profile-picture invocationMethod="button"
                                    :picture="user.picture ? user.picture : profilePicture" />
                            </v-col>
                            <v-col cols="12" md="6" class="d-flex flex-column justify-center align-md-center">
                                <v-progress-linear v-model="profileStatus" height="20" :color="profilecolor" class="mb-2">
                                    <strong>{{ profileStatus }}%</strong>
                                </v-progress-linear>
                                <v-btn @click="router.push('/profile/editprofile')"
                                    :class="['text-body-2 font-weight-light']" density="compact" variant="flat"
                                    :color="profilecolor">
                                    {{
                                        profileStatus === 100 ?
                                        "Profile Completed" :
                                        "Complete the Profile"
                                    }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>

        <v-col cols="12" class="px-2 pt-3 myProfileDetails">
            <div class="myProfileDetails d-flex justify-space-between align-center">
                <h2 class="py-3" :title="userdata?.name ? userdata?.name : 'unavailable user name'">
                    <div>Name</div>:&emsp;
                    <v-progress-linear v-if="loading" indeterminate location="left" color="pink-accent-2">
                    </v-progress-linear>
                    <span v-else style="text-transform: capitalize;">
                        {{
                            userdata?.name ?
                            userdata?.name :
                            "Not Found"
                        }}
                    </span>
                </h2>
            </div>
            
            <div class="myProfileDetails d-flex justify-space-between align-center">
                <h2 class="py-3" title="user role">
                    <div>Registered as </div>:&emsp;
                    <v-progress-linear v-if="loading" indeterminate location="left" color="pink-accent-2">
                    </v-progress-linear>
                    <span v-else>
                        {{
                            userdata?.roles[0] === "user" ?
                            "Individual" : userdata?.roles[0]
                        }}
                    </span>
                </h2>
            </div>
            
            <div class="myProfileDetails d-flex justify-space-between align-center">
                <h2 class="py-3" :title="userdata?.email ? userdata?.email : 'unavailable user email'">
                    <div>Email</div>:&emsp;
                    <v-progress-linear v-if="loading" indeterminate location="left" color="pink-accent-2">
                    </v-progress-linear>
                    <span v-else>
                        {{
                            userdata?.email ?
                            userdata?.email :
                            "Not Found"
                        }}
                    </span>
                    <span v-if="userdata.email_verified" class="pl-5" title="verified"><v-icon size="20"
                            color="green-darken-2" icon="mdi-check-decagram"></v-icon></span>
                    <span v-else class="pl-5" title="not verified"><v-icon size="20" color="red-darken-2"
                            icon="mdi-close-circle-outline"></v-icon></span>
                </h2>
                <verify-data v-if="userdata.email" name="email" verify="email" :data="userdata?.email" :isverified="userdata.email_verified"/>
            </div>


            <div class="myProfileDetails d-flex justify-space-between align-center">
                <h2 class="py-3" :title="userdata?.mobile ? userdata?.mobile : 'unavailable user mobile'">
                    <div>Contact</div>:&emsp;
                    <v-progress-linear v-if="loading" indeterminate location="left" color="pink-accent-2">
                    </v-progress-linear>
                    <span v-else>
                        {{
                            userdata?.mobile ?
                            userdata?.mobile :
                            "Not Found"
                        }}
                    </span>
                    <span v-if="userdata.mobile_verified" class="pl-5" title="verified"><v-icon size="20"
                            color="green-darken-2" icon="mdi-check-decagram"></v-icon></span>
                    <span v-else class="pl-5" title="not verified"><v-icon size="20" color="red-darken-2"
                            icon="mdi-close-circle-outline"></v-icon></span>
                </h2>
                <!-- <verify-data v-if="userdata.mobile" name="mobile number" verify="mobile" :data="userdata?.mobile" :isverified="userdata.mobile_verified" /> -->
            </div>

            <div class="myProfileDetails d-flex justify-space-between align-center">
                <h2 class="py-3" :title="userdata?.address ? userdata?.address : 'unavailable user address'">
                    <div>Address</div>:&emsp;
                    <v-progress-linear v-if="loading" indeterminate location="left" color="pink-accent-2">
                    </v-progress-linear>
                    <span v-else>
                        {{
                            userdata?.address ?
                            userdata?.address :
                            "NotFound"
                        }}
                    </span>
                </h2>
            </div>

            <div class="myProfileDetails d-flex justify-space-between align-center">
                <h2 class="py-3" :title="userdata?.city ? userdata?.city : 'unavailable user city'">
                    <div>City</div>:&emsp;
                    <v-progress-linear v-if="loading" indeterminate location="left" color="pink-accent-2">
                    </v-progress-linear>
                    <span v-else>
                        {{
                            userdata?.city ?
                            userdata?.city :
                            "Not Found"
                        }}
                    </span>
                </h2>
            </div>

            <div class="myProfileDetails d-flex justify-space-between align-center">
                <h2 class="py-3" :title="userdata?.state ? userdata?.state : 'unavailable user state'">
                    <div>State</div>:&emsp;
                    <v-progress-linear v-if="loading" indeterminate location="left" color="pink-accent-2">
                    </v-progress-linear>
                    <span v-else>
                        {{
                            userdata?.state ?
                            userdata?.state :
                            "NotFound"
                        }}
                    </span>
                </h2>
            </div>

            <div class="myProfileDetails d-flex justify-space-between align-center">
                <h2 class="py-3" :title="userdata?.country ? userdata?.country : 'unavailable user country'">
                    <div>Country</div>:&emsp;
                    <v-progress-linear v-if="loading" indeterminate location="left" color="pink-accent-2">
                    </v-progress-linear>
                    <span v-else>
                        {{
                            userdata?.country ?
                            userdata?.country :
                            "NotFound"
                        }}
                    </span>
                </h2>
            </div>

            <v-btn class="my-7" width="100%" height="40" color="blue" @click="router.push('/profile/editprofile')">Edit
                Details</v-btn>
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
//@ts-ignore
import VerifyData from '@/components/profile/VerifyData.vue';

const router = useRouter();
const { cookies } = useCookies();

const loading = ref(true);
const profilePicture = ref('');
window.scrollTo({ top: 0, behavior: 'smooth' });

let userdata = ref({
    name: null,
    picture: null,
    roles: [],
    email: null,
    email_verified: null,
    mobile: null,
    mobile_verified: null,
    address: null,
    city: null,
    state: null,
    country: null,
});

const name = ref(null);
const count = ref(0);
const profileStatus = ref(0);
const profilecolor = ref('');

let user = reactive({
    email: null,
    picture: null
});

if (cookies.get("token")) {
    //@ts-ignore
    user = jwtDecode(cookies.get("token"))?.userData;
}

async function getUser() {
    const res = await api?.user?.getUserData({ params: { email: user?.email } });
    if (res?.status === 200) {        
        for(let data in userdata.value) {
            if(res?.data?.data[data] === false || res?.data?.data[data] === "" || res?.data?.data[data] === undefined) {
                continue;
            }else {
                //@ts-ignore
                userdata.value[data] = res?.data?.data[data];
                count.value++;
            }
        }
        name.value = res?.data?.data?.name?.toUpperCase();
        profileStatus.value = Math.ceil((count.value / Object.entries(userdata.value).length) * 100);
        
        if (profileStatus.value <= 33) {
            profilecolor.value = 'red';
        } else if (profileStatus.value < 66) {
            profilecolor.value = 'lime-lighten-1';
        } else {
            profilecolor.value = 'green';
        }
    }
    loading.value = false
}

setTimeout(() => {
    if (!userdata?.value?.picture) {
        profilePicture.value = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
    }
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
    width: 150px;
    font-size: 22px;
    font-weight: 400;
}
</style>