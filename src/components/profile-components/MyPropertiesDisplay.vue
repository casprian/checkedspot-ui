<!-- <template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" class="pa-0 bg-grey-darken-3">
        <div class="pa-6 text-h4 font-weight-medium text-decoration-underline">Properties</div>
      </v-col>
      <v-col cols="12" class="mt-2 d-flex justify-space-evenly">
        <v-card class="mx-auto my-3" v-for="(data, index) in preperties?.data" :key="index" width="280">
          <v-img class="align-end text-white" height="200" :src="data.propertyImage[0]" cover>
            <v-card-title>{{ data?.type }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Rs. {{ data.cost }}
          </v-card-subtitle>

          <v-card-actions class="d-flex flex-column">
            <v-btn class="ma-2" @click="() => displayDisplay(data?.propertyId)" variant="outlined" color="orange">Display
              Details</v-btn>
            <div class="ma-2s">
              <v-btn @click="router.push({path:'updateproperty', query: {propertyId: data?.propertyId}})" variant="outlined" color="orange">
                Update
              </v-btn>

              <v-btn @click="() => deleteProperty(data?.propertyId)" variant="outlined" color="orange">
                Delete
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { inject, reactive } from 'vue';

const router = useRouter();

function displayDisplay(id: Number) {
  router.push(`/propertydetails/${id}`)
}

function deleteProperty(id: Number) {
  console.log("property with Id: ", id, " has been deleted")

}

const injectedProperties = inject('properties');
// console.log(injectedProperties);
const preperties = reactive({
  data: [...injectedProperties?.data]
});
</script> -->