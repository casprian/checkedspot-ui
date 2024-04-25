<template>
    <footer class="bg-grey-darken-3">
        <v-container fluid class="footerconst pa-0 d-flex flex-column justify-space-between align-center">
            <v-row no-gutters class="topSection px-5 px-sm-10">
                <v-col cols="12" md="4" class="ml-n5 ml-md-0 d-flex justify-start align-center">
                    <router-link to="/">
                        <v-img class="logo" width="200"
                            src="../assets/footerlogo.svg" alt="logo"></v-img>
                    </router-link>
                </v-col>
                
                <!-- Navigation links -->
                <v-col cols="12" md="4"
                    class="d-flex flex-column justify-center align-start flex-md-row justify-md-space-around align-md-center">
                    <router-link to="/" class="footerlink py-1 py-md-0">Home</router-link>
                    <router-link to="/aboutus" class="footerlink py-1 py-md-0">About us</router-link>
                    <router-link to="/contactus" class="footerlink py-1 py-md-0">Contact</router-link>
                </v-col>
    
                <!-- Social Media Handles -->
                <v-col cols="12" md="4" class="mt-2 mt-md-0 ml-n2 ml-md-0 d-flex justify-start align-center justify-md-end">
                    <span v-for="(icon, index) in icons" :key="index">
                        <a :href="icon.redirect" target="_blank"><v-btn :icon="icon.icon" variant="text" color="white"
                                size="small"></v-btn></a>
                    </span>
                </v-col>
            </v-row>
    
            <v-row no-gutters class="bottomSection">
                <v-col cols="12" sm="6" class="pa-0 px-4 text-caption font-weight-light text-grey-lighten-5 text-center">
                    Copyright © 2023 <strong>Checked Spot</strong> - All Rights Reserved.
                </v-col>
    
                <v-col cols="12" sm="6" class="pa-0 px-4 text-caption font-weight-light text-grey-lighten-5 text-center">
                    <button class="footerlink" @click="router.push('/privacypolicy')">privacy policy</button>
                    <span>&nbsp; | &nbsp;</span>
                    <button class="footerlink" @click="router.push('/termsofservices')">terms of services</button>
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
    { icon: 'mdi-facebook', redirect: 'https://www.facebook.com/profile.php?id=100087665173644&mibextid=ZbWKwL' },
    { icon: 'mdi-twitter', redirect: 'https://twitter.com/checked_spot?s=11&t=JRmzWKcign7CxX39ZwKZLA' },
    { icon: 'mdi-linkedin', redirect: 'https://www.linkedin.com/in/checked-spot-0b036126b' },
    { icon: 'mdi-instagram', redirect: 'https://instagram.com/checkedspot?igshid=NjIwNzIyMDk2Mg==' }
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
a {
    text-decoration: none;
    color: white !important;
}

.logo:hover {
    cursor: pointer;
}

footer {
    height: auto;
}
.footerconst {
    width: 100%;
    padding: 30px 0;
}

.topSection {
    width: 100%;
    height: 180px;
}

.bottomSection {
    border-top: solid 2px #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 90%;
}

.footerlink:hover {
    border-bottom: solid 1px #f8485e;
}

@media screen and (max-width: 960px) {

    .footerconst {
        height: auto;
    }
    .topSection {
        height: auto;
        padding: 15px 0;
    }
    .bottomSection {
        width: 90%;
        height: auto;
    }
}
</style>