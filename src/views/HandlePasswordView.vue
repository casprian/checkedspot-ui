<template>
    <v-alert v-model="otpDelivered" location="top center" elevation="2" type="success" closable title="OTP Sent"
        :text="'OTP has been sent to ' + email.value.value"></v-alert>
    <v-container fluid class="pt-16 pb-16 d-flex align-center wallpaper">
        <v-row v-if="!verifiedUser" no-gutters class="d-flex justify-center">
            <v-col cols="12" sm="5">
                <v-card class="pa-5 pb-sm-10 pt-sm-8 bg-grey-lighten-5 rounded-xl" elevation="8">
                    <div class="mx-md-10 mb-7 text-h5 text-md-h4 text-grey-darken-3">User Verification</div>
                    <v-text-field class="my-2 mx-md-10" :disabled="!sendBtn ? true : false" v-model="email.value.value"
                        :error-messages="email.errorMessage.value" variant="outlined" label="please enter your login email">
                    </v-text-field>

                    <v-text-field v-if="!sendBtn" class="mx-md-10" v-model="otp.value.value"
                        :error-messages="otp.errorMessage.value" variant="outlined" label="OTP" hint="Enter OTP">
                    </v-text-field>

                    <div class="d-flex flex-column align-center justify-center">
                        <div v-if="!sendBtn" class="text-caption mb-5 text-center">if not received OTP on click of SEND OTP
                            Button. Click on RESEND OTP Button which will appear after 30 seconds.</div>
                        <div>
                            <v-btn 
                                v-if="sendBtn" 
                                :disabled="!validEmail" 
                                :loading="loader1" 
                                class="mb-5" 
                                color="green"
                                width="300" 
                                variant="elevated" 
                                @click="sendOTP"
                            >
                                Send OTP
                            </v-btn>

                            <div v-if="timer > 0 && !sendBtn" class="text-body-1" style="width:300;">Resend OTP in
                                00:{{ timer < 10 ? `0${timer}` : timer }} sec</div>
                            </div>
                            <div>
                                <v-btn v-if="!sendBtn" :disabled="!validOtp" :loading="loader2" class="mb-5" color="green"
                                    width="300" variant="elevated" @click="verifyEmail">Verify email</v-btn>
                            </div>
                            <div>
                                <v-btn v-if="!sendBtn && timer <= 0" class="mb-5" color="blue" width="300"
                                    variant="elevated" @click="sendOTP">Resend
                                    OTP</v-btn>
                            </div>
                            <div>
                                <v-btn color="red" width="300" variant="tonal" @click="deleteOTP">Close</v-btn>
                            </div>
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <forget-password v-if="route?.query?.q === 'forget' && verifiedUser" :email="email.value.value" />
        <reset-password v-if="route?.query?.q === 'reset' && email" :email="email" />
    </v-container>
</template>

<script lang="ts" setup>
//@ts-ignore
import ForgetPassword from '@/components/password-handeling/ForgetPassword.vue';
//@ts-ignore
import ResetPassword from '@/components/password-handeling/ResetPassword.vue';
//@ts-ignore
import api from '@/data/api/index.js'
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useCookies } from 'vue3-cookies';
import jwtDecode from 'jwt-decode';

const dialog = ref(false);
const otpDelivered = ref(false);
const sendBtn = ref(true);
const timer = ref(30);
const validEmail = ref(false);
const validOtp = ref(false);
const refreshIntervalId = ref();
const route = useRoute();
const router = useRouter();
const verifiedUser = ref(false);
const { cookies } = useCookies();
const loader1 = ref(false);
const loader2 = ref(false);


let { handleSubmit, handleReset } = useForm({
    validationSchema: {
        email(value: any) {
            if (!value) {
                validEmail.value = false;
                return 'Required';
            }
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
                validEmail.value = true;
                return true;
            }
            validEmail.value = false;
            return 'Must be a valid e-mail.';
        },
        otp(value: any) {
            if (!value) {
                validOtp.value = false;
                return 'required'
            } else if (value) {
                if (value?.length === 6 && /[0-9-]+/.test(value)) {
                    validOtp.value = true;
                    return true
                } else if (value?.length > 6 && /[0-9-]+/.test(value)) {
                    validOtp.value = false;
                    return 'OTP must be six digit number.'
                } else {
                    validOtp.value = false;
                    return 'OTP must be six digit number.'
                }
            }
        }
    }
})
const email = useField('email');
const otp = useField('otp');


if (route?.query?.q === 'reset' && !cookies.get('token')) {
    router.push('/');
} else if (route?.query?.q === 'reset' && cookies.get('token')) {
    verifiedUser.value = true;
    //@ts-ignore
    email.value = jwtDecode(cookies.get('token'))?.userData?.email;
}

async function sendOTP() {
    loader1.value = true;
    if (validEmail.value) {
        const res = await api?.email?.sendOTP({
            email: email?.value?.value
        })
        if (res?.status === 200) {
            if (cookies.get('OTP')) {
                sendBtn.value = false;
                loader1.value = false;
                otpDelivered.value = true;
                setTimeout(() => {
                    otpDelivered.value = false;
                }, 2000);
            }

            refreshIntervalId.value = setInterval(() => {
                if (timer.value === 0) {
                    clearInterval(refreshIntervalId.value);
                }
                timer.value--;
            }, 1000);
        }
    }
}

async function verifyEmail() {
    loader2.value = true;
    if (validOtp.value) {
        const res = await api?.email?.verifyEmail({ email: email?.value?.value, OTP: otp?.value?.value });
        if (res?.status === 200) {
            dialog.value = false;
            cookies.remove('OTP');
            verifiedUser.value = true;
            loader2.value = false;
        } else {
            router.push({ path: '/error', query: { status: res?.data?.status } })
        }
    }
}
function deleteOTP() {
    if (cookies.get('OTP')) {
        cookies.remove("OTP");
    }
    router.back();
}
</script>

<style scoped>
.wallpaper {
    height: 100%;
    background-image: url('../assets//img001.jpg');
    background-size: cover;
}</style>