<template>
    <v-container >
        <v-row no-gutters>
            <v-col cols="12">
                <div class="text-h5 font-weight-medium">Property services</div>
            </v-col>
            <v-col cols="12" sm="6" class="my-7 mt-0">
                <v-row no-gutters>
                    <v-col cols="12" md="6"  class="pr-sm-5" v-for="services in servicesCards" :key="services.id" >
                        <div class="mt-7">
                            <v-img cover max-height="170px" :src=services.img class="mb-6 "></v-img>
                            <p class="text-h6 font-weight-medium">{{services.heading}}</p>
                            <p class="text-body-2">{{services.details}}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="6" class="my-7 bg-blue-grey-darken-1 pt-10 pt-md-16" color="grey-darken-3" >
                <div class=" py-6 py-md-16  pl-16 mr-16 mt-10 mt-md-16 " >
                    <div class="text-h4  text-grey-lighten-5 mb-8" >Turpis vitae egestas posuere faucibus mattis</div>
                    <p class="text-body-1 font-weight-light mb-4">turpis ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum reprehenderit sequi suscipit reiciendis repellendus quo, qui labore accusamus quas!</p>
                    <p class="text-body-1 font-weight-light">Turpis ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus quam vel autem obcaecati ad numquam animi suscipit. Odit, odio.</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'

    const servicesCards = [
        {
            "id":1,
            "img": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            'heading':"Packers and Movers",
            "details":"Home shifting and Vehicle shifting at Guaranteed lowest prices"
        },
        {
            "id":2,
            "img": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            'heading':"Cashback on Home Loans",
            "details":"Get assured cashback upto ₹90k on Home Loans and Free MB Prime"
        },
        {
            "id":3,
            "img": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            'heading':"Pay rent",
            "details":"Get assured cashback upto ₹90k on Home Loans and Free MB Prime"
        },
        {
            "id":4,
            "img": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            'heading':"Legal services",
            "details":"Get assured cashback upto ₹90k on Home Loans and Free MB Prime"
        }
    ]
</script>