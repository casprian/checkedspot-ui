<template>
  <v-app-bar :elevation="2" density="compact">
    <template v-slot:prepend>
      <v-img @click="router.push('/')" class="logo" width="200px" height="100px" src="../../assets/logocheckedspot.png" />
    </template>

    <template v-slot:append>
      <v-btn prepend-icon="mdi-phone-classic" @click="openContactPage" variant="outlined" class="ml-2">
        Contact
      </v-btn>
      <v-btn v-if="!hastoken" @click="openSignInPage" prepend-icon="mdi-login" variant="outlined" class="ml-2">
        Login
      </v-btn>
      <v-btn v-else @click="handleLogout" prepend-icon="mdi-logout" variant="outlined" class="ml-2">
        Logout
      </v-btn>
      <v-btn prepend-icon="mdi-plus" @click="handleCreateProperty" variant="outlined" class="ml-2">
        Add Property
      </v-btn>
      <v-btn v-if="false" @click="handlePropertyManagement" prepend-icon="mdi-dots-vertical" variant="outlined" class="ml-2">
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
  router.push('/login');
}
const hastoken = ref(false);
const token = sessionStorage.getItem('token');
if (token) {
  hastoken.value = true;
}

function handleLogout() {
  sessionStorage.removeItem('token');
  router.push('/');
}

function openContactPage() {
  router.push('/contactUs');
}

function handleCreateProperty() {
  if (!sessionStorage.getItem('token')) {
    router.push({path:'login', query: {message: "createProperty"}});
    return;
  } else {
    router.push('createproperty');
    return;
  }
}

function handlePropertyManagement() {
  if (!sessionStorage.getItem('token')) {
    alert("Please Login to continue");
  } else {
    router.push('/profile')
  }
}

</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>