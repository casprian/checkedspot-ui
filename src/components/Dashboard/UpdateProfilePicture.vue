<template>
    <v-btn v-if="invocationMethod === 'button'" variant="outlined" @click="dialog=!dialog">
        <v-icon icon="mdi-pencil" size="15"></v-icon>&nbsp;EDIT Picture
    </v-btn>
    <v-btn v-if="invocationMethod === 'icon'" variant="text" width="15" height="15" icon="mdi-camera" size="x-small" @click="dialog=!dialog"></v-btn>
    <v-dialog v-model="dialog" width="auto">
        <v-card class="py-10">
            <v-row no-gutters class="d-flex flex-column justify-center align-center" style="width: 600px;">
                <v-col cols="12" class="d-flex justify-center pb-14">
                    <v-img id="image-preview" style="width: 130px; height: 130px;"
                        lazy-src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        :src="profileimg">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                </v-col>
                <v-text-field type="file" name="profile" persistent-hint hint="please upload png, jpeg/jpg file only"  v-model="profile.value.value" :error-messages="profile.errorMessage.value" @change="viewimg" accept="image/jpeg, image/jpg, image/png"></v-text-field>
            </v-row>
            <v-card-actions class="d-flex flex-column justify-center align-center">
                <v-btn variant="elevated" density="comfortable" width="250px" class="mb-3" color="blue" :loading="loader" @click="uploadPicture">Upload</v-btn>
                <v-btn variant="elevated" density="comfortable" width="250px" class="ml-0" color="red-lighten-1" @click="dialog = false">close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useField, useForm } from 'vee-validate';
//@ts-ignore
import api from '@/data/api/index.js'

const router = useRouter();
const props = defineProps(['invocationMethod', 'picture'])
const dialog = ref(false);
const invocationMethod = ref(props.invocationMethod)
const profileimg = ref(props.picture);
const loader = ref(false);
const formData = new FormData();

let { handleSubmit, handleReset } = useForm({
    validationSchema: {
        profile(value: any) {
            if (!value) {
                return 'Required.'
            }
            return true

        }
    }
})
const profile = useField('profile');

//@ts-ignore
function viewimg(event) {    
    profileimg.value = URL.createObjectURL(event.target.files[0]);
    //@ts-ignore
    formData.append('profile', event.target.files[0])
}

const uploadPicture = handleSubmit(async(values) => {
    loader.value = true;
    const res = await api?.user?.updateProfilePicture(formData);
    if(res?.data?.status === 200) {
        dialog.value = false;
        loader.value = false;
    } else {
        router.push({ path: '/error', query: { status: res?.data?.status } })
    }
});

</script>

<style scoped>
</style>