<template>
  <div class="buttons d-flex justify-content-between pe-5">
    <div class="">
      <button class="btn btn-light p-3 px-5">Play</button>
    </div>

    <div class="">
      <button class="btn btn-outline-light p-3 px-5">Details</button>
    </div>

    <div class="">
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
