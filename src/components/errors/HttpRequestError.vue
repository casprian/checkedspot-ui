<template>
  <div class="errorCont">
    <!-- Not Found Error -->
    <div v-if="props.statusCode == 404" class="errorCardCont">
      <v-expand-x-transition>
        <v-alert
          v-show="expand"
          text="Oops! It seems the requested content is unavailable."
          title="404 Error"
          type="error"
          variant="tonal"
        >
          <i>
            <strong
              ><br>If this error persists please, report this issue to <a href="mailto:info@checkedspot.com">info@checkedspot.com</a>
            </strong>
          </i>
        </v-alert>
      </v-expand-x-transition>
    </div>

    <!-- Parameter Missing Client Error -->
    <div v-else-if="props.statusCode == 422" class="errorCardCont">
      <v-expand-x-transition>
        <v-alert
          v-show="expand"
          text="Oops! It seems there was an issue with your request. Please review your input."
          title="422 Error"
          type="error"
          variant="tonal"
        >
          <i>
            <strong
              ><br>If this error persists, please report this issue to <a href="mailto:info@checkedspot.com">info@checkedspot.com</a>
            </strong>
          </i>
        </v-alert>
      </v-expand-x-transition>
    </div>

    <!-- Unauthorised Error -->
    <div v-else-if="props.statusCode == 401" class="errorCardCont">
      <v-expand-x-transition>
        <v-alert
          v-show="expand"
          text="Unauthorized: Please log in to access this page."
          title="401 Error"
          type="error"
          variant="tonal"
        >
          <i>
            <strong
              ><br>If this error persists, please report this issue to <a href="mailto:info@checkedspot.com">info@checkedspot.com</a>
            </strong>
          </i>
        </v-alert>
      </v-expand-x-transition>
    </div>

    <!-- Internal Server Error -->
    <div v-else-if="props.statusCode == 500" class="errorCardCont">
      <v-expand-x-transition>
        <v-alert
          v-show="expand"
          text="Internal Server Error: We apologize for the inconvenience. Please try again later."
          type="error"
          variant="tonal"
        >
          <i>
            <strong
              ><br>If this error persists, please report this issue to <a href="mailto:info@checkedspot.com">info@checkedspot.com</a>
            </strong>
          </i>
        </v-alert>
      </v-expand-x-transition>
    </div>

    <!-- Unexpecter Error Internal server Error -->
    <div v-else class="errorCardCont">
      <v-expand-x-transition>
        <v-alert
          v-show="expand"
          text="Oops! Something went wrong. Please try again later."
          title="Unexpected Error"
          type="error"
          variant="tonal"
        >
          <i>
            <strong
              ><br>If this error persists, please report this issue to <a href="mailto:info@checkedspot.com">info@checkedspot.com</a>
            </strong>
          </i>
        </v-alert>
      </v-expand-x-transition>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps(["statusCode"]);

const expand = ref(false);

onMounted(() => {
  expand.value = true;
});
</script>

<style scoped>

.errorCont {
  width: 100%;
  height: auto;
}
</style>