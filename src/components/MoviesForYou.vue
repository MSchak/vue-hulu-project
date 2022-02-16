<template>
  <div class="related-slideshow my-3">
    <h2>Movies For You</h2>
    <div class="slide-container">
      <div class="slide-items d-flex" :class="carouselClasses">
       <movies-for-you-tile v-for="movie in moviesList" :key="movie.id" :movieKey="movie.id"
          :movieTitle="movie.title" :movieImgPath="movie.backdrop_path" @open-modal="openModal" ></movies-for-you-tile>
      </div>
      <div class="slide-buttons">
        <button @click="scrollBack()" class="back-btn btn btn-light">
          &#60;
        </button>
        <button @click="scrollFwd()" class="fwd-btn btn btn-light">
          &#62;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesForYouTile from "./MoviesForYouTile.vue"
import axios from 'axios'

export default {
  name: "MoviesForYou",
  components: {
    MoviesForYouTile
  },
  data() {
    return{
      carouselClasses: "",
      moviesList: [],
      moviesListArray: []
    }
  },
  methods: {
    scrollFwd() {
      this.carouselClasses = "scroll"
    },
    scrollBack() {
      this.carouselClasses = "scroll-back"
    },
    openModal({key}){
      this.$emit('openModal', {
      movieKey : key
      })
    },
  },
   created(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US&page=1')
      .then((response) => {
        this.moviesListArray = response.data.results
        this.moviesList = this.moviesListArray.slice(0, 10)
        console.log(this.moviesList)

      })
      .catch((error) => {
        console.error(error);
      })
  }
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
}

.back-btn {
  left: 0px;
  bottom: 90px;
}

.fwd-btn {
  right: -10px;
  bottom: 90px;
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

.scroll {
  transform: translateX(-100%);
}

.scroll-back {
  transform: translateX(0%);
}
@media (min-width: 768px) {
  .back-btn {
    bottom: 85px;
  }

  .fwd-btn {
    bottom: 85px;
  }
}

@media (min-width: 992px){
    .back-btn {
    bottom: 100px;
  }

  .fwd-btn {
    bottom: 100px;
  }
}
@media (min-width: 1200px) {
  .back-btn {
    bottom: 120px;
  }

  .fwd-btn {
    bottom: 120px;
  }
}
@media (min-width: 1400px) {
  .back-btn {
    bottom: 100px;
  }

  .fwd-btn {
    bottom: 100px;
  }
}
</style>
