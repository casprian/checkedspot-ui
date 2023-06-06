<template>
    <v-container class="my-5 mb-5">
      <v-row no-gutters class="d-flex flex-column">
        <v-col cols="12" class="mb-8">
          <div class="text-h5 font-weight-medium">
            We have got properties for everyone
          </div>
        </v-col>
        <v-col cols="12" class="d-flex">
          <v-row no-gutters class="d-flex justify-center justify-md-start">
            <v-col cols="auto" class="mb-5" v-for="card in cards" :key="card.id" >
              <v-card  class="mr-5 rounded" elevation="3" width="220">
                <v-card-item class="pb-0">
                  <div class="pb-0 pb-3">
                    <v-icon :icon="card.icon" color="deep-purple-lighten-1" size="50"></v-icon>
                    <div class="text-h5 font-weight-bold mt-3">{{ card.numbers }}</div>
                    <div class="text-body-1 text-grey-darken-1">
                      {{card.details}}
                    </div>
                  </div>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts" setup>
      import {reactive} from 'vue'
  
      const cards = reactive([
          {
              "id":1,
              "icon":"mdi-home-account",
              "numbers":11771,
              "details":"Owner properties"
          },
          {
              "id":2,
              "icon":"mdi-truck-minus-outline",
              "numbers":26452,
              "details":"Ready to move-in"
          },
          ]) 
  </script>