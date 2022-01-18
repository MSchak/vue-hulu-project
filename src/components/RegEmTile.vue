<template>
  <div class="show-img card mx-1">
    <router-link to="/details"
      ><img
        class="card-img-top"
        src="https://via.placeholder.com/350x200"
        alt=""
    /></router-link>
    <ellipse-menu class="on-img"></ellipse-menu>
    <h4 class="show-title card-title my-2">Show title</h4>
    <p class="card-subtitle">S1 E1 - Name of this episode</p>
    <ellipse-menu class="on-card"></ellipse-menu>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue";

export default {
  name: "RegEmTile",
  components: {
    EllipseMenu,
  },
};
</script>

<style scoped>
.show-img {
  min-width: 16.666666%;
  overflow: hidden;
  position: relative;
}
.card {
  border: none;
}

.card-subtitle {
  font-size: .90em;
  overflow:hidden;
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
