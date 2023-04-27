<template>
    <v-container fluid class="pa-0 pt-16 px-4 bg-background">
        <v-row v-if="!property?.data" no-gutters class="px-sm-14">
            <v-col cols="4" class="loader">
                <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
            </v-col>
        </v-row>
        <v-row v-else no-gutters class="px-sm-10">
            <v-col cols="12" md="8" class="pr-0 pr-md-3">
                <v-row no-gutters class="mb-10">
                    <v-col cols="12" sm="9">
                        <div class="d-flex justify-space-between align-center justify-sm-start">
                            <div class="text-h6 text-sm-h5 font-weight-medium">
                                Checkedspot Property
                            </div>
                            <div>
                                <v-btn variant="flat" color="pink-accent-3" density="comfortable" class="rounded-pill ml-6">
                                    For
                                    {{
                                        property?.data?.propertyStatus
                                        ? property?.data?.propertyStatus
                                        : "sale"
                                    }}
                                </v-btn>
                            </div>
                        </div>
                        <div class="py-2">
                            <v-icon size="15" class="mt-n1 mr-2" icon="mdi-map-marker" color="grey-darken-2"></v-icon>
                            <span class="text-body-1 text-md-h6 font-weight-regular text-grey-darken-2">{{
                                property?.data?.location
                                ? property?.data?.location
                                : "Bangalore"
                            }}</span>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="3" class="d-flex flex-column align-start align-sm-end">
                        <div class="text-h6 text-md-h5 font-weight-medium text-pink-accent-3">
                            ₹ {{ property?.data?.cost ? property?.data?.cost : 0 }}
                        </div>
                        <div class="text-body-1 text-md-h6 font-weight-regular text-black">
                            ₹ {{ costPerSqFt ? costPerSqFt : 0 }} / sq ft
                        </div>
                    </v-col>
                </v-row>

                <!-- Gallery -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-3">
                                <v-card-title class="title">Gallery</v-card-title>
                            </v-card-item>

                            <v-card-item>
                                <v-carousel height="400" show-arrows="hover" delimiter-icon="mdi-vuetify" progress
                                    continuous hide-delimiter-background>
                                    <!-- <template v-slot:prev="{ props }">
                                        <v-btn variant="elevated" color="success" @click="props.onClick">Previous slide</v-btn>
                                    </template>
                                    <template v-slot:next="{ props }">
                                        <v-btn variant="elevated" color="info" @click="props.onClick">Next slide</v-btn>
                                    </template> -->
                                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                        <v-sheet :color="colors[i]" height="100%">
                                            <div class="d-flex fill-height justify-center align-center">
                                                <div class="text-h2">
                                                    {{ slide }} Slide
                                                </div>
                                            </div>
                                            <template v-slot:placeholder>
                                                <v-row>
                                                    <v-col cols="12" height="100px" class="bg-red"> kafds</v-col>
                                                </v-row>
                                            </template>
                                        </v-sheet>
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Description -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Description</v-card-title>
                            </v-card-item>

                            <v-card-text class="description text-body-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                                voluptas dolor dolores nemo omnis veniam, voluptatibus sit vero
                                non tempora iste officia. Minima explicabo dolores iste, veniam
                                facilis corrupti odio maiores nihil temporibus accusamus. Sed ex
                                dolore dicta quod cumque.<br /><br />

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                                voluptas dolor dolores nemo omnis veniam, voluptatibus sit vero
                                non tempora iste officia. Minima explicabo dolores iste, veniam
                                facilis corrupti odio maiores nihil temporibus accusamus. Sed ex
                                dolore dicta quod cumque.<br /><br />

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                                voluptas dolor dolores nemo omnis veniam, voluptatibus sit vero
                                non tempora iste officia. Minima explicabo dolores iste, veniam
                                facilis corrupti odio maiores nihil temporibus accusamus. Sed ex
                                dolore dicta quod cumque.<br /><br />

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                                voluptas dolor dolores nemo omnis veniam, voluptatibus sit vero
                                non tempora iste officia. Minima explicabo dolores iste, veniam
                                facilis corrupti odio maiores nihil temporibus accusamus. Sed ex
                                dolore dicta quod cumque.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Property Details -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Property Details</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7" :class="pdStyle01">
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property ID:
                                    <span :class="pdStyle02">{{
                                        property?.data?.projectId ? property?.data?.projectId : 0
                                    }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Type:
                                    <span :class="pdStyle02">{{
                                        property?.data?.type ? property?.data?.type : "plot"
                                    }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Status:
                                    <span :class="pdStyle02">{{
                                        property?.data?.propertyStatus
                                        ? property?.data?.propertyStatus
                                        : "sale"
                                    }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Property Price:
                                    <span :class="pdStyle02">{{
                                        property?.data?.cost ? property?.data?.cost : 0
                                    }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bedrooms:
                                    <span :class="pdStyle02">{{
                                        property?.data?.noOfBedroom
                                        ? property?.data?.noOfBedroom
                                        : 0
                                    }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Bathrooms:
                                    <span :class="pdStyle02">{{
                                        property?.data?.noOfBathroom
                                        ? property?.data?.noOfBathroom
                                        : 0
                                    }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Year Built:
                                    <span :class="pdStyle02">{{
                                        property?.data?.yearOfBuilt
                                        ? property?.data?.yearOfBuilt
                                        : 2023
                                    }}</span></v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Refrigerator:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.refrigerator !== "NOT_AVAILABLE"
                                            ? property?.data?.refrigerator
                                            : 0
                                        }}
                                    </span>
                                </v-col>
                                <v-col class="pdLH" cols="12" sm="6" md="4">Air Conditioning:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.airConditioning !== "NOT_AVAILABLE"
                                            ? property?.data?.airConditioning
                                            : 0
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Dish Washer:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.dishWasher !== "NOT_AVAILABLE"
                                            ? property?.data?.dishWasher
                                            : 0
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Elivator:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.elivator !== "NOT_AVAILABLE"
                                            ? property?.data?.elivator
                                            : 0
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">TV Cable:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.tvCable !== "NOT_AVAILABLE"
                                            ? property?.data?.tvCable
                                            : 0
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Laundry Room:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.laundryRoom !== "NOT_AVAILABLE"
                                            ? property?.data?.laundryRoom
                                            : 0
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Swimming Pool:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.swimmingPool !== "NOT_AVAILABLE"
                                            ? property?.data?.swimmingPool
                                            : 0
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Wi Fi:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.wifi !== "NOT_AVAILABLE"
                                            ? property?.data?.wifi
                                            : 0
                                        }}
                                    </span>
                                </v-col><v-col class="pdLH" cols="12" sm="6" md="4">Parking Lot:
                                    <span :class="pdStyle02">
                                        {{
                                            property?.data?.parkingLot !== "NOT_AVAILABLE"
                                            ? property?.data?.parkingLot
                                            : 0
                                        }}
                                    </span>
                                </v-col>
                            </v-row>

                            <!-- <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Amenities</v-card-title>
                            </v-card-item> -->

                            <!-- <v-card-text class="description text-body-2"> </v-card-text> -->
                            <!-- <v-row no-gutters class="px-4 pb-2">
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> Air Conditioner
                                    </div>
                                </v-col>
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> Balcony
                                    </div>
                                </v-col>
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> Wifi
                                    </div>
                                </v-col>
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> Dishwasher
                                    </div>
                                </v-col>
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> TV Cable
                                    </div>
                                </v-col>
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> Garage
                                    </div>
                                </v-col>
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> Swimming Pool
                                    </div>
                                </v-col>
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> Refrgerator
                                    </div>
                                </v-col>
                                <v-col cols="12" sm='4' class="my-2">
                                    <div class="text-body-1 ">
                                        <v-icon color="pink-accent-3" class="rounded-0 mr-1 mt-n2" size="25"
                                            icon="mdi-checkbox-marked"></v-icon> Elivator
                                    </div>
                                </v-col>
                            </v-row> -->
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Floor Plans -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Plan</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7">
                                <v-img
                                    src="https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg"></v-img>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- What's Nearby -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">What's Nearby</v-card-title>
                            </v-card-item>

                            <v-card-item class="mb-2">
                                <v-card-title prepend="mdi-vuetify" class="text-body-1 text-blue-darken-1">
                                    <v-icon icon="mdi-school"></v-icon> Education
                                </v-card-title>
                                <v-card-text class="pa-0">
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                Education Mandarin
                                                <span class="text-body-2 font-weight-normal">(15.61 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                Marry's Education
                                                <span class="text-body-2 font-weight-normal">(15.23 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                The Kaplan
                                                <span class="text-body-2 font-weight-normal">(15.16 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                </v-card-text>
                            </v-card-item>
                            <v-card-item class="mb-2">
                                <v-card-title class="text-body-1 text-green">
                                    <v-icon icon="mdi-stethoscope"></v-icon> Health & Medical
                                </v-card-title>
                                <v-card-text class="pa-0">
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                Education Mandarin
                                                <span class="text-body-2 font-weight-normal">(15.61 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                Marry's Education
                                                <span class="text-body-2 font-weight-normal">(15.23 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                The Kaplan
                                                <span class="text-body-2 font-weight-normal">(15.16 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                </v-card-text>
                            </v-card-item>
                            <v-card-item class="mb-2">
                                <v-card-title class="text-body-1 text-pink-accent-3">
                                    <v-icon icon="mdi-train-car"></v-icon> Transportation
                                </v-card-title>
                                <v-card-text class="pa-0">
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                Education Mandarin
                                                <span class="text-body-2 font-weight-normal">(15.61 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                Marry's Education
                                                <span class="text-body-2 font-weight-normal">(15.23 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="6"
                                            class="pa-0 py-1 d-flex justiy-center align-center text-grey-darken-2">
                                            <div class="text-body-2 font-weight-medium">
                                                The Kaplan
                                                <span class="text-body-2 font-weight-normal">(15.16 miles)</span>
                                            </div>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6"
                                            class="pa-0 ma-sm-0 ml-n2 d-flex justify-start align-center justify-sm-end">
                                            <rating />
                                        </v-col> -->
                                    </v-row>
                                </v-card-text>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Property Video -->
                <!-- <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-4 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Property Video</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="pa-2">
                                <v-col cols="12">
                                    <video id="propVideo" muted controls>
                                        <source src="../assets/videos/7.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row> -->

                <!-- Location -->
                <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Location</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4 pb-7" :class="pdStyle01">
                                
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Reviews -->
                <!-- <v-row no-gutters class="mb-1">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">{{ reviews.length }} Reviews</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4">
                                <v-col cols="12">
                                    <v-row no-gutters class="d-flex justify-space-between my-3"
                                        v-for="(item, index) in reviews" :key="index">
                                        <v-col cols="12" sm="2" class="">
                                            <v-avatar size="90" color="grey-darken-3"
                                                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
                                        </v-col>
                                        <v-col cols="12" sm="9" class="pb-7">
                                            <v-row no-gutters class="pb-2 pb-sm-7">
                                                <v-col cols="12" sm="6">
                                                    <div class="text-h6 text-pink-accent-3 pb-1">{{ item.name }}</div>
                                                    <div class="text-body-1 text-grey-darken-2">{{ item.dateOfReview }}
                                                    </div>
                                                </v-col>
                                                <v-col cols="12" sm="6" class="d-flex justify-start justify-sm-end ml-n2">
                                                    <div class="text-body-1">
                                                        <rating :rate="item.rating" />
                                                    </div>
                                                </v-col>
                                            </v-row>
                                            <v-row no-gutters>
                                                <div>{{ item.review }}</div>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row> -->

                <!-- Review Form -->
                <!-- <v-row no-gutters class="mb-8">
                    <v-col cols="12">
                        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
                            <v-card-item class="titleCont mb-5">
                                <v-card-title class="title">Add Review</v-card-title>
                            </v-card-item>

                            <v-row no-gutters class="px-4">
                                <v-col cols="12">
                                    <v-row no-gutters>
                                        <v-col cols="12" sm="7">
                                            <div class="text-body-1">Your rating sor this listing</div>
                                            <v-rating class="rating pa-0 ma-0" v-model="rating" hover half-increments
                                                density="comfortable" active-color="pink-accent-3"
                                                color="pink-accent-3"></v-rating>
                                        </v-col>
                                        <v-col cols="12" sm="5" class="d-flex justify-start align-center justify-sm-end">
                                            <button class="uploadBtn">
                                                <label class="input-group-text" for="inputGroupFile">Upload Photos</label>
                                                <input type="file" class="form-control" id="inputGroupFile"
                                                    style="width:0px;">
                                            </button>
                                        </v-col>
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12" class="py-6">
                                            <v-text-field hide-details="auto" density="comfortable" label="First Name"
                                                variant="outlined" placeholder="John" type="text"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field hide-details="auto" density="comfortable" label="Last Name"
                                                variant="outlined" placeholder="Wick" type="text"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" class="py-6">
                                            <v-text-field hide-details="auto" density="comfortable" label="Email address"
                                                variant="outlined" placeholder="johnwick@gmail.com"
                                                type="email"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-textarea variant="outlined" label="Review" placeholder="review"></v-textarea>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-btn variant="flat" color="pink-accent-3">Submit Review</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row> -->
            </v-col>
            <v-col cols="12" md="4" class="pl-0 pl-md-3">
                <v-card class="rounded-0" elevation="2">
                    <v-card-item>
                        <v-card-title class="pb-5 mx-3 mb-10 pt-2" style="border-bottom: 1px solid #e0e0e0">Agent
                            Information
                        </v-card-title>
                        <v-card-actions>
                            <v-avatar class="mx-2" size="75" color="grey-darken-3"
                                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
                            <v-sheet class="px-5 mt-n7">
                                <v-card-title>Evan You</v-card-title>
                                <div class="text-subtitle-1 text-grey-darken-1">
                                    Vue Creator
                                </div>
                            </v-sheet>
                        </v-card-actions>
                        <v-row no-gutters class="pt-7 px-3 mx-3 pb-2 mb-2">
                            <v-col cols="12" class="d-flex align-center pb-3">
                                <v-icon icon="mdi-map-marker" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    302 Av Park, New York
                                </div>
                            </v-col>
                            <v-col cols="12" class="d-flex align-center pb-3">
                                <v-icon icon="mdi-phone" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    (234) 0200 17813
                                </div>
                            </v-col>
                            <v-col cols="12" class="d-flex align-center">
                                <v-icon icon="mdi-email" size="19" color="#FF385C"></v-icon>
                                <div class="text-subtitle-1 px-5 pt-2 text-grey-darken-1">
                                    lisa@gmail.com
                                </div>
                            </v-col>
                        </v-row>
                        <!-- <v-row no-gutters class="px-3 pb-5">
                            <v-col>
                                <v-card-title class="pb-4">Request Inquiry</v-card-title>
                                <v-form>
                                    <v-text-field variant="outlined" density="comfortable"
                                        placeholder="Full Name"></v-text-field>
                                    <v-text-field variant="outlined" density="comfortable" type="number"
                                        placeholder="Mobile Number"></v-text-field>
                                    <v-text-field variant="outlined" density="comfortable"
                                        placeholder="Email Adress"></v-text-field>
                                    <v-textarea placeholder="Message" density="comfortable" variant="outlined"></v-textarea>
                                    <v-btn variant="flat" color="pink-accent-3" height="45"
                                        class="text-capitalize rounded-0 text-body-1" block>Submit Request</v-btn>
                                </v-form>
                            </v-col>
                        </v-row> -->
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import api from '@/data/api/index.js';
import Rating from "@/components/Rating.vue";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const pdStyle01 = ref("text-body-1 font-weight-medium text-grey-darken-2");
const pdStyle02 = ref("text-body-1 text-grey-darken-1");

const route = useRoute();
const rating = ref(3.5)
const costPerSqFt = ref(0);
const property = reactive({
    data: null,
});
// console.log(property)
async function propertydata() {
    const res = await api?.property?.getProperty({
        params: {
            propertyId: route?.params?.propertyId,
        },
    })
console.log(res)
    property.data = res?.data;
    costPerSqFt.value = Math.ceil(res?.data?.cost / res?.data?.totalArea);
}
onMounted(async () => {
    await propertydata();
});
const slides = reactive([
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
]);
const colors = reactive([
    'red',
    'blue',
    'yellow',
    'orange',
    'purple',
]);
const reviews = reactive([
    {
        name: "Vivek",
        dateOfReview: '26-04-2023',
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus sapiente dolor cumque. Doloribus saepe eum quaerat, minus sunt inventore corporis dolor enim quam maxime nihil officiis? Vel, vero natus.",
        photos: [],
        rating: 4,
    },
    {
        name: "Kashif",
        dateOfReview: '26-04-2023',
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus sapiente dolor cumque. Doloribus saepe eum quaerat, minus sunt inventore corporis dolor enim quam maxime nihil officiis? Vel, vero natus.",
        photos: [],
        rating: 3.5,
    },
    {
        name: "Divyashant",
        dateOfReview: '26-04-2023',
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus sapiente dolor cumque. Doloribus saepe eum quaerat, minus sunt inventore corporis dolor enim quam maxime nihil officiis? Vel, vero natus.",
        photos: [],
        rating: 3,
    },
]);
</script>

<style scoped>
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

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
    background-color: #f50057;
    position: absolute;
    top: 43px;
}

.pdLH {
    line-height: 38px;
}

#propVideo {
    object-fit: cover;
    width: 100%;
    height: auto;
}

.uploadBtn {
    background-color: #F50057;
    padding: 5px 25px;
    border-radius: 20px;
    font-weight: 500;
    color: white;
}

.uploadBtn > label:hover {
    cursor: pointer;
}
</style>