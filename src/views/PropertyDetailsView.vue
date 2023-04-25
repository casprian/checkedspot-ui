<template>
  <v-container fluid class="pa-0 pt-16 px-4">
    <v-row no-gutters class="px-sm-10">
        <v-col cols="12" md="8" style="border: solid 1px blue;"> 
            <v-row no-gutters>
                <v-col cols="9" style="background-color: blanchedalmond;" class="d-flex justify-start align-center">
                    <div class="text-h6 text-md-h4 font-weight-medium">Checkedspot Property</div>
                    <div>
                        <v-btn variant="outlined" density="comfortable" class="rounded-pill">For {{ property?.data?.propertyStatus }}</v-btn>
                    </div>
                </v-col>
                <v-col cols="3" style="background-color: burlywood;">

                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="4" style="background-color: aqua;">

        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
    import { onMounted, reactive } from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';

    const route = useRoute();
    const property = reactive({
        data: []
    })
    // console.log(property)
    onMounted(() => {
        axios.get('https://apicheckedspot.azurewebsites.net/property', 
        {
            params: {
                propertyId : route?.params?.propertyId,
            },
            headers: {
                Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJlbWFpbCI6ImRrQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNEBBc2RmIn0sImlhdCI6MTY4MjQxMDYzNX0.jtfxkFxDZtnGhOLqjfJkXifAG79sMTePpmMGC03BGj8`
            }
        }).then((response) => {
            console.log(response)
            property.data = response?.data?.data;
        }).catch((error) => {
            console.log(error);
        })
    })
</script>

<style>

</style>