import { defineStore } from "pinia";
import { ref, computed, watch, Ref } from "vue";

export const usePostPropertyStore = defineStore('property', () => {
    const activeForm: Ref<string> = ref('basic');
    const filledForms: Ref<Array<string | null>> = ref([]);

    // sale/rent/lease
    const activePropetyStatus: Ref<string | null> = ref(null);
    // residential/commnercial
    const activePropetyCategory: Ref<string | null> = ref(null);
    // plot/flat/farmhouse/etc.
    const activePropertyType: Ref<string | null> = ref(null);

    watch(activeForm, newActiveForm => {
        updateActiveForm(newActiveForm);
    })


    function checkActiveForm() {
        activePropetyStatus.value = localStorage.getItem("activePropertyStatus");
        activePropetyCategory.value = localStorage.getItem("activePropertyCategory");

        const type = localStorage.getItem("activePropertyType");
        if (type === "plot") {
            activePropertyType.value = "Plot/Land";
        } else if (type === "flat") {
            activePropertyType.value = "Flat/Apartment";
        } else if (type === "farmland") {
            activePropertyType.value = "FarmLand/Farmhouse";
        }
    }

    function updateActiveForm(formName: string) {
        activeForm.value = formName;
        return;
    }

    function initializeFilledForms(formNames: Array<string>) {
        filledForms.value = formNames;
    }

    function addToFilledForms(formName: string) {
        // @ts-ignore
        const localStorageFilledForms = JSON.parse(localStorage.getItem('filledForms'));
        localStorageFilledForms.push(formName);
        const uniqueforms = Array.from(new Set(localStorageFilledForms));
        localStorage.setItem('filledForms', JSON.stringify(uniqueforms));

        // @ts-ignore
        filledForms.value = uniqueforms;

        return;
    }

    function removeFromFilledForms(formName: string) {
        // @ts-ignore
        const localStorageFilledForms = JSON.parse(localStorage.getItem('filledForms'));
        const index = localStorageFilledForms.findIndex((item: string) => item === formName);
        localStorageFilledForms.splice(index, 1);
        localStorage.setItem('filledForms', JSON.stringify(localStorageFilledForms));

        filledForms.value = localStorageFilledForms;

        return;
    }


    return {
        activePropetyStatus,
        activePropetyCategory,
        activePropertyType,
        activeForm,
        filledForms,
        checkActiveForm,
        initializeFilledForms,
        updateActiveForm,
        addToFilledForms,
        removeFromFilledForms
    }
})