<template>
    <v-container fluid class="pa-0" style="height: 100%;">
        <v-row no-gutters style="height: 100%;">
            <v-col cols="12">
                <v-navigation-drawer permanent class="bg-grey-darken-1" theme="dark"
                    style="position: relative; width:auto; height: 100%; top: 0;">
                    <template v-slot:prepend>
                        <v-sheet width="100%" height="200px" class="profile d-flex justify-center align-center pa-0"
                            color="grey-darken-3">
                            <v-avatar class="pa-0" image="https://cdn.vuetifyjs.com/images/john.png" size="80px"></v-avatar>
                            <div
                                class="text-body-1 mt-3 ml-0 font-weight-medium text-uppercase text-center text-grey-lighten-1">
                                Mark Smith
                            </div>
                        </v-sheet>
                    </template>
                    <v-list class="px-9 py-3" theme="dark">
                        <v-list-item v-for="(item, i) in items" :key="i" :value="item" :disabled="item.disable"
                            variant="elevated" active-color="grey-lighten-1" rounded="shaped" elevation="6" class="mt-4"
                            @click="$emit('activewindow', item.name)">
                            <template v-slot:prepend>
                                <v-icon :icon="item.icon"></v-icon>
                            </template>
                            <template v-slot:title>
                                <div class="text-button-1">{{ item.text }}</div>
                            </template>
                        </v-list-item>
                    </v-list>

                    <template v-slot:append>
                        <div class="pa-2 my-3">
                            <v-btn @click="handleLogout" block height="35px" elevation="4" variant="elevated" color="red">
                                Logout
                            </v-btn>
                        </div>
                    </template>
                </v-navigation-drawer>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const items = reactive([
    { name: 'dashboard', text: 'Dashboard', icon: 'mdi-view-dashboard', disable: false },
    { name: 'profile', text: 'Profile', icon: 'mdi-account', disable: true },
    { name: 'myproperties', text: 'My Properties', icon: 'mdi-view-list', disable: false },
    { name: 'addproperty', text: 'Add Property', icon: 'mdi-plus', disable: false },
])
function handleLogout() {
  sessionStorage.removeItem('token');
  router.push('/');
}
</script>

<style scoped>
div.profile {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
}
</style>