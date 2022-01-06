<template>
  <div id="home">
    <section class="container-fluid high-em-img">
    <div class="high-em row align-content-end">
    <!--Main navigation shown here */-->
    <high-em-content></high-em-content>
    </div>
    </section>

<section class="container-fluid m-4">
    <div class="row">
    <related-slideshow></related-slideshow>
    <related-slideshow></related-slideshow>
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

<style>
.high-em-img{
    background-image: url(~@/assets/grey.jpeg);
    height: 600px;
    padding: 0;
}

.high-em{
  height: 100%;
}

</style>