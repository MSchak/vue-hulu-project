<template>
  <div class="related-slideshow my-4">
    <h3>Related Description</h3>
    <div class="slide-container">
      <div class="slide-items d-flex">
      <reg-em-tile></reg-em-tile>
      <reg-em-tile></reg-em-tile>
      <reg-em-tile></reg-em-tile>
      <reg-em-tile></reg-em-tile>
      <reg-em-tile></reg-em-tile>
      <reg-em-tile></reg-em-tile>
  
      </div>
      <div class="slide-buttons">
        <button @click="scrollBack()"  class="back-btn btn btn-light">&#60;</button>
        <button @click="scrollFwd()" class="fwd-btn btn btn-light">&#62;</button>
      </div>
    </div>
  </div>
</template>

<script>
import RegEmTile from "./RegEmTile.vue";

export default {
  name: "RelatedSlideshow",
  components: {
    RegEmTile,
  },
    methods: {
      scrollFwd() {
        var slideItems = document.querySelector(".slide-items")
        slideItems.classList.add("scroll")
      },
      scrollBack(){
        var slideItems = document.querySelector(".slide-items")
        slideItems.classList.add("scroll-back")
      }
    }
};
</script>

<style scoped>
.related-slideshow {
  position: relative;
}

.slide-container{
  overflow-x: auto;
}
.slide-container::-webkit-scrollbar {
  display: none;
}

.slide-container {
  -ms-overflow-style: none;
  scrollbar-width: none; 
}

.back-btn,
.fwd-btn {
  position: absolute;
}

.back-btn {
  left: 0px;
  bottom: 100px;
}

.fwd-btn {
  right: -10px;
  bottom: 100px;
}

.btn-light {
  border-radius: 50%;
  background-color: white;
}

.slide-items{
position: relative;
left: 0px;
transition: transform 850ms;
}

.scroll{
  transform: translateX(-100%);
}

.scroll-back{
  transform: translateX(0%);
}
</style>

