<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-col cols="12" sm="5">
            <v-card class="pa-5 py-sm-12 bg-grey-lighten-5" elevation="8">
                <v-text-field class="my-2 ml-10" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" v-model="currentPassword.value.value" :error-messages="currentPassword.errorMessage.value" variant="outlined" label="current password">

                </v-text-field>
                <v-text-field class="my-2 ml-10" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show2 = !show2" :type="show2 ? 'text' : 'password'" v-model="newPassword.value.value" :error-messages="newPassword.errorMessage.value" variant="outlined" label="new password">

                </v-text-field>
                <v-text-field class="my-2 ml-10" :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show3 = !show3" :type="show3 ? 'text' : 'password'" v-model="confirmPassword.value.value" :error-messages="confirmPassword.errorMessage.value" variant="outlined" label="confirm password">

                </v-text-field>

                <div class="d-flex justify-center">
                    <v-btn color="green" @click="handelUpdate">Update Password</v-btn>
                </div>
                <div v-if="passwordMismatched" class="errormessage">password mismatched</div>
                <div v-if="currentPasswordIncorrect" class="errormessage">current password is incorrect</div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';

const props = defineProps(['email']);
const passwordMismatched = ref(false);
const currentPasswordIncorrect = ref(false);
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        currentPassword: (value: string) => {
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
            if(newPassword.value.value !== value) {
                return 'Password mismatched'
            }else if(newPassword.value.value === value) {
                return true
            }
        }
    }
})

const currentPassword = useField('currentPassword');
const newPassword = useField('newPassword');
const confirmPassword = useField('confirmPassword');

const handelUpdate = handleSubmit(async(values: any) => {
    console.log(values);
    
})

</script>

<style scoped></style>