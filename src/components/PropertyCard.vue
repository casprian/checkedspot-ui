<template>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

        <v-card-title>
            Property For: {{ property.propertyStatus }}
        </v-card-title>

        <v-card-subtitle>
            Location: {{ property.location }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
                Property Details
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    <div>Type: {{ property.type }}</div>
                    <div>Cost: {{ property.cost }}</div>
                    <div>Total Area of {{ property.type }}: {{ property.totalArea }} sq/feet</div>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    defineProps(['property'])

    const show = ref(false)
</script>

<style scoped></style>