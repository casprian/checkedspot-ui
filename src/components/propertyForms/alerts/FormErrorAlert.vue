<template>
    <v-dialog v-model="alert" width="auto">
        <v-card append-icon="$close" class="mx-auto" elevation="16" max-width="500">
            <template v-slot:append>
                <v-btn icon="$close" variant="text" @click="alert = false"></v-btn>
            </template>
            <template v-slot:title>
                <div class="text-h4 font-weight-bold">Warning</div>
            </template>

            <v-divider></v-divider>

            <div class="pa-10 text-center">
                <v-icon class="mb-6" color="amber" icon="mdi-alert" size="100"></v-icon>

                <div class="text-h5">Please fill all the required Fields inorder to post the property !!!</div>
            </div>

            <v-divider></v-divider>

            <div class="pa-4 text-end">
                <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
                    @click="alert = false">
                    Close
                </v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(['errorAlert'])
const alert = ref(props.errorAlert)
</script>

<style></style>