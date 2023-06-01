<template>
    <v-container class="bg-background" style="height: 100%" fluid>
        <v-row v-if="message" class="ma-3 ml-12">
            <div class="text-h5 text-pink-accent-3 font-weight-medium">
                Please Sign In to Add Property...
            </div>
        </v-row>
        <v-row no-gutters justify="center" :class="loader === true ? 'blurCont' : ''" class="login">
            <v-col cols="11">
                <v-sheet height="100%">
                    <div v-if="alreadyLoggedIn" class="text-h5 text-pink-accent-3 font-weight-medium">Already Logged In!
                        Please refresh you page.
                    </div>
                    <div class="text-h5 py-6 bg-background">Sign In</div>
                    <v-container style="height:89%" fluid
                        class="bg-background pa-0 d-flex flex-column justify-space-between">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                                            variant="outlined" class="mr-10" label="Email*"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="password.value.value"
                                            :error-messages="password.errorMessage.value"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show1 ? 'text' : 'password'" counter persistent-counter
                                            variant="outlined" label="Password*"
                                            @click:append="show1 = !show1"></v-text-field>
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
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="mr-5">
                            <v-col cols="12">      
                                <v-row no-gutters justify="center">
                                    <v-col cols="auto">
                                        <v-btn @click="getAuthorizationUrl" class="google-signin-button ma-3" density="default" width="300px">
                                            <div class="google-icon-wrapper">
                                                <img class="google-icon" src="../assets/images/Google_Logo.png" alt="G" />
                                            </div>
                                            <span class="google-button-text">Sign in with Google</span>
                                        </v-btn>
                                    </v-col>
                                </v-row> 
                                <v-row no-gutters justify="center">
                                    <v-col cols="auto">
                                        <v-btn type="submit" @click="loginHandler" class="ma-3" density="default"
                                            prepend-icon="mdi-login" elevation="4" variant="flat" color="blue"
                                            width="300px">
                                            Sign In
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <!-- <v-row no-gutters justify="center">
                                    <v-col cols="auto">
                                        <v-btn @click="router.push('signup')" class="ma-3" density="default"
                                            prepend-icon="mdi-account" elevation="4" variant="flat" color="green" width="300px">
                                            Sign Up
                                        </v-btn>
                                    </v-col>
                                </v-row> -->
                                    
                                <v-row no-gutters justify="center">
                                    <v-col cols="auto">
                                        <v-btn @click="router.back()" class="ma-3" density="default"
                                            prepend-icon="mdi-cancel" elevation="4" variant="text" color="red"
                                            width="300px">
                                            close
                                        </v-btn>
                                    </v-col>
                                </v-row>                     
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
    <v-overlay :model-value="loader" class="align-center justify-center">
        <v-progress-circular color="pink-accent-3" indeterminate size="50"></v-progress-circular>
    </v-overlay>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from '@/data/api/index.js';
import { ref } from "vue";
import axios from 'axios';
import { useRoute, useRouter } from "vue-router";
import { useField, useForm } from 'vee-validate';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const router = useRouter();
const route = useRoute();

//form Validation
const show1 = ref(false);

let { handleSubmit, handleReset } = useForm({
    validationSchema: {
        email(value: any) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
                return true;
            }
            return 'Must be a valid e-mail.';
        },
        password(value: any) {
            if (!value) {
                return 'Required.'
            }
            if ((value.length < 8) || (value.length >= 8 && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value)))) {
                return 'Min 8 characters which must include atleast one lowercase, one uppercase character, one digit and one special character';
            }
            if (value.length >= 8 && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value))) {
                return true;
            }
        }
    }
})
const email = useField('email');
const password = useField('password');

const message = ref(route?.query?.message === 'createProperty');
setTimeout(() => {
    message.value = false;
}, 5000);


const alreadyLoggedIn = ref(false);
const loader = ref(false);
const token = ref(null);
const retrySignIn = ref(false);

const loginHandler = handleSubmit(async (values: any) => {
    if (sessionStorage.getItem('token')) {
        alreadyLoggedIn.value = true;
        return;
    }
    loader.value = true;
    retrySignIn.value = false;
    const res = await api?.user?.login({
        email: values.email,
        password: values.password,
    });

    if (res?.data?.token) {
        localStorage.setItem('email', values?.email);
        cookies.set("token", res?.data?.token, '1h')
        token.value = res?.data?.token;
        retrySignIn.value = false;
        loader.value = false;
        router.push('/');
    } else {
        token.value = null;
        retrySignIn.value = true;
        loader.value = false;
    }
})

function getAuthorizationUrl() {
  axios.get('http://localhost:8080/user/getAuthorizationUrl').then(res => {
    console.log(res)
    window.open(res?.data?.url, '_self')
  }).catch(err => {
    console.log(err);
  })
}
</script>

<style scoped>
.blurCont {
    filter: blur(2px);
}

.login {
    height: 100%;
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

.google-signin-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
    transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
}

.google-signin-button:hover {
    background-color: #eee;
}

.google-icon-wrapper {
    width: 18px;
    height: 18px;
    margin-right: 16px;
}

.google-icon {
    width: 18px;
    height: 18px;
}

.google-button-text {
    font-size: 14px;
    font-weight: 500;
}
</style>