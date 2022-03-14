<template>
  <div class="show-img card mx-1">
    <button @click="openModal" class="modal-btn btn p-0">
      <img
        class="card-img-top"
        :src="movieImg"
        alt=""
    />
    </button>
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
  props: ['movieKey', 'movieTitle', 'movieImgPath'],
  data(){
    return{
      movieImg: '',
    }
  },
  methods: {
    openModal(){
       this.$emit('openModal', {
          key: this.movieKey
        })
    }
  },
  created(){
    axios.get(`https://image.tmdb.org/t/p/original${this.movieImgPath}`)
      .then((response) => {
       this.movieImg = response.config.url
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

.on-img {
  position: absolute;
  top: 10px;
  right: 10px;
}

.show-title{
  height: 16px;
  overflow: hidden;
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

}

@media (min-width: 1400px){
.show-img {
  min-width: 20%;
}
}

</style>
