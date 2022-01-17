<template>
  <div class="plans-tablist row">
    <div class="col d-flex justify-content-center">
      <ul class="nav nav-tabs justify-content-center w-25 mb-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button @click="tab = 1" class="nav-link active">Base Plans</button>
        </li>
        <li class="nav-item" role="presentation">
          <button @click="tab = 2" class="nav-link">Bundle and Save</button>
        </li>
      </ul>
    </div>
    </div>

    <div class="tab-content row">
      <div class="col">
        <div v-if="tab === 1" class="pane d-flex justify-content-center">
          <plans-carousel></plans-carousel>
          </div>

        <div v-if="tab === 2" class="pane d-flex justify-content-center">
          Tab two
          <plans-carousel></plans-carousel>
        </div>
        </div>
  </div>
</template>



<script>
import PlansCarousel from "./PlansCarousel.vue";

export default {
  name: "PlansTablist",
  components: {
    PlansCarousel,
  },
  data() {
    return {
      tab: 1,
    };
  },
};
</script>
