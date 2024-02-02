<template>
    <v-container>
        <v-row no-gutters class="mt-6">
            <v-col cols="12" sm="7" md="8" class="pr-10">
                <div class="pb-3 content mt-0">
                    Launched in 2022, <a href="https://www.checkedspot.com" target="_blank">Checked Spot</a>, India’s No. 1
                    portal which displays only verified properties, We verify each property with care and a quality
                    checklist certified by checkedspot.
                </div>

                <div class="pb-3 content mt-0">
                    We deal with every aspect of the consumers’ needs in the real estate industry. It is an online forum
                    where buyers, sellers and brokers/agents can exchange information about real estate properties quickly,
                    effectively and free. At <a href="https://www.checkedspot.com" target="_blank">www.checkedspot.com</a>,
                    you can advertise a property, search for a property, browse through properties, build your own property
                    microsite, and keep yourself updated with the latest news and trends making headlines in the realty
                    sector.
                </div>

                <div class="pb-6 content mt-0">
                    We build your dream houses with lot of care , precision and giving attention to detail using our unique
                    methodology which ensure quality, transparency and trust.
                </div>
            </v-col>
            <v-col cols="12" sm="5" md="4">
                <video class="backgroundvideo"
                    poster="https://checkedspot.blob.core.windows.net/assets/headerVideoPoster.png" autoplay muted loop>
                    <source src="https://checkedspot.blob.core.windows.net/assets/7.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="12">
                <div class="py-6">
                    <h2 class="heading2">Why Checked Spot?</h2>

                    <div class="content">
                        At present, <a href="https://www.checkedspot.com" target="_blank">checkedspot.com</a> prides itself for having farmhouses, farmlands, and plots listings spanning
                        across multiple cities in South India. Of all, In addition to providing an online platform to real
                        estate developers, brokers and property owners for listing their property for sale, purchase we are
                        also construction specialist with most competitive price at top quality for your home dreams.
                    </div>

                    <div class="content">
                        With the ever-evolving online search behaviour, <a href="https://www.checkedspot.com" target="_blank">checkedspot.com</a> shares updated information pertinent
                        to real estate activities, assisting prospective buyers to make informed buying decision. We make
                        online property search easier, quicker and smarter!
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-row no-gutters class="pa-0 mt-8">
            <v-col cols="12">
                <h2 class="heading2 mb-0">What we do?</h2>
                <v-row no-gutters class="py-3 pt-5 mx-n2">
                    <v-col cols="12" sm="6" md="4" class="pa-2">
                        <v-img width="100%" height="100%" src="../assets/aboutusconstruction.jpg"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" class="pa-2">
                        <v-img width="100%" height="100%" src="../assets/aboutusplot.jpg"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" class="pa-2">
                        <v-img width="100%" height="100%" src="../assets/aboutusfarmland.jpg"></v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col class="pt-12" cols="12">

                <h2 class="heading2">Customers testimonial</h2>

                <v-sheet class="mx-auto mb-6">
                    <v-slide-group class="py-4 mx-n5" show-arrows>
                        <v-slide-group-item v-for="customer in customers" :key="customer.id">
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card class="ma-4" :elevation="isHovering ? 12 : 4" v-bind="props" width="350"
                                    height="170" color="grey-lighten-1">
                                    <v-row no-gutters class="px-4" style="height: 100%;">
                                        <v-col cols="3" class="d-flex justify-center align-center">
                                            <v-sheet class="rounded-circle"
                                                style="height: 60px; width: 60px; overflow: hidden;">
                                                <v-img :src="customer.img ? customer.img : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'" width="100%" height="100%" cover></v-img>
                                            </v-sheet>
                                        </v-col>
                                        <v-col cols="9" class="py-4 pl-4 text-body-2 d-flex flex-column align-start justify-center">
                                            <div class="text-left text-body-2 font-weight-medium mb-1">{{ customer.name }}</div>
                                            <span class="text-body-2">{{ customer.feedback }}</span>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-hover>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col class="pt-4" cols="12">

                <h2 class="heading2">Investors testimonial</h2>

                <v-sheet class="mx-auto mb-10">
                    <v-slide-group class="py-4 mx-n5" show-arrows>
                        <v-slide-group-item v-for="investor in investors" :key="investor.id">
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card class="ma-4" :elevation="isHovering ? 12 : 4" v-bind="props" width="350"
                                    height="170" color="grey-lighten-1">
                                    <v-row no-gutters class="px-4" style="height: 100%;">
                                        <v-col cols="3" class="d-flex  justify-center align-center">
                                            <v-sheet class="rounded-circle"
                                                style="height: 60px; width: 60px; overflow: hidden;">
                                                <v-img :src="investor.img ? investor.img : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'" width="100%" height="100%" cover></v-img>
                                            </v-sheet>
                                        </v-col>
                                        <v-col cols="9" class="py-4 pl-4 text-body-2 d-flex flex-column align-start justify-center">
                                            <div class="text-left text-body-2 font-weight-medium mb-1">{{ investor.name }}</div>
                                            <span class="text-body-2">{{ investor.feedback }}</span>
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
import IqbalAhmed from '@/assets/customers/IqbalAhmed.jpeg';
import MashoodAhmed from '@/assets/customers/MashoodAhmed.jpeg';

