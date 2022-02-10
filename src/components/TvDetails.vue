<template>
  <div id="tv-details">
    <div class="container-fluid">
        <details-header :tvShowTitle="showDetails.name" @close-modal="$emit('closeModal')"></details-header>
        <details-high-em-content :showIdAgain="showID"></details-high-em-content>
        <details-img-footer :showIdAgain="showID"></details-img-footer>
        <sub-nav :showIdAgain="showID"></sub-nav>
    </div>
  </div>
</template>

<script>
import DetailsHighEmContent from "../components/DetailsHighEmContent.vue";
import SubNav from "../components/SubNav.vue";
import DetailsHeader from "../components/DetailsHeader.vue";
import DetailsImgFooter from "../components/DetailsImgFooter.vue";
import axios from 'axios'

export default {
  name: "TvDetails",
  components: {
    DetailsHighEmContent,
    SubNav,
    DetailsHeader,
    DetailsImgFooter,
  },
  props: ['showID'],
  data(){
      return{
        showDetails: []
      }
  },
  created(){
      axios.get(`https://api.themoviedb.org/3/tv/${this.showID}?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`)
      .then((response) => {
          this.showDetails = response.data
          console.log(this.showDetails.backdrop_path)
      })
      .catch((error) => {
          console.log(error)
      })
  }
};
</script>