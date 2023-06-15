<template>
  <v-container class="mt-6">
    <v-row no-gutters>
      <v-col cols="12" md="6" class="elevation-2 pa-10 mb-10 mb-md-0">
        <v-row no-gutters>
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-avatar color="grey-darken-3"
              image='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
              size="170"
            ></v-avatar>
          </v-col>
          <v-col cols="12" class="pt-3 myProfileDetails">
            <h2 class="py-3"><div>Name</div> : <span>Vivek GL</span></h2>
            <h2 class="py-3"><div>Email</div> : <span>vivek@gmail.com</span></h2>
            <h2 class="py-3"><div>Contact</div> : <span>9100496701</span></h2>
            <h2 class="py-3"><div>Adress</div> : <span>Hegde Nagar, Bengaluru</span></h2>
            <h2 class="py-3"><div>City</div> : <span>Bengaluru</span></h2>
            <h2 class="py-3"><div>State</div> : <span>Karnataka</span></h2>
          </v-col>
          <v-col class="mt-4">
            <v-btn prepend-icon="mdi-pencil" class="d-md-none rounded-lg" variant="outlined" @click="showEdit=!showEdit">Edit</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="elevation-2 pa-10 d-none d-md-block" :class="[showEdit?'d-none d-md-block':'d-block']">
        <v-form>
          <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-space-between align-center mb-10">
              <h1>Edit Profile</h1>
              <v-avatar color="grey-darken-3"
              image='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
              size="70"
              ></v-avatar>
            </v-col>
            <v-col cols="12">
              <div class="text-body-1 font-weight-medium">Name</div>
              <v-text-field placeholder="Enter your Name" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-1">
              <div class="text-body-1 font-weight-medium">Email</div>
              <v-text-field placeholder="Enter your Email" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-1">
              <div class="text-body-1 font-weight-medium">Adress</div>
              <v-text-field placeholder="Enter your Adress" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-1">
              <div class="text-body-1 font-weight-medium">Contact Number</div>
              <v-text-field placeholder="Enter your Number" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-1">
              <div class="text-body-1 font-weight-medium">State</div>
              <v-select placeholder="Select" :items="Stateitems" variant="outlined"></v-select>
            </v-col>
            <v-col cols="12" class="py-1">
              <div class="text-body-1 font-weight-medium">Country</div>
              <v-select placeholder="Select" :items="countryitems" variant="outlined"></v-select>
            </v-col>
            <v-col cols="12" class="pt-1 d-flex justify-center">
              <v-btn width="120" height="40" color="pink-accent-3" variant="flat">Update</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

  import {reactive,ref} from 'vue'
  import axios from 'axios'

  const Stateitems = reactive(['Karnataka']);
  const countryitems = reactive(['India']);
  const showEdit = ref(false);
  
  // const getUser = async ()=>{
  //   axios.get('')
  // }
  // getUser()

</script>

<style scoped>

.myProfileDetails > h2 {
    font-size: 25px;
    font-weight: 300;
  }
  .myProfileDetails > h2 > div{
    display: inline-block;
    width: 120px;
    font-size: 30px;
    font-weight: 400;
  }

  .myProfileDetails > h2 > span{
    margin-left:10px;
  }
</style>