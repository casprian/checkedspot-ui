<template>

<!--     
    <v-container fluid class="pa-0">

        <v-row no-gutters class="pa-0" style="position:relative;">
            <v-col cols="12" class="pa-0">
                <video class="backgroundvideo" style="height: 80vh;"
                    poster="https://checkedspot.blob.core.windows.net/assets/headerVideoPoster.png" autoplay muted loop>
                    <source src="https://checkedspot.blob.core.windows.net/assets/7.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </v-col>
            <div class="d-flex justify-center align-center"
                style="position:absolute; height:98.5%; width:100%; background-color: rgba(140, 49, 49, 0.5);">
                <h1 class="text-h2 font-weight-medium text-white">
                    About Us
                </h1>
            </div>
        </v-row>

        <v-container class="pa-0 pt-12">
            <v-row no-gutters>
                <v-col cols="12" class="pr-10">
                    <span class="heading2">Who we are?</span>
                    <div class="pb-6 content">
                        Launched in 2022, checkedspot.com, India’s No. 1 only portal with only verified properties, deals
                        with
                        every
                        aspect of the consumers’ needs in the real estate industry. It is an online forum where buyers,
                        sellers
                        and
                        brokers/agents can exchange information about real estate properties quickly, effectively and free.
                        At
                        checkedspot.com, you can advertise a property, search for a property, browse through properties,
                        build
                        your
                        own property microsite, and keep yourself updated with the latest news and trends making headlines
                        in
                        the
                        realty sector.
                    </div>
                    <div class="py-6">
                        <span class="heading2">Why choose Checked Spot?</span>
                        <div class="content">
                            At present, checkedspot.com prides itself for having farmhouses, farmlands, and plots listings
                            spanning across
                            multiple cities in South India. Of all, In addition to providing an online platform to real
                            estate
                            developers, brokers and property owners for listing their property for sale, purchase we are
                            also
                            construction specialist with most competitive price at top quality for your home dreams.
                        </div>
                    </div>
                    <div class="mt-n3 content">
                        With the ever-evolving online search behaviour, checkedspot.com shares updated information pertinent
                        to
                        real
                        estate activities, assisting prospective buyers to make informed buying decision. We make online
                        property
                        search easier, quicker and smarter!
                    </div>

                </v-col>

                <v-col class="pt-12" cols="12">

                    <span class="heading2">What our customers have to say.</span>

                    <v-sheet class="mx-auto mb-10">
                        <v-slide-group class="py-4 mx-n5" show-arrows>
                            <v-slide-group-item v-for="item in items" :key="item.title">
                                <v-hover v-slot="{ isHovering, props }">
                                    <v-card class="ma-4" :elevation="isHovering ? 12 : 4" v-bind="props" width="370"
                                        height="150" color="">
                                        <v-row no-gutters class="px-4" style="height: 100%;">
                                            <v-col cols="4" class="d-flex justify-center align-center">
                                                <v-sheet class="rounded-circle"
                                                    style="height: 100px; width: 100px; overflow: hidden;">
                                                    <v-img :src="item.img" width="100%" height="100%" cover></v-img>
                                                </v-sheet>
                                            </v-col>
                                            <v-col cols="8" class="py-4 pl-4 d-flex align-center justify-start">
                                                <span>{{ item.saying }}</span>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-hover>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-container> -->


    <v-container>
        <v-row no-gutters class="pt-5">
            <h1 class="heading font-weight-medium">
                About Us
            </h1>
        </v-row>

        <v-row no-gutters class="mt-8">
            <v-col cols="12" sm="7" md="8" class="pr-10">
                <div class="pb-6 content">
                    Launched in 2022, checkedspot.com, India’s No. 1 only portal with only verified properties, deals with
                    every
                    aspect of the consumers’ needs in the real estate industry. It is an online forum where buyers, sellers
                    and
                    brokers/agents can exchange information about real estate properties quickly, effectively and free. At
                    checkedspot.com, you can advertise a property, search for a property, browse through properties, build
                    your
                    own property microsite, and keep yourself updated with the latest news and trends making headlines in
                    the
                    realty sector.
                </div>
                <div class="py-6">
                    <h2 class="heading2">Why Checked Spot?</h2>
                    <div class="content">
                        At present, checkedspot.com prides itself for having farmhouses, farmlands, and plots listings
                        spanning across
                        multiple cities in South India. Of all, In addition to providing an online platform to real estate
                        developers, brokers and property owners for listing their property for sale, purchase we are also
                        construction specialist with most competitive price at top quality for your home dreams.
                    </div>
                </div>
                <div class="mt-n3 content">
                    With the ever-evolving online search behaviour, checkedspot.com shares updated information pertinent to
                    real
                    estate activities, assisting prospective buyers to make informed buying decision. We make online
                    property
                    search easier, quicker and smarter!
                </div>

            </v-col>

            <v-col cols="12" sm="5" md="4" class="d-none d-sm-block">
                <v-row no-gutters class="pa-0">
                    <v-col cols="12" class="pb-3">
                        <video class="backgroundvideo"
                            poster="https://checkedspot.blob.core.windows.net/assets/headerVideoPoster.png" autoplay muted
                            loop>
                            <source src="https://checkedspot.blob.core.windows.net/assets/7.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </v-col>
                    <v-col cols="12" class="my-3 imageCont1" style="height: 300px;">
                    </v-col>
                    <v-col cols="12" class="my-3 imageCont2" style="height: 300px;">
                    </v-col>
                    <v-col cols="12" class="mt-3 imageCont3" style="height: 300px;">
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col class="pt-12" cols="12">

                <h2 class="heading2">What our customers have to say.</h2>

                <v-sheet class="mx-auto mb-10">
                    <v-slide-group class="py-4 mx-n5" show-arrows>
                        <v-slide-group-item v-for="item in items" :key="item.title">
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card class="ma-4" :elevation="isHovering ? 12 : 4" v-bind="props" width="370"
                                    height="150" color="">
                                    <v-row no-gutters class="px-4" style="height: 100%;">
                                        <v-col cols="4" class="d-flex justify-center align-center">
                                            <v-sheet class="rounded-circle"
                                                style="height: 100px; width: 100px; overflow: hidden;">
                                                <v-img :src="item.img" width="100%" height="100%" cover></v-img>
                                            </v-sheet>
                                        </v-col>
                                        <v-col cols="8" class="py-4 pl-4 d-flex align-center justify-start">
                                            <span>{{ item.saying }}</span>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-hover>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import customer1 from '@/assets/customers/customer1.jpeg';

