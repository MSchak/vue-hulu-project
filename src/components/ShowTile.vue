<template>
  <div class="show-img card pb-3 me-1">
    <router-link to="/details"
      ><img
        class="card-img-top"
        src="https://via.placeholder.com/350x200"
        alt=""
    /></router-link>
    <div class="d-flex">
      <div>
        <h5 class="card-title my-2 pt-1">Show title</h5>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          semper viverra purus, at fermentum mi venenatis eget. Nullam lobortis,
          odio at pulvinar auctor, ipsum nisi sollicitudin augue, id euismod leo
          mauris id ligula.
        </p>
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
  name: "ShowTile",
  components: {
    EllipseMenu,
  },
};
</script>

<style scoped>
.show-img {
  width: 49%;
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

@media (min-width: 768px){
  .show-img{
    width: 32%;
  }
}

@media (min-width: 1200px){
  .show-img{
    width: 24%;
  }
}

@media (min-width: 1600px){
  .show-img{
    width: 19%;
  }
}
</style>