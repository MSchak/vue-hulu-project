<template>
  <div class="episodes-tab drpdwn my-4">
    <button
      @click="toggle"
      class="
        drpdwn-btn
        btn btn-light
        ms-3 ms-lg-4
        d-flex
        justify-content-between
        align-items-center
      "
    >
      Season {{ seasonNumber }}<fa icon="caret-down" />
    </button>
    <ul v-if="active" class="drpdwn-menu p-0 ms-4">
      <li class="drpdwn-item">
        <button @click="showSeason(1)" class="ssn-btn btn w-100 text-start">
          Season 1
        </button>
      </li>
      <li v-if="numOfSeasons >= 2" class="drpdwn-item">
        <button @click="showSeason(2)" class="ssn-btn btn w-100 text-start">
          Season 2
        </button>
      </li>
      <li v-if="numOfSeasons >= 3" class="drpdwn-item">
        <button @click="showSeason(3)" class="ssn-btn btn w-100 text-start">
          Season 3
        </button>
      </li>
    </ul>

    <div class="seasons-content row ms-1">
      <div class="col p-0">
        <div v-if="btn === 1">
          <div
            class="
              grid-container
              m-1
              d-flex
              flex-row flex-wrap
              ms-xl-0
              ps-2 ps-lg-4
              mt-4
            "
          >
            <ep-tile
              v-for="episode in seasonOneArray"
              :key="episode.id"
              :season="1"
              :episodeKey="episode.episode_number"
              :showIdAgain="showIdAgain"
            ></ep-tile>
          </div>
        </div>
      </div>

      <div class="seasons-content row ms-1">
        <div class="col p-0">
          <div v-if="btn === 2">
            <div
              class="
                grid-container
                m-1
                d-flex
                flex-row flex-wrap
                ms-xl-0
                ps-2 ps-lg-4
                mt-4
              "
            >
              <ep-tile
                v-for="episode in seasonTwoArray"
                :key="episode.id"
                :season="2"
                :episodeKey="episode.episode_number"
                :showIdAgain="showIdAgain"
              ></ep-tile>
            </div>
          </div>
        </div>
      </div>

      <div class="seasons-content row ms-1">
        <div class="col p-0">
          <div v-if="btn === 3">
            <div
              class="
                grid-container
                m-1
                d-flex
                flex-row flex-wrap
                ms-xl-0
                ps-2 ps-lg-4
                mt-4
              "
            >
              <ep-tile
                v-for="episode in seasonThreeArray"
                :key="episode.id"
                :season="3"
                :episodeKey="episode.episode_number"
                :showIdAgain="showIdAgain"
              ></ep-tile>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EpTile from "./EpTile.vue";
import axios from "axios";

export default {
  name: "EpisodesTab",
  components: {
    EpTile,
  },
  props: ["showIdAgain", "numOfSeasons"],
  data() {
    return {
      active: false,
      btn: 1,
      seasonNumber: 1,
      seasonOneArray: [],
      seasonTwoArray: [],
      seasonThreeArray: [],
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
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${this.showIdAgain}/season/1?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`
      )
      .then((response) => {
        this.seasonOneArray = response.data.episodes;
        return axios.get(
          `https://api.themoviedb.org/3/tv/${this.showIdAgain}/season/2?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`
        );
      })
      .then((info) => {
        this.seasonTwoArray = info.data.episodes;
        return axios.get(
          `https://api.themoviedb.org/3/tv/${this.showIdAgain}/season/3?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`
        );
      })
      .then((res) => {
        console.log(res);
        this.seasonThreeArray = res.data.episodes;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.drpdwn-btn {
  width: 240px;
  height: 64px;
  padding: 0px 24px;
  font-family: "Graphik Regular", sans-serif;
  font-size: 20px;
  border-radius: 0px;
  transition: 250ms ease;
}

.drpdwn-btn:hover {
  background-color: rgba(221, 221, 221, 0.527);
}

.drpdwn-btn:focus {
  border: 1px solid blue;
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
  font-family: "Graphik Regular", sans-serif;
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

.ssn-btn:focus {
  border: 1px solid blue;
}

@media (min-width: 350px) {
  .drpdwn-btn {
    width: 325px;
  }
}
</style>