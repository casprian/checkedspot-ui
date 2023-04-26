<template>
  <v-app-bar :elevation="2" density="compact">

    <template v-slot:prepend>
      <v-img @click="router.push('/')" class="logo" width="200px" height="100px" src="../../assets/logocheckedspot.png" />
    </template>


    <template v-slot:append>
      <v-btn prepend-icon="mdi-vuetify" variant="outlined" class="ml-2">
        Contact
      </v-btn>
      <v-btn v-if="!hastoken" @click="openSignInPage" prepend-icon="mdi-magnify" variant="outlined" class="ml-2">
        Login
      </v-btn>
      <v-btn v-else @click="deleteToken" variant="outlined" class="ml-2">
        Logout
      </v-btn>
      <v-btn disabled @click="router.push('/profile')" prepend-icon="mdi-dots-vertical" variant="outlined" class="ml-2">
        Add/Manage Properties
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { ref } from 'vue';
const router = useRouter();
function openSignInPage() {
  router.push('/authenticate')
}
const hastoken = ref(false);
const token = sessionStorage.getItem('token');
if (token) {
  hastoken.value = true;
}

function deleteToken() {
  sessionStorage.removeItem('token')
}

</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>