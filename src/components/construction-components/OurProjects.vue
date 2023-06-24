<template>
    <v-container fluid class="mt-5" style="background-color:#fff6f4;">
        <v-row no-gutters>
            <v-col cols="12">
                <h2 class="text-h4 font-weight-medium text-center" style="color:#1f0757">Our Projects</h2>
                <p class="py-3 text-indigo-lighten-1 text-center text-body-1">From a couple to a large Indian family, we have houses built with emotions for everyone.</p>
            </v-col>
            <v-col cols="12">
                <v-sheet
                    class="mx-auto"
                    elevation="8"
                    max-width="800"
                >
                    <v-slide-group
                    v-model="model"
                    class="pa-4"
                    selected-class="bg-success"
                    show-arrows
                    >
                        <v-slide-group-item
                            v-for="n in 15"
                            :key="n"
                            v-slot="{ isSelected, toggle, selectedClass }"
                        >
                            <v-card
                            color="grey-lighten-1"
                            :class="['ma-4', selectedClass]"
                            height="200"
                            width="100"
                            @click="toggle"
                            >
                            <div class="d-flex fill-height align-center justify-center">
                                <v-scale-transition>
                                <v-icon
                                    v-if="isSelected"
                                    color="white"
                                    size="48"
                                    icon="mdi-close-circle-outline"
                                ></v-icon>
                                </v-scale-transition>
                            </div>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>