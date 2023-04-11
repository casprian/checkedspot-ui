<template>
  <v-app-bar 
      :elevation="2"         
      density="compact"
>

        <template v-slot:prepend>
          <v-img width="200px" height="100px" src="../../assets/logocheckedspot.png" />
        </template>

        
        <template v-slot:append>
          <v-btn prepend-icon="mdi-vuetify" variant="outlined" class="ml-2">
              Contact
          </v-btn>

          <v-btn prepend-icon="mdi-magnify" variant="outlined" class="ml-2">
            Sign In
          </v-btn>

          <v-btn prepend-icon="mdi-dots-vertical" variant="outlined" class="ml-2">
            Add/Manage Properties
          </v-btn>
      </template>
</v-app-bar>
</template>