<template>
  <div :style="highEmImg" class="high-em-content high-em-img row">
    <div class="gradient d-flex align-items-end pb-2">
    <div class="col-10 col-md-6 col-xxl-4 m-4 m-lg-5 align-content-end p-0">
      <div class="show-logo d-flex mb-4">
        <img src="" alt="" />
      </div>

      <p class="ep-title">S1 E1 - Episode Title</p>

      <p class="ep-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        mollis commodo augue sed molestie.
      </p>
      <div class="d-flex">
      <div>
        <button class="btn play-btn"><fa icon="play-circle" size="2x"/></button>
      </div>
      <div class="d-flex align-items-center mx-1 mx-lg-3">
        <p class="play-ep">Watch next episode: {{ episodeNumber }}</p>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "DetailsHighEmContent",
  props: ['showIdAgain'],
  data() {
    return {
      showDetails: {},
      episodeNumber: "S1 E3",
        options: {
        method: "GET",
        url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
        params: { type: "get-show-images-by-imdb", imdb: "tt2741602" },
        headers: {
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
          "x-rapidapi-key":
            "0bd8a923e7msh8c59b63cd726838p1433d2jsne4605bc6e80f",
        },
      },
    };
  },
    created() {
    axios
      .request(this.options)
      .then((response) => {
        console.log(response.data);
        this.showDetails = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  computed: {
    highEmImg() {
      return {
        backgroundImage: `url(${this.showDetails.fanart})`,
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