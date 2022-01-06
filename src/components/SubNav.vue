<template>
<div class="tabs row ms-3">
  <div class="col">
    <ul class="nav nav-tabs justify-content-start" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button @click="tab = 1" class="nav-link active">Episodes</button>
      </li>
      <li class="nav-item" role="presentation">
        <button @click="tab = 2" class="nav-link">You may also like</button>
      </li>
      <li class="nav-item" role="presentation">
        <button @click="tab = 3" class="nav-link">Details</button>
      </li>
    </ul>
  </div>
  </div>

  <div class="tab-content row ms-3">
    <div class="col">
      <div v-if="tab === 1" class="pane">
        <dropdown-menu></dropdown-menu>
        <show-grid></show-grid>
      </div>

      <div v-if="tab === 2" class="pane">
        Tab two
      </div>

      <div v-if="tab === 3" class="pane">
        Tab three
      </div>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import DropdownMenu from "../components/DropdownMenu.vue";
import ShowGrid from "../components/ShowGrid.vue";

export default {
  name: "SubNav",
  components: {
    DropdownMenu,
    ShowGrid,
  },
   data() {
    return {
      tab: 1,
    };
  },
};
</script>
