<template>
  <div class="buttons d-flex justify-content-start w-75">
    <div>
      <button
        class="
          btn btn-light
          me-2
          d-flex
          justify-content-evenly
          align-items-center
        "
      >
        <fa icon="caret-right" size="lg" class="caret" />
        <div class="play">Play</div>
      </button>
    </div>

    <div>
      <button @click="$emit('openModal')" class="btn btn-outline-light me-2">
        Details
      </button>
    </div>

    <!--<div class="ellipse d-flex">
      <fa icon="ellipsis-v" class="ellipse align-self-center" />
    </div>-->
  </div>
</template>

<script>
export default {
  name: "HighEmButtons",
};
</script>

<style scoped>
.btn {
  text-transform: uppercase;
  font-family: "Graphik Semibold";
  font-size: 0.85em;
  letter-spacing: 2px;
  border: 2px solid white;
  padding: 5px 0px;
  height: 32px;
  width: 94px;
  transition: 0.5s ease;
}

.btn-light:hover {
  background-color: black;
  color: white;
  border: none;
}

.btn:focus {
  border: 1px solid blue;
}

.btn-outline-white {
  color: white;
}

.caret {
  font-size: 22px;
}

.play {
  padding-top: 3px;
}

.ellipse {
  color: white;
}

@media (min-width: 768px) {
  .btn {
    height: 32px;
    width: 83px;
    padding: 5px 0px;
  }
}

@media (min-width: 992px) {
  .btn {
    padding: 12px 0px;
    height: 45px;
    width: 85px;
  }
}
</style>