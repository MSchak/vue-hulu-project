<template>
  <div class="episodes-tab drpdwn my-4">
    <button
      @click="toggle"
      class="drpdwn-btn btn btn-light text-start ms-4"
    >
      Season {{ seasonNumber }}
    </button>
    <ul v-if="active" class="drpdwn-menu p-0 ms-4">
      <li class="drpdwn-item">
        <button @click="showSeason(1)" class="ssn-btn btn w-100 text-start">
          Season 1
        </button>
      </li>
      <li class="drpdwn-item">
        <button @click="showSeason(2)" class="ssn-btn btn w-100 text-start">
          Season 2
        </button>
      </li>
      <li class="drpdwn-item">
        <button @click="showSeason(3)" class="ssn-btn btn w-100 text-start">
          Season 3
        </button>
      </li>
    </ul>

    <div class="seasons-content row ms-3">
      <div class="col">
        <div v-if="btn === 1">
          <div class="m-4">Season One</div>
          <show-grid></show-grid>
        </div>
      </div>
    </div>

    <div class="seasons-content row ms-3">
      <div class="col">
        <div v-if="btn === 2">
          <div class="m-4">Season Two</div>
          <show-grid></show-grid>
        </div>
      </div>
    </div>

    <div class="seasons-content row ms-3">
      <div class="col">
        <div v-if="btn === 3">
          <div class="m-4">Season Three</div>
          <show-grid></show-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowGrid from "./ShowGrid.vue";

export default {
  name: "EpisodesTab",
  components: {
    ShowGrid,
  },
  data() {
    return {
      active: false,
      btn: 2,
      seasonNumber: 1,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    showSeason(season) {
      this.btn = season;
      this.seasonNumber = season;
      this.toggle();
    },
  },
};
</script>

<style scoped>
.drpdwn-btn {
  width: 325px;
  height: 64px;
  padding: 0px 24px;
  font-family: "Graphik Regular";
  font-size: 20px;
  border-radius: 0px;
}

.btn:focus {
  box-shadow: none;
}

.drpdwn-menu {
  width: 325px;
  list-style-type: none;
  background-color: white;
  position: absolute;
  z-index: 1;
}

.drpdwn-item {
  font-family: "Graphik Regular";
  padding: 5px 12px;
}

.drpdwn-item:hover {
  background-color: #f8f9fa;
  color: black;
}

.ssn-btn {
  color: lightslategray;
}

.ssn-btn:hover {
  color: black;
  font-weight: bold;
}
</style>