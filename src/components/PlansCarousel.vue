<template>
  <div class="plans-carousel d-flex justify-content-center mt-4">
    <div class="card l-card pt-5 px-4 align-self-center">
      <div class="card-body m-2">
        <h3 class="card-title mb-4">Hulu (No Ads)</h3>
        <img class="bndle-logos" src="../assets/bndle-logos-color.png" alt="" />
        <price></price>
        <p class="card-text pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
          erat quis orci dapibus bibendum. Quisque elementum ac turpis quis
          ultrices.
        </p>
        <button class="btn btn-outline-dark w-100">Select</button>
      </div>
    </div>

    <div class="card frnt-card pt-4 px-4 align-self-center">
      <div class="card-body m-2">
        <div><p class="badge">Save 36% -$7.98 Off*</p></div>
        <h3 class="card-title mb-4">Hulu</h3>
        <img class="bndle-logos" src="../assets/bndle-logos-color.png" alt="" />
        <price></price>
        <p class="card-text pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
          erat quis orci dapibus bibendum. Quisque elementum ac turpis quis
          ultrices.
        </p>
        <button class="btn btn-dark w-100">Select</button>
      </div>
    </div>

    <div class="card r-card pt-5 px-4 align-self-center">
      <div class="card-body m-2">
        <h3 class="card-title mb-4">Hulu (No Ads) + Live TV</h3>
        <img class="bndle-logos" src="../assets/bndle-logos-color.png" alt="" />
        <price></price>
        <p class="card-text pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
          erat quis orci dapibus bibendum. Quisque elementum ac turpis quis
          ultrices.
        </p>
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

<style scoped>
.plans-carousel {
  max-width: 1000px;
}

.frnt-card,
.l-card,
.r-card {
  width: 33.333334%;
  border: none;
}
.frnt-card {
  z-index: 1;
  height: 530px;
  border-top: 5px solid #29a869;
  box-shadow: 0 10px 20px -5px rgb(0 0 0 / 8%);
}

.l-card {
  height: 480px;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 8%);
}

.r-card {
  height: 480px;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 8%);
}

.card-body {
  padding: 0;
}

.badge {
  border-radius: 100px;
  background-color: #29a869;
  text-transform: uppercase;
  padding: 10px 20px 10px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-size: 0.6875rem;
}
.bndle-logos {
  width: 80%;
}

.card-text {
  color: #636e85;
  font-size: 0.875rem;
  line-height: 1.5em;
}

.btn {
  text-transform: uppercase;
  font-family: "Graphik Semibold";
  font-size: 0.875rem;
  letter-spacing: 2px;
  border: 2px solid #272c35;
  color: #272c35;
  padding: 12px;
}

.btn-dark{
  color: white;
}
</style>
