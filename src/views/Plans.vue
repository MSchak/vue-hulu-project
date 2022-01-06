<template>
  <div id="plans">
    <plans-nav></plans-nav>
    <div class="plans-content container text-center">
      <!--Main navigation hidden on this page */-->
      <div class="row">
        <div class="col">
          <h1>Choose Your Plan</h1>
          <p>Switch plans or cancel anytime.</p>
        </div>
      </div>
      <plans-tablist></plans-tablist>
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