<template>
  <v-app-bar :elevation="2" density="default">
    <template v-slot:prepend>
      <v-img @click="router.push('/')" class="logo" width="200px" height="100px" src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" />
    </template>

    <template v-slot:append>
      <v-btn @click="router.push('/')" variant="flat" class="ml-2">
        HOME
      </v-btn>
      <v-btn @click="router.push('/aboutus')" variant="flat" class="ml-2">
        WHO WE ARE
      </v-btn>
      <v-btn @click="router.push('/whatwedo')" variant="flat" class="ml-2">
        WHAT WE DO
      </v-btn>
      <v-btn @click="router.push('/contactus')" variant="flat" class="ml-2">
        Contact
      </v-btn>
      <v-btn v-if="!hastoken" @click="router.push('/signin')" variant="outlined" class="ml-2" color="deep-purple-lighten-2">
        LOGIN
      </v-btn>
      <v-btn v-else @click="handleLogout" variant="outlined" class="ml-2" color="deep-purple-lighten-2">
        LOGOUT
      </v-btn>
      <v-btn v-if="!hastoken" @click="router.push('/signup')" variant="flat" class="ml-3 mr-5" color="deep-purple-lighten-2">
        REGISTER
      </v-btn>
      <v-btn v-if="hastoken" @click="handleCreateProperty" variant="flat" class="ml-3 mr-5" color="deep-purple-lighten-2">
        Add Property
      </v-btn>
      <div v-if="hastoken" class="pa-0 ma-0">
        <profile-avatar class="ProfileAvatarComp" />
      </div>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref , watch} from 'vue';
import { useRouter } from 'vue-router';
// import { ref } from 'vue';
import { useCookies } from "vue3-cookies";
import ProfileAvatar from '@/components/ProfileAvatar.vue'

const showProfile= ref(false);

watch(showProfile,(newshowProfile)=>{
  console.log(newshowProfile)
})

const { cookies } = useCookies();
const router = useRouter();

const hastoken = ref(false);
if (cookies.get('token')) {
  hastoken.value = true;
}

function handleLogout() {
  cookies.remove('token');
  const splitDomain = (location.hostname).split('www.');
  const domain = splitDomain[splitDomain.length - 1];
  document.cookie = `token=; Max-Age=0; path=/; domain=${domain}`;
  location.replace(window.origin);
}

function handleCreateProperty() {
  if (!cookies.get('token')) {
    router.push({ path: '/authorization', query: { message: "createProperty" } });
    return;
  } else {
    router.push('/createproperty');
    return;
  }
}

// Profile header

</script>

<style scoped>
.logo {
  cursor: pointer;
}

/* Profile Avatar */
.profileAvatar{
  cursor: pointer;
}

.ProfileAvatarComp{
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 150 !important;
  overflow: scroll;
}
</style>