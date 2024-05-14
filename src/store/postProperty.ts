import { defineStore } from "pinia";
import { ref, computed, watch, Ref } from "vue";
import { useRouter } from "vue-router";


export const usePostPropertyStore = defineStore('property', () => {
    const router = useRouter();

    const formSeriesPathList = ref(['/postproperty', '/postproperty/location', '/postproperty/details', '/postproperty/gallery', '/postproperty/amenities']);
    // @ts-ignore
    const filledFormPathList = ref(JSON.parse(localStorage.getItem('filledForm')) || []);
    const basicActive = ref(false);
    const locationActive = ref(false);
    const detailsActive = ref(false);
    const galleryActive = ref(false);
    const amenitiesActive = ref(false);


    function handleFormActiveRouting(currentFormPath: string) {
        if (currentFormPath === "/postproperty") {
            basicActive.value = true;
        } else if (currentFormPath === "/postproperty/location") {
            locationActive.value = true;
        } else if (currentFormPath === "/postproperty/details") {
            detailsActive.value = true;
        } else if (currentFormPath === "/postproperty/gallery") {
            galleryActive.value = true;
        } else if (currentFormPath === "/postproperty/amenities") {
            amenitiesActive.value = true;
        }
    }

    function handleFormRouting(formName:string) {
        basicActive.value = false;
        locationActive.value = false;
        detailsActive.value = false;
        galleryActive.value = false;
        amenitiesActive.value = false;

        if (formName === "basic") {
            router.push("/postproperty");
        } else if (formName === "location") {
            router.push("/postproperty/location");
        } else if (formName === "details") {
            router.push("/postproperty/details");
        } else if (formName === "gallery") {
            router.push("/postproperty/gallery");
        } else if (formName === "amenities") {
            router.push("/postproperty/amenities");
        }
    }

    function addFilledFormPath(formPath: any) {
        // @ts-ignore
        if (!filledFormPathList.value.includes(formPath)) {
            // @ts-ignore
            filledFormPathList.value.push(formPath);
            // @ts-ignore
            localStorage.setItem("filledForm", JSON.stringify(filledFormPathList.value));
        }
    }

    function isFormFilled(formPath: any) {
        // @ts-ignore
        const isFilled = filledFormPathList.value.includes(formPath);
        return isFilled;
    }

    function getPreviousPath(currentPath: string) {
        const currentPathIndex = formSeriesPathList.value.findIndex(path => path === currentPath);
        return formSeriesPathList.value[currentPathIndex - 1];
    }


    return {
        basicActive,
        locationActive,
        detailsActive,
        galleryActive,
        amenitiesActive,
        formSeriesPathList,
        filledFormPathList,
        handleFormActiveRouting,
        handleFormRouting,
        addFilledFormPath,
        isFormFilled,
        getPreviousPath
    }
})