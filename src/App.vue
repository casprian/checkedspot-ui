<template>
  <router-view />
</template>

<script lang="ts" setup>
</script>

<style>
::-moz-selection {
  /* Code for Firefox */
  color: #fff;
  background: #c2185c9a;
}

::selection {
  color: #fff;
  background: #c2185c9a;
}

a {
  color: #f5005696 !important;
}

.textColor {
    color: black;
    opacity: 0.7;
}

.legendText { 
  font-size: 18px;
  font-weight: 500;
}
</style>
