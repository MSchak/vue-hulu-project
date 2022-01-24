<template>
  <div class="tabs row ms-3 align-items-center">
    <div class="col">
      <ul class="nav nav-tabs justify-content-start" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            @click="tab = 1"
            :class="{ active: tab == 1 }"
            class="nav-link"
          >
            Episodes
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            @click="tab = 2"
            :class="{ active: tab == 2 }"
            class="nav-link"
          >
            You may also like
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            @click="tab = 3"
            :class="{ active: tab == 3 }"
            class="nav-link"
          >
            Details
          </button>
        </li>
      </ul>
      <div class="nav-accent-bar ms-2"></div>
    </div>
  </div>

  <div v-if="tab === 1" class="pane row">
    <dropdown-menu></dropdown-menu>
  </div>

  <div class="tab-content row m-3">
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

  <div class="tab-content row m-3">
    <div class="col">
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
</template>

<script>
import DropdownMenu from "../components/DropdownMenu.vue";
import RegEmTile from "../components/RegEmTile.vue";

export default {
  name: "SubNav",
  components: {
    DropdownMenu,
    RegEmTile,
  },
  data() {
    return {
      tab: 1,
    };
  },
};
</script>

<style scoped>
.tabs {
  height: 80px;
  border-bottom: 0.5px solid lightgrey;
}

.nav-tabs {
  border-bottom: none;
}

.nav-link {
  font-family: "Graphik Medium";
  color: #6b7790;
  text-transform: uppercase;
  font-size: 0.875em;
  border: none;
}

.nav-link.active {
  border: none;
  color: #292c33;
  border-bottom: 4px solid rgb(203 26 6);
}


</style>