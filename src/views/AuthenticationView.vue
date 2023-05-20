<template>
    <v-container class="bg-background" style="height: auto" fluid>
        <v-row v-if="message" class="ma-3 ml-12">
            <div class="text-h5 text-pink-accent-3 font-weight-medium">
                Please login to create Property...
            </div>
        </v-row>
        <v-row v-if="login" no-gutters justify="center" :class="loader === true ? 'blurCont' : ''">
            <v-col cols="11">
                <v-sheet>
                    <div v-if="alreadyLoggedIn" class="text-h5 text-pink-accent-3 font-weight-medium">Already Logged In!
                        Please refresh you page.
                    </div>
                    <div class="text-h5 py-6 bg-background">Login</div>
                    <v-container fluid class="bg-background">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Email*" hint="use Sign Up email to Sign In" required
                                    v-model="userDetail.email"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Password*" type="password" required
                                    v-model="userDetail.password"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12">
                                <small>*indicates required field</small>
                                <div v-if="retrySignIn" class="text-h6 text-pink-accent-3 font-weight-medium">
                                    Invalid email or password
                                </div>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="authenticateUser" class="ma-3" density="default" prepend-icon="mdi-login"
                                    elevation="4" variant="flat" color="blue" width="300px">
                                    Login
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="changeForm" class="ma-3" density="default" prepend-icon="mdi-account"
                                    elevation="4" variant="flat" color="green" width="300px">
                                    Sign Up
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="router.back()" class="ma-3" density="default" prepend-icon="mdi-cancel"
                                    elevation="4" variant="text" color="red" width="300px">
                                    close
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row v-if="signup" no-gutters justify="center" :class="loader === true ? 'blurCont' : ''">
            <v-col cols="11">
                <v-sheet>
                    <div class="text-h5 py-6 bg-background">Sign Up</div>
                    <v-container fluid class="bg-background">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Full name*" type="text"
                                    hint="use Sign Up email to Sign In" required v-model="userDetail.name"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Email*" type="email" hint="Enter valid email"
                                    required v-model="userDetail.email"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Password*" type="password"
                                    hint="Password must be greater 8 character and have atleast one number, a special character an uppercase and a lowercase letter"
                                    required v-model="userDetail.password"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Mobile" hint="Enter valid mibile number"
                                    v-model="userDetail.mobile"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12">
                                <small>*indicates required field</small>
                            </v-col>
                        </v-row>
                        <div v-if="welcome" class="text-h5 my-6 text-green">Welcome!!! You have successfully signed up
                            <br>Login by clicking login button below
                        </div>
                        <div v-if="failed" class="text-h5 my-6 text-red">Error!!! Please Enter valid data to register
                            <br /><small class="text-body-2">{{ errormessage }}</small>
                        </div>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="createUser" class="ma-3" density="default" prepend-icon="mdi-account"
                                    elevation="4" variant="flat" color="green" width="300px">
                                    Sign Up
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="changeForm" class="ma-3" density="default" prepend-icon="mdi-login"
                                    elevation="4" variant="flat" color="blue" width="300px">
                                    Login
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="router.back()" class="ma-3" density="default" prepend-icon="mdi-cancel"
                                    elevation="4" variant="text" color="red" width="300px">
                                    close
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
    <div v-if="loader" class="loaderCont">
        <v-progress-circular :size="40" indeterminate color="pink-accent-3"></v-progress-circular>
    </div>
</template>

<script lang="ts" setup>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from '@/data/api/index.js';
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const message = ref(route?.query?.message === 'createProperty');
setTimeout(() => {
    message.value = false;
}, 5000);

const userDetail = reactive({
    name: "",
    email: "",
    password: "",
    mobile: ""
});

const login = ref(true);
const signup = ref(false);
function changeForm() {
    login.value = !login.value;
    signup.value = !signup.value;
}

const alreadyLoggedIn = ref(false);
const loader = ref(false);
const token = ref(null);
const retrySignIn = ref(false);
async function authenticateUser() {
    if (sessionStorage.getItem('token')) {
        alreadyLoggedIn.value = true;
        return;
    }
    loader.value = true;
    retrySignIn.value = false;
    const res = await api?.user?.login({
        email: userDetail.email,
        password: userDetail.password,
    });

    if (res?.data?.token) {
        sessionStorage.setItem("token", res?.data?.token);
        localStorage.setItem('email', userDetail?.email);
        token.value = res?.data?.token;
        retrySignIn.value = false;
        loader.value = false;
        router.push('/');
    } else {
        token.value = null;
        retrySignIn.value = true;
        loader.value = false;
    }
}

const welcome = ref(false);
const failed = ref(false);
const errormessage = ref('');
async function createUser() {
    loader.value = true;
    welcome.value = false;
    failed.value = false;
    
    const res = await api?.user?.signup({
        name: userDetail.name,
        email: userDetail.email,
        password: userDetail.password,
        mobile: userDetail.mobile
    })

    if (res?.data?.status === 200) {
        welcome.value = true;
        failed.value = false;
        loader.value = false;
    } else {
        errormessage.value = res?.data?.message;
        welcome.value = false;
        failed.value = true;
        loader.value = false;
    }
}
</script>

<style scoped>
.blurCont {
    filter: blur(2px);
}

.loaderCont {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>