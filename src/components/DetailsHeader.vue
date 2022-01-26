<template>
  <div class="details-header row my-3 align-items-center w-100">
    <div class="col-7 text-end pe-5">
      <p class="title">Show title</p>
    </div>

    <div class="col text-end">
      <button class="x-icon"><router-link to="/">x</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsHeader",
};
</script>

<style scoped>

.details-header{
  position: fixed;
  z-index: 100;
  height: 60px;
}


.title{
  font-family: "Graphik Light";
font-weight: bold;
text-transform: uppercase;
font-size: 12px;
color: white;
letter-spacing: 2px;
}
</style>

