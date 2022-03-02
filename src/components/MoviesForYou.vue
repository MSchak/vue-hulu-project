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
      carouselClasses: "scZero",
      moviesList: [],
      moviesListArray: [],
      scWidth: ""
    }
  },
  methods: {
    scrollFwd() {
      this.scWidth= screen.width
      if(this.carouselClasses === "scZero"){
      this.carouselClasses = "scOne"
      }
      else if(this.carouselClasses === "scOne" && this.scWidth < 1400){
      this.carouselClasses = "scTwo"
      } else if(this.carouselClasses === "scTwo" && this.scWidth < 992){
      this.carouselClasses = "scThree"
      } else if(this.carouselClasses === "scThree" && this.scWidth < 768){
      this.carouselClasses = "scFour"
      }
    },
    scrollBack() {
      if(this.carouselClasses === "scOne"){
      this.carouselClasses = "scZero"
      } else if(this.carouselClasses === "scTwo"){
      this.carouselClasses = "scOne"
      } else if(this.carouselClasses === "scThree"){
      this.carouselClasses = "scTwo"
      } else if(this.carouselClasses === "scFour"){
      this.carouselClasses = "scThree"
      }
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
  top: 38%
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
.scZero {
  transform: translateX(0%);
}
.scOne {
  transform: translateX(-100%);
}
.scTwo {
  transform: translateX(-200%);
}
.scThree {
  transform: translateX(-300%);
}
.scFour{
  transform: translateX(-400%);
}

@media (min-width: 768px){
  .scThree{
  transform: translateX(-240%);
}
}
@media (min-width: 992px){
  .scTwo{
  transform: translateX(-155%);
}
}
@media (min-width: 1400px){
  .scOne{
  transform: translateX(-103%);
}
}

</style>
