<template>
  <div class="show-img card pb-3 me-1">
    <router-link to="/details"
      ><img class="card-img-top" :src="showImg" alt=""
    /></router-link>
    <div class="d-flex justify-content-between">
      <div>
        <h5 class="card-title my-2 pt-1">{{ showTitle }}</h5>
        <p class="description">
          {{ showDescription }}
        </p>
      </div>
      <!--<div>
        <ellipse-menu class="pt-2 pe-2"></ellipse-menu>
      </div>-->
    </div>
  </div>
</template>

<script>
//import EllipseMenu from "./EllipseMenu.vue";
import axios from "axios";

export default {
  name: "ShowTile",
  props: ["showID"],
  components: {
    // EllipseMenu,
  },
  data() {
    return {
      showTitle: "",
      showDescription: "",
      showImgPath: "",
      showImg: "",
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${this.showID}?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`
      )
      .then((response) => {
        this.showTitle = response.data.name;
        this.showDescription = response.data.overview;
        this.showImgPath = response.data.backdrop_path;
        return axios.get(
          `https://image.tmdb.org/t/p/original${this.showImgPath}`
        );
      })
      .then((info) => {
        this.showImg = info.config.url;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.show-img {
  width: 45%;
  position: relative;
}
.card {
  border: none;
}

.card-title {
  text-transform: capitalize;
}

.description {
  font-size: 0.875em;
  line-height: 21px;
  color: #6b7790;
  opacity: 0.8;
  margin-right: 25px;
  display: none;
}
@media (min-width: 576px) {
  .show-img {
    width: 48%;
  }
}

@media (min-width: 768px) {
  .show-img {
    width: 32%;
  }

  .description {
    display: block;
  }
}

@media (min-width: 1200px) {
  .show-img {
    width: 24%;
  }
}

@media (min-width: 1600px) {
  .show-img {
    width: 19%;
  }
}
</style>