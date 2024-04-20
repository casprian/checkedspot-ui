<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters class="pa-0">
            <v-col cols="12" class="px-4 d-flex flex-column justify-start align-center">
                <!-- Dashboard -->
                <v-hover v-slot="{ isHovering, props }" :close-delay="10">
                    <v-btn block v-bind="props" @click="router.push({ path: '/crm' })" height="40"
                        class="mb-3 text-none font-weight-regular rounded-lg d-flex justify-start"
                        variant="text" :color="isHovering ? 'blue' : 'black'">
                        <v-icon size="22" icon="mdi-view-dashboard"></v-icon>
                        &nbsp; <span class="navText">Dashboard</span>
                    </v-btn>
                </v-hover>

                <!-- Lead Management -->
                <v-hover v-slot="{ isHovering, props }" :close-delay="10">
                    <v-btn block v-bind="props" @click="router.push({ path: '/crm/manageleads' })" height="40"
                        class="mb-3 text-none font-weight-regular rounded-lg d-flex justify-start"
                        variant="text" :color="isHovering ? 'blue' : 'black'">

                        <span class="d-flex flex-column justify-center align-center">
                            <v-icon size="18" icon="mdi-account-group" class="mb-n0"></v-icon>
                            <v-icon size="15" icon="mdi-magnet-on"></v-icon>
                        </span>
                        &nbsp; <span class="navText">Lead Management</span>
                    </v-btn>
                </v-hover>

                <!-- Task Management -->
                <v-hover v-slot="{ isHovering, props }" :close-delay="10">
                    <v-btn block v-bind="props" @click="router.push({ path: '/crm/managetasks' })" height="40"
                        class="mb-3 text-none font-weight-regular rounded-lg d-flex justify-start"
                        variant="text" :color="isHovering ? 'blue' : 'black'">
                        <v-icon size="22" icon="mdi-file-document-check-outline"></v-icon>
                        &nbsp; <span class="navText">Task Management</span>
                    </v-btn>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style scoped>
.navText {
    padding-left: 10px;
    font-size: 16px;
    font-weight: 400;
}
</style>