<template>
    <div v-if="token">
        <progress-track/>
        <our-packages/>
        <!-- <OurProjects/>
        <services-ensured/>
        <OurCustomers/> -->
        <FooterComp/>
    </div>
</template>

<script lang="ts" setup>
    //@ts-ignore
    import ProgressTrack from '@/components/construction-components/ProgressTrack.vue'

    //@ts-ignore
    import OurPackages from '@/components/construction-components/OurPackages.vue'

    //@ts-ignore
    import OurProjects from '@/components/construction-components/OurProjects.vue'

    //@ts-ignore
    import ServicesEnsured from '@/components/construction-components/ServicesEnsured.vue'

    //@ts-ignore
    import OurCustomers from '@/components/construction-components/OurCustomers.vue'

    //@ts-ignore
    import FooterComp from '@/components/construction-components/FooterComp.vue'
</script>

<style scoped>
</style>
