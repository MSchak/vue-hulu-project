<template>
  <div class="high-em-content high-em-img row align-content-end">
    <div class="col-10 col-md-6 col-xxl-4 m-4 m-lg-5 align-content-end p-0">
      <div class="show-logo d-flex mb-4">
        <img src="" alt="" />
      </div>

      <p class="ep-title">S1 E1 - Episode Title</p>

      <p class="ep-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        mollis commodo augue sed molestie.
      </p>
      <div class="d-flex">
      <div>
        <button class="btn play-btn"><fa icon="play-circle" size="2x"/></button>
      </div>
      <div class="d-flex align-items-center mx-1 mx-lg-3">
        <p class="play-ep">Watch next episode: {{ episodeNumber }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsHighEmContent",
  data() {
    return {
      episodeNumber: "S1 E3",
    };
  },
};
</script>

<style scoped>
.high-em-img {
  background-image: linear-gradient(
    180deg,
    rgba(232, 246, 252, 0.52),
    rgb(203 26 6 / 50%)
  );
  padding: 0;
}

.ep-title {
  font-family: "Graphik Medium";
  font-size: .875em;
  line-height: 1.5em;
  letter-spacing: 0.5px;
  color: white;
  margin-bottom: 10px;
}

.ep-description {
  font-family: "Graphik Regular";
  color: white;
  font-size: .75em
}

.play-btn{
  padding: 0px;
}
.play-btn{
    color: white;
}
.play-ep {
    font-family: "Graphik Medium";
  font-size: 0.875em;
  letter-spacing: 0.5px;
  line-height: 1.375em;
  color: white;
  text-transform: uppercase;
  margin-bottom: 0px;
}
@media (min-width: 768px){
  .high-em-img{
    background-image: linear-gradient(
    to left,
    rgba(232, 246, 252, 0.52),
    rgb(203 26 6 / 81%)
  );
  }
}
@media (min-width: 992px){

.ep-description {
  font-size: .875em
}
.play-btn{
  font-size: 25px;
}
}

@media (min-width: 1600px){
 .high-em-image{
   max-height: 750px;
 }
 .ep-title{
   font-size: 1.125em;
 }
 .ep-description{
   font-size: 1.125em;
 }
}
</style>