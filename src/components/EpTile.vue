<template>
  <div class="col ep-tile me-1 p-0 d-flex justify-content-center">
    <div class="card border-0">
      <img
        src="https://via.placeholder.com/350x200"
        class="card-img-top"
        alt=""
      />
      <div class="card-body pt-1">
        <p class="ep-number"><strong>Episode 1</strong></p>
        <p class="ep-title">Episode title</p>
        <p class="ep-description">
          When 40 year old Liza struggles to find employment, she passes herself
          off as 26 in order to get a job at a publishing house.
        </p>
        <ellipse-menu class="on-card"></ellipse-menu>
      </div>
    </div>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue";

export default {
  name: "EpTile",
  components: {
    EllipseMenu,
  },
};
</script>

<style scoped>
.card-body {
  padding: 0px;
}

.ep-number {
  color: #6b7790;
  font-size: 0.75em;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.ep-title {
  font-family: "Graphik Medium";
  font-size: 1em;
  letter-spacing: -0.5px;
}

.ep-description {
  font-size: 0.875em;
  line-height: 21px;
  color: #6b7790;
  opacity: 80%;
  margin-right: 25px;
}

.on-card {
  position: absolute;
  left: 284px;
  top: 184px;
}
</style>