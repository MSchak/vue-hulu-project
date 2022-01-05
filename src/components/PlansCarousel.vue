<template>
    <div class="row plans-carousel justify-content-center">

      <div class="col-3 pnl">
        <plans-panel></plans-panel>
      </div>

      <div class="col-3 frnt-pnl pnl">
        <plans-panel></plans-panel>
      </div>

      <div class="col-3 pnl">
        <plans-panel></plans-panel>
      </div>
    </div>
</template>

<script>
import PlansPanel from "./PlansPanel.vue";

export default {
  name: "PlansCarousel",
  components: {
    PlansPanel,
  },
};
</script>

<style>

.pnl{
background-color: white;
box-shadow: 0 0 4px -1px black;
margin-left: -5px;
margin-right: -5px;
}

.frnt-pnl{
    z-index: 1;
}
</style>
