<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="12" sm="5">
            <v-card class="pa-5 pb-sm-10 pt-sm-8 bg-grey-lighten-5 rounded-xl" elevation="8">
                <div class="mx-md-10 mb-7 text-h5 text-md-h4 text-grey-darken-3">Create new password</div>
                <v-text-field class="my-2 mx-10" v-model="email" disabled variant="outlined"
                    label="please enter your login email">

                </v-text-field>
                <v-text-field class="my-2 mx-md-10" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" v-model="newPassword.value.value"
                    :error-messages="newPassword.errorMessage.value" variant="outlined" label="new password">

                </v-text-field>
                <v-text-field class="mt-2 mx-md-10" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show2 = !show2" :type="show2 ? 'text' : 'password'" v-model="confirmPassword.value.value"
                    :error-messages="confirmPassword.errorMessage.value" variant="outlined" label="confirm password">

                </v-text-field>

                <div v-if="userNotFound" class="px-10 mb-3 text-body-2 text-red">User Not Found! Please enter correct email
                </div>
                <div v-if="passwordCreated" class="px-10 mb-3 text-body-1 text-green">Password Updated!</div>

                <div class="d-flex flex-column align-center justify-center">
                    <div>
                        <v-btn color="green" :loading="loader" width="300" variant="elevated" class="mb-5"
                            @click="handleCreateNewPassword">Create New Password</v-btn>
                    </div>
                    <div>
                        <v-btn color="red" width="300" variant="tonal" @click="deleteOTP">Close</v-btn>
                    </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
//@ts-ignore
import api from '@/data/api/index.js';
import { useRouter } from 'vue-router';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
const props = defineProps(['email'])
const email = ref(props?.email);
const router = useRouter();
const userNotFound = ref(false);
const passwordCreated = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const loader = ref(false);

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        newPassword: (value: string) => {
            if (!value) {
                return 'Required.'
            }
            if ((value.length < 8) || (value.length >= 8 && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value)))) {
                return 'Min 8 characters which muct include atleast one lowercase, one uppercase character, one digit and one special character'
            }
            if (value.length >= 8 && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).*$/.test(value))) {
                return true
            }
        },
        confirmPassword: (value: string) => {
            if (newPassword.value.value !== value) {
                return 'Password mismatched'
            } else if (newPassword.value.value === value) {
                return true
            }
        }
    }
})

const newPassword = useField('newPassword');
const confirmPassword = useField('confirmPassword');

const handleCreateNewPassword = handleSubmit(async (values: any) => {
    loader.value = true;
    userNotFound.value = false;
    passwordCreated.value = false;

    const res = await api.user.isUserExist({ params: { email: email.value } });
    if (res?.status === 200) {
        const passwordUpdateRes = await api.user.updatePassword({
            email: email.value,
            password: values?.newPassword
        });

        if (passwordUpdateRes?.status === 200) {
            passwordCreated.value = true;
            loader.value = false;
            handleReset();
            setTimeout(() => {
                router.push('/')
            }, 3000);
        } else {
            alert("Password creation Unsuccessful");
        }
    } else {
        userNotFound.value = true;
    }
})

function deleteOTP() {
    if (cookies.get('OTP')) {
        cookies.remove("OTP");
    }
    router.back();
}

</script>

<style scoped></style>