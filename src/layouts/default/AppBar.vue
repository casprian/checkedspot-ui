<template>
  <v-app-bar :elevation="2" density="comfortable">
    <template v-slot:prepend>
      <span class="d-flex align-center">
        <v-app-bar-nav-icon class="smNav" variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <router-link to="/">
          <v-img class="logo" width="175px" height="70px"
            src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" />
        </router-link>
      </span>
    </template>

    <template v-slot:append>
      <div class="lgNav">
        <router-link to="/">
          <v-btn variant="flat" height="32">
            HOME
          </v-btn>
        </router-link>
        <router-link to="/aboutus">
          <v-btn variant="flat" height="32">
            WHO WE ARE
          </v-btn>
        </router-link>
        <router-link to="/contactus">
          <v-btn variant="flat" height="32">
            Contact
          </v-btn>
        </router-link>
        <router-link v-if="isMangement" to="/capture-lead">
          <v-btn variant="flat" class="ml-n2 mr-3" height="32">
            Lead
          </v-btn>
        </router-link>
        <router-link to="/signin" v-if="!hastoken">
          <v-btn variant="outlined" class="ml-1" color="pink-darken-2" height="32">
            LOGIN
          </v-btn>
        </router-link>
        <router-link to="/signup" v-if="!hastoken">
          <v-btn variant="flat" class="ml-2 mr-2" height="32" color="pink-darken-2">
            REGISTER
          </v-btn>
        </router-link>
        <router-link to="/createproperty">
          <v-btn variant="flat" class="mr-2" color="pink-darken-4" height="32">
            Post Property
          </v-btn>
        </router-link>
        <router-link to="/userdashboard" v-if="hastoken">
          <v-btn variant="flat" class="mr-4" color="pink-darken-4" height="32">
            My Dashboard
          </v-btn>
        </router-link>
      </div>
      <div v-if="hastoken" class="pa-0 ma-0 mr-2 mr-md-0">
        <profile-avatar class="ProfileAvatarComp" />
      </div>
    </template>
  </v-app-bar>


  <v-navigation-drawer v-model="drawer" location="left" temporary class="pt-3">

    <div class="px-5">
      <router-link to="/">
        <v-btn width="100%" variant="flat" class="my-2" height="32">
          HOME
        </v-btn>
      </router-link>

      <router-link to="/aboutus">
        <v-btn width="100%" variant="flat" class="my-2" height="32">
          WHO WE ARE
        </v-btn>
      </router-link>

      <router-link to="/contactus">
        <v-btn width="100%" variant="flat" class="my-2" height="32">
          Contact
        </v-btn>
      </router-link>

      <router-link v-if="isMangement" to="/capture-lead">
        <v-btn width="100%" variant="flat" class="my-2" height="32">
          Lead
        </v-btn>
      </router-link>

      <router-link to="/signin" v-if="!hastoken">
        <v-btn width="100%" variant="outlined" class="my-2" color="pink-darken-2" height="32">
          LOGIN
        </v-btn>
      </router-link>

      <router-link to="/signup" v-if="!hastoken">
        <v-btn width="100%" variant="flat" class="my-3" color="pink-darken-2" height="32">
          REGISTER
        </v-btn>
      </router-link>

      <router-link to="/createproperty">
        <v-btn width="100%" variant="flat" class="my-3" color="pink-darken-4" height="32">
          Post Property
        </v-btn>
      </router-link>

      <router-link to="/userdashboard" v-if="hastoken">
        <v-btn width="100%" variant="flat" class="my-3" color="pink-darken-4" height="32">
          My Dashboard
        </v-btn>
      </router-link>
    </div>

  </v-navigation-drawer>


  <a :href=webWhatsapphref style="text-decoration: none;" target="_blank" v-if="!isMobileDevice">
    <v-btn class="whatsapp1" density="comfortable" size="large" color="green" icon="mdi-whatsapp"></v-btn>
  </a>


  <v-dialog width="350" v-if="isMobileDevice">
    <template v-slot:activator="{ props }">
      <v-btn class="connectUs" v-bind="props" text="Open Dialog" density="comfortable" size="large" color="blue"
        icon="mdi-account-box"></v-btn>
    </template>

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


  </v-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCookies } from "vue3-cookies";
import jwtDecode from 'jwt-decode';
//@ts-ignore
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import axios from 'axios';
//@ts-ignore
import { baseURL } from '@/data/axios/interceptor.js'

const webWhatsapphref = ref('');
const mobileContacthref = ref('');

async function getContact() {
  const response = await axios.get(`${baseURL}/contact`);

  const contact = parseInt(response?.data?.contact);
  webWhatsapphref.value = `https://wa.me/91${contact}`;
  mobileContacthref.value = `tel:${contact}`;
}


const { cookies } = useCookies();
const router = useRouter();
const drawer = ref(false);
const isMangement = ref(false);

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

onMounted(async () => {
  if (cookies.get('token')) {
    const jwt = cookies?.get("token")?.split("Bearer ")[1];

    //@ts-ignore
    if (jwtDecode(jwt)?.userData?.roles?.includes("management")) {
      isMangement.value = true;
    } else {
      isMangement.value = false;
    }
  } else {
    isMangement.value = false;
  }

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

.whatsapp1 {
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

.phone {
  font-size: 14px;
}

.whatsapp2 {
  font-size: 16px;
  z-index: 1;
}

.lgNav {
  display: flex;
  justify-content: end;
  align-items: center;
}

.smNav {
  display: none;
}

@media only screen and (max-width: 960px) {
  .lgNav {
    display: none;
  }

  .smNav {
    display: block;
  }
}
</style>
