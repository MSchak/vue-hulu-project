<template>
  <div class="related-slideshow my-3">
    <h2>TV For You</h2>
    <div class="slide-container">
      <div
        class="slide-items d-flex"
        :style="`transform: translateX(${translateXValue}%)`"
      >
        <tv-for-you-tile
          v-for="show in tvShows"
          :key="show.id"
          :showKey="show.id"
          :showTitle="show.name"
          :showImgPath="show.backdrop_path"
          @open-modal="openModal"
        >
        </tv-for-you-tile>
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
import TvForYouTile from "./TvForYouTile.vue";
import axios from "axios";

export default {
  name: "TVForYou",
  components: {
    TvForYouTile,
  },
  data() {
    return {
      carouselClasses: "scZero",
      tvShowsArray: [],
      tvShows: [],
      translateXValue: 0,
      visibleSlides: "",
      totalSlides: "",
      scrollPosition: 0,
    };
  },
  methods: {
    getNumSlides() {
      console.log(this.visibleSlides);
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
        showKey: key,
      });
    },
  },
  created() {
    window.addEventListener("resize", this.getNumSlides),
      axios
        .request(
          "https://api.themoviedb.org/3/tv/popular?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US&page=1"
        )
        .then((response) => {
          this.tvShowsArray = response.data.results;
          this.tvShows = this.tvShowsArray.slice(0, 10);
          this.totalSlides = this.tvShows.length;
        })
        .catch(function (error) {
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
