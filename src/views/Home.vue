<template>
  <div id="home">
    <section class="container-fluid">
    <!--Main navigation shown here */-->
    <main-navigation></main-navigation>
    <high-em-content></high-em-content>
    </section>

<section class="container">
    <div class="row">
    <related-slideshow></related-slideshow>
    </div>

    <div class="row">
    <related-slideshow></related-slideshow>
    </div>

    <div class="row">
    <related-slideshow></related-slideshow>
    </div>
  </section>
      </div>

</template>

<script>

import HighEmContent from '../components/HighEmContent.vue'
import MainNavigation from '../components/MainNavigation.vue'
import RelatedSlideshow from '../components/RelatedSlideshow.vue'

export default {
  name: 'Home',
  components: {
    HighEmContent,
    RelatedSlideshow,
    MainNavigation
  }
}
</script>
<style scoped>


@media (min-width: 992px){
  .container{
    max-width: 1100px;
  }
}
@media (min-width: 1200px){
  .container{
    max-width: 1500px;
  }
}
</style>