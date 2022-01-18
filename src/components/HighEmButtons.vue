<template>
  <div class="buttons d-flex justify-content-start w-75">
    <div class="">
      <button class="btn btn-light me-2">Play</button>
    </div>

    <div class="">
      <button class="btn btn-outline-light me-2"><router-link to="/details" class="details-link">Details</router-link></button>
    </div>

    <div class="ellipse d-flex">
      <ellipse-menu></ellipse-menu>
    </div>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue";

export default {
  name: "HighEmButtons",
  components: {
    EllipseMenu,
  },
};
</script>

<style scoped>


.btn{
    text-transform: uppercase;
    font-family: "Graphik Semibold";
    font-size: 0.85em;
    letter-spacing: 2px;
    border: 2px solid white;
    padding: 12px;
    height: 45px;
}

.btn-outline-white{
      color: white;
}

.details-link{
  color: white;
  text-decoration: none;
}



</style>