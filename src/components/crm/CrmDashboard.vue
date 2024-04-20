<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters class="pa-0 pa-6">
            <v-col cols="12" class="pa-2 mb-5 pb-0 pl-0 text-h5 font-weight-medium" style="border-bottom: solid 1px grey;">Dashboard</v-col>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="item in details" :key="item.name" class="pa-2">
                <router-link :to="item.to" class="">
                    <v-card min-width="100%" height="150" class="rounded-xl pa-4 d-flex flex-column justify-center align-center" :color="item.bgColor">
                        <div class="d-flex justify-center align-start">
                            <span class="text-h3">{{ item.leads }}</span>
                            <v-btn class="ml-2" :icon="item.icon" size="30" variant="tonal"></v-btn>
                        </div>
                        <div class="text-h6">{{ item.name }}</div>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const details = ref([
    {
        icon: 'mdi-vuetify',
        bgColor: 'grey',
        name: "Total Leads",
        leads: 10000,
        to: '/crm/manageleads'
    },
    {
        icon: 'mdi-cog',
        bgColor: 'blue',
        name: "Total Tasks",
        leads: 10,
        to: '/crm/managetasks'
    },
    {
        icon: 'mdi-home',
        bgColor: 'red',
        name: "Total Contacts",
        leads: 100,
        to: '/crm'
    },
    {
        icon: 'mdi-vuetify',
        bgColor: 'black',
        name: "Total Properties",
        leads: 50,
        to: '/crm'
    },
])

</script>

<style scoped>
a {
    text-decoration: none;
}
</style>