<template>
  <div class="show-img card mx-1">
    <router-link to="/details"
      ><img
        class="card-img-top"
        src="https://via.placeholder.com/350x200"
        alt=""
    /></router-link>
    <ellipse-menu class="on-img"></ellipse-menu>
    <div class="card-body d-flex justify-content-between">
      <div>
    <h5 class="show-title card-title my-2">Show title</h5>
    <p class="card-subtitle">S1 E1 - Name of this episode</p>
      </div>
    <div>
    <ellipse-menu class="pt-2 pe-2"></ellipse-menu>
    </div>
  </div>
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

.card-body{
  padding: 0px;
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


</style>
