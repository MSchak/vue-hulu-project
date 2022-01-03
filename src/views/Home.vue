<template>
  <div class="home">
    <!--Main navigation shown here */-->
    <high-em-content></high-em-content>
    <related-slideshow></related-slideshow>
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
