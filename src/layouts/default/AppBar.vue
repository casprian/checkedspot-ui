<template>
  <v-app-bar :elevation="2" density="compact" class="pa-2">
    <template v-slot:prepend>
      <v-img @click="router.push('/')" class="logo" width="230px" height="100px" src="../../assets/logocheckedspot.png" />
    </template>

    <template v-slot:append>
      <v-btn  @click="openContactPage" variant="flat" class="ml-2">
        HOME
      </v-btn>
      <v-btn  @click="openContactPage" variant="flat" class="ml-2">
        WHO WE ARE
      </v-btn>
      <v-btn  @click="openContactPage" variant="flat" class="ml-2">
        WHAT WE DO
      </v-btn>
      <v-btn  @click="openContactPage" variant="flat" class="ml-2 mr-5">
        CONTACT
      </v-btn>
      <v-btn v-if="!hastoken" @click="openSignInPage"  variant="outlined" class="ml-2" color="deep-purple-lighten-2">
        LOGIN
      </v-btn>
      <v-btn v-else @click="handleLogout"  variant="outlined" class="ml-2" color="deep-purple-lighten-2">
        LOGOUT
      </v-btn>
      <v-btn  @click="openContactPage" variant="flat" class="ml-3 mr-8 " color="deep-purple-lighten-2">
        REGISTER
      </v-btn>
      <!-- <v-btn prepend-icon="mdi-plus" @click="handleCreateProperty" variant="outlined" class="ml-2">
        Add Property
      </v-btn> -->
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
    router.push({path:'/login', query: {message: "createProperty"}});
    return;
  } else {
    router.push('/createproperty');
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