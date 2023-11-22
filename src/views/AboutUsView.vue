<template>
    <v-container fluid class="pa-0">
        <div class="whoWeAreSec1 text-center pt-16">
            <h1 class="heading">
                About Us
            </h1>
        </div>
        <v-row no-gutters justify="center">
            <v-col cols="5" class="pb-8 pt-4">
                <h1 class="text-h5 text-center font-weight-light">
                    Plotwala verified(Checked Spots) are those properties which are not just those
                    properties posted in web but they are,
                </h1>
            </v-col>
        </v-row>
        <v-row no-gutters class="px-16 pt-5 pb-10">
            <v-col cols="12" md="6" class="pt-10 pr-0 pr-md-5">
                <v-img src="https://checkedspot.blob.core.windows.net/assets/save_Time.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="pt-10 px-0 px-md-16 d-flex flex-column justify-center align-center">
                <h1 class="merriweatherFont mb-8">Verified Properties: Save Time, Buy with Confidence!</h1>
                <div class="d-flex align-center mb-3 pr-2">
                    <p class="text-h6 font-weight-light">
                        Properties are digitally and physically verified by one ore more
                        of our Plotwala representative such that you can save your
                        time and be sure on what you are buying.
                    </p>
                </div>
            </v-col>
        </v-row>

        <v-row no-gutters class="px-16 pt-5 pb-10 d-flex flex-column-reverse flex-md-row">

            <v-col cols="12" md="6" class="pt-10 px-0 px-md-16 d-flex flex-column justify-center align-center">
                <h1 class="merriweatherFont mb-8">Verified Documents: On-Site Verification with Legal Experts!</h1>
                <div class="d-flex align-center mb-3 pr-2">
                    <p class="text-h6 font-weight-light">
                        Documents are verified by visiting the actual property owners
                        along with our specialist legal team.
                    </p>
                </div>
            </v-col>
            <v-col cols="12" md="6" class="pt-10 pr-0 pr-md-5">
                <v-img src="https://checkedspot.blob.core.windows.net/assets/Verified_land.jpg"></v-img>
            </v-col>
        </v-row>

        <v-row no-gutters class="px-16 py-5">
            <v-col cols="12" md="6" class="pt-10 pr-0 pr-md-5">
                <v-img src="https://checkedspot.blob.core.windows.net/assets/warning.jpg"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="pt-10 px-0 px-md-16 d-flex flex-column justify-center align-center">
                <h1 class="merriweatherFont mb-8">Swift Warning Flagging: Expert Team Identifies and Alerts Potential
                    Issues!</h1>
                <div class="d-flex align-center mb-3 pr-2">
                    <p class="text-h6 font-weight-light">
                        Any thing which our expert team finds as a warning its
                        immediately flagged.
                    </p>
                </div>
            </v-col>
        </v-row>

        <v-row no-gutters class="px-8 pt-8 mb-16">
            <v-col cols="12">
                <p class="my-4 text-body-1 font-weight-light pl-8">
                    To see a sample report on each of property listed is verified who
                    can click here to see a
                    <a href="#">Sample Report - Checked Spots</a>
                    , Otherwise, you're done!
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

.heading {    
    font-family: 'Merriweather', serif !important;
    font-size: 45px;
}

.merriweatherFont {
    font-size: 30px;
    font-family: 'Merriweather', serif !important; 
}
</style>