<template>
  <div class="ep-tile me-1 p-0 d-flex justify-content-center">
    <div class="episode-card card border-0">
      <img v-if="epImg" :src="epImg" class="card-img-top" alt="" />
      <img
        v-else
        src="../assets/loading-image.jpg"
        class="card-img-top"
        alt=""
      />
      <div class="card-body pt-1 d-flex justify-content-between">
        <div>
          <p class="ep-number">
            <strong>Episode {{ epNumber }}</strong>
          </p>
          <h5>{{ epName }}</h5>
          <p class="ep-description">
            {{ epDescription }}
          </p>
        </div>
        <!--<div>
          <ellipse-menu class="pt-2 pe-2"></ellipse-menu>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
//import EllipseMenu from "./EllipseMenu.vue";
import axios from "axios";

export default {
  name: "EpTile",
  props: ["season", "episodeKey", "showIdAgain"],
  components: {
    //EllipseMenu,
  },
  data() {
    return {
      epNumber: "",
      epName: "",
      epDescription: "",
      epImgPath: "",
      epImg: "",
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${this.showIdAgain}/season/${this.season}/episode/${this.episodeKey}?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`
      )
      .then((response) => {
        this.epNumber = response.data.episode_number;
        this.epName = response.data.name;
        this.epDescription = response.data.overview;
        this.epImgPath = response.data.still_path;
        return axios.get(
          `https://image.tmdb.org/t/p/original/${this.epImgPath}`
        );
      })
      .then((info) => {
        this.epImg = info.config.url;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.ep-tile {
  width: 48%;
}
.card-body {
  padding: 0px;
}

.ep-number {
  color: #6b7790;
  font-size: 0.75em;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.ep-description {
  font-size: 0.875em;
  line-height: 21px;
  color: #6b7790;
  margin-right: 25px;
  opacity: 0.8;
}

@media (min-width: 768px) {
  .ep-tile {
    width: 32%;
  }
}

@media (min-width: 992px) {
  .ep-tile {
    width: 24%;
  }
}

@media (min-width: 1200px) {
  .ep-tile {
    width: 19%;
  }
}

@media (min-width: 1800px) {
  .ep-tile {
    width: 15%;
  }
}
</style>