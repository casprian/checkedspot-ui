<template>
    <v-container>
        <form>
            <v-row no-gutters>
                <v-col cols="12" class="py-1 px-3">
                    <div class="py-3 text-h5 font-weight-medium text-pink-accent-1">Choose Property Type</div>
                    <v-radio-group v-model="propertyType" inline>
                        <v-radio class="px-3" color="pink-accent-3" label="Plot" value="plot"></v-radio>
                        <v-radio class="px-3" color="pink-accent-3" label="Flat" value="flat"></v-radio>
                    </v-radio-group>
                </v-col>

                <plot-form v-if="propertyType==='plot'" type="plot" />

                <flat-form v-if="propertyType==='flat'" type="flat" />
            </v-row>
        </form>
    </v-container>
</template>

<script lang="ts" setup>
import PlotForm from '@/components/propertyForms/PlotForm.vue';
import FlatForm from '@/components/propertyForms/FlatForm.vue';
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
const router = useRouter();
const propertyType = ref('plot')

if (!cookies.get('token')) {
    router.push('/')
}
</script>

<style scoped>
.type {
    border: solid 2px grey;
    border-radius: 8px;
}

.checkheight {
    height: 60px;
    overflow: hidden;
}
</style>