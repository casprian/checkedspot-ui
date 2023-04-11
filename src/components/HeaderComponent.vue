<template>
  <v-container fluid class="p0 m0">
  
    <v-row no-gutters>
      <v-col>
        <div class="video-container">
          <video ref="videoPlayer" autoplay muted loop>
          <source
            src="../assets/videos/7.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <property-filter/>
      </div>
    </v-col>
  </v-row>
  </v-container>

</template>

<script lang="ts" setup>
  import PropertyFilter  from '@/components/PropertyFilter.vue';
  
</script>

<style scoped>
  .p0{
    padding: 0px;
  }
  .m0{
    margin: 0px;
  }
  .video-container{
    position: relative;
  }
</style>
