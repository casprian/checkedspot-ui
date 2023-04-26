<template>
    <v-container class="bg-background" style="height: calc(100vh - 48px)" fluid>
        <v-row v-if="login" no-gutters justify="center">
            <v-col cols="11">
                <v-sheet>
                    <div class="text-h5 py-6 bg-background">Sign In</div>
                    <v-container fluid class="bg-background">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Email*" hint="use Sign Up email to Sign In" required
                                    v-model="userDetail.email"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Password*" type="password" required
                                    v-model="userDetail.password"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12">
                                <small>*indicates required field</small>
                                <div v-if="retrySignIn" class="text-body-2 text-red">
                                    Invalid email or password
                                </div>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="authenticateUser" class="ma-3" density="default" prepend-icon="mdi-login"
                                    elevation="4" variant="flat" color="blue" width="300px">
                                    Login
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="changeForm" class="ma-3" density="default" prepend-icon="mdi-account"
                                    elevation="4" variant="flat" color="green" width="300px">
                                    Sign Up
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="router.back()" class="ma-3" density="default" prepend-icon="mdi-cancel"
                                    elevation="4" variant="text" color="red" width="300px">
                                    close
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row v-if="signup" no-gutters justify="center">
            <v-col cols="11">
                <v-sheet>
                    <div class="text-h5 py-6 bg-background">Sign Up</div>
                    <v-container fluid class="bg-background">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Full name*" type="text"
                                    hint="use Sign Up email to Sign In" required v-model="userDetail.name"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Email*" type="email" hint="Enter valid email"
                                    required v-model="userDetail.email"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Password*" type="password"
                                    hint="Password must be greater 8 character and have atleast one number, a special character an uppercase and a lowercase letter"
                                    required v-model="userDetail.password"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="outlined" label="Mobile" hint="Enter valid mibile number"
                                    v-model="userDetail.mobile"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col cols="12">
                                <small>*indicates required field</small>
                            </v-col>
                        </v-row>
                        <div v-if="welcome" class="text-h5 my-6 text-green">Welcome!!! You have successfully signed up <br>Login by clicking login button below</div>
                        <div v-if="failed" class="text-h5 my-6 text-red">Error!!! Please Enter valid data to register <br/><small class="text-caption">{{ errormessage }}</small></div>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="createUser" class="ma-3" density="default" prepend-icon="mdi-account"
                                    elevation="4" variant="flat" color="green" width="300px">
                                    Sign Up
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="changeForm" class="ma-3" density="default" prepend-icon="mdi-login"
                                    elevation="4" variant="flat" color="blue" width="300px">
                                    Login
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="center">
                            <v-col cols="auto">
                                <v-btn @click="router.back()" class="ma-3" density="default" prepend-icon="mdi-cancel"
                                    elevation="4" variant="text" color="red" width="300px">
                                    close
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userDetail = reactive({
    name: "",
    email: "",
    password: "",
    mobile: ""
});

const login = ref(true);
const signup = ref(false);
function changeForm() {
    login.value = !login.value;
    signup.value = !signup.value;
}

const token = ref(null);
const retrySignIn = ref(false);
function authenticateUser() {
    axios
        .post("https://apicheckedspot.azurewebsites.net/user/login", {
            email: userDetail.email,
            password: userDetail.password,
        })
        .then((response) => {
            console.log(response);
            if (response?.data?.token) {
                sessionStorage.setItem("token", response?.data?.token);
                token.value = response?.data?.token;
                retrySignIn.value = false;
                router.push('/');
            } else {
                token.value = null;
                retrySignIn.value = true;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

const welcome = ref(false);
const failed = ref(false)
const errormessage = ref('');
function createUser() {
    axios.post('http://localhost:8080/user/register', {
        name: userDetail.name,
        email: userDetail.email,
        password: userDetail.password,
        mobile: userDetail.mobile
    }).then((response) => {
        console.log(response)
        if (response?.data?.status === 200) {
            welcome.value = true;
            failed.value = false;
        } else {
            errormessage.value = response?.data?.message;
            welcome.value = false;
            failed.value = true;
        }
    })
}
</script>

<style></style>