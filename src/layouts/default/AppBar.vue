<template>
  <v-app-bar :elevation="2" density="comfortable">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="smNav" variant="text" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-img @click="router.push('/')" class="logo" width="175px" height="70px"
        src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" />
    </template>

    <template v-slot:append>
      <div class="lgNav">
        <v-btn @click="router.push('/')" variant="flat" height="32">
          HOME
        </v-btn>
        <v-btn @click="router.push('/aboutus')" variant="flat" height="32">
          WHO WE ARE
        </v-btn>
        <!-- <v-btn @click="router.push('/whatwedo')" variant="flat" class="ml-1">
          WHAT WE DO
        </v-btn> -->
        <v-btn @click="router.push('/contactus')" variant="flat" class="ml-1" height="32">
          Contact
        </v-btn>
        <v-btn v-if="!hastoken" @click="router.push('/signin')" variant="outlined" class="ml-1"
          color="pink-darken-2" height="32">
          LOGIN
        </v-btn>
        <v-btn v-if="!hastoken" @click="router.push('/signup')" variant="flat" class="ml-2 mr-2" height="32"
          color="pink-darken-2">
          REGISTER
        </v-btn>
        <v-btn @click="handleCreateProperty" variant="flat" class="mr-4" color="pink-darken-4" height="32">
          Post Property
        </v-btn>
      </div>
      <div v-if="hastoken" class="pa-0 ma-0 mr-2 mr-md-0">
        <profile-avatar class="ProfileAvatarComp" />
      </div>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary class="pt-3">
    <div class="px-5">
      <v-btn width="100%" @click="router.push('/')" variant="flat" class="my-2" height="32">
        HOME
      </v-btn>
    </div>
    <div class="px-5">
      <v-btn width="100%" @click="router.push('/aboutus')" variant="flat" class="my-2" height="32">
        WHO WE ARE
      </v-btn>
    </div>
    <!-- <div class="px-5">
      <v-btn width="100%" @click="router.push('/whatwedo')" variant="flat" class="my-2">
        WHAT WE DO
      </v-btn>
    </div> -->
    <div class="px-5">
      <v-btn width="100%" @click="router.push('/contactus')" variant="flat" class="my-2" height="32">
        Contact
      </v-btn>
    </div>
    <div class="px-5">
      <v-btn width="100%" v-if="!hastoken" @click="router.push('/signin')" variant="outlined" class="my-2"
        color="pink-darken-2" height="32">
        LOGIN
      </v-btn>
    </div>
    <div class="px-5">
      <v-btn width="100%" v-if="!hastoken" @click="router.push('/signup')" variant="flat" class="my-3"
        color="pink-darken-2" height="32">
        REGISTER
      </v-btn>
    </div>
    <div class="px-5">
      <v-btn width="100%" @click="handleCreateProperty" variant="flat" class="my-3" color="pink-darken-4" height="32">
        Post Property
      </v-btn>
    </div>
  </v-navigation-drawer>
  <v-btn class="contact" density="comfortable" size="x-large" color="blue" icon="mdi-phone"></v-btn>
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

const { cookies } = useCookies();
const router = useRouter();
const drawer = ref(false)

const hastoken = ref(false);
if (cookies.get('token')) {
  hastoken.value = true;
}

function handleCreateProperty() {
  // if (!cookies.get('token')) {
  //   router.push({ path: '/authorization', query: { message: "createProperty" } });
  //   return;
  // } else {
  router.push('/createproperty');
  //   return;
  // }
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

@media only screen and (max-width: 900px) {
  .lgNav {
    display: none;
  }

  .smNav {
    display: block;
  }

  .contact {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1;
  }
}

@media only screen and (min-width: 901px) {
  .lgNav {
    display: block;
  }

  .smNav {
    display: none;
  }

  .contact {
    display: none;
  }

}
</style>