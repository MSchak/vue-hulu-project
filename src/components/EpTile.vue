<template>
  <div class="ep-tile me-1 p-0 d-flex justify-content-center">
    <div class="episode-card card border-0">
      <img
        src="https://via.placeholder.com/350x200"
        class="card-img-top"
        alt=""
      />
      <div class="card-body pt-1 d-flex">
        <div>
          <p class="ep-number"><strong>Episode 1</strong></p>
          <h5>Episode title</h5>
          <p class="ep-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            semper viverra purus, at fermentum mi venenatis eget.
          </p>
        </div>
        <div>
          <ellipse-menu class="pt-2 pe-2"></ellipse-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EllipseMenu from "./EllipseMenu.vue";

export default {
  name: "EpTile",
  components: {
    EllipseMenu,
  },
};
</script>

<style scoped>

.ep-tile{
 width: 48%;
}
.card-body {
  padding: 0px;
}

.ep-number {
  color: #6b7790;
  font-size: 0.75em;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.ep-description {
  font-size: 0.875em;
  line-height: 21px;
  color: #6b7790;
  opacity: 80%;
  margin-right: 25px;
}


@media (min-width: 768px){
  .ep-tile{
 width: 32%;
}
}

@media (min-width: 992px){
  .ep-tile{
 width: 24%;
}
}

@media (min-width: 1200px){
  .ep-tile{
 width: 19%;
}
}

@media (min-width: 1800px){
  .ep-tile{
 width: 15%;
}
}
</style>