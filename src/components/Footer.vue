<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters class="bg-grey-lighten-2 d-flex py-5 px-5 px-sm-10 px-md-14">
            <!-- <v-col cols="12" sm="4" class="pa-0">
                
            </v-col> -->
            <v-col cols="12" sm="6" class="">
                <div v-for="(link, index) in links" :key="index">
                    <v-btn @click="router.push(link.routeTo)" color="grey-darken-3" variant="text" class="text-none mx-2" rounded="xl">
                        {{ link.name }}
                    </v-btn>
                </div>
                <div>
                    <v-btn v-if="!cookies.get('token')" @click="router.push('/signin')" color="grey-darken-3" variant="text"
                        class="text-none mx-2" rounded="xl">
                        Login
                    </v-btn>
                </div>
                <div>
                    <v-btn v-if="!cookies.get('token')" @click="router.push('/signup')" color="grey-darken-3" variant="text"
                        class="text-none mx-2" rounded="xl">
                        Register
                    </v-btn>
                </div>
                <div>
                    <v-btn v-if="cookies.get('token')" @click="handleSignout" color="grey-darken-3" variant="text" class="text-none mx-2"
                        rounded="xl">
                        Logout
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex flex-column align-start align-sm-center mt-5 mt-sm-0">
                <div>
                    <v-img @click="router.push('/')" class="logo" width="200" src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" alt="logo"></v-img>
                </div>
                <div class="pl-6">
                    <v-btn class="text-none " variant="outlined" color="grey-darken-3" @click="router.push('/contactus')">Contact Us</v-btn>
                </div>
                <div class="pl-6 pt-5">
                    <span v-for="icon in icons" :key="icon">
                        <v-btn :icon="icon" variant="plain" size="small"></v-btn>
                    </span>
                </div>
            </v-col>
        </v-row>
        <v-row no-gutters class="bg-grey-darken-3">
            <v-col cols="12" sm="6" class="px-4 pt-2 py-sm-2 text-caption font-weight-light text-grey-lighten-5 text-center">
                Copyright © 2023 <strong>Checked Spot</strong> - All Rights Reserved.
            </v-col>
            <v-col cols="12" sm="6" class="px-4 pb-2 py-sm-2 text-caption font-weight-light text-grey-lighten-5 text-center">
                <button @click="router.push('/privacypolicy')">privacy policy</button>
                <span>&nbsp; | &nbsp;</span>
                <button @click="router.push('/termsofservices')">terms of services</button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const router = useRouter();

const icons = reactive(['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'])

const links = reactive([
    {
        name: 'Home',
        routeTo: '/'
    },
    {
        name: 'Who we are',
        routeTo: '/aboutus'
    }
])

function handleSignout() {
    cookies.remove('token');
    location.replace(window.origin);
}

</script>

<style scoped>
.logo:hover {
    cursor: pointer;
}
</style>