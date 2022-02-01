<template>
<div class="plans-tablist">
  <div class="row mb-4">
    <div class="tab-list col d-flex justify-content-center">
      <button @click="activateButton(1)" :class="{ active : tab == 1 }" class="nav-link">Base Plans</button>
      <button @click="activateButton(2)" :class="{ active : tab == 2 }" class="nav-link">Bundle / Save</button>
    </div>
  </div>

  <div class="tab-content row">
    <div class="col mt-2">
      <div v-if="tab === 1" class="pane d-flex justify-content-center">
        <plans-carousel></plans-carousel>
      </div>

      <div v-if="tab === 2" class="pane d-flex justify-content-center">
        <bundle-carousel></bundle-carousel>
      </div>
    </div>
  </div>
  </div>
</template>



<script>
import PlansCarousel from "./PlansCarousel.vue";
import BundleCarousel from "./BundleCarousel.vue"

export default {
  name: "PlansTablist",
  components: {
    PlansCarousel,
    BundleCarousel
  },
  data() {
    return {
      tab: 1,
      isActive: false
    };
  },
  methods: {
    activateButton(number){
      this.tab = number
      this.isActive = true
    }
  }
};
</script>

<style scoped>
.plans-tablist{
  display: none;
}

.nav-link {
  box-sizing: border-box;
  background: none;
  border: none;
  border-bottom: 1px solid #b9bfc8;
  color: #b9bfc8;
  font-size: 0.875rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.active{
    border-bottom: 4px solid #272c35;
    color: #272c35;
}

@media (min-width:992px){
  .plans-tablist{
    display: block;
  }
}
</style>
