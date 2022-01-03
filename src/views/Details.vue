<template>
<div>
    <!--Main navigation hidden on this page */-->
    <details-header></details-header>
    <high-em-content></high-em-content>
    <details-img-footer></details-img-footer>
    <sub-nav></sub-nav>
</div>
</template>

<script>
import HighEmContent from '../components/HighEmContent.vue'
import SubNav from '../components/SubNav.vue'
import DetailsHeader from '../components/DetailsHeader.vue'
import DetailsImgFooter from '../components/DetailsImgFooter.vue'

export default {
  name: 'Details',
  components: {
      HighEmContent,
      SubNav,
      DetailsHeader,
      DetailsImgFooter,
  }
}
</script>