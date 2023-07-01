<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="12" sm="5">
            <v-card class="pa-5 py-sm-12 bg-grey-lighten-5" elevation="8">
                <v-text-field class="my-2 mx-10" v-model="email.value.value" :error-messages="email.errorMessage.value" variant="outlined" label="please enter your login email">
            
                </v-text-field>
                <v-text-field class="my-2 ml-10" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" v-model="newPassword.value.value" :error-messages="newPassword.errorMessage.value" variant="outlined" label="new password">
                    
                </v-text-field>
                <v-text-field class="my-2 ml-10" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show2 = !show2" :type="show2 ? 'text' : 'password'" v-model="confirmPassword.value.value" :error-messages="confirmPassword.errorMessage.value" variant="outlined" label="confirm password">
                    
                </v-text-field>
            
                <div class="d-flex justify-center">
                    <v-btn color="green" @click="handleCreateNewPassword">Create New Password</v-btn>
                </div>
                <div v-if="passwordMismatched" class="errormessage">password mismatched</div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
//@ts-ignore
import api from '@/data/api/index.js';

const passwordMismatched = ref(false);
const show1 = ref(false);
const show2 = ref(false);

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        email(value: any) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
                return true;
            }
            return 'Must be a valid e-mail.';
        },
        newPassword: (value:string) => {
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
        confirmPassword: (value:string) => {
            if(newPassword.value.value !== value) {
                return 'Password mismatched'
            }else if(newPassword.value.value === value) {
                return true
            }
        }
    } 
})
const email = useField('email');
const newPassword = useField('newPassword');
const confirmPassword = useField('confirmPassword');


const handleCreateNewPassword = handleSubmit(async(values: any) => {
    const password = values?.newPassword;

    console.log(password);
    //1. check for existing email in DB
    const res = await api.user.isUserExist({params: {email: values?.email}});
    if(res?.status === 200) {

        //2. if email found in DB update the password in DB corresponding to that email.
    }else {
        alert("User Email Incorrect!")
    }

})

</script>

<style scoped>

</style>