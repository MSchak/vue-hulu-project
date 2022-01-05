<template>
  <div id="home" class="container-fluid">
    <div class="row">
    <!--Main navigation shown here */-->
    <high-em-content></high-em-content>
    </div>

    <div class="row">
    <related-slideshow></related-slideshow>
    </div>
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
