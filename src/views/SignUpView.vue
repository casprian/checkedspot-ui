<template>
    <v-container class="pa-0" style="height: 100%" fluid>
        <v-row no-gutters :class="loader === true ? 'blurCont' : ''">
            <v-col cols="0" sm="5" class="px-7 py-10 leftSec">
                
            </v-col>
            <v-col cols="11" sm="7" class="pa-10">
                <v-sheet class="d-flex justify-center">
                    <v-container class="pa-0 formCont">
                        <div class="text-h5 font-weight-medium pb-14">Sign up to Checkedspot</div>

                        <v-row no-gutters class="pr-10 pb-14">
                            <v-col cols="12" class="pa-0">
                                <button @click="getAuthorizationUrl" class="googlesignup" title="Sign in with Google">
                                    <img class="google-icon mr-4" src="https://checkedspot.blob.core.windows.net/assets/Google_Logo.png" alt="G"/><span>Sign up with Google</span>
                                </button>
                            </v-col>
                        </v-row>

                        <div class="divider mb-14 mr-10">
                            <div class="circle-icon">
                                OR
                            </div>
                        </div>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="name.value.value" :error-messages="name.errorMessage.value"
                                    class="mr-10" type="text" required variant="outlined" label="Full name*"
                                    hint="use Sign Up email to Sign In"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                                    class="mr-10" type="email" variant="outlined" label="Email*"
                                    hint="Enter valid email"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="password.value.value" :error-messages="password.errorMessage.value"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                                    counter persistent-counter variant="outlined" label="Password*"
                                    @click:append="show1 = !show1"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="mobile.value.value" :error-messages="mobile.errorMessage.value"
                                    class="mr-10" variant="outlined" label="Mobile"
                                    hint="Enter valid mibile number"></v-text-field>
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

                        <v-row no-gutters class="pr-10 pt-9">
                            <v-col cols="12" class="pa-0">
                                <v-btn @click="createUser" type="submit" density="default"
                                    prepend-icon="mdi-account" elevation="4" variant="flat" color="green" width="100%">
                                    Sign Up
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
import { useField, useForm } from 'vee-validate';

//form validation
const show1 = ref(false);

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
        },
        email(value: any) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
        password(value: any) {
            if (!value) return 'Required.';
            if ((value.length < 8) || (value.length >= 8 && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value)))) return 'Min 8 characters which muct include atleast one lowercase, one uppercase character, one digit and one special character'

            if (value.length >= 8 && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value))) return true
        }
    }
})
const email = useField('email');
const password = useField('password');
const name = useField('name');
const mobile = useField('mobile');

const loader = ref(false);

const welcome = ref(false);
const failed = ref(false);
const errormessage = ref('');
const createUser = handleSubmit(async (values) => {
    loader.value = true;
    welcome.value = false;
    failed.value = false;

    const res = await api?.user?.signup({
        name: values.name,
        email: values.email,
        password: values.password,
        mobile: values.mobile
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
})

async function getAuthorizationUrl() {
    const res = await api?.user?.getAuthorizationUrl({params:{}});
    window.open(res?.data?.url, '_self');
}
</script>

<style scoped>
.blurCont {
    filter: blur(2px);
}

.leftSec {
    background-image: linear-gradient(180deg, rgba(255,255,255,0.7) 3%, rgba(252,252,252,0.7) 52%), url('https://checkedspot.blob.core.windows.net/assets/pexels-laura-tancredi-7078692.jpg');
    background-size: cover;
}

.formCont {
    width: 75%;
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

.googlesignup {
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
</style>