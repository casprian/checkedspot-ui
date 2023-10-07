<template>
    <!-- Date Filter -->
    <v-col class="py-0 px-2 mb-4" cols="12">
        <v-select variant="outlined" v-model="selectDate" hint="Posted on..." persistent-hint :items="posted"
            item-title="title" item-value="value" return-object single-line>
        </v-select>
        <v-dialog v-model="dateDialog" scroll-strategy="none" persistent width="auto">
            <v-card title="Choose Date">
                <v-card-text class="d-flex">
                    <v-text-field label="Start date*" type="date" class="ma-3" v-model="selectedDateFrom"></v-text-field>
                    <v-text-field label="End date*" type="date" class="ma-3" v-model="selectedDateTo"></v-text-field>
                </v-card-text>
                <div v-if="unselectedDateMsg" class="mx-3 d-flex flex-column align-center justify-center text-red">
                    <p>Please select dates to continue!</p>
                    <p>OR</p>
                    <p>close by pressing CLOSE button.</p>
                </div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Close Dialog" @click="handleCancle">close</v-btn>
                    <v-btn text="Close Dialog" @click="hideDialog">Okay</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);


//Date Selection Filter
function formatDate(date: Date, delemitter: String = "/", format: String = "ddmmyyyy") {
    if (format === "yyyymmdd") {
        const ddmmyyyyFormat = date.getFullYear().toString() + delemitter + (date.getMonth() + 1) + delemitter + date.getDate();
        return ddmmyyyyFormat;
    } else {
        const ddmmyyyyFormat = date.getDate().toString() + delemitter + (date.getMonth() + 1) + delemitter + date.getFullYear();
        return ddmmyyyyFormat;
    }
}

function getDate(dateLabel: String) {
    let today = new Date();
    let from;
    let to = formatDate(new Date(), "-", "yyyymmdd");
    if (dateLabel === "Today") {
        from = formatDate(new Date(), "-", "yyyymmdd");
        return { from, to };
    } else if (dateLabel === "This week") {
        from = formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7,), "-", "yyyymmdd");
        return { from, to };
    } else if (dateLabel === "This month") {
        from = formatDate(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate(),), "-", "yyyymmdd");
        return { from, to };
    } else {
        from = formatDate(new Date(), "-", "yyyymmdd");
        to = formatDate(new Date(), "-", "yyyymmdd");
        return { from, to };
    }
}

const selectedDateFrom = ref('');
const selectedDateTo = ref('');
const selectDate = ref({
    title: "Today",
    value: getDate("Today")
});
const dateDialog = ref(false);
const unselectedDateMsg = ref(false);

const posted = ref([
    {
        title: "Today",
        value: getDate("Today")
    },
    {
        title: "This week",
        value: getDate("This week")
    },
    {
        title: "This month",
        value: getDate("This month")
    },
    {
        title: "Select",
        value: getDate("Select")
    },
])

watch(selectDate, (newValue) => {
    if (newValue.title === 'Select') {
        const newSelectedDate = {
            title: "new",
            value: {}
        }
        //@ts-ignore
        posted.value.push(newSelectedDate);

        dateDialog.value = true;
    }
    emit('update:modelValue', selectDate.value);
},
    { deep: true }
);

function handleCancle() {
    dateDialog.value = false;
    unselectedDateMsg.value = false;
    posted.value.pop();
}

function hideDialog() {
    if (posted.value.length > 5) {
        posted.value.pop();
    }
    const from = selectedDateFrom.value.split('-');
    const to = selectedDateTo.value.split('-')
    if (from.length === 3 && to.length === 3) {
        //fromatting the date to show that is more readable and later on using it to show the selected Date
        const formatFromDate = new Date(Number(from[0]), Number(from[1]) - 1, Number(from[2])).toDateString().substring(4);
        const formatToDate = new Date(Number(to[0]), Number(to[1]) - 1, Number(to[2])).toDateString().substring(4);

        //setting new Date value which is created in watch method with source "selectDate"
        posted.value[posted.value.length - 1].title = `${formatFromDate} - ${formatToDate}`;
        posted.value[posted.value.length - 1].value.from = selectedDateFrom.value;
        posted.value[posted.value.length - 1].value.to = selectedDateTo.value;

        //setting the selectDate value to new date created in watch method with source "selectDate" and letting "Select" option free
        //@ts-ignore
        selectDate.value = posted.value[posted.value.length - 1];
        dateDialog.value = false;
        unselectedDateMsg.value = false;
    } else if (selectedDateFrom.value === "" || selectedDateTo.value === "") {
        unselectedDateMsg.value = true;
    } else {
        dateDialog.value = false;
    }
}

onMounted(() => {
    emit('update:modelValue', selectDate.value);
})
</script>

<style scoped></style>