<template>
    <v-row no-gutters class="pr-10 pb-14">
        <v-col cols="12" class="pa-0">
            <v-btn @click="loginwithFacebook" class="googlesignin" title="Sign in with Google">
                <!-- <img class="google-icon mr-4" src="https://checkedspot.blob.core.windows.net/assets/Google_Logo.png"
                    alt="G" /> -->
                    <span>Sign in with Facebook</span>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import axios from 'axios';

async function loginwithFacebook() {
   const res = await axios.get('https://api.checkedspot.com/user/getauthurl');
   console.log(res?.data?.url)
   window.open(res?.data?.url, '_self')
   console.log(res)
   
}
</script>
 
<style scoped>

</style>