<template>
  <div class="plans-carousel d-flex justify-content-center mt-4">
    <div class="card l-card pt-5 px-4 align-self-center">
      <div class="card-body m-2">
        <h3 class="card-title mb-4">Hulu (No Ads)</h3>
        <p class="info">Get First Month Free, Then</p>

        <p class="pt-3">
          <span class="price">$12.99</span
          ><span class="time-period">/ month</span>
        </p>
        <p class="card-text pb-4">
          Our ad-free plan lets you watch exclusive series, hit movies,
          Originals, kids shows, and tons more with no ad interruptions.
        </p>
        <button class="btn btn-outline-dark w-100">Select</button>
      </div>
    </div>

    <div class="card frnt-card pt-4 px-4 align-self-center">
      <div class="card-body m-2">
        <div><p class="badge">Most Popular</p></div>
        <h3 class="card-title mb-4">Hulu</h3>
        <p class="info">Get First Month Free, Then</p>
        <p class="pt-3">
          <span class="price">$6.99</span
          ><span class="time-period">/ month</span>
        </p>
        <p class="card-text pb-4">
          Our ad-supported plan lets you watch exclusive series, hit movies,
          Originals, kids shows, and tons more.
        </p>
        <button class="btn btn-dark w-100">Select</button>
      </div>
    </div>

    <div class="card r-card pt-5 px-4 align-self-center">
      <div class="card-body m-2">
        <h3 class="card-title mb-4">Hulu (No Ads) + Live TV</h3>
        <p class="info">Now with Disney+ and ESPN+</p>
        <p class="pt-3">
          <span class="price">$69.99</span
          ><span class="time-period">/ month</span>
        </p>
        <p class="card-text pb-3 mb-0">
          Access 75+ channels with Live TV, endless, ad-free entertainment with
          Disney+, live sports with ESPN+, and award-winning Hulu originals with
          Hulu (ad-supported).
        </p>
        <button class="btn btn-outline-dark w-100">Select</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlansCarousel",
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
  height: 450px;
  border-top: 5px solid #29a869;
  box-shadow: 0 10px 20px -5px rgb(0 0 0 / 8%);
}

.l-card {
  height: 420px;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 8%);
}

.r-card {
  height: 420px;
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
.info {
  color: #1ac972;
  font-family: "Graphik Medium", sans-serif;
  margin-bottom: 0px;
}

.price {
  font-family: "Graphik Medium", sans-serif;
  font-size: 2em;
}
.time-period {
  font-family: "Graphik Bold", sans-serif;
  font-size: 1.125em;
}
.card-text {
  color: #636e85;
  font-size: 0.875rem;
  line-height: 1.5em;
}

.btn {
  text-transform: uppercase;
  font-family: "Graphik Semibold", sans-serif;
  font-size: 0.875rem;
  letter-spacing: 2px;
  border: 2px solid #272c35;
  color: #272c35;
  padding: 12px;
}

.btn-dark {
  color: white;
}

.btn-dark:hover {
  box-shadow: inset 0px 0px 5px 2px white;
}

.btn-outline-dark:hover {
  background-color: #272c35;
  color: white;
}
</style>
