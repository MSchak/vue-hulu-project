<template>
  <div id="details">
    <div class="container-fluid">
        <tv-details-header></tv-details-header>
        <details-high-em-content></details-high-em-content>
        <tv-details-img-footer></tv-details-img-footer>
        <sub-nav></sub-nav>
    </div>
  </div>
</template>

<script>
import DetailsHighEmContent from "../components/DetailsHighEmContent.vue";
import SubNav from "../components/SubNav.vue";
import TvDetailsHeader from "../components/TvDetailsHeader.vue";
import TvDetailsImgFooter from "../components/TvDetailsImgFooter.vue";

export default {
  name: "Details",
  components: {
    DetailsHighEmContent,
    SubNav,
    TvDetailsHeader,
    TvDetailsImgFooter,
  },
};
</script>