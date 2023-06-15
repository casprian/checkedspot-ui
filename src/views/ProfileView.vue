<template>
  <v-container class="mt-6">
    <v-row no-gutters>
      <v-col cols="12" md="6" class="elevation-2 pa-10 mb-10 mb-md-0">
        <v-row no-gutters>
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-avatar color="grey-darken-3"
              :image="userdata?.picture ? userdata?.picture : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"
              size="170"></v-avatar>
          </v-col>
          <v-col cols="12" class="pt-3 myProfileDetails">
            <h2 class="py-3" :title="userdata?.name ? userdata?.name : 'unavailable user name'">
              <div>Name</div> :&emsp;{{ userdata?.name ? userdata?.name : 'Not Found' }}
            </h2>
            <h2 class="py-3" :title="userdata?.email ? userdata?.email : 'unavailable user email'">
              <div>Email</div> :&emsp;{{ userdata?.email ? userdata?.email : 'Not Found' }}
            </h2>
            <h2 class="py-3" :title="userdata?.mobile ? userdata?.mobile : 'unavailable user mobile'">
              <div>Contact</div> :&emsp;{{ userdata?.mobile ? userdata?.mobile : 'Not Found' }}
            </h2>
            <h2 class="py-3" :title="userdata?.address ? userdata?.address : 'unavailable user address'">
              <div>Adress</div> :&emsp;{{ userdata?.address ? userdata?.address : 'Not Found' }}
            </h2>
            <h2 class="py-3" :title="userdata?.city ? userdata?.city : 'unavailable user city'">
              <div>City</div> :&emsp;{{ userdata?.city ? userdata?.city : 'Not Found' }}
            </h2>
            <h2 class="py-3" :title="userdata?.state ? userdata?.state : 'unavailable user state'">
              <div>State</div> :&emsp;{{ userdata?.state ? userdata?.state : 'Not Found' }}
            </h2>
            <h2 class="py-3" :title="userdata?.country ? userdata?.country : 'unavailable user country'">
              <div>Country</div> :&emsp;{{ userdata?.country ? userdata?.country : 'Not Found' }}
            </h2>
          </v-col>
          <v-col class="mt-4">
            <v-btn prepend-icon="mdi-pencil" class="d-md-none rounded-lg" variant="outlined"
              @click="showEdit = !showEdit">Edit</v-btn>
          </v-col>
        </v-row>

      </v-col>
      <v-col cols="12" md="6" class="elevation-2 pa-10 d-none d-md-block"
        :class="[showEdit ? 'd-none d-md-block' : 'd-block']">
        <v-form>
          <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-space-between align-center mb-10">
              <h1>Edit Profile</h1>
              <v-avatar color="grey-darken-3"
                :image="userdata?.picture ? userdata?.picture : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"
                size="70"></v-avatar>
            </v-col>
            <v-col cols="12">
              <div class="text-body-1 font-weight-medium">Name</div>
              <v-text-field placeholder="Enter your Name" v-model="userdata.name" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-1">
              <div class="text-body-1 font-weight-medium">Email</div>
              <v-text-field placeholder="Enter your Email" v-model="userdata.email" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-1">
              <div class="text-body-1 font-weight-medium">Adress</div>
              <v-text-field placeholder="Enter your Adress" v-model="userdata.address" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-1">
              <div class="text-body-1 font-weight-medium">Contact Number</div>
              <v-text-field placeholder="Enter your Number" v-model="userdata.mobile" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" class="py-1">
              <div class="text-body-1 font-weight-medium">City</div>
              <v-select placeholder="Select" :items="cityitems" v-model="userdata.city" variant="outlined"></v-select>
            </v-col>
            <v-col cols="12" class="pt-1">
              <div class="text-body-1 font-weight-medium">State</div>
              <v-select placeholder="Select" :items="Stateitems" v-model="userdata.state" variant="outlined"></v-select>
            </v-col>
            <v-col cols="12" class="py-1">
              <div class="text-body-1 font-weight-medium">Country</div>
              <v-select placeholder="Select" :items="countryitems" v-model="userdata.country" variant="outlined"></v-select>
            </v-col>
            <v-col cols="12" class="pt-1 d-flex justify-center">
              <v-btn @click="pri" width="120" height="40" color="pink-accent-3" variant="flat">Update</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
//@ts-ignore
import api from '@/data/api/index.js';
import jwtDecode from 'jwt-decode';
import { onMounted, reactive, ref } from 'vue'
import { useCookies } from 'vue3-cookies';

const cityitems = reactive(['Bangalore', 'Hassan', 'Mysore']);
const Stateitems = reactive(['Karnataka']);
const countryitems = reactive(['India']);
const showEdit = ref(false);
const { cookies } = useCookies();

let userdata = ref({
  name: null,
  picture: null,
  email: null,
  mobile: null,
  address: null,
  city: null,
  state: null,
  country: null
});

let user = reactive({
  email: null,
});

if (cookies.get('token')) {
  //@ts-ignore
  user = jwtDecode(cookies.get('token'))?.userData;
}

async function getUser() {
  const res = await api?.user?.getUserData({ params: { email: user?.email } });
  userdata.value = res?.data?.data;
}

function pri() {
  console.log("USERDATA: ", userdata)
}

onMounted(async () => {
  await getUser();
})
</script>

<style scoped>
.myProfileDetails > h2 {
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: clip;
  font-size: 18px;
  font-weight: 300;
  text-overflow: ellipsis;
}

.myProfileDetails>h2>div {
  display: inline-block;
  width: 100px;
  font-size: 22px;
  font-weight: 400;
}
</style>