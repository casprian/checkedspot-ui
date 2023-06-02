<template>
    <v-container class="bg-background" style="height: auto" fluid>
        <v-row no-gutters justify="center" :class="loader === true ? 'blurCont' : ''">
            <v-col cols="11">
                <v-sheet>
                    <div class="text-h5 py-6 bg-background">Sign Up</div>
                    <v-container fluid class="bg-background">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field 
                                    v-model="name.value.value"
                                    :error-messages="name.errorMessage.value"
                                    class="mr-10"
                                    type="text"                                    
                                    required 
                                    variant="outlined" 
                                    label="Full name*" 
                                    hint="use Sign Up email to Sign In" 
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field 
                                    v-model="email.value.value"
                                    :error-messages="email.errorMessage.value"
                                    class="mr-10"
                                    type="email"
                                    variant="outlined" 
                                    label="Email*" 
                                    hint="Enter valid email"
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
                                    variant="outlined"
                                    label="Password*" 
                                    @click:append="show1 = !show1"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field                                    
                                    v-model="mobile.value.value"
                                    :error-messages="mobile.errorMessage.value"
                                    class="mr-10"
                                    variant="outlined" 
                                    label="Mobile" 
                                    hint="Enter valid mibile number"
                                ></v-text-field>
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
                                <v-btn 
                                    @click="createUser"
                                    type="submit"
                                    class="ma-3" 
                                    density="default" 
                                    prepend-icon="mdi-account"
                                    elevation="4" 
                                    variant="flat" 
                                    color="green" 
                                    width="300px"
                                >
                                    Sign Up
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn 
                                    @click="router.push('login')" 
                                    class="ma-3" 
                                    density="default" 
                                    prepend-icon="mdi-login"
                                    elevation="4" 
                                    variant="flat" 
                                    color="blue" 
                                    width="300px"
                                >
                                    Login
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn 
                                    @click="router.back()" 
                                    class="ma-3" 
                                    density="default" 
                                    prepend-icon="mdi-cancel"
                                    elevation="4" 
                                    variant="text" 
                                    color="red" 
                                    width="300px"
                                >
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useField, useForm } from 'vee-validate';

const router = useRouter();

//form validation
const show1 = ref(false);

let { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value:any) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        mobile(value:any) {
            if(!value) {
                return true
            }else if(value) {
                if(value?.length === 10 && /[0-9-]+/.test(value)) {
                    return true
                }else if(value?.length > 10  && /[0-9-]+/.test(value)) {
                    return 'Phone number needs to be at exactly 10 digits.'
                }else {
                    return 'Phone number needs to be exactly 10 digits.'
                }
            }
        },
        email(value:any) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
        password(value:any) {
            if(!value) return 'Required.';
            if((value.length < 8) ||(value.length >= 8 && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value)))) return 'Min 8 characters which muct include atleast one lowercase, one uppercase character, one digit and one special character'

            if(value.length >= 8 && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value))) return true
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
 const createUser = handleSubmit(async(values) => {
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