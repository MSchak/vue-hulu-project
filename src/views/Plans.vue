<template>
  <div id="plans">
    <plans-nav></plans-nav>
    <div class="plans-content container text-center">
      <!--Main navigation hidden on this page */-->
      <div class="row m-5 mb-4">
        <div class="col">
          <h1>Choose Your Plan</h1>
          <p>Switch plans or cancel anytime.</p>
        </div>
      </div>
      <plans-tablist></plans-tablist>
      <plans-radial-list></plans-radial-list>
    </div>
  </div>
</template>

<script>
import PlansNav from "../components/PlansNav.vue";
import PlansTablist from "../components/PlansTablist.vue";
import PlansRadialList from "../components/PlansRadialList.vue"

export default {
  name: "Plans",
  components: {
    PlansNav,
    PlansTablist,
    PlansRadialList
  },
};
</script>

<style scoped>
#plans{
  height: 1000px;
  background-color: #f7f7f9;
}

p{
  color: #636e85;
}

.container{
  max-width: 100%;
}


</style>