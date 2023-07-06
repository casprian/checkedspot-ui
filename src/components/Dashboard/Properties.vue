<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" class="pa-0">
        <div class="pa-6 text-center text-h4 font-weight-medium text-decoration-underline">Properties</div>
      </v-col>
      <v-row no-gutters class="d-flex justify-center align-center">
        <v-col cols="auto" class="mt-1 mx-3" v-for="(item, index) in properties" :key="index">
          <v-card class="mx-auto my-3" width="280">
            <v-img class="align-end text-white" height="200" :src="item?.propertyImage[0]" cover>
              <v-card-title>{{ item?.type }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              Rs. {{ item?.cost }}
            </v-card-subtitle>

            <v-card-actions class="d-flex flex-column">
              <v-btn class="ma-2" @click="displayDisplay(item?.propertyId)" variant="outlined"
                color="orange">Display
                Details</v-btn>
              <div class="ma-2s">
                <v-btn @click="updateProperty(item?.propertyId)"
                  variant="outlined" color="orange">
                  Update
                </v-btn>

                <v-btn @click="deleteProperty(item?.propertyId)" variant="outlined" color="orange">
                  Delete
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
          <!-- <property-card :property="item"/> -->
        </v-col>
      </v-row>
    </v-row>
    <v-row v-if="properties" no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
      <v-col cols="5">
        <div class="text-center">
          <v-pagination @click="getAllProperties" v-model="pageNumber" :length="noOfPage" prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"></v-pagination>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="!properties" no-gutters class="px-sm-14 d-flex justify-center align-center" style="height: 100%;">
      <v-col cols="4" class="loader">
        <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
//@ts-ignore
import api from "@/data/api/index.js";

const router = useRouter();
const properties = ref([
  {
    propertyImage: [],
    type: null,
    cost: null,
    propertyId: null
  }
])
const limit = ref(6)
const pageNumber = ref(1)
const noOfPage = ref(1);

const noOfData = ref(0)
const noOfDataComputed = computed(() => {
  return noOfData.value;
})
function displayDisplay(id:any) {
  router.push(`/propertydetails/${id}`)
}

function updateProperty(id:any) {
  console.log("property with Id: ", id, " has been Updated")
}

function deleteProperty(id:any) {
  console.log("property with Id: ", id, " has been deleted")
}

async function getAllProperties() {
  const res = await api.property.getProperties({
    params: {
      limit: limit.value,
      pageNumber: pageNumber.value
    }
  });
  properties.value = res.data;
  noOfData.value = res?.noOfdata;
  noOfPage.value = Math.ceil(noOfDataComputed.value / limit.value);
  console.log(res)
}
onMounted(async () => {
  await getAllProperties();
})
</script> 