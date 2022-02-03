<template>
  <div class="tabs row ps-0 ps-lg-4 align-items-center">
    <div class="col h-100">
      <ul class="nav nav-tabs justify-content-start h-100 align-content-center" id="myTab" role="tablist">
        <li class="nav-item h-100" role="presentation">
          <button
            @click="tab = 1"
            :class="{ active: tab == 1 }"
            class="nav-link h-100"
          >
            Episodes
          </button>
        </li>
        <li class="nav-item h-100" role="presentation">
          <button
            @click="tab = 2"
            :class="{ active: tab == 2 }"
            class="nav-link h-100"
          >
            You may also like
          </button>
        </li>
        <li class="nav-item h-100" role="presentation">
          <button
            @click="tab = 3"
            :class="{ active: tab == 3 }"
            class="nav-link h-100"
          >
            Details
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div v-if="tab === 1" class="pane row">
    <episodes-tab></episodes-tab>
  </div>

  <div class="you-make-like tab-content row m-3 pt-4">
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

  <div class="details tab-content row ms-4 ps-2">
    <div class="col">
      <div v-if="tab === 3" class="pane details">
        <h5 class="mb-3">About This Show</h5>
        <h4>Show Title</h4>
        <p class="show-description w-50">
          Description of the show will go here. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent semper viverra purus, at
          fermentum mi venenatis eget. Nullam lobortis, odio at pulvinar auctor,
          ipsum nisi sollicitudin augue, id euismod leo mauris id ligula. Aenean
          nec elit ut sem finibus molestie vitae quis quam. Pellentesque
          vulputate, enim quis ultrices volutpat, mauris dolor finibus lacus, ac
          cursus arcu nisi non dui.
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
  height: 64px;
  border-bottom: 0.5px solid lightgrey;
}

.nav-tabs {
  border-bottom: none;
}

.nav-link {
  font-family: "Graphik Medium";
  font-size: .75em;
  color: #6b7790;
  text-transform: uppercase;
  border: none;
}

.nav-link.active {
  border: none;
  color: #292c33;
  border-bottom: 4px solid rgb(203 26 6);
}

.you-may-like .col {
  padding-right: 1px;
  padding-left: 0px;
}
.details {
  height: 600px;
}

.show-title {
  font-family: "Graphik Medium";
  font-size: 1em;
  letter-spacing: -0.5px;
  color: #292C33;
}
.show-description{
 font-size: 1em;
 letter-spacing:.5px ;
  line-height: 24px;
  word-spacing: 1px;
  color: #6b7790;
  opacity: 80%;
}

@media (min-width:992px){
  .tabs {
  height: 72px;
  border-bottom: 0.5px solid lightgrey;
}
.nav-link{
  font-size: .875em;
}
}
</style>