<template>
    <v-container 
        v-if="(route?.query?.q === 'reset' && cookies.get('token')) || route?.query?.q === 'forget'" 
        fluid 
        class="pt-12 d-flex align-center wallpaper"
    >
        <forget-password v-if="route?.query?.q === 'forget'" />
        <reset-password v-if="route?.query?.q === 'reset' && email" :email="email" />
    </v-container>
</template>

<script lang="ts" setup>
//@ts-ignore
import ForgetPassword from '@/components/password-handeling/ForgetPassword.vue';
//@ts-ignore
import ResetPassword from '@/components/password-handeling/ResetPassword.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useCookies } from 'vue3-cookies';
import jwtDecode from 'jwt-decode';

const route = useRoute();
const router = useRouter();
const email = ref(null);
const { cookies } = useCookies();

if (route?.query?.q === 'reset' && !cookies.get('token')) {
    router.push('/');
} else if (route?.query?.q === 'reset' && cookies.get('token')) {
    //@ts-ignore
    email.value = jwtDecode(cookies.get('token'))?.userData?.email;
}
</script>

<style scoped>
.wallpaper {
    height: 100%;
    background-image: url('../assets//img001.jpg');
    background-size: cover;
}
</style>