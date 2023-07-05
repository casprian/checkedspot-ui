<template>
  <!-- <div v-if="screenWidth >= 960"> -->
  <div class="d-none d-md-block">
    <v-app-bar :elevation="2" density="default">
      <template v-slot:prepend>
        <v-img @click="router.push('/')" class="logo" width="200px" height="100px"
          src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" />
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
        <v-btn v-if="!hastoken" @click="router.push('/signin')" variant="outlined" class="ml-2"
          color="deep-purple-lighten-2">
          LOGIN
        </v-btn>
        <v-btn v-if="!hastoken" @click="router.push('/signup')" variant="flat" class="ml-3 mr-5"
          color="deep-purple-lighten-2">
          REGISTER
        </v-btn>
        <v-btn v-if="hastoken" @click="handleCreateProperty" variant="flat" class="ml-3 mr-5"
          color="deep-purple-lighten-2">
          Add Property
        </v-btn>
        <div v-if="hastoken" class="pa-0 ma-0">
          <profile-avatar class="ProfileAvatarComp" />
        </div>
      </template>
    </v-app-bar>
  </div>
  <div class="w-100 w-md-0 d-block d-md-none ">
    <v-app-bar :elevation="2" density="default">

      <template v-slot:prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-img @click="router.push('/')" class="logo" width="200px" height="100px"
            src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" />
        </v-toolbar-title>
      </template>
      <template v-slot:append>
        <div v-if="hastoken" class="pa-0 ma-0">
          <profile-avatar class="ProfileAvatarComp" />
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-btn block @click="router.push('/')" variant="flat" class="my-2">
        HOME
      </v-btn>
      <v-btn block @click="router.push('/aboutus')" variant="flat" class="my-2">
        WHO WE ARE
      </v-btn>
      <v-btn block @click="router.push('/whatwedo')" variant="flat" class="my-2">
        WHAT WE DO
      </v-btn>
      <v-btn block @click="router.push('/contactus')" variant="flat" class="my-2">
        Contact
      </v-btn>
      <v-btn block v-if="!hastoken" @click="router.push('/signin')" variant="outlined" class="my-2"
        color="deep-purple-lighten-2">
        LOGIN
      </v-btn>
      <v-btn block v-if="!hastoken" @click="router.push('/signup')" variant="flat" class="my-3"
        color="deep-purple-lighten-2">
        REGISTER
      </v-btn>
      <v-btn block v-if="hastoken" @click="handleCreateProperty" variant="flat" class="my-3" color="deep-purple-lighten-2">
        Add Property
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useCookies } from "vue3-cookies";
//@ts-ignore
import ProfileAvatar from '@/components/ProfileAvatar.vue'

const showProfile = ref(false);

watch(showProfile, (newshowProfile) => {
  console.log(newshowProfile)
})
const screenWidth = ref(window.innerWidth);
const { cookies } = useCookies();
const router = useRouter();
const drawer = ref(false)

const hastoken = ref(false);
if (cookies.get('token')) {
  hastoken.value = true;
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
.profileAvatar {
  cursor: pointer;
}

.ProfileAvatarComp {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 150 !important;
  overflow: scroll;
}
</style>