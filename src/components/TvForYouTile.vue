<template>
     <div class="show-img card mx-1">
    <router-link to="/details"
      ><img
        class="card-img-top"
        :src="showImg"
        alt=""
    /></router-link>
    <ellipse-menu class="on-img"></ellipse-menu>
     <h5 class="show-title card-title my-2">{{showTitle}}</h5>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue"
import axios from "axios"

export default {
  name: "TvForYouTile",
  props: ['showKey', 'showTitle'],
  components: {
    EllipseMenu,
  },
  data(){
    return{
      showImg: '',
   options: {
        method: "GET",
        url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
        params: { type: "get-show-images-by-imdb", imdb: this.showKey },
        headers: {
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
          "x-rapidapi-key":
            "0bd8a923e7msh8c59b63cd726838p1433d2jsne4605bc6e80f",
        },
      },
    }
  },
created(){
    axios
      .request(this.options)
      .then((response) => {
        console.log(response.data);
        this.showImg = response.data.fanart
        console.log(this.showImg)
      })
      .catch(function (error) {
        console.error(error);
      });
  }
};
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
