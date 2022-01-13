<template>
  <div class="show-img card mx-1">
    <router-link to="/details"><img
      class="card-img-top"
      src="https://via.placeholder.com/350x200"
      alt=""
    /></router-link>
    <ellipse-menu class="on-img"></ellipse-menu>
    <h4 class="show-title card-title">Show title</h4>
    <current-episode></current-episode>
    <ellipse-menu class="on-card"></ellipse-menu>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue";
import CurrentEpisode from "./CurrentEpisode.vue";

export default {
  name: "RegEmTile",
  components: {
    EllipseMenu,
    CurrentEpisode,
  },
};
</script>

<style>

.show-img{
  min-width: 20%;
  overflow: hidden;
  position: relative;
}
.on-img {
  position: absolute;
  top: 10px;
  right: 10px;
}

.on-card {
  position: absolute;
  top: 155px;
  right: 10px;
}

</style>
