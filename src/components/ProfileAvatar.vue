<template>
  <v-dialog v-model="dialog" scrollable width="auto">
    <template v-slot:activator="{ props }">
      <v-avatar @click="changeDialog" color="grey-darken-3" class="profileAvatar"
        image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        v-bind="props"></v-avatar>
    </template>
    <div class="mainCont pa-2 rounded-xl bg-grey-lighten-4">
      <v-row no-gutters>
        <v-col cols="12" class="d-flex flex-column mb-5 px-5  pt-4 bg-white rounded-t-xl rounded-b-lg">
          <v-row no-gutters class="d-flex pb-3">
            <v-col class="avatarRelative" cols="3">
              <v-avatar color="grey-darken-3"
                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                size="75"></v-avatar>
              <div class="avatarIcon  rounded-circle bg-white elevation-1 pa-1 d-flex align-center justify-center">
                <v-icon icon="mdi-camera" size="15" color="black"></v-icon>
              </div>
            </v-col>
            <v-col cols="9" class="ml-0 mt-5">
              <h6 class="text-body-1 font-weight-medium">Vivek GL</h6>
              <p class="text-body-2">vivek@gmail.com</p>
              <v-btn class="mt-5 rounded-lg" variant="outlined">Manage Your Account</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="mb-1">
          <v-progress-linear color="deep-purple-accent-4" indeterminate rounded height="3"></v-progress-linear>
        </v-col>
        <v-col cols="12">
          <v-btn block class="rounded-b-xl text-body-1 d-flex justify-start bg-grey-lighten-4" height="50" variant="flat">
            <template v-slot:prepend>
              <v-icon icon="mdi-account-plus" class="ml-9 mr-7" size="20"></v-icon>
            </template> 
            Add another account
          </v-btn>
        </v-col>
        <v-col cols="12" class="mt-2 mb-2">
          <v-btn block variant="flat" class="text-body-1 d-flex justify-start bg-grey-lighten-4" height="50"><template
              v-slot:prepend>
              <v-icon icon="mdi-logout" class="ml-10 mr-6" size="20"></v-icon>
            </template> Sign out</v-btn>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12" class="d-flex align-center justify-center mb-2 mt-4">
          <v-btn variant="flat" density="compact" class="text-body-2 font-weight-light bg-grey-lighten-4">Privacy Policy</v-btn>
          <div class="rounded-circle bg-black ma-1"></div>
          <v-btn variant="flat" density="compact" class="text-body-2 font-weight-light bg-grey-lighten-4">Terms of Service</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dialog = ref(false);

function changeDialog() {
  dialog.value = !dialog.value
}
</script>

<style scoped>
.mainCont {
  width: 400px;
}

.avatarRelative {
  position: relative;
}

.avatarIcon {
  position: absolute;
  left: 50px;
  top: 50px;
}

.bg-black {
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 1px solid rgb(255, 251, 251);
}
</style>