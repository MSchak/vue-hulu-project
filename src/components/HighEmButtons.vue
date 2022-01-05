<template>
  <div class="buttons row">
    <div class="col-2">
      <button class="btn btn-light p-3 px-5">Play</button>
    </div>

    <div class="col-2">
      <button class="btn btn-outline-light p-3 px-5">Details</button>
    </div>

    <div class="col-2">
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
