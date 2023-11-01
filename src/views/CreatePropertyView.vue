<template>
    <v-container>
        <keep-alive>
            <form>
                <v-row no-gutters>
                    <v-col cols="12" class="py-1 px-3">
                        <div class="py-3 text-h5 font-weight-medium text-pink-accent-1">Choose Property Type</div>
                        <v-radio-group v-model="propertyType" inline>
                            <v-radio class="px-3" color="pink-accent-3" label="Plot" value="plot"></v-radio>
                            <v-radio class="px-3" color="pink-accent-3" label="Farmland" value="farmland"></v-radio>
                            <v-radio class="px-3" color="pink-accent-3" label="Flat" value="flat"></v-radio>
                        </v-radio-group>
                    </v-col>
    
                    <plot-form v-if="propertyType==='plot'" type="plot" />
    
                    <farmland-form v-if="propertyType==='farmland'" type="farmland" />
    
                    <flat-form v-if="propertyType==='flat'" type="flat" />
                </v-row>
            </form>
        </keep-alive>
    </v-container>
</template>

<script lang="ts" setup>
//@ts-ignore
import PlotForm from '@/components/propertyForms/PlotForm.vue';
// import PlotForm from '@/components/propertyForms/PlotFormCopy.vue';
//@ts-ignore
import FlatForm from '@/components/propertyForms/FlatForm.vue';
//@ts-ignore
import FarmlandForm from '@/components/propertyForms/FarmlandForm.vue';
import { KeepAlive, ref } from "vue";

const propertyType = ref('plot');

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