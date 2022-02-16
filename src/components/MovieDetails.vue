<template>
  <div id="movie-details">
    <div class="container-fluid">
        <movie-details-header @close-modal="$emit('closeModal')" :movieTitle="movieTitle"></movie-details-header>
        <movie-details-high-em-content :movieIdAgain="movieID" :movieDescription="movieDescription" :movieTitle="movieTitle"></movie-details-high-em-content>
        <movie-details-img-footer :movieIdAgain="movieID" ></movie-details-img-footer>
        <movies-sub-nav :movieDescription="movieDescription" :movieTitle="movieTitle" :movieIdAgain="movieID"></movies-sub-nav>
    </div>
  </div>
</template>

<script>
import MovieDetailsHighEmContent from "../components/MovieDetailsHighEmContent.vue";
import MoviesSubNav from "../components/MoviesSubNav.vue";
import MovieDetailsHeader from "../components/MovieDetailsHeader.vue";
import MovieDetailsImgFooter from "./MovieDetailsImgFooter.vue";
import axios from 'axios'

export default {
  name: "TvDetails",
  components: {
    MovieDetailsHighEmContent,
    MoviesSubNav,
    MovieDetailsHeader,
    MovieDetailsImgFooter,
  },
  props: ['movieID'],
  data(){
      return{
        movieDetails: [],
        movieTitle: "",
        movieDescription: "",
      }
  },
  created(){
      axios.get(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`)
      .then((response) => {
          this.movieDetails = response.data
          this.movieTitle = this.movieDetails.original_title
          this.movieDescription = this.movieDetails.overview
          console.log(this.movieDetails)
      }) 
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>