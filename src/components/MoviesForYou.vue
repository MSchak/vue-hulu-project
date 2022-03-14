<template>
  <div class="related-slideshow my-1 my-sm-3">
    <h2>Movies For You</h2>
    <div class="slide-container">
      <div
        class="slide-items d-flex align-items-center"
        :style="`transform: translateX(${translateXValue}%)`"
      >
        <movies-for-you-tile
          v-for="movie in moviesList"
          :key="movie.id"
          :movieKey="movie.id"
          :movieTitle="movie.title"
          :movieImgPath="movie.backdrop_path"
          @open-modal="openModal"
        ></movies-for-you-tile>
      </div>
      <div class="slide-buttons">
        <button @click="previous()" class="back-btn btn btn-light">
          &#60;
        </button>
        <button @click="next()" class="fwd-btn btn btn-light">&#62;</button>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesForYouTile from "./MoviesForYouTile.vue";
import axios from "axios";

export default {
  name: "MoviesForYou",
  components: {
    MoviesForYouTile,
  },
  data() {
    return {
      carouselClasses: "scZero",
      moviesList: [],
      moviesListArray: [],
      translateXValue: 0,
      visibleSlides: "",
      totalSlides: "",
      scrollPosition: 0,
    };
  },
  methods: {
    getNumSlides() {
      this.scWidth = window.innerWidth;
      if (this.scWidth < 768) {
        return (this.visibleSlides = 2);
      } else if (this.scWidth < 992) {
        return (this.visibleSlides = 3);
      } else if (this.scWidth < 1400) {
        return (this.visibleSlides = 4);
      } else if (this.scWidth > 1400) {
        return (this.visibleSlides = 5);
      }
    },
    next() {
      this.getNumSlides();
      if (
        this.scrollPosition <
        Math.ceil(this.totalSlides / this.visibleSlides - 1)
      ) {
        this.translateXValue = this.translateXValue + -100;
        this.scrollPosition = this.scrollPosition + 1;
      }
    },
    previous() {
      if (this.translateXValue < 0) {
        this.translateXValue = this.translateXValue + 100;
        this.scrollPosition = this.scrollPosition - 1;
      }
    },
    openModal({ key }) {
      this.$emit("openModal", {
        movieKey: key,
      });
    },
  },
  created() {
    window.addEventListener("resize", this.getNumSlides),
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US&page=1"
        )
        .then((response) => {
          this.moviesListArray = response.data.results;
          this.moviesList = this.moviesListArray.slice(0, 10);
          this.totalSlides = this.moviesList.length;
        })
        .catch((error) => {
          console.error(error);
        });
  },
};
</script>

<style scoped>
.related-slideshow {
  position: relative;
}

.slide-container {
  overflow-x: auto;
}
.slide-container::-webkit-scrollbar {
  display: none;
}

.slide-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.back-btn,
.fwd-btn {
  position: absolute;
  top: 38%;
}

.back-btn {
  left: 0px;
}

.fwd-btn {
  right: -10px;
}

.btn-light {
  border-radius: 50%;
  background-color: white;
}

.slide-items {
  position: relative;
  left: 0px;
  transition: transform 850ms;
}
</style>
