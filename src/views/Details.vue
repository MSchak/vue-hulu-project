<template>
  <div id="details">
    <div class="container-fluid">
        <details-header></details-header>
        <details-high-em-content></details-high-em-content>
        <details-img-footer></details-img-footer>
        <sub-nav></sub-nav>
    </div>
  </div>
</template>

<script>
import DetailsHighEmContent from "../components/DetailsHighEmContent.vue"
import SubNav from "../components/SubNav.vue";
import DetailsHeader from "../components/DetailsHeader.vue";
import DetailsImgFooter from "../components/DetailsImgFooter.vue";

export default {
  name: "Details",
  components: {
    DetailsHighEmContent,
    SubNav,
    DetailsHeader,
    DetailsImgFooter,
  },
};
</script>