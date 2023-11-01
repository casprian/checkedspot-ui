<script lang="ts" setup>
import { onMounted } from "vue";

const props = defineProps([
    'textfieldtype',
    'label',
    'hint',
    'variant',
    'density',
    'clearable',
    'persistenthint',
]);
const emit = defineEmits(['update:textfieldtype', 'clear']);

// onMounted(async () => {
//     // v-input--dirty
//     const textFieldContainer = document.querySelector('.textField')
//     const textFieldDecendent = document.querySelector('.textField>div>div')
//     const textfieldElement = document.querySelector('#textField')
//     const clearbtn = document.querySelector('.clearBtn')

//     console.log(textFieldContainer,
//         textFieldDecendent,
//         clearbtn)

//     textfieldElement?.addEventListener('blur', () => {
//         textFieldDecendent?.classList.remove('v-field--focused')
//         textFieldDecendent?.classList.remove('v-input--dirty')
//         console.log(textFieldContainer,
//             textFieldDecendent,
//             clearbtn)
//     })
//     clearbtn?.addEventListener('click', (event) => {
//         event.preventDefault();
//         emit('clear');
//         textFieldContainer?.classList.remove('v-input--dirty')
//         textFieldDecendent?.classList.remove('v-field--active')
//         textFieldDecendent?.classList.remove('v-field--focused')
//         console.log(textFieldContainer,
//             textFieldDecendent,
//             clearbtn)
//     })

// })
</script>


<template>
    <v-col cols="12" sm="6" class="py-1 px-3">
        <v-text-field class="textField" id="textField" :value="textfieldtype"
            @input="$emit('update:textfieldtype', $event.target.value)" :label="props.label" :hint="props.hint"
            :variant="props.variant" :density="props.density" :persistent-hint="props['persistenthint']">

            <button @click.prevent="$emit('clear');" v-if="props.clearable" class="rounded-circle clearBtn" elevation="0"
                title="clear">
                <v-icon icon="mdi-close-circle-outline"></v-icon>
            </button>
        </v-text-field>
    </v-col>
</template>

<style scoped>
.textField {
    position: relative;
}

.clearBtn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease-in-out, right 0.3s ease-in-out;
}

.textField:focus-within .clearBtn {
    opacity: 1;
    right: 12px;
}

.clearBtn:hover {
    color: crimson;
}
</style>