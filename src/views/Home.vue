<template>
  <div id="home">
    <main-navigation
      :navClass="navClass"
      :navItem="navItem"
      :select="select"
      :title="title"
    ></main-navigation>
    <section class="container-fluid pb-2">
      <div class="mdl" v-if="showModal">
        <tv-details
          :showID="showID"
          @close-modal="showModal = false"
        ></tv-details>
      </div>
      <div class="mdl" v-if="movieModal">
        <movie-details
          :movieID="movieID"
          @close-modal="movieModal = false"
        ></movie-details>
      </div>
      <high-em-content @open-modal="openShowModal"></high-em-content>
    </section>

    <section class="container px-xl-4">
      <div class="row mx-1 mx-md-2 ps-md-1 my-lg-2 mt-lg-4 pt-lg-1">
        <tv-for-you @open-modal="openShowModal"></tv-for-you>
      </div>

      <div class="row mx-1 mx-md-2 ps-md-1 my-lg-2">
        <movies-for-you @open-modal="openMovieModal"></movies-for-you>
      </div>

      <div class="row mx-1 mx-md-2 ps-md-1 my-lg-2">
        <tv-genre @open-modal="openShowModal"></tv-genre>
      </div>
    </section>
    <footer
      class="
        d-flex
        flex-column-reverse flex-sm-row
        align-items-center
        justify-content-evenly
      "
    >
      <p class="m-0">
        "This product uses the TMDB API but is not endorsed or certified by
        TMDB."
      </p>
      <img
        class="tmdb pb-sm-1 pt-2 pt-sm-0"
        src="../assets/tmdb-logo.png"
        alt="TMDB logo"
      />
    </footer>
  </div>
</template>

<script>
import HighEmContent from "../components/HighEmContent.vue";
import MainNavigation from "../components/MainNavigation.vue";
import MoviesForYou from "../components/MoviesForYou.vue";
import TvGenre from "../components/TvGenre.vue";
import TvDetails from "../components/TvDetails.vue";
import TvForYou from "../components/TvForYou.vue";
import MovieDetails from "../components/MovieDetails.vue";

export default {
  name: "Home",
  components: {
    HighEmContent,
    MainNavigation,
    TvForYou,
    MoviesForYou,
    TvGenre,
    TvDetails,
    MovieDetails,
  },
  data() {
    return {
      showModal: "",
      showID: "",
      movieModal: "",
      movieID: "",
      navClass: "nav-container",
      navItem: "nav-item",
      select: "select",
      title: "title",
      screenWidth: "",
    };
  },
  methods: {
    openShowModal({ showKey }) {
      this.showModal = true;
      this.showID = showKey;
      console.log(this.showKey);
    },
    openMovieModal({ movieKey }) {
      this.movieModal = true;
      this.movieID = movieKey;
    },
    checkValue() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 60) {
        this.updateHeader();
      } else {
        this.revertHeader();
      }
    },
    updateHeader() {
      this.navClass = "nav-container-dark";
      this.navItem = "nav-item-dark";
      this.select = "select-dark";
      this.title = "title-dark";
    },
    revertHeader() {
      this.navClass = "nav-container";
      this.navItem = "nav-item";
      this.select = "select";
      this.title = "title";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkValue);
  },
};
</script>
<style scoped>
#home {
  height: 100vh;
}

.container {
  max-width: 550px;
}

.mdl {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0%;
  background: white;
  z-index: 1000;
  overflow: scroll;
}

.mdl::-webkit-scrollbar {
  display: none;
}

.mdl {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

footer {
  height: 60px;
  background-color: #ebedf2;
}

footer p {
  color: #636e85;
  font-size: 12px;
  text-align: center;
}

.tmdb {
  width: 150px;
  text-align: center;
}

@media (min-width: 576px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 992px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 1200px;
  }

  .mdl {
    width: 90vw;
    left: 5%;
    box-shadow: 0px 0px 152px black;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1500px;
  }
}
@media (min-width: 1500px) {
  .container {
    max-width: 2000px;
  }
}
</style>