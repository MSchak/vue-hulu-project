<template>
  <div class="related-slideshow my-4">
    <h3>Related Description</h3>
    <div class="slide-container d-flex">
      <button>Left</button>
    <reg-em-tile></reg-em-tile>
    <reg-em-tile></reg-em-tile>
    <reg-em-tile></reg-em-tile>
    <reg-em-tile></reg-em-tile>
    <reg-em-tile></reg-em-tile>
    <button>Right</button>

  </div>
  </div>
</template>

<script>
import RegEmTile from "./RegEmTile.vue";

export default {
  name: "RelatedSlideshow",
  components: {
    RegEmTile,
  },
};
</script>

