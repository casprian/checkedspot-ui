<template>
    <v-row justify="center">
        <v-dialog v-model="signInModel" persistent width="1024">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" prepend-icon="mdi-magnify" variant="outlined" class="ml-2">
                    Sign In
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Sign In Please</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Email*" hint="use Sign Up email to Sign In" required v-model="userDetail.email
                                "></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Password*" type="password" required v-model="userDetail.password"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                    <div v-if="retrySignIn" class="text-body-2 text-red">Invalid email or password</div>
                </v-card-text>
                <v-card-actions>
                    
        <v-dialog v-model="signUpModel" persistent width="1024">
            <template v-slot:activator="{ props }">
                <v-btn @click="signInModel=false" color="primary" v-bind="props">
                    Sign Up
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal first name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal middle name"
                                    hint="example of helper text only on focus"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                    persistent-hint required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Password*" type="password" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interests" multiple></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="signUpModel = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="signUpModel = false">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
                    <!-- <v-btn color="blue-darken-1" variant="text"> -->
                        <!-- <sign-up-form @closedialog="dialog=false" /> -->
                    <!-- </v-btn> -->
                    <v-spacer></v-spacer>
                    <v-btn @click="authenticateUser" color="blue-darken-1" variant="text">
                        Sign In
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="signInModel = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-row>
</template>

<script lang="ts" setup>
import SignUpForm from '@/components/authentication/SignUpForm.vue';
import axios from 'axios';
import { reactive, ref } from 'vue';
const signUpModel = ref(false);
const userDetail = reactive({
    email: "",
    password: ""
})

const signInModel = ref(false);
const token = ref(null);
const retrySignIn = ref(false);

function authenticateUser() {
    axios.post('http://localhost:8080/user/login',{
        email: userDetail.email,
        password: userDetail.password
    }).then((response) => {
        console.log(response);
        if(response?.data?.token){
            token.value=response?.data?.token;
            signInModel.value = false;
        }else {
            token.value = null;            
            signInModel.value = true;
        }
    }).catch((error) => {
        console.log(error)
    })

    if(signInModel.value === true) {
        retrySignIn.value = true;
    }else {
        retrySignIn.value = false;
    }

}

</script>


<style>

</style>