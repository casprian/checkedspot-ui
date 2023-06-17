<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters>
            <v-col cols="12" sm="3" style="background-color: red;">
                <v-sheet>
                    <div>User Dashboard</div>
                </v-sheet>
                <div class="my-5 mx-3 pa-0">
                    <v-btn block variant="flat" class="d-flex justify-start align-center" append-icon="mdi-home" color="pink-accent-3" @click="router.push('/dashboard')">Dashboard</v-btn>
                </div>
                <div class="my-5 mx-3 pa-0">
                    <v-btn block variant="flat" class="d-flex justify-start align-center" color="pink-accent-3" @click="router.push('/dashboard/properties')">Properties</v-btn>
                </div>
                <div class="my-5 mx-3 pa-0">
                    <v-btn block variant="flat" class="d-flex justify-start align-center" color="pink-accent-3" @click="router.push('/dashboard')">Projects</v-btn>
                </div>
                <div class="my-5 mx-3 pa-0">
                    <v-btn block variant="flat" append-icon="mdi-face-agent" class="d-flex justify-start align-center" color="pink-accent-3" @click="router.push('/dashboard')">Support</v-btn>
                </div>
                <div class="my-5 mx-3 pa-0">
                    <v-btn block variant="flat" class="d-flex justify-start align-center" color="pink-accent-3" @click="router.push('/dashboard')">Services</v-btn>
                </div>
            </v-col>
            
            <v-col  cols="12" sm="9" style="background-color: rgb(98, 98, 249);">
                <v-row no-gutters>
                    <v-col cols="12" style="background-color: rgba(98, 194, 249, 0.682);">
                        right top
                    </v-col>
                    <v-col cols="12" style="background-color: rgba(249, 194, 98, 0.473);">
                        <router-view />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();


  </script>
  
  <style scoped>
  </style>