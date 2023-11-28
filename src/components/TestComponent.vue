<template>
    <div>
        <!-- Display Initial Input Set -->
        <v-row>
            <v-col>
                <v-select v-model="documents[0].select" :items="selectOptions" label="Select Document Type"></v-select>
            </v-col>
            <v-col>
                <v-file-input accept=".pdf" hint="upload PDF File only" persistent-hint prepend-inner-icon="mdi-file" prepend-icon="" label="upload file" v-model="documents[0].file"></v-file-input>
            </v-col> 
        </v-row>

        <!-- Display Additional Input Sets -->
        <v-row v-for="(set, index) in documents.slice(1)" :key="index">
            <v-col>
                <v-select v-model="set.select" :items="selectOptions" label="Select Document Type"></v-select>
            </v-col>
            <v-col>
                <v-file-input accept=".pdf" hint="upload PDF File only" persistent-hint prepend-inner-icon="mdi-file" prepend-icon="" label="upload file" v-model="set.file"></v-file-input>
            </v-col> 
        </v-row>

        <!-- Add More Sets Button -->
        <v-btn @click="addInputSet" :disabled="!isLastSetFilled">Add More Sets</v-btn>
    </div>
</template>

  
<script lang="ts" setup>
import { ref, computed } from 'vue';

const selectOptions = ref(['RTC', 'EC', 'Sale Deed', 'Mother Deed']);
const documents = ref([
    {
        select: undefined,
        file: undefined,
    },
]);

const isLastSetFilled = computed(() => {
    const lastSet = documents.value[documents.value.length - 1];
    return lastSet.select !== undefined && lastSet.file !== undefined;
});

const addInputSet = () => {
    // Add a new input set only if the last set is filled
    if (isLastSetFilled.value) {
        documents.value.push({
            select: undefined,
            file: undefined,
        });
    }
};
</script>
  
  
  
  


<!-- <template>
    <v-sheet class="position-relative" min-height="450">
        <div class="position-absolute d-flex align-center justify-center w-100 h-100">
            <v-btn size="x-large" color="deep-purple-darken-2" @click="dialog = !dialog">
                Open Dialog
            </v-btn>
        </div>

        <v-fade-transition hide-on-leave>
            <v-card v-if="dialog" append-icon="$close" class="mx-auto" elevation="16" max-width="500"
                title="Send a receipt">
                <template v-slot:append>
                    <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
                </template>

                <v-divider></v-divider>

                <div class="py-12 text-center">
                    <v-icon class="mb-6" color="success" icon="mdi-check-circle-outline" size="128"></v-icon>

                    <div class="text-h4 font-weight-bold">This receipt was sent</div>
                </div>

                <v-divider></v-divider>

                <div class="pa-4 text-end">
                    <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
                        @click="dialog = false">
                        Close
                    </v-btn>
                </div>
            </v-card>
        </v-fade-transition>
    </v-sheet>
</template>
  <script lang="ts" setup>
    import { ref } from 'vue'
  
    const dialog = ref(true)
  </script> -->