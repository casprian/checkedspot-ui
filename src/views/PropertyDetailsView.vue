<template>
    <v-container fluid class="pa-0 pt-16 px-4">
        <v-row no-gutters class="px-sm-10">
            <v-col cols="12" md="8" class="pr-0 pr-md-3">
                <v-row no-gutters>
                    <v-col cols="9">
                        <div class="d-flex justify-start align-center">
                            <div class="text-h6 text-md-h5 font-weight-medium">Checkedspot Property</div>
                            <div>
                                <v-btn variant="flat" color="pink-accent-3" density="comfortable"
                                    class="rounded-pill ml-6">For {{ property?.data?.propertyStatus ?
                                        property?.data?.propertyStatus : 'sale' }}</v-btn>
                            </div>
                        </div>
                        <div class="py-2">
                            <v-icon size="15" class="mt-n1 mr-2" icon="mdi-map-marker" color="grey-darken-2"></v-icon>
                            <span class="text-body-1 text-md-h6 font-weight-regular text-grey-darken-2">{{
                                property?.data?.location ?
                                property?.data?.location : "Bangalore" }}</span>
                        </div>
                    </v-col>
                    <v-col cols="3">
                        <div class="text-h6 text-md-h5 font-weight-medium text-pink-accent-3">₹ {{ property?.data?.cost ?
                            property?.data?.cost : 0 }}</div>
                        <div class="text-body-1 text-md-h6 font-weight-regular text-black">₹ {{ costPerSqFt ? costPerSqFt :
                            0 }} / sq ft</div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card class="rounded-0">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Description</v-card-title>
                            </v-card-item>

                            <v-card-text class="description text-body-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor dolores nemo omnis veniam, voluptatibus sit vero non tempora iste officia. Minima explicabo dolores iste, veniam facilis corrupti odio maiores nihil temporibus accusamus. Sed ex dolore dicta quod cumque.<br/><br/>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor dolores nemo omnis veniam, voluptatibus sit vero non tempora iste officia. Minima explicabo dolores iste, veniam facilis corrupti odio maiores nihil temporibus accusamus. Sed ex dolore dicta quod cumque.<br/><br/>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor dolores nemo omnis veniam, voluptatibus sit vero non tempora iste officia. Minima explicabo dolores iste, veniam facilis corrupti odio maiores nihil temporibus accusamus. Sed ex dolore dicta quod cumque.<br/><br/>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor dolores nemo omnis veniam, voluptatibus sit vero non tempora iste officia. Minima explicabo dolores iste, veniam facilis corrupti odio maiores nihil temporibus accusamus. Sed ex dolore dicta quod cumque.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="4" class="pl-0 pl-md-3" style="background-color: aqua;">

            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const costPerSqFt = ref(0);
const property = reactive({
    data: []
})
// console.log(property)
onBeforeMount(() => {
    axios.get('https://apicheckedspot.azurewebsites.net/property',
        {
            params: {
                propertyId: route?.params?.propertyId,
            },
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        }).then((response) => {
            // console.log(response)
            property.data = response?.data?.data[0];
            costPerSqFt.value = Math.ceil(response?.data?.data[0].cost / response?.data?.data[0].totalArea);
        }).catch((error) => {
            console.log(error);
        })
})
</script>

<style scoped>
.description {
    line-height: 25px;
}

.titleCont {
    position: relative;
}
.title::before {
    content: "";
    width: 50px;
    height: 3px;
    background-color: #F50057;
    position: absolute;
    top: 43px;
}
</style>