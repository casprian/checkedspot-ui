<template>
    <v-col cols="12">
        <v-card class="rounded-0 px-2 pb-4 pt-2" elevation="2">
            <v-card-item class="titleCont mb-5">
                <v-card-title class="title">Description</v-card-title>
            </v-card-item>

            <v-card-text v-if="props?.description !== 'unavailable'" class="description text-body-2">
                {{ props?.description }}
            </v-card-text>
            <v-card-text v-else class="description text-h4 font-weight-regular text-center">
                Description Not Found
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script lang="ts" setup>

const props = defineProps(['description'])
</script>

<style scoped>
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
</style>