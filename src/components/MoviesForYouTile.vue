<template>
  <div class="show-img card mx-1">
    <router-link to="/details"
      ><img
        class="card-img-top"
        :src="movieImg"
        alt=""
    /></router-link>
    <ellipse-menu class="on-img"></ellipse-menu>
    <div class="card-body d-flex justify-content-between">
      <div>
    <h5 class="show-title card-title my-2">{{movieTitle}}</h5>
      </div>
    <div>
    <ellipse-menu class="pt-2 pe-2"></ellipse-menu>
    </div>
  </div>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue";
import axios from 'axios'

export default {
  name: "MoviesForYouTile",
  components: {
    EllipseMenu,
  },
  props: ['key', 'movieTitle', 'movieImgPath'],
  data(){
    return{
      movieImg: '',
    }
  },
  created(){
    axios.get(`https://image.tmdb.org/t/p/original${this.movieImgPath}`)
      .then((response) => {
       console.log(response)
       this.movieImg = response.config.url
       console.log(this.movieImg)
      })
      .catch((error) => {
        console.error(error);
      })
  }
  }

</script>

<style scoped>
.show-img {
  min-width: 49.0%;
  overflow: hidden;
  position: relative;
}

.card {
  border: none;
}

.card-body{
  padding: 0px;
}
.card-subtitle {
  font-size: .75em;
  overflow:hidden;
}
.on-img {
  position: absolute;
  top: 10px;
  right: 10px;
}
@media (min-width: 768px){
  .show-img {
  min-width: 33.33333%;
}
}
@media (min-width: 992px){
.show-img {
  min-width: 25%;
}
.card-subtitle{
  font-size: .875em;
}
}

@media (min-width: 1400px){
.show-img {
  min-width: 20%;
}
}

</style>
