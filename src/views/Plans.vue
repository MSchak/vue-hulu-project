<template>
    <div>
    <!--Main navigation hidden on this page */-->
        <plans-nav></plans-nav>
        <h1>Choose Your Plan</h1>
        <p>Switch plans or cancel anytime.</p>
        <plans-tablist></plans-tablist>
     </div>   
</template>

<script>

import PlansNav from '../components/PlansNav.vue'
import PlansTablist from '../components/PlansTablist'

export default {
  name: 'Plans',
  components: {
      PlansNav,
      PlansTablist
  }
}
</script>