<template>
  <div>
    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button @click="tab = 1" class="nav-link active">Base Plans</button>
      </li>
      <li class="nav-item" role="presentation">
        <button @click="tab = 2" class="nav-link">Bundle and Save</button>
      </li>
    </ul>
    <div class="tab-content">
      <div v-if="tab === 1" class="pane">
        Tab one
        <plans-carousel></plans-carousel>
      </div>
      <div v-if="tab === 2" class="pane">
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
