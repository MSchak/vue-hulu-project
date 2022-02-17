<template>
  <div :style="highEmImg" class="high-em-content high-em-img row">
    <div class="gradient d-flex align-items-end pb-2">
    <div class="col-10 col-md-6 col-xxl-4 m-4 m-lg-5 align-content-end p-0">
      <div class="show-logo d-flex mb-4">
        <img src="" alt="" />
      </div>

      <p class="ep-title">S1 E1 - {{episodeTitle}}</p>

      <p class="ep-description">
        {{episodeDescription}}
      </p>
      <div class="d-flex">
      <div>
        <button class="btn play-btn"><fa icon="play-circle" size="2x"/></button>
      </div>
      <div class="d-flex align-items-center mx-1 mx-lg-3">
        <p class="play-ep">Watch now: S1 E1</p>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "TvDetailsHighEmContent",
  props: ['showIdAgain', 'episodeTitle', 'episodeDescription'],
  data() {
    return {
      showDetails: {},
      episodeNumber: "S1 E3",
      tvShowImg: "",
      tvShowDetails: {},
    };
  },
    created() {
     axios.get(`https://api.themoviedb.org/3/tv/${this.showIdAgain}?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`)
      .then((response) => {
        this.tvShowDetails = response.data
        return axios.get(`https://image.tmdb.org/t/p/original${this.tvShowDetails.backdrop_path}`)
      }) 
      .then((info) => {
        this.tvShowImg = info.config.url
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    highEmImg() {
      return {
        backgroundImage: `url(${this.tvShowImg})`,
      };
    },
  },
};
</script>

<style scoped>
.high-em-img {
  padding: 0;
}

.gradient {
  background-image: linear-gradient(
    180deg,
    rgba(253, 253, 253, 1%),
    rgb(203 26 6 / 100%)
  );
  padding: 0;
}

.ep-title {
  font-family: "Graphik Medium";
  font-size: .875em;
  line-height: 1.5em;
  letter-spacing: 0.5px;
  color: white;
  margin-bottom: 10px;
}

.ep-description {
  font-family: "Graphik Regular";
  color: white;
  font-size: .75em
}

.play-btn{
  padding: 0px;
}
.play-btn{
    color: white;
}
.play-ep {
    font-family: "Graphik Medium";
  font-size: 0.875em;
  letter-spacing: 0.5px;
  line-height: 1.375em;
  color: white;
  text-transform: uppercase;
  margin-bottom: 0px;
}

@media (min-width: 768px){
    .gradient {
    background-image: linear-gradient(
      to left,
      rgba(253, 253, 253, 15%),
      rgb(203 26 6 / 81%)
    );
}
}
@media (min-width: 992px){

.ep-description {
  font-size: .875em
}
.play-btn{
  font-size: 25px;
}
}

@media (min-width: 1600px){
 .high-em-image{
   max-height: 750px;
 }
 .ep-title{
   font-size: 1.125em;
 }
 .ep-description{
   font-size: 1.125em;
 }
}
</style>