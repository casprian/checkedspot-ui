<template>
    <footer>
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
                        <v-img @click="router.push('/home')" class="logo" width="200" src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" alt="logo"></v-img>
                    </div>
                    <div class="pl-6">
                        <v-btn class="text-none " variant="outlined" color="pink-darken-2" @click="router.push('/contactus')">Contact Us</v-btn>
                    </div>
                    <div class="pl-6 pt-5">
                        <span v-for="(icon, index) in icons" :key="index">
                            <a :href="icon.redirect" target="_blank"><v-btn :icon="icon.icon" variant="text" color="pink-darken-2" size="small"></v-btn></a>
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
    </footer>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const router = useRouter();

const icons = reactive([
    {icon: 'mdi-facebook', redirect: 'https://www.facebook.com/profile.php?id=100087665173644&mibextid=ZbWKwL'}, 
    {icon: 'mdi-twitter', redirect: 'https://twitter.com/checked_spot?s=11&t=JRmzWKcign7CxX39ZwKZLA'}, 
    {icon: 'mdi-linkedin', redirect: 'https://www.linkedin.com/in/checked-spot-0b036126b'}, 
    {icon: 'mdi-instagram', redirect: 'https://instagram.com/checkedspot?igshid=NjIwNzIyMDk2Mg=='}
])

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