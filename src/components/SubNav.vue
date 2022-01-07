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

  <div class="tab-content row">
    <div class="col">
          <div v-if="tab === 2" class="pane row">
            <div class="col">
              <reg-em-tile></reg-em-tile>
            </div>
            <div class="col">
              <reg-em-tile></reg-em-tile>
            </div>
            <div class="col">
              <reg-em-tile></reg-em-tile>
            </div>
            <div class="col">
              <reg-em-tile></reg-em-tile>
            </div>
            <div class="col">
              <reg-em-tile></reg-em-tile>
            </div>
          </div>
    </div>
  </div>

      <div v-if="tab === 3" class="pane">
        <h3>About This Show</h3>
        <h2>Show Title</h2>
        <p>
          Description of the show will go here. This is some placeholder text.
          Lorem ipsum, bananas, candy canes, winter, christmas party, woop woop.
          What's up dudes?
        </p>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
import DropdownMenu from "../components/DropdownMenu.vue";
import ShowGrid from "../components/ShowGrid.vue";
import RegEmTile from "../components/RegEmTile.vue";

export default {
  name: "SubNav",
  components: {
    DropdownMenu,
    ShowGrid,
    RegEmTile,
  },
  data() {
    return {
      tab: 1,
    };
  },
};
</script>
