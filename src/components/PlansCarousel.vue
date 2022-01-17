<template>
  <div class="plans-carousel d-flex justify-content-center mt-4">
    <div class="card l-card p-4 align-self-center">
      <div class="card-body">
        <h3 class="card-title">Placeholder</h3>
        <img class="bndle-logos" src="../assets/bndle-logos-color.png" alt="" />
        <price></price>
        <p class="card-text">Description of bundle</p>
        <button class="btn btn-outline-dark w-100">Select</button>
      </div>
    </div>

    <div class="card frnt-card p-4 align-self-center">
      <div class="card-body">
        <h3 class="card-title">Placeholder</h3>
        <img class="bndle-logos" src="../assets/bndle-logos-color.png" alt="" />
        <price></price>
        <p class="card-text">Description of bundle</p>
        <button class="btn btn-dark w-100">Select</button>
      </div>
    </div>

    <div class="card r-card p-4 align-self-center">
      <div class="card-body">
        <h3 class="card-title">Placeholder</h3>
        <img class="bndle-logos" src="../assets/bndle-logos-color.png" alt="" />
        <price></price>
        <p class="card-text">Description of bundle</p>
        <button class="btn btn-outline-dark w-100">Select</button>
      </div>
    </div>
  </div>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "PlansCarousel",
  components: {
    Price,
  },
};
</script>

<style>

.plans-carousel{
max-width: 1000px;
}
.frnt-card,
.l-card,
.r-card {
  width: 33.333334%;
}
.frnt-card {
  z-index: 1;
  height: 530px;
}

.l-card {
  margin-right: -15px;
  height: 480px;
}

.r-card {
  margin-left: -15px;
  height: 480px;
}

.bndle-logos {
  width: 80%;
}
</style>
