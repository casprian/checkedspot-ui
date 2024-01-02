<template>
    <v-container v-if="!cookies.get('token')" class="pa-0" style="height: 100%" fluid>
        <v-row v-if="message" class="ma-3 ml-12">
            <div class="text-h6 text-pink-accent-3 font-weight-medium pb-6">
                Please Sign In to Post Property...
            </div>
        </v-row>
        <v-row no-gutters justify="center" :class="loader === true ? 'blurCont' : ''" class="login">
            <v-col cols="0" sm="5" class="px-7 py-10 leftSec">

            </v-col>
            <v-col cols="11" sm="7" class="py-10 pa-sm-10">
                <v-sheet class="d-flex justify-center">
                    <v-container class="pa-0 d-flex flex-column justify-space-between formCont">
                        <div v-if="alreadyLoggedIn" class="text-h6 text-pink-accent-3 font-weight-medium  pb-6">Already
                            Logged In!
                            Please refresh you page.
                        </div>
                        <div class="text-h5 font-weight-medium pb-14">Sign in to Checked Spot</div>

                        <v-row no-gutters class="pr-10 pb-14">
                            <v-col cols="12" class="pa-0">
                                <button @click="getAuthorizationUrl" class="googlesignin" title="Sign in with Google">
                                    <img class="google-icon mr-4"
                                        src="https://checkedspot.blob.core.windows.net/assets/Google_Logo.png"
                                        alt="G" /><span>Sign in with Google</span>
                                </button>
                            </v-col>
                        </v-row>

                        <!-- <facebook-o-auth /> -->

                        <div class="divider mb-14 mr-10">
                            <div class="circle-icon">
                                OR
                            </div>
                        </div>

                        <v-row no-gutters>
                            <v-col cols="12">
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <v-text-field 
                                            v-model="email.value.value" 
                                            :error-messages="email.errorMessage.value"
                                            variant="outlined" 
                                            class="mr-10" 
                                            label="Email*"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field 
                                            v-model="password.value.value"
                                            :error-messages="password.errorMessage.value"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show1 ? 'text' : 'password'" 
                                            counter 
                                            persistent-counter
                                            variant="outlined" label="Password*"
                                            @click:append="show1 = !show1"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="12" class="pa-0">
                                        <div class="d-flex justify-space-between mr-10 mt-3">
                                            <small>*indicates required field</small>
                                            <small><button
                                                    @click="router.push({ path: '/password', query: { q: 'forget' } })"
                                                    class="text-blue-accent-3" title="click here to reset password">forget
                                                    password</button></small>
                                        </div>
                                        <div v-if="notFound" class="text-h6 text-pink-accent-3 font-weight-medium">
                                            User Does Not Exist!
                                        </div>
                                        <div v-if="retrySignIn" class="text-h6 text-pink-accent-3 font-weight-medium">
                                            Incorrect Password for the email!
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="pr-10 pt-5">
                            <v-col cols="12" class="pa-0">
                                <v-btn type="submit" @click="loginHandler" density="default" prepend-icon="mdi-login"
                                    elevation="4" variant="flat" color="green" width="100%">
                                    Sign In
                                </v-btn>
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
import { useRoute, useRouter } from "vue-router";
import { useField, useForm } from 'vee-validate';
import { useCookies } from "vue3-cookies";
// import FacebookOAuth from '@/components/oauth/FacebookOAuth.vue';

const { cookies } = useCookies();
const router = useRouter();

if (cookies.get('token')) {
    router.push('/home');
}

const route = useRoute();
const show1 = ref(false);

//form Validation
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
const retrySignIn = ref(false);
const notFound = ref(false);
const loginHandler = handleSubmit(async (values: any) => {
    if (cookies.get('token')) {
        alreadyLoggedIn.value = true;
        return;
    }
    loader.value = true;
    retrySignIn.value = false;
    notFound.value = false;

    const res = await api?.user?.login({
        email: values.email,
        password: values.password,
    });
    console.log(res)

    if (res?.status === 200) {
        retrySignIn.value = false;
        loader.value = false;
        location.replace(window.origin);
    } else if (res?.status === 404) {
        notFound.value = true;
        loader.value = false;
    } else if (res?.status === 409) {
        retrySignIn.value = true;
        loader.value = false;
    } else {
        router.push({ path: "/error", query: { status: res?.data?.status } });
        loader.value = false;
    }
})

async function getAuthorizationUrl() {
    loader.value = true;
    const res = await api?.user?.getAuthorizationUrl({ params: {} });
    console.log(res)
    setTimeout(() => {
        window.open(res?.data?.url, '_self');
    }, 500);
    loader.value = false;
}

</script>

<style scoped>
.blurCont {
    filter: blur(2px);
}

.leftSec {
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 3%, rgba(252, 252, 252, 0.7) 52%), url('https://checkedspot.blob.core.windows.net/assets/pexels-laura-tancredi-7078692.jpg');
    background-size: cover;
}

.formCont {
    width: 75%;
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


.googlesignin {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 10px;
    width: 100%;
    margin-right: 40px;
    border: solid #2196F3 1px;
    border-radius: 2px;
    color: #2196F3;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important
}

.googlesignin:hover {
    cursor: pointer;
}

.google-icon {
    width: 18px;
    height: 18px;
}

.divider {
    position: relative;
    height: 1px;
    background-color: grey;
}

.circle-icon {
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 800px) {
    .formCont {
        width: 95%;
    }
}

@media only screen and (max-width: 599px) {
    .formCont {
        width: 90%;
    }

    .leftSec {
        display: none;
    }
}
</style>