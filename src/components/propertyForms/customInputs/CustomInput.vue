<script lang="ts" setup>

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