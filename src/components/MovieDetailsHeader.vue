<template>
  <div class="details-header row py-3 align-items-center">
    <div class="col-7 text-end pe-0 pe-xl-5">
      <p class="title mb-0">{{ movieTitle }}</p>
    </div>

    <div class="col text-end">
      <button class="btn" @click="$emit('closeModal')">
        <fa icon="times" size="1x" class="x-icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetailsHeader",
  props: ["movieTitle", "headerChange"],
};
</script>

<style scoped>
.details-header {
  position: absolute;
  z-index: 100;
  height: 60px;
  width: 100%;
}

.title {
  font-size: 0.625em;
  font-family: "Graphik Light", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
}

.x-icon {
  color: white;
  font-size: 1.5em;
}

@media (min-width: 992px) {
  .title {
    font-size: 0.75em;
  }
}

@media (min-width: 1600px) {
  .title {
    font-size: 0.875em;
  }

  .x-icon {
    font-size: 1.5em;
  }
}
</style>

