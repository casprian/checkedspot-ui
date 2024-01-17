<template>
    <v-container v-if="token" fluid class="pa-0">
        <v-row no-gutters style="height: 100vh;">
            <v-col cols="12" sm="3" class="bg-grey-lighten-5 leftNavigation">
                <v-sheet height="85" class="pl-5 d-flex align-center bg-transparent">
                    <div class="d-flex">
                        <v-img width="30"
                            src="https://checkedspot.blob.core.windows.net/assets/checkedspotfavicon.ico"></v-img>
                        <h2 class="ml-3 mt-2 mt-md-1 mr-3 text-body-1 text-md-h5 font-weight-medium text-grey-darken-3">User
                            Dashboard</h2>
                    </div>
                </v-sheet>
                <v-divider></v-divider>

                <v-btn block variant="text" class="mt-6 mb-2 px-8 d-flex justify-start align-center" height="45"
                    prepend-icon="mdi-view-dashboard" color="grey-darken-3"
                    @click="router.push('/profile')">Profile</v-btn>


                <!-- <v-btn block variant="text" class="my-2 px-8 d-flex justify-start align-center" height="45"
                    prepend-icon="mdi-home-city-outline" color="grey-darken-3"
                    @click="router.push('/dashboard/properties')">Properties</v-btn> -->
            </v-col>

            <v-col cols="12" sm="9" class="bg-grey-lighten-3">
                <v-row no-gutters>
                    <v-col cols="12"
                        class="d-flex justify-space-between align-center bg-grey-lighten-5 rightTopNaigation pt-2 px-5">
                        <v-btn @click="router.push('/')" variant="outlined" prepend-icon="mdi-home">Home</v-btn>
                        <profile-avatar />
                    </v-col>

                    <v-col cols="12" class="px-1 d-flex justify-center rightBottomNaigation">
                        <router-view />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCookies } from "vue3-cookies";
import jwtDecode from "jwt-decode";
//@ts-ignore
import ProfileAvatar from "@/components/ProfileAvatar.vue";

const { cookies } = useCookies();
const router = useRouter();
const user = ref();
const token = ref(false)
if (cookies.get('token')) {
    //@ts-ignore
    user.value = jwtDecode(cookies.get('token'))?.userData;
    token.value = true;
} else {
    router.push("/");
}
</script>
  
<style scoped>
.leftNavigation {
    z-index: 1;
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.3);
}

.rightTopNaigation {
    display: flex;
    justify-content: end;
    height: 60px;
    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.3);
}

.rightBottomNaigation {
    height: calc(100vh - 60px);
    overflow-y: scroll;
}
</style>