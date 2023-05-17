<template>
    <v-container fluid class="pa-0" style="width: 100%;">
        <v-row no-gutters>
            <v-col cols="12" sm="3" class="d-none d-sm-block">
                <profile-drawer @activewindow="setshow"/>
            </v-col>
            <v-col cols="12" sm="9" class="d-block bg-background">
                <display-area/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
// @ts-ignore
import ProfileDrawer from '@/components/ProfileDrawer.vue';
// @ts-ignore
import DisplayArea from '@/components/DisplayArea.vue';
import { reactive, provide, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import property from '@/data/api/property';

const router = useRouter();

if(!sessionStorage.getItem('token')) {
    router.back();
}

const show = reactive({
    "dashboard": true,
    "profile": false,
    "myproperties": false,
    "addproperty": false,
})

function setshow(opentab:any){
    for(let key in show) {
        if(key === opentab){
            // @ts-ignore
            show[key] = true;
        }else {
            // @ts-ignore
            show[key] = false
        }
    }
}


const token = sessionStorage.getItem('token');
//decode jwt Token funtion
//@ts-ignore
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
const decoded = parseJwt(token);
const email = decoded?.userData?.email;

let properties = reactive({data: []});
let verified = ref(0)
let unverified = ref(0)

function loadproperties() {
  axios.get('http://localhost:8080/property/getPropertiesFromPerson',
    {
      params: {
        userId: email
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ).then((res) => {
    properties.data = res?.data?.data;
    console.log()
    properties.data.forEach(element => {
        if(element.isVerifiedByCheckedSpot === true){
            verified.value++;
        }else {
            unverified.value++;
        }
    })
  }).catch(err => {
    console.log(err)
  })
}

onMounted(() => {
    loadproperties();
})

provide('properties', properties);
provide('verified', verified);
provide('unverified', unverified);
provide('show', show);

</script>

<style scoped></style>