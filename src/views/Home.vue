<template>
  <div id="home">
    <main-navigation></main-navigation>
    <section class="container-fluid pb-2">
    <high-em-content></high-em-content>
    </section>

<section class="container">
    <div class="row mx-4 my-2">
    <related-slideshow></related-slideshow>
    </div>

    <div class="row mx-4 my-2">
    <related-slideshow></related-slideshow>
    </div>

    <div class="row mx-4 my-2">
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

#home{
  height: 100vh;
}

@media (min-width: 768px){
.container{
  max-width: 900px;
}
}

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
@media (min-width: 1500px){
  .container{
    max-width: 2000px;
  }
}
</style>