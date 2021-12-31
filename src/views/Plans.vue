<template>
    <div>
    <plans-nav></plans-nav>
    <h1>Choose Your Plan</h1>
    <p></p>
    <ul>
        <li>Base Plans</li>
        <li>Bundle/Save</li>
    </ul>
    <plans-carousel></plans-carousel>
     </div>   
</template>

<script>

import PlansNav from '../components/PlansNav.vue'
import PlansCarousel from '../components/PlansCarousel.vue'

export default {
  name: 'Plans',
  components: {
      PlansNav,
      PlansCarousel
  }
}
</script>