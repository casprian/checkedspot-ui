<template>
    <v-container fluid class="px-3">
        <v-row no-gutters>
            <v-col>
                <div class="text-h6 mx-3 mb-10">Manage Dashboard</div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12" md="6">
                <v-card class="mx-3 px-5 d-flex my-4" width="" height="120px" variant="flat" color="blue-accent-3">
                    <template v-slot:prepend>
                        <v-icon size="50" class="mt-n5" icon="mdi-view-list"></v-icon>
                    </template>
                    <template v-slot:title>
                        <div class="text-h3 font-weight-bold pl-4" style="border-left:solid 1px white">100</div>
                    </template>
                    <template v-slot:subtitle>
                        <div class="text-body-1 font-weight-regular pl-4">Number of Properties</div>
                    </template>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="mx-3 px-5 d-flex my-4" width="" height="120px" variant="flat" color="deep-orange-darken-2">
                    <template v-slot:prepend>
                        <v-icon size="40" class="mt-n5" icon="mdi-check-decagram"></v-icon>
                    </template>
                    <template v-slot:title>
                        <div class="text-h3 font-weight-bold pl-4" style="border-left:solid 1px white">70</div>
                    </template>
                    <template v-slot:subtitle>                        
                        <div class="text-body-1 font-weight-regular pl-4">Number of Properties</div>
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters>

        </v-row>
    </v-container>
</template>