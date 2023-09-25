<template>
    <v-container fluid style="background-color: #FAFAFA; height: 100%;" id="prop_cont">
        <!-- <v-row no-gutters class="px-sm-14">
            <v-col cols="12">
                <v-breadcrumbs :items="items">
                    <template v-slot:prepend>
                        <v-icon size="small" icon="mdi-vuetify"></v-icon>
                    </template>
                </v-breadcrumbs>
            </v-col>
        </v-row> -->

        <!-- <v-row v-if="propertiesData?.data" no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
            <v-col cols="5">
                <div class="text-center">
                    <v-pagination @click="getAllProperty" v-model="pageNumber" :length="noOfPage" prev-icon="mdi-menu-left"
                        next-icon="mdi-menu-right"></v-pagination>
                </div>
            </v-col>
        </v-row> -->

        <v-row v-if="receivedProperties" no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
            <v-col cols="5">
                <div class="text-center text-h3">
                    No data available of type {{ propertyFilterObj?.type }}.
                </div>
            </v-col>
        </v-row>
        <!-- property cards Section  -->

        <v-row no-gutters class="px-sm-14">
            <v-col class="px-2 my-2 px-md-4 my-md-4" v-for="(data, index) in propertiesData?.data" cols="12" md="6" lg="4"
                :key="index">
                <property-card :property="data" />
            </v-col>
        </v-row>
        <v-row v-if="!propertiesData?.data" no-gutters class="d-flex justify-center align-center"
            style="height: calc(100% - 54px);">
            <v-col cols="4">
                <v-progress-linear color="pink-accent-3" indeterminate rounded height="10"></v-progress-linear>
            </v-col>
        </v-row>

        <!-- <v-row v-if="propertiesData?.data" no-gutters class="px-sm-14 py-5 d-flex justify-center align-center">
            <v-col cols="5">
                <div class="text-center">
                    <v-pagination @click="getAllProperty" v-model="pageNumber" :length="noOfPage" prev-icon="mdi-menu-left"
                        next-icon="mdi-menu-right"></v-pagination>
                </div>
            </v-col>
        </v-row> -->
    </v-container>
</template>

<script lang="ts" setup>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from "@/data/api/index.js";
import PropertyCard from '@/components/PropertyCard.vue';
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
//@ts-ignore
import { usePropertyStore } from '@/store/property.ts';

const route = useRoute();
const router = useRouter();

const items = reactive([
    {
        title: "Home",
        disabled: false,
        href: "/",
    },
    {
        title: "Listing",
        disabled: true,
        href: "/listing",
    },
]);

const propertiesData = reactive({ data: [] });
const propertyFilterObj = reactive({ ...route?.query });

let cities:any = null;
if (!Array.isArray(route.query.city) && (typeof (route.query.city) === 'string')) {
    cities = [route.query.city];
} else if (Array.isArray(route.query.city)) {
    cities = [...route.query.city];
}
const limit = ref(6);
const noOfPage = ref(0);
const receivedProperties = ref(false);
const isFetchingData = ref(false);
async function getAllProperty() {
    const filterData = {
        params: {
            //@ts-ignore
            type: (propertyFilterObj?.type)?.length > 0 ? propertyFilterObj?.type : null,
            isVerifiedByCheckedSpot: propertyFilterObj?.isVerifiedByCheckedSpot,
            city: cities,
            areaFrom: propertyFilterObj?.areaFrom,
            areaTo: propertyFilterObj?.areaTo,
            costFrom: propertyFilterObj?.costFrom,
            costTo: propertyFilterObj?.costTo,
            limit: limit.value,
            pageNumber: usePropertyStore().pageNumber,
        },
    };

    const res = await api.property.getProperties(filterData);
    if (res.status === 200) {
        const data = res?.data;
        //@ts-ignore
        propertiesData?.data?.push(...data);
        noOfPage.value = Math.ceil(res?.noOfdata / limit.value);
        if (noOfPage.value >= usePropertyStore().pageNumber) {
            usePropertyStore().increment();
        }
        if (res.noOfdata.value <= 0) {
            receivedProperties.value = true;
        }
    } else {
        router.push({ path: '/error', query: { status: res?.status } })
    }
}

window.addEventListener('scroll', async () => {
    if (isFetchingData.value) return;

    const scrollY = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (scrollY + viewportHeight > pageHeight - 240 && noOfPage.value >= usePropertyStore().pageNumber) {
        // User has reached the 240px above the end of the page
        isFetchingData.value = true;
        await getAllProperty();
        isFetchingData.value = false;
    }
});

onMounted(async () => {
    if (usePropertyStore().pageNumber === 1) {
        await getAllProperty();
    }
});

</script>

<style scoped></style>


<!-- <template>
    <div class="heading">
        <h1>Infinite Scroll</h1>
        <h4>A simple infinite scroll example using Vue.js</h4>
    </div>

    <div class="container" id="app">

        <div class="list-group-wrapper">
            <transition name="fade">
                <div class="loading" v-show="loading">
                    <span class="fa fa-spinner fa-spin"></span> Loading
                </div>
            </transition>
            <ul class="list-group" id="infinite-list">
                < <li class="list-group-item" v-for="(item, index) in items" v-bind:key="index" v-text="item"></li> >
                <v-row no-gutters class="px-sm-14">
                    <v-col class="px-2 my-2 px-md-4 my-md-4" v-for="(data, index) in propertiesData?.data" cols="12" md="6"
                        lg="4" :key="index">
                        <property-card :property="data" />
                    </v-col>
                </v-row>
            </ul>
        </div>

    </div>
</template>
   -->
<!-- <script lang="ts" setup>

import { onMounted, ref, reactive, computed } from 'vue';


const loading = ref(false);
const nextItem = ref(1);
const items = ref([]);

// function loadMore() {

//     /** This is only for this demo, you could 
//       * replace the following with code to hit 
//       * an endpoint to pull in more data. **/
//     loading.value = true;
//     setTimeout(e => {
//         for (var i = 0; i < 20; i++) {
//             items.value.push('Item ' + nextItem.value++);
//         }
//         loading.value = false;
//     }, 200);
//     /**************************************/

// }


onMounted(async () => {

    // Detect when scrolled to bottom.
    const listElm = document.querySelector('#infinite-list');

    listElm.addEventListener('scroll', async (e) => {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            await getAllProperty();
        }
    });

    // Initially load some items.
    await getAllProperty();

});
</script> -->
  

<!-- <style scoped>
/* $purple: #5c4084; */

body {
    background-color: purple;
    padding: 50px;
}

.container {
    padding: 40px 80px 15px 80px;
    background-color: #fff;
    border-radius: 8px;
    max-width: 800px;
}

.heading {
    text-align: center;
}

.heading>h1 {
    background: -webkit-linear-gradient(#fff, #999);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-align: center;
    margin: 0 0 5px 0;
    font-weight: 900;
    font-size: 4rem;
    color: #fff;
}

.heading>h4 {
    color: lighten(#5c3d86, 30%);
    text-align: center;
    margin: 0 0 35px 0;
    font-weight: 400;
    font-size: 24px;
}

.list-group-wrapper {
    position: relative;
}

.list-group {
    overflow: auto;
    height: 50vh;
    border: 2px solid #dce4ec;
    border-radius: 5px;
}

.list-group-item {
    margin-top: 1px;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid #dce4ec;
}

.loading {
    text-align: center;
    position: absolute;
    color: #fff;
    z-index: 9;
    /* background: $purple; */
    padding: 8px 18px;
    border-radius: 5px;
    left: calc(50% - 45px);
    top: calc(50% - 18px);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>
 -->