const icons = ref(['mdi-rewind', 'mdi-play', 'mdi-fast-forward'])
const items = ref([
    {
        img: customer1,
        saying: "Customer review. Customer review Customer review Customer review"
    },
    {
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/singer.jpg',
        saying: "Customer review. Customer review Customer review Customer review"
    },
    {
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg',
        saying: "Customer review. Customer review Customer review Customer review"
    },
    {
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg',
        saying: "Customer review. Customer review Customer review Customer review"
    },
])
const transparent = ref('rgba(255, 255, 255, 0)');
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');


.heading {
    border-bottom: solid 1px rgb(63, 63, 63);
    color: rgb(63, 63, 63);
    font-size: 40px;
}

.backgroundvideo {
    width: 100%;
    height: 55vh;
    object-fit: cover;
}

.content {
    margin-top: 20px;
    color: rgb(63, 63, 63);
    line-height: 30px;
    font-size: 17px;
    text-align: justify;
}

.heading2 {
    border-bottom: solid 2px rgb(63, 63, 63);
    color: rgb(63, 63, 63);
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
}

.imageCont1 {
    background-image: url('../assets/aboutusconstruction.jpg');
    background-size: cover;
    background-position-y: -50px;
}

.imageCont2 {
    background-image: url('../assets/aboutusplot.jpg');
    background-size: cover;
    background-position-y: -50px;
}

.imageCont3 {
    background-image: url('../assets/aboutusfarmland.jpg');
    background-size: cover;
    background-position-y: -50px;
}

.merriweatherFont {
    font-size: 30px;
    font-family: 'Merriweather', serif !important;
}</style>