<template>
    <div>  
        <ul>
            <li>Base Plans</li>
            <li>Bundle/Save</li>
        </ul>
        <plans-carousel></plans-carousel>

    </div>
</template>



<script>

import PlansCarousel from './PlansCarousel.vue'

export default {
    name: 'PlansTablist',
    components: {
        PlansCarousel
    }
}
</script>
