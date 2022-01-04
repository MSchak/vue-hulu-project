<template>
  <div>
    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="base-tab"
          data-bs-toggle="tab"
          data-bs-target="#base"
          type="button"
          role="tab"
          aria-controls="base"
          aria-selected="true"
        >
          Base Plans
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="bundle-tab"
          data-bs-toggle="tab"
          data-bs-target="#bundle"
          type="button"
          role="tab"
          aria-controls="bundle"
          aria-selected="false"
        >
          Bundle and Save
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="base"
        role="tabpanel"
        aria-labelledby="base-tab"
      ></div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        Tab two
      </div>
    </div>
    <plans-carousel></plans-carousel>
  </div>
</template>



<script>
import PlansCarousel from "./PlansCarousel.vue";

export default {
  name: "PlansTablist",
  components: {
    PlansCarousel,
  },
};
</script>
