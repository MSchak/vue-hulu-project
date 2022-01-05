<template>
  <div>
    <h3>Related Description</h3>
    <div class="slide-container">
	</div>
        <button>Left</button>
        <button>Right</button>
      </div>
      <reg-em-tile></reg-em-tile>
      <h4 class="show-title"></h4>
      <current-episode></current-episode>
      <ellipse-menu></ellipse-menu>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue";
import RegEmTile from "./RegEmTile.vue";
import CurrentEpisode from "./CurrentEpisode";

export default {
  name: "RelatedSlideshow",
  components: {
    RegEmTile,
    EllipseMenu,
    CurrentEpisode,
  },
};
</script>

