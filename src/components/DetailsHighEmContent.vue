<template>
  <div class="high-em-content high-em-img row align-content-end">
    <div class="col-4 m-5 align-content-end p-0">
      <div class="show-logo d-flex mb-4">
        <img src="" alt="" />
      </div>

      <p class="ep-title">S1 E1 - Episode Title</p>

      <p class="ep-decription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        mollis commodo augue sed molestie.
      </p>
      <div class="d-flex mt-5">
      <div>
        <button class="btn play-btn"><fa icon="play-circle" size="4x"/></button>
      </div>
      <div class="d-flex align-items-center mx-3">
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
    to left,
    rgba(232, 246, 252, 0.52),
    rgb(203 26 6 / 81%)
  );
  height: 700px;
  padding: 0;
}

.ep-title {
  font-family: "Graphik Medium";
  font-size: 1.125em;
  line-height: 1.5em;
  letter-spacing: 0.5px;
  color: white;
  margin-bottom: 10px;
}

.ep-decription {
  font-family: "Graphik Regular";
  color: white;
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
</style>