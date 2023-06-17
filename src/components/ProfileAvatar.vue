<template>
  <v-dialog v-model="dialog" scrollable width="auto" class="d-flex align-start justify-end mr-n6 pt-10">
    <template v-slot:activator="{ props }">
      <v-avatar @click="changeDialog" color="grey-darken-3" class="profileAvatar"
        :image="user.picture ? user.picture : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"
        v-bind="props" title="click to view profile"></v-avatar>
    </template>
    <div class="mainCont pa-2 rounded-xl bg-grey-lighten-4">
      <v-row no-gutters>
        <v-col cols="12" class="d-flex flex-column mb-5 px-5  pt-4 bg-white rounded-t-xl rounded-b-lg">
          <v-row no-gutters class="d-flex pb-3">
            <v-col class="avatarRelative" cols="3">
              <v-avatar color="grey-darken-3"
                :image="user.picture ? user.picture : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"
                size="75"></v-avatar>
              <div class="avatarIcon  rounded-circle bg-white elevation-1 pa-1 d-flex align-center justify-center">
                <v-icon @click="() => handleRouting('profile')" icon="mdi-camera" size="15" color="black"></v-icon>
              </div>
            </v-col>
            <v-col cols="9" class="ml-0 mt-5">
              <h6 class="text-body-1 font-weight-medium">{{ user.name ? user.name : "xyz" }}</h6>
              <p class="text-body-2">{{ user.email ? user.email : "xyz@gmail.com" }}</p>
              <v-btn @click="() => handleRouting('profile')" class="mt-5 rounded-lg" variant="outlined">Manage Your Account</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="mb-1">
          <v-progress-linear v-if="loader" color="deep-purple-accent-4" indeterminate rounded
            height="3"></v-progress-linear>
        </v-col>
        <v-col cols="12" class="mt-0 mb-4">
          <v-btn @click="handleSignout" block variant="flat" class="text-body-1 d-flex justify-start bg-grey-lighten-4"
            height="50">
            <template v-slot:prepend>
              <v-icon icon="mdi-logout" class="ml-10 mr-6" size="20"></v-icon>
            </template> Sign out
          </v-btn>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12" class="d-flex align-center justify-center mb-2 mt-4">
          <v-btn @click="() => handleRouting('privacypolicy')" variant="flat" density="compact"
            class="text-body-2 font-weight-light bg-grey-lighten-4">Privacy
            Policy</v-btn>
          <div class="rounded-circle bg-black ma-1"></div>
          <v-btn @click="() => handleRouting('termsofservices')" variant="flat" density="compact"
            class="text-body-2 font-weight-light bg-grey-lighten-4">Terms of
            Service</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCookies } from 'vue3-cookies';
import { useRouter } from 'vue-router';
import jwtDecode from 'jwt-decode';

const router = useRouter();
const { cookies } = useCookies();
const user = ref({
  name: null,
  email: null,
  picture: null
});

if (cookies.get('token')) {
  //@ts-ignore
  user.value = jwtDecode(cookies.get('token'))?.userData;
}
const loader = ref(true);
const dialog = ref(false);

function changeDialog() {
  dialog.value = !dialog.value;
  setTimeout(() => {
    loader.value = false;
  }, 1000);
}

function handleSignout() {
  cookies.remove('token');
  const splitDomain = (location.hostname).split('www.');
  const domain = splitDomain[splitDomain.length - 1];
  document.cookie = `token=; Max-Age=0; path=/; domain=${domain}`;
  location.replace(window.origin);
}

function handleRouting(routeTo:string) {
  router.push(`/${routeTo}`);
  dialog.value = false;
}

</script>

<style scoped>
.mainCont {
  max-width: 400px;
}

.profileAvatar:hover,
.avatarIcon:hover {
  cursor: pointer;
}

.avatarRelative {
  position: relative;
}

.avatarIcon {
  position: absolute;
  left: 50px;
  top: 50px;
}

.bg-black {
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 1px solid rgb(255, 251, 251);
}</style>