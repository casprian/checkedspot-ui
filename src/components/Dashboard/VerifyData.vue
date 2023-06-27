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
                            <div class="text-caption mb-5">Not received OTP? click on Resend OTP button to receive OTP</div>
                            <div>
                                <v-btn class="mb-5" color="green" width="300" variant="elevated"
                                    @click="handlesub">Verify OTP</v-btn>
                            </div>
                            <div>
                                <v-btn class="mb-5" color="blue" width="300" variant="elevated">Resend OTP</v-btn>
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
//@ts-ignore
import api from '@/data/api/index.js';

const props = defineProps(['name', 'isverified', 'verify', 'data'])
const dialog = ref(false);
const menu = ref(false);
const router = useRouter();

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
const responseOTP = ref('');

async function handelDialog() {
    menu.value = false;
    dialog.value = true;
    let res;
    if(props.verify === "email") {
        res = await api?.email?.getOTP({
            params: {
                email: props.data
            }
        })
    }else if(props.verify === "mobile") {
        console.log(props.verify);
        //GET OTP FROM BACKEND and verify it with otp sent on mobile.
    }
    if (res?.data?.status === 200) {
        responseOTP.value = res?.data?.OTP;
    }
}

const handlesub = handleSubmit(async (values) => {
    if (values.otp === responseOTP.value) {
        console.log(true)
        //call api and set verified_mobile or verified_email to true
        let res;
        if(props.verify === 'email'){            
            res = await api?.user?.updateProfile({email: props.data, verified_email: true});
        }else if(props.verify === 'mobile') {
            res = await api?.user?.updateProfile({email: props.data, verified_mobile: true});
        }
        if (res?.data?.status === 200) {
            dialog.value=false;
        } else {
            router.push({ path: '/error', query: { status: res?.data?.status } })
        }
    } else {
        console.log(false)
        //Prompt a message that OTP mismatch. Re-enter OTP
    }

})

</script>

<style scoped>
</style>