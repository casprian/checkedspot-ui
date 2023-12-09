<template>
    <v-container class="py-8">
        <v-row no-gutters class="mb-10">
            <v-col cols="12">
                <h2 class="heading completed">Completed Projects</h2>
            </v-col>
            <v-col cols="12" v-if="competedProperties.length <= 0">
                <h2 class="text-center text-grey-darken-2">{{ completedMessage ? completedMessage : "0 Projects Completed" }}</h2>
            </v-col>
            <v-col v-else class="px-2 my-2 px-md-3 my-md-3" cols="12" md="6" lg="4" v-for="(data, index) in competedProperties" :key="index">
                <property-card :property="data" />
            </v-col>
        </v-row>

        <v-row no-gutters class="mb-10">
            <v-col cols="12">
                <h2 class="heading underconstruection">Under Construction Projects</h2>
            </v-col>
            <v-col cols="12" v-if="competedProperties.length <= 0">
                <h2 class="text-center text-grey-darken-2">{{ underConstructionMessage ? underConstructionMessage : "0 Projects Under Construction" }} </h2>
            </v-col>
            <v-col v-else class="px-2 my-2 px-md-3 my-md-3" cols="12" md="6" lg="4" v-for="(data, index) in underConstructionProperties" :key="index">
                <property-card :property="data" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref } from 'vue';
//@ts-ignore
import api from '@/data/api/index.js';
import { useRouter } from 'vue-router';

const PropertyCard  = defineAsyncComponent(() => import('@/components/PropertyCard.vue'));

const router = useRouter();
const competedProperties = ref([]);
const completedMessage = ref('loading...')
const underConstructionMessage = ref('loading...')
const underConstructionProperties = ref([]);


async function fetchCompetedProperties() {
    const res = await api?.property?.getProperties({params: {limit: 5}});
    if(res?.status === 200) {
        if(res.data <= 0) {
            completedMessage.value = '';
        }
        competedProperties.value = res?.data;
    } else {
        router.push({ path: '/error', query: { status: res?.status } });
    }
}

async function fetchUnderConstructionProperties() {
    const res = await api?.property?.getProperties({params: {limit: 5}});
    if(res?.status === 200) {
        if(res.data <= 0) {
            underConstructionMessage.value = '';
        }
        underConstructionProperties.value = res?.data;
    } else {
        router.push({ path: '/error', query: { status: res?.status } });
    }
}

onMounted(async()=>{
    await fetchCompetedProperties();
    await fetchUnderConstructionProperties();
})

</script>

<style scoped>

.heading {
    padding: 5px 10px;
    background-color: rgb(41, 87, 69);
    margin-bottom: 20px;
    font-weight: 500;
    color: rgb(238, 238, 238);
    border-bottom: solid 2px rgb(130, 130, 130);
}

.completed { 
    color: rgb(255, 255, 255);
    background-color: #00B8D4;
}

.underconstruection {    
    color: rgb(255, 255, 255);
    background-color: rgb(207, 173, 1);
}
</style>