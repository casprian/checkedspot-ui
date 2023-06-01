<!-- <template>
    <v-container class="pa-0">
        <v-row no-gutters>
            <v-col cols="12">
                <div class="test-h3">UPDATE Property</div>
            </v-col>
            <v-col cols="12">
                <v-btn @click="router.back()" variant="flat" color="red">Back</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import api from '@/data/api/index.js';
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive } from "vue";
const router = useRouter();
const route = useRoute();
const propertyId = parseInt(JSON.parse(JSON.stringify(route?.query?.propertyId)));
let data:Object = reactive({});

async function propertydata(propertyId:number) {    
    try {
        const res = await api?.property?.getProperty({params: {"propertyId": propertyId}});

        if(res?.status === 200) {
            data = {...data, ...res?.data}
        }else {
            router.push({path: '/error', query: {status: res?.status}})
        }
    }catch (e) {
        console.log(e);
    }
} 

onMounted(() => {
    propertydata(propertyId);
})


</script>

<style scoped>

</style> -->