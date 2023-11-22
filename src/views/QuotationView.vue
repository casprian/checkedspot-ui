<template>
    <div>
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
    import ProgressTrack from '@/components/quotation-view-components/ProgressTrack.vue'

    //@ts-ignore
    import OurPackages from '@/components/quotation-view-components/OurPackages.vue'

    //@ts-ignore
    import OurProjects from '@/components/quotation-view-components/OurProjects.vue'

    //@ts-ignore
    import ServicesEnsured from '@/components/quotation-view-components/ServicesEnsured.vue'

    //@ts-ignore
    import OurCustomers from '@/components/quotation-view-components/OurCustomers.vue'

    //@ts-ignore
    import FooterComp from '@/components/quotation-view-components/FooterComp.vue'
</script>

<style scoped>
</style>
