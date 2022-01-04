<template>
  <div class="container">
    <div class="row">
      <div>Make a carousel here</div>

      <div class="col">
        <plans-panel></plans-panel>
      </div>

      <div class="col">
        <plans-panel></plans-panel>
      </div>

      <div class="col">
        <plans-panel></plans-panel>
      </div>
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
