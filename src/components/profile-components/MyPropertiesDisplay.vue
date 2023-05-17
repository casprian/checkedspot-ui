<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" class="pa-0 bg-grey-darken-3">
        <div class="pa-6 text-h4 font-weight-medium text-decoration-underline">Properties</div>
      </v-col>
      <v-col cols="12" class="mt-2 d-flex justify-space-evenly">
        <v-card class="mx-auto my-3" v-for="(data, index) in properties?.data" :key="index" width="280">
          <v-img class="align-end text-white" height="200" :src="data.propertyImage[0]" cover>
            <v-card-title>{{ data?.type}}</v-card-title>
          </v-img>
      
          <v-card-subtitle class="pt-4">
            Rs. {{ data.cost }}
          </v-card-subtitle>
      
          <v-card-text>
            <div>{{  }}</div>
          </v-card-text>
      
          <v-card-actions>
            <v-btn color="orange">
              Update
            </v-btn>
      
            <v-btn color="orange">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { inject } from 'vue';

const properties = inject('properties');

console.log(properties)
</script>