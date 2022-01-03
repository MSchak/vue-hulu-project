<template>
    <div>
        <div>Make a carousel here</div>
        <plans-panel></plans-panel>
        <plans-panel></plans-panel>
        <plans-panel></plans-panel>

    </div>

</template>

<script>

import PlansPanel from './PlansPanel.vue'

export default {
    name: 'PlansCarousel',
    components: {
        PlansPanel
    }
}
</script>
