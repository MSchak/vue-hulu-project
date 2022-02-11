<template>
  <div id="tv-details">
    <div class="container-fluid">
        <details-header :tvShowTitle="showDetails.name" @close-modal="$emit('closeModal')"></details-header>
        <tv-details-high-em-content :showIdAgain="showID" :episodeTitle="episodeTitle" :episodeDescription="episodeDescription"></tv-details-high-em-content>
        <details-img-footer :showIdAgain="showID"></details-img-footer>
        <sub-nav :showIdAgain="showID" :numOfSeasons="numOfSeasons"></sub-nav>
    </div>
  </div>
</template>

<script>
import TvDetailsHighEmContent from "../components/TvDetailsHighEmContent.vue";
import SubNav from "../components/SubNav.vue";
import DetailsHeader from "../components/DetailsHeader.vue";
import DetailsImgFooter from "../components/DetailsImgFooter.vue";
import axios from 'axios'

export default {
  name: "TvDetails",
  components: {
    TvDetailsHighEmContent,
    SubNav,
    DetailsHeader,
    DetailsImgFooter,
  },
  props: ['showID'],
  data(){
      return{
        showDetails: [],
        episodeTitle: "",
        episodeDescription: "",
        numOfSeasons: ""
      }
  },
  created(){
      axios.get(`https://api.themoviedb.org/3/tv/${this.showID}?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`)
      .then((response) => {
          this.showDetails = response.data
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