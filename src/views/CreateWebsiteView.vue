<template>
    <v-container class="pa-0">
        <v-row no-gutters class="pa-0 d-flex justify-center align-center">
            <v-card width="400" height="" elevation="4" class="ma-10 pt-5 px-8 pb-10 d-flex justify-center">
                <v-row no-gutters class="pa-0">
                    <v-col cols="12" class="pa-0 mb-5">
                        <p class="text-h6 text-grey-darken-1">Create My Website</p>
                    </v-col>

                    <!-- LOGO upload -->
                    <v-col cols="12" class="pa-0 mb-10 d-flex flex-column justify-center align-center">
                        <v-btn class="logoCircle">
                            <label for="logoFile" class="docfile">
                                <v-icon icon="mdi-upload" size="60" color="grey-darken-1"></v-icon>
                                <input type="file" accept=".jpg, .jpeg, .png, .gif, .webp, .avif, .apng, .svg"
                                    id="logoFile" style="width: 0;" @change="uploadDoc">
                            </label>
                        </v-btn>
                        <div class="d-flex justify-center align-center" style="width:100%;">
                            <v-progress-linear class="mt-1 rounded-pill" :color="progresscolor" height="25"
                                style="width: 150px;" v-model="fileuploadprogress">
                                <div class="text-body-1 text-grey-darken-2">Upload logo</div>
                            </v-progress-linear>
                        </div>
                    </v-col>

                    <!-- Site Name -->
                    <v-col cols="12" class="pa-0 d-flex align-center">
                        <span class="text-h6 mr-7">Sitename</span>
                        <v-text-field label="choose your site name" v-model="siteName.value.value"
                            :error-messages="siteName.errorMessage.value">
                        </v-text-field>
                    </v-col>

                    <!-- Description -->
                    <v-col cols="12" class="pa-0 d-flex align-center">
                        <span class="text-h6 mr-3">Description</span>
                        <v-text-field label="Write description for site." v-model="websiteData.description">
                        </v-text-field>
                    </v-col>

                    <v-col cols="12" class="pa-0 mt-6 d-flex justify-center">
                        <v-btn @click="createWebsite" color="amber">Create Website</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
    <v-dialog v-model="alert" width="auto">
        <v-card v-if="alert" append-icon="$close" class="mx-auto" elevation="16" max-width="500">
            <template v-slot:append>
                <v-btn icon="$close" variant="text" @click="alert = false"></v-btn>
            </template>
            <template v-slot:title>
                <div class="text-h4 font-weight-bold">Warning</div>
            </template>

            <v-divider></v-divider>

            <div class="pa-10 text-center">
                <v-icon class="mb-6" color="amber" icon="mdi-alert" size="100"></v-icon>

                <div class="text-h5">Please fill all the required Fields inorder to post the property !!!</div>
            </div>

            <v-divider></v-divider>

            <div class="pa-4 d-flex justify-end">
                <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
                    @click="alert = false">
                    Close
                </v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'vue3-cookies';
import { useField, useForm } from 'vee-validate';
//@ts-ignore
import api from '@/data/api/index.js'

const { cookies } = useCookies();

const jwt = cookies?.get("token")?.split("Bearer ")[1];
//@ts-ignore
const loginEmail = jwtDecode(jwt)?.userData?.email;

const alert = ref(false);

const isDocUploaded = ref(false);
const fileuploadprogress = ref(1);
const progresscolor = ref('red-darken-1');
const interval = ref(0);

const websiteData = ref({
    logo: null,
    siteName: null,
    description: null,
})

const { meta, handleSubmit, handleReset } = useForm({
    validationSchema: {
        siteName(value: any) {
            if (!value) {
                return 'Required!';
            } else if (!/^[a-zA-Z0-9]{3,}$/.test(value)) {
                return 'sitename should not have space, or any special character but should be at least 3 characters long';
            } else {
                return true;
            }
        },
    }
})
const siteName = useField('siteName');

async function onSuccess() {
    //@ts-ignore
    websiteData.value.siteName = siteName.value.value;

    const res = await api?.userWebsite?.createUserWebsite(websiteData.value);
    console.log(res);
    if (res?.status === 200) {
        console.log("asdfa sfda")
    } else {
        console.log(res);
    }

}

function onInvalidSubmit(invalidData: any) {
    console.log("meta : ", meta.value)
    console.log(invalidData?.values); // current form values
    console.log(invalidData?.errors); // a map of field names and their first error message
    console.log(invalidData?.results); // a detailed map of field names and their validation results
    alert.value = true;
}


const createWebsite = handleSubmit(onSuccess, onInvalidSubmit);


function startBuffer() {
    progresscolor.value = 'green-darken-1'
    clearInterval(interval.value)
    //@ts-ignore
    interval.value = setInterval(() => {
        if (fileuploadprogress.value >= 0 && fileuploadprogress.value <= 100) {
            fileuploadprogress.value += 1;
        } else {
            clearInterval(interval.value);
        }
    }, 15)
}
async function uploadDoc(event: any) {
    const formData = new FormData();
    // logo.value.value
    formData.append('logo', event?.target?.files[0]);

    const res = await api?.userWebsite.uploadLogo(formData);

    if (res?.status === 200) {
        websiteData.value.logo = res?.data?.logo;
        isDocUploaded.value = true;
        startBuffer();
    } else {
        console.log(res);
    }
}

</script>

<style scoped>
.docfile {
    cursor: pointer;
}

.logoCircle {
    margin-bottom: 5px;
    height: 130px !important;
    width: 130px;
    border-radius: 50%;
    border: solid 2px grey;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>