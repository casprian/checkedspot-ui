<template>
    <v-layout>
        <v-container fluid class="pa-0">
            <v-row no-gutters class="pa-0">
                <v-col cols="12" class="pagehead py-5 px-10 d-flex justify-space-between">
                    <div class="logo d-flex justify-center align-center">
                        <v-btn class="d-md-none" icon="mdi-menu" variant="text"
                            @click.stop="drawer = !drawer"></v-btn>
                        <img src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" alt="checkedspot logo">
                    </div>
                    <div class="account">
                        <v-btn icon="mdi-account" variant="plain" size="60" color="blue" class=""></v-btn>
                        <v-btn icon="mdi-cog" variant="plain" size="60" color="blue" class=""></v-btn>
                    </div>
                </v-col>

                <!-- Navigation Drawer -->
                <v-col cols="12" md="3" id="drawer" class="drawer">
                    <crm-navigation class="d-none d-md-block" />

                    <v-navigation-drawer class="d-block d-md-none pt-6" v-model="drawer" location="left" temporary>
                        <div class="logo d-flex justify-center align-center mb-5">
                        <img src="https://checkedspot.blob.core.windows.net/assets/logocheckedspot.png" alt="checkedspot logo">
                        </div>
                        <crm-navigation />
                    </v-navigation-drawer>
                </v-col>

                <!-- View -->
                <v-col class="px-0 px-md-5">
                    <v-sheet class="displayContainer">
                        <router-view />
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
// import { useRouter } from 'vue-router';

const CrmNavigation = defineAsyncComponent(() => import('@/components/crm/CrmNavigation.vue'))

const drawer = ref(false);
// const router = useRouter();

// const drawer = ref(false);

// function handleDrawer() { 
//     const drawer = document.getElementById('drawer');
//     //@ts-ignore
//     if(drawer.style.width <= 0) {
//         if(document.documentElement.clientWidth >= 960) {
//             //@ts-ignore
//             drawer.style.width = "25% !important";
//         } else if (document.documentElement.clientWidth >= 600 && document.documentElement.clientWidth < 960) {
//             //@ts-ignore
//             drawer.style.width = "33.3% !important";            
//         } else {
//             //@ts-ignore
//             drawer.style.width = "90% !important";
//         }
//     } else {        
//         //@ts-ignore
//         drawer.style.width = "0% !important";
//     }
// }
</script>

<style scoped>
.logo {
    width: 230px;
    height: 60px;
}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.account {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 60px;
    background-color: rgb(236, 234, 234);
    border-radius: 35px;
}

.displayContainer {
    width: 100%;
    height: calc(100vh - 100px);
    overflow-y: auto;
    border-radius: 15px;
    background-color: #eef2f6;
}

.drawer {
    transition: width .5s ease-in-out;
}
</style>