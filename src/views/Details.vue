<template>
  <div id="details">
    <div class="container-fluid">
      <div class="row justify-content-center my-3">
        <!--Main navigation hidden on this page */-->
        <details-header></details-header>
      </div>

      <div class="row">
        <high-em-content></high-em-content>
      </div>

      <div class="row my-4 m-3">
        <details-img-footer></details-img-footer>
      </div>

      <sub-nav></sub-nav>
    </div>
  </div>
</template>

<script>
import HighEmContent from "../components/HighEmContent.vue";
import SubNav from "../components/SubNav.vue";
import DetailsHeader from "../components/DetailsHeader.vue";
import DetailsImgFooter from "../components/DetailsImgFooter.vue";

export default {
  name: "Details",
  components: {
    HighEmContent,
    SubNav,
    DetailsHeader,
    DetailsImgFooter,
  },
};
</script>