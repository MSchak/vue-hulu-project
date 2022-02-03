<template>
  <div class="details-footer row align-content-center">
    <div class="high-em-color col ms-5 p-0">
      <p class="m-0 stars"><strong>Starring:</strong> Stars, stars, stars</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsImgFooter",
};
</script>

<style scoped>
.details-footer {
  height: 80px;
  background-color: rgb(203 26 6);
    letter-spacing: .05em;;
}

.stars {
  font-size: 0.875em;
  font-family: "Graphik Light";
  color: white;
}

.stars strong{
    font-family: "Graphik Regular"
}
</style>