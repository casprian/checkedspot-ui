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
        <v-row v-if="!(propertiesData?.data?.length > 0)" no-gutters class="d-flex justify-center align-center"
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
        <v-snackbar v-model="isFetchingData" color="pink">
            {{ 'Loading properties...' }}

            <template v-slot:actions>
                <v-btn white icon="mdi-close" @click="isFetchingData = false">
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from "@/data/api/index.js";
//@ts-ignore
import PropertyCard from '@/components/PropertyCard.vue';
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

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


let cities: any = null;
if (!Array.isArray(route.query.city) && (typeof (route.query.city) === 'string')) {
    cities = [route.query.city];
} else if (Array.isArray(route.query.city)) {
    cities = [...route.query.city];
}

const propertiesData = reactive({ data: [] });
const propertyFilterObj = reactive({ ...route?.query });
const pageNumber = ref(1);
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
            pageNumber: pageNumber.value,
        },
    };

    const res = await api.property.getProperties(filterData);
    if (res.status === 200) {
        const data = res?.data;
        //@ts-ignore
        propertiesData?.data?.push(...data);
        noOfPage.value = Math.ceil(res?.noOfdata / limit.value);
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

    if (scrollY + viewportHeight > pageHeight - 240 && noOfPage.value > pageNumber.value) {
        // User has reached the 240px above the end of the page

        /* isFetchingData is important to run the getAllProperty method only once when satisfy above conditions 
        and the snackbar appearence is secondary */

        isFetchingData.value = true;
        pageNumber.value++;
        await getAllProperty();
        isFetchingData.value = false;
    }
});

onMounted(async () => {
    if (pageNumber.value === 1) {
        await getAllProperty();
    }
});

</script>

<style scoped></style>