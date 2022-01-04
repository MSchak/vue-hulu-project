<template>
  <div id="plans">
    <div class="container-fluid text-center">
      <!--Main navigation hidden on this page */-->
      <div class="row">
        <div class="col">
          <plans-nav></plans-nav>
          <h1>Choose Your Plan</h1>
          <p>Switch plans or cancel anytime.</p>
          <plans-tablist></plans-tablist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlansNav from "../components/PlansNav.vue";
import PlansTablist from "../components/PlansTablist.vue";

export default {
  name: "Plans",
  components: {
    PlansNav,
    PlansTablist,
  },
};
</script>