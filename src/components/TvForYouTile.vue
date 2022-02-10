<template>
     <div class="show-img card mx-1">
       <button @click="doingThings" class="thing-btn btn p-0">
<img
        class="card-img-top"
        :src="showImg"
        alt=""
    />
    <ellipse-menu class="on-img"></ellipse-menu>
    </button>
     <h5 class="show-title card-title my-2">{{showTitle}}{{showKey}}</h5>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue"
import axios from 'axios'

export default {
  name: "TvForYouTile",
  props: ['showKey', 'showImgPath', 'showTitle'],
  components: {
    EllipseMenu,
  },
  data(){
    return{
      showImg: '',
    }
  },
  methods: {
      doingThings(){
        this.$emit('openModal', {
          key: this.showKey
        })
      },
  }, 
created(){
    axios.get(`https://image.tmdb.org/t/p/original${this.showImgPath}`)
      .then((response) => {
       this.showImg = response.config.url
      })
      .catch((error) => {
        console.error(error);
      })
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

.thing-btn{

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
