<template>
    <v-col cols="12" class="py-1 px-3">
        <v-file-input v-model="value" :error-messages="props.error"
            label="File input (required)" variant="filled" prepend-icon="mdi-camera" multiple name="imgfile"
            accept=".jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg"></v-file-input>
    </v-col>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
// import { useField, useForm } from "vee-validate";
import { computed } from 'vue'

const props = defineProps(['modelValue', 'error'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

// const props = defineProps(['imgfile', 'error'])
// const emit = defineEmits(['upload', 'update:imgfile']);


// const fieldChange = ref(props?.imgfile?.value);

// useForm({
//     validationSchema: {
//         imgfile(value: any) {
//             if (!value) {
//                 return "Required! Allowed files: .jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg";
//             }
//             return true;
//         },
//     },
// })

// async function uploadfile(event: any) {
//  console.log(event?.target?.value)

//  emit('update:imgfile', event?.target?.value);
// }

// watch(fieldChange, (newfieldChange) => {
//     console.log(newfieldChange)
//     emit('upload', newfieldChange)
//     emit('update:imgfile', newfieldChange);
// })

</script>

<!-- <script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';


const props = defineProps(['imgfile', 'error']);
const emit = defineEmits(['upload', 'update:imgfile']);

const error = ref(props?.error?.value?.imgfile);
const imagefiles = ref([])
const images = ref([]);

async function uploadfile(event:any) {

    // const response =  await axios.post)
    console.log(event?.target?.value)

    emit('update:imgfile', event.target.value);
}
</script> -->

<!-- <script lang="ts" setup>
import { useField } from 'vee-validate';
import { ref } from 'vue';

const image = ref(null);
const props = defineProps(['images']);
// const emit = defineEmits(['upload'])

// // The `name` is returned in a function because we want to make sure it stays reactive
// // If the name changes you want `useField` to be able to pick it up
// const { value, errorMessage } = useField(() => props.images);

// async function uploadfile() {

// // const response =  await axios.post)

// emit('upload', image);
// }
// </script> -->

<style scoped></style>

