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
        <v-btn @click="router.push('/contactus')" variant="flat" class="ml-1" height="32">
          Contact
        </v-btn>
        <v-btn v-if="!hastoken" @click="router.push('/signin')" variant="outlined" class="ml-1" color="pink-darken-2"
          height="32">
          LOGIN
        </v-btn>
        <v-btn v-if="!hastoken" @click="router.push('/signup')" variant="flat" class="ml-2 mr-2" height="32"
          color="pink-darken-2">
          REGISTER
        </v-btn>
        <v-btn @click="handleCreateProperty" variant="flat" class="mr-2" color="pink-darken-4" height="32">
          Post Property
        </v-btn>
        <v-btn v-if="hastoken" @click="router.push('/userdashboard')" variant="flat" class="mr-4" color="pink-darken-4"
          height="32">
          My Dashboard
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
      <v-btn width="100%" v-if="hastoken" @click="router.push('/userdashboard')" variant="flat" class="my-3"
        color="pink-darken-4" height="32">
        My Dashboard
      </v-btn>
    </div>
  </v-navigation-drawer>
  <a :href=webWhatsapphref style="text-decoration: none;"  target="_blank" v-if="!isMobileDevice">
    <v-btn class="whatsapp1" density="comfortable" size="large" color="green" icon="mdi-whatsapp"></v-btn>
  </a>
  <v-dialog width="350" v-if="isMobileDevice">
    <template v-slot:activator="{ props }">
      <v-btn class="connectUs" v-bind="props" text="Open Dialog" density="comfortable" size="large"
        color="blue" icon="mdi-account-box"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="rounded-pill">
        <div class="d-flex pa-3 py-7 pt-10 justify-space-around">
          <a :href=mobileContacthref style="text-decoration: none; width: 35%;" class="d-flex flex-column align-center">
            <v-btn class="phone" size="small" color="blue" icon="mdi-phone"></v-btn>
            <div class="text-center mt-1" style="font-size: 20px; color: grey; cursor: pointer;">Call</div>
          </a>
          <a :href=webWhatsapphref target="_blank" style="text-decoration: none; width: 45%;"
            class="d-flex flex-column align-center">
            <v-btn class="whatsapp2" size="small" color="green" icon="mdi-whatsapp"></v-btn>
            <div class="text-center mt-1" style="font-size: 20px; color: grey; cursor: pointer;">Whatsapp</div>
          </a>
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useCookies } from "vue3-cookies";
//@ts-ignore
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import axios from 'axios';
//@ts-ignore
import { baseURL } from '@/data/axios/interceptor.js'

const webWhatsapphref = ref('');
const mobileContacthref= ref('');

async function getContact() {
  const response = await axios.get(`${baseURL}/contact`);

  const contact = parseInt(response?.data?.contact);
  webWhatsapphref.value = `https://wa.me/${contact}`;
  mobileContacthref.value = `tel:${contact}`;
}


const { cookies } = useCookies();
const router = useRouter();
const drawer = ref(false)

const hastoken = ref(false);
if (cookies.get('token')) {
  hastoken.value = true;
}

function handleCreateProperty() {
  router.push('/createproperty');
}

let details = ref(navigator.userAgent);
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = ref(regexp.test(details.value));

onMounted(async() => {
  await getContact();
})
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

.whatsapp1{
    display: block;
    position: fixed;
    font-size: 16px;
    z-index: 1;
    bottom: 20px;
    right: 20px;
}

.connectUs {
    display: block;
    position: fixed;
    font-size: 16px;
    bottom: 20px;
    right: 20px;
    z-index: 1;
  }

  .phone{
    font-size: 14px;
  }
  .whatsapp2{
    font-size: 16px;
    z-index: 1;
  }

@media only screen and (max-width: 900px) {
  .lgNav {
    display: none;
  }

  .smNav {
    display: block;
  }
}

@media only screen and (min-width: 901px) {
  .lgNav {
    display: block;
  }

  .smNav {
    display: none;
  }
}
</style>