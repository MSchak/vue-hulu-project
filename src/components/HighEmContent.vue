<template>
  <div class="high-em-content high-em-img row align-content-end">
    <div class="col-4 m-5 align-content-end p-0">
      <div class="show-logo d-flex mb-4">
        <img src="" alt="" />
      </div>
      <div class="ep-title">
        <p>S1 E1 - Episode Title</p>
      </div>
      <p class="ep-decription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        mollis commodo augue sed molestie.
      </p>
      <high-em-buttons></high-em-buttons>
    </div>
  </div>
</template>

<script>
import HighEmButtons from "./HighEmButtons.vue";

export default {
  name: "HighEmContent",
  components: {
    HighEmButtons,
  },
};
</script>

<style>
.high-em-img {
  background-image: linear-gradient(
    to left,
    rgba(232, 246, 252, 0.52),
    rgb(203 26 6 / 81%)
  );
  height: 600px;
  padding: 0;
}

.ep-title p {
  font-family: "Graphik Medium";
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.29px;
  color: white;
  margin-bottom: 10px;
}

.ep-decription {
  font-family: "Graphik Regular";
  color: white;
}
</style>
