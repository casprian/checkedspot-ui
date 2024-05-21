<!-- <template>
  <div></div>
</template>

<script>
import { ref } from "vue";

const documents = ref(["RTC", "EC", "Mother Deed", "Sale Deed", "other"]);
const document = ref(null);
const newDocument = ref(null);

let { meta, handleSubmit, handleReset, defineComponentBinds } = useForm({
  validationSchema: {
    city(value: string) {
      if (!value) {
        return "Required.";
      } else {
        return true;
      }
    },
  },
});

async function onUploadDocument(event: any) {
  const formData = new FormData();
  formData.append("document", event?.target?.files[0]);

  try {
    const res = await api?.property?.uploadDocument(formData);

    if (res?.status == 200) {
      uploadedDocuments.value.push({
        ...res?.data?.document,
        type: document.value !== "other" ? document.value : newDocument,
      });

      propertyData.value.documets.push({
        ...res?.data?.document,
        type: document.value !== "other" ? document.value : newDocument,
      });

      localStorage.setItem(
        `${activeForm.value}Data`,
        JSON.stringify(propertyData.value)
      );
    } else {
      throw res;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
</script>

<style>
</style> -->