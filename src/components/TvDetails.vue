<template>
  <div id="tv-details">
    <div class="container-fluid">
        <tv-details-header :tvShowTitle="showDetails.name" @close-modal="$emit('closeModal')"></tv-details-header>
        <tv-details-high-em-content :showIdAgain="showID" :episodeTitle="episodeTitle" :episodeDescription="episodeDescription"></tv-details-high-em-content>
        <tv-details-img-footer :showIdAgain="showID"></tv-details-img-footer>
        <sub-nav :showIdAgain="showID" :numOfSeasons="numOfSeasons" :showName="showName" :showDescription="showDescription"></sub-nav>
    </div>
  </div>
</template>

<script>
import TvDetailsHighEmContent from "../components/TvDetailsHighEmContent.vue";
import SubNav from "../components/SubNav.vue";
import TvDetailsHeader from "../components/TvDetailsHeader.vue";
import TvDetailsImgFooter from "./TvDetailsImgFooter.vue";
import axios from 'axios'

export default {
  name: "TvDetails",
  components: {
    TvDetailsHighEmContent,
    SubNav,
    TvDetailsHeader,
    TvDetailsImgFooter,
  },
  props: ['showID'],
  data(){
      return{
        showDetails: [],
        episodeTitle: "",
        episodeDescription: "",
        numOfSeasons: "",
        showName: "",
        showDescription: ""
      }
  },
  created(){
      axios.get(`https://api.themoviedb.org/3/tv/${this.showID}?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`)
      .then((response) => {
          this.showDetails = response.data
          console.log(this.showDetails)
          this.showName = this.showDetails.name
          this.showDescription = this.showDetails.overview
          this.numOfSeasons = this.showDetails.seasons.length
          return axios.get(`https://api.themoviedb.org/3/tv/${this.showID}/season/1?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`)
      }) 
      .then((info) => {
        this.episodeTitle = info.data.episodes[1].name
        this.episodeDescription = info.data.episodes[1].overview
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>