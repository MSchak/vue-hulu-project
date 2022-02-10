<template>
  <div id="tv-details">
    <div class="container-fluid">
        <details-header></details-header>
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

export default {
  name: "TvDetails",
  components: {
    DetailsHighEmContent,
    SubNav,
    DetailsHeader,
    DetailsImgFooter,
  },
  props: ['showID']
};
</script>