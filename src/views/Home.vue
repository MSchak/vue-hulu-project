<template>
  <div id="home">
    <main-navigation></main-navigation>
    <section class="container-fluid pb-2">
    <high-em-content></high-em-content>
    </section>

<section class="container px-xl-4">
    <div class="row mx-1 mx-md-2 ps-md-1 my-lg-2 mt-lg-4 pt-lg-1">
    <tv-for-you></tv-for-you>
    </div>

    <div class="row mx-1 mx-md-2 ps-md-1 my-lg-2">
    <movies-for-you></movies-for-you>
    </div>

    <div class="row mx-1 mx-md-2 ps-md-1 my-lg-2">
    <keep-watching></keep-watching>
    </div>

  </section> 

      </div>

</template>

<script>

import HighEmContent from '../components/HighEmContent.vue'
import MainNavigation from '../components/MainNavigation.vue'
import TvForYou from '../components/TvForYou.vue'
import MoviesForYou from '../components/MoviesForYou.vue'
import KeepWatching from '../components/KeepWatching.vue'

export default {
  name: 'Home',
  components: {
    HighEmContent,
    MainNavigation,
    TvForYou,
    MoviesForYou,
    KeepWatching,
  }
}
</script>
<style scoped>

#home{
  height: 100vh;
}

.container{
  max-width: 550px;
}

@media (min-width: 576px){
  .container{
    max-width: 768px;
  }
}

@media (min-width: 768px){
.container{
  max-width: 992px;
}
}

@media (min-width: 992px){
  .container{
    max-width: 1200px;
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