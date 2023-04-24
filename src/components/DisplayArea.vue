<template>
  <!-- Projects options Display -->
  <div>
    <v-sheet v-if="show?.profile" class="pa-0 ma-0">
      <profile-display />
    </v-sheet>

  </div>

  <!-- ProjectX Options Display -->
  <div>
    <v-sheet v-if="show?.dashboard" class="pa-0 ma-0">
      <dashboard-display />
    </v-sheet>
    <v-sheet v-if="show?.myproperties" class="pa-0 ma-0">
      <my-properties-display />
    </v-sheet>
    <v-sheet v-if="show?.addproperty" class="pa-0 ma-0">
      <add-property-display />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import DashboardDisplay from '@/components/profile-components/DashboardDisplay.vue';
import ProfileDisplay from '@/components/profile-components/ProfileDisplay.vue';
import MyPropertiesDisplay from '@/components/profile-components/MyPropertiesDisplay.vue';
import AddPropertyDisplay from '@/components/profile-components/AddPropertyDisplay.vue';

import { inject } from 'vue';

const show = inject('show');
</script>

<style></style>