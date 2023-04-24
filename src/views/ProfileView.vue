<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters>
            <v-col cols="0" sm="3" class="d-none d-sm-block">
                <profile-drawer @activewindow="setshow"/>
            </v-col>
            <v-col cols="12" sm="9" class="d-block bg-background">
                <display-area/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import ProfileDrawer from '@/components/ProfileDrawer.vue';
import DisplayArea from '@/components/DisplayArea.vue';
import { reactive,provide } from 'vue';

const show = reactive({
    "dashboard": true,
    "profile": false,
    "myproperties": false,
    "addproperty": false,
})

function setshow(opentab){
    for(let key in show) {
        if(key === opentab){
            show[key] = true;
        }else {
            show[key] = false
        }
    }
}

provide('show', show);

</script>

<style scoped></style>