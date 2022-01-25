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
    <episodes-tab></episodes-tab>
  </div>

  <div class="you-make-like tab-content row m-3 mt-5">
    <div class="col">
      <div v-if="tab === 2" class="pane">
        <div class="you-may-like row">
        <div class="col">
          <show-tile></show-tile>
        </div>
         <div class="col">
          <show-tile></show-tile>
        </div>
       <div class="col">
          <show-tile></show-tile>
        </div>
        <div class="col">
          <show-tile></show-tile>
        </div>
        <div class="col">
          <show-tile></show-tile>
        </div>
        </div>
              <div class="you-may-like row p-0">
        <div class="col">
          <show-tile></show-tile>
        </div>
         <div class="col">
          <show-tile></show-tile>
        </div>
       <div class="col">
          <show-tile></show-tile>
        </div>
        <div class="col">
          <show-tile></show-tile>
        </div>
        <div class="col">
          <show-tile></show-tile>
        </div>
        </div>
               <div class="you-may-like row p-0">
        <div class="col">
          <show-tile></show-tile>
        </div>
         <div class="col">
          <show-tile></show-tile>
        </div>
       <div class="col">
          <show-tile></show-tile>
        </div>
        <div class="col">
          <show-tile></show-tile>
        </div>
        <div class="col">
          <show-tile></show-tile>
        </div>
        </div>
      </div>
    </div>
  </div>

  <div class="details tab-content row m-3">
    <div class="col">
      <div v-if="tab === 3" class="pane details">
        <h3>About This Show</h3>
        <h2>Show Title</h2>
        <p>
          Description of the show will go here. This is some placeholder text.
          Lorem ipsum, bananas, candy canes, winter, christmas party, woop woop.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodesTab from "./EpisodesTab.vue";
import ShowTile from "../components/ShowTile.vue";

export default {
  name: "SubNav",
  components: {
    EpisodesTab,
    ShowTile,
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

.you-may-like .col{
padding-right: 1px;
padding-left: 0px;
}
.details{
  height: 600px;
}

</style>