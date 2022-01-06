<template>
    <div class="plans-carousel d-flex justify-content-center m-5">

      <div class="l-card">
        <plans-panel></plans-panel>
      </div>

      <div class="frnt-card">
        <plans-panel></plans-panel>
      </div>

      <div class="r-card">
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

.frnt-card{
    z-index: 1;
}

.l-card{
  margin-right: -15px;
}

.r-card{
  margin-left: -15px;
}
</style>
