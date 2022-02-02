<template>
  <div class="buttons d-flex justify-content-start w-75">
    <div class="">
      <button class="btn btn-light me-2"><fa icon="caret-right"/>Play</button>
    </div>

    <div class="">
      <button class="btn btn-outline-light me-2"><router-link to="/details" class="details-link">Details</router-link></button>
    </div>

    <div class="ellipse d-flex">
    <fa icon="ellipsis-v" size="md" class="ellipse align-self-center" />
    </div>
  </div>
</template>

<script>

export default {
  name: "HighEmButtons",
};
</script>

<style scoped>


.btn{
    text-transform: uppercase;
    font-family: "Graphik Semibold";
    font-size: 0.85em;
    letter-spacing: 2px;
    border: 2px solid white;
    padding: 0px 0px;
    height: 32px;
    width: 94px;
}

.btn-outline-white{
      color: white;
}

.details-link{
  color: white;
  text-decoration: none;
}

.ellipse{
  color: white;
}

@media (min-width: 768px){
.btn{
  height: 32px;
  width: 89px;
  padding: 5px 0px;
}
}

@media (min-width: 992px){
.btn{
    padding: 13px 22px;
    height: 45px;
    width: auto;
}
}

</style>