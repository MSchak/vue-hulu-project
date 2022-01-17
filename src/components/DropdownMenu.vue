<template>
  <div class="drpdwn my-4">
    <button @click="toggle" class="btn btn-light w-25 text-start ms-4">
      Dropdown
    </button>
    <ul v-if="active" class="drpdwn-menu p-0 w-25 ms-4">
      <li class="drpdwn-item">
        <button @click="showSeason(1)" class="btn w-100 text-start">
          Season 1
        </button>
      </li>
      <li class="drpdwn-item">
        <button @click="showSeason(2)" class="btn w-100 text-start">
          Season 2
        </button>
      </li>
      <li class="drpdwn-item">
        <button @click="showSeason(3)" class="btn w-100 text-start">
          Season 3
        </button>
      </li>
    </ul>

    <div class="seasons-content row ms-3">
      <div class="col">
        <div v-if="btn === 1">
            <div class="m-4">
            Season One
            </div>
          <show-grid></show-grid>
        </div>
      </div>
    </div>

    <div class="seasons-content row ms-3">
      <div class="col">
        <div v-if="btn === 2">
            <div class="m-4">
            Season Two
            </div>
          <show-grid></show-grid>
        </div>
      </div>
    </div>

    <div class="seasons-content row ms-3">
      <div class="col">
        <div v-if="btn === 3">
            <div class="m-4">
            Season Three
            </div>
          <show-grid></show-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ShowGrid from "../components/ShowGrid.vue";

export default {
  name: "DropdownMenu",
  components:{
      ShowGrid
  },
  data() {
    return {
      active: false,
      btn: 2
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    showSeason(season){
      this.btn = season;
      this.toggle()
    }

  },
};
</script>

<style scoped>
.drpdwn-menu {
  list-style-type: none;
  background-color: #f9fafb;
  position: absolute;
  z-index: 1;
}

</style>