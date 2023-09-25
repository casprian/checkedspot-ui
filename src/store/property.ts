import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePropertyStore = defineStore('porpoerty', () => {
    const pageNumber = ref(1);
    // const name = ref('Eduardo')
    // const doubleCount = computed(() => pageNumber.value * 2)
    function increment() {
        pageNumber.value++
    }

    return { pageNumber, increment }
})