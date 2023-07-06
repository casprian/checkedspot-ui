<template>
    <div>
        <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
            <template v-if="props.isverified === true" v-slot:activator="{ props }">
                <v-btn disabled v-bind="props" icon="mdi-dots-vertical" variant="text"></v-btn>
            </template>
            <template v-else v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-dots-vertical" variant="text"></v-btn>
            </template>

            <v-card min-width="200" class="pa-2">
                <v-btn block variant="text" @click="handelDialog">Verify</v-btn>
                <v-btn block variant="text" @click="menu = false">Cancel</v-btn>
            </v-card>
        </v-menu>
        <v-dialog transition="dialog-bottom-transition" fullscreen width="100%" v-model="dialog">
            <v-card>
                <v-toolbar color="primary">
                    <v-btn icon class="hidden-xs-only">
                        <v-icon>mdi-check-decagram</v-icon>
                    </v-btn>
                    <v-toolbar-title>Verify {{ props.name }}</v-toolbar-title>
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <h3 class="text-h4 text-center px-10 mt-10">Enter OTP sent on your registered {{ props.name }}</h3>
                <v-row no-gutters class="mt-12 d-flex justify-center">
                    <v-col cols="11" sm="6">
                        <v-text-field v-model="otp.value.value" :error-messages="otp.errorMessage.value" variant="outlined"
                            label="OTP" hint="Enter OTP">
                        </v-text-field>

                        <div class="d-flex flex-column align-center justify-center">
                            <div class="text-caption mb-5 text-center">if not received OTP on click of SEND OTP Button.
                                Click on RESEND OTP Button which will appear after 30 seconds.</div>
                            <div>
                                <v-btn v-if="sendBtn" class="mb-5" color="green" width="300" variant="elevated"
                                    @click="sendOTP">Send OTP</v-btn>
                                <div v-if="timer <= 30 && !sendBtn" class="text-body-1" style="width:300;">Resend OTP in
                                    00:{{ timer < 10 ? `0${timer}` : timer }} sec</div>
                                </div>
                                <div>
                                    <v-btn v-if="!sendBtn" class="mb-5" color="green" width="300" variant="elevated"
                                        @click="verifyEmail">Verify {{ props.name }}</v-btn>
                                </div>
                                <div>
                                    <v-btn v-if="!sendBtn && timer >= 31" class="mb-5" color="blue" width="300"
                                        variant="elevated" @click="sendOTP">Resend
                                        OTP</v-btn>
                                </div>
                                <div>
                                    <v-btn color="red" width="300" variant="tonal" @click="dialog = false">Close</v-btn>
                                </div>
                            </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { useCookies } from 'vue3-cookies';
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['name', 'isverified', 'verify', 'data'])
const dialog = ref(false);
const menu = ref(false);
const sendBtn = ref(true);
const timer = ref(0);
const refreshIntervalId = ref();
const router = useRouter();
const { cookies } = useCookies();

if (cookies.get('OTP')) {
    sendBtn.value = false;
}

let { handleSubmit, handleReset } = useForm({
    validationSchema: {
        otp(value: any) {
            if (!value) {
                return 'required'
            } else if (value) {
                if (value?.length === 6 && /[0-9-]+/.test(value)) {
                    return true
                } else if (value?.length > 6 && /[0-9-]+/.test(value)) {
                    return 'OTP must be six digit number.'
                } else {
                    return 'OTP must be six digit number.'
                }
            }
        }
    }
})

const otp = useField('otp');

async function handelDialog() {
    menu.value = false;
    dialog.value = true;
}

async function sendOTP() {
    let res;
    if (props.verify === "email") {
        res = await api?.email?.sendOTP({
            email: props.data
        })
        if (res?.status === 200) {
            console.log(res)
            if (cookies.get('OTP')) {
                sendBtn.value = false;
            }

            refreshIntervalId.value = setInterval(() => {
                if (timer.value === 30) {
                    clearInterval(refreshIntervalId.value);
                }
                timer.value++;
            }, 1000);


        }
    } else if (props.verify === "mobile") {
        console.log(props.verify);
        //api to send email to mobile number
    }
}

const verifyEmail = handleSubmit(async (values) => {
    let res;
    if (props.verify === 'email') {
        res = await api?.email?.verifyEmail({ email: props.data, OTP: values.otp });
    } else if (props.verify === 'mobile') {
        //include mobile verification api
        console.log("MOBILE: MOBILE")
    }

    if (res?.data?.status === 200) {
        dialog.value = false;
        cookies.remove('OTP');
    } else {
        router.push({ path: '/error', query: { status: res?.data?.status } })
    }

})

</script>

<style scoped></style>