const icons = ref(['mdi-rewind', 'mdi-play', 'mdi-fast-forward']);

const customers = ref([
    {
        id: "1",
        name: "Iqbal Ahmed",
        img: IqbalAhmed,
        feedback: "Checked Spot's proactive and personalized approach ensures a smooth real estate journey. Trustworthy professionals for any property!"
    },
    {
        id: "2",
        name: "Mahantesh Elemmi",
        img: "",
        feedback: "Seamless property purchase with Checked Spot - their commitment to satisfaction is unmatched. Highly recommended!"
    },
    {
        id: "3",
        name: "Shakuntla",
        img: '',
        feedback: "Checked Spot's dedication and expertise shine in every real estate transaction, making it smooth and satisfying."
    },
    {
        id: "4",
        name: "Nagina Kausar",
        img: '',
        feedback: "Checked Spot's professionalism ensured a smooth farmhouse purchase. Highly recommend for a satisfying real estate experience!"
    },
    {
        id: "5",
        name: "Mashood Ahmed",
        img: MashoodAhmed,
        feedback: "Checked Spot's commitment to customer satisfaction made my property purchase stress-free. Trustworthy and highly recommended!"
    },
    {
        id: "6",
        name: "Naveed Pasha",
        img: '',
        feedback: "Seamless transaction with Checked Spot, making my farmhouse dream a reality. Professionalism and satisfaction guaranteed!"
    },
    {
        id: "7",
        name: "Hina Kausar",
        img: '',
        feedback: "Smooth real estate journey with Checked Spot - their dedication and personalized guidance shine. Highly recommended!"
    },
    {
        id: "8",
        name: "Shifa Aleem",
        img: '',
        feedback: "Checked Spot's proactive approach and expertise ensured a smooth purchase of my dream property. Highly satisfied!"
    },
    {
        id: "9",
        name: "Imdad",
        img: '',
        feedback: "A stress-free transaction with Checked Spot - their professionalism and dedication shine."
    },
    {
        id: "10",
        name: "Mudassir Pasha",
        img: '',
        feedback: "Checked Spot's expertise and guidance made my farmland purchase seamless. Highly recommend for any property!"
    },
    {
        id: "11",
        name: "Naziya Akthar",
        img: '',
        feedback: "Smooth sailing with Checked Spot—stellar service and expert guidance made my property purchase truly extraordinary."
    },
    {
        id: "12",
        name: "Shaziya Waheed",
        img: '',
        feedback: "Checked Spot's dedication and proficiency ensured a seamless experience, transforming my property dreams into reality."
    },
])

const investors = ref([
    {
        id: "1",
        name: "Mohammed Saad",
        img: "",
        feedback: "Investing with Checked Spot was a game-changer—expert advice, solid returns, and reliable professionalism. Remarkably satisfied!"
    },
    {
        id: "2",
        name: "Mohammed Shuhib",
        img: "",
        feedback: "Checked Spot maximized my investment success—proactive, strategic, and consistently delivering outstanding returns. Impressive!"
    },
    {
        id: "3",
        name: "Siddharth",
        img: "",
        feedback: "Checked Spot's investment wisdom stands out—astute decisions, transparent communication, and a focus on lasting success."
    },
    {
        id: "4",
        name: "Aleem Shariff",
        img: "",
        feedback: "Investing with Checked Spot brings peace of mind—smart decisions, steady growth, and unparalleled professionalism."
    },
])

const transparent = ref('rgba(255, 255, 255, 0)');
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

a {
    text-decoration: none;
}

.heading {
    border-bottom: solid 1px rgb(63, 63, 63);
    color: rgb(63, 63, 63);
    font-size: 40px;
}

.backgroundvideo {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.content {
    margin-top: 20px;
    color: rgb(63, 63, 63);
    line-height: 30px;
    font-size: 16px;
    text-align: justify;
}

.heading2 {
    border-bottom: solid 1px rgb(63, 63, 63);
    color: rgb(63, 63, 63);
    font-size: 20px;
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