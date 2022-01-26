<template>
  <div class="show-img card pb-3">
    <router-link to="/details"
      ><img
        class="card-img-top"
        src="https://via.placeholder.com/350x200"
        alt=""
    /></router-link>
    <h5 class="card-title my-2 pt-1">Show title</h5>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      viverra purus, at fermentum mi venenatis eget. Nullam lobortis, odio at
      pulvinar auctor, ipsum nisi sollicitudin augue, id euismod leo mauris id
      ligula.
    </p>
    <ellipse-menu class="on-card"></ellipse-menu>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue";

export default {
  name: "ShowTile",
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

.card-title {
  text-transform: capitalize;
}


.description {
  font-size: 0.875em;
  line-height: 21px;
  color: #6b7790;
  opacity: 80%;
  margin-right: 25px;
}

.on-card {
  position: absolute;
      top: 185px;
    right: 10px;
}
</style>