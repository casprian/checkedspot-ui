<template>
    <v-container class="bg-background" style="height: auto" fluid>
        <v-row no-gutters>
            <v-col cols="12" sm="6">
                <v-card class="pb-8" variant="outlined" height="100%">
                    <sign-in/>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card class="pb-6" variant="outlined" height="100%">                    
                    <sign-up/>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';
</script>

<style scoped>

</style>