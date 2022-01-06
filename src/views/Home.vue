<template>
  <div id="home">
    <section class="container-fluid">
    <!--Main navigation shown here */-->
    <high-em-content></high-em-content>
    </section>

<section class="container-fluid m-4">
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
import RelatedSlideshow from '../components/RelatedSlideshow.vue'

export default {
  name: 'Home',
  components: {
    HighEmContent,
    RelatedSlideshow
  }
}
</script>
