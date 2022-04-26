<template>
  <div class="show-img card mx-1">
    <button @click="openModal" class="modal-btn btn p-0">
      <img class="card-img-top" :src="showImg" alt="" />
      <!--<ellipse-menu class="on-img"></ellipse-menu>-->
    </button>
    <div class="card-body d-flex justify-content-between">
      <div>
        <h5 class="show-title card-title my-2">{{ title }}</h5>
        <p class="card-subtitle">S1 E1 - Pilot</p>
      </div>
      <!--<div>
    <ellipse-menu class="pt-2 pe-2"></ellipse-menu>
    </div>-->
    </div>
  </div>
</template>

<script>
//import EllipseMenu from "./EllipseMenu.vue";
import axios from "axios";

export default {
  name: "RegEmTile",
  components: {
    //  EllipseMenu,
  },
  props: ["title", "imgPath", "showKey"],
  data() {
    return {
      showImg: "",
    };
  },
  methods: {
    openModal() {
      this.$emit("openModal", {
        key: this.showKey,
      });
    },
  },
  created() {
    axios
      .get(`https://image.tmdb.org/t/p/original${this.imgPath}`)
      .then((response) => {
        this.showImg = response.config.url;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.show-img {
  min-width: 49%;
  overflow: hidden;
  position: relative;
}

.card {
  border: none;
}

.modal-btn,
.card-img-top {
  transition: 500ms ease;
}

.modal-btn:hover {
  background-color: black;
}

.modal-btn:focus {
  border: 2px solid blue;
}

.card-img-top:hover {
  opacity: 0.75;
}

.card-body {
  padding: 0px;
}
.card-subtitle {
  font-size: 0.75em;
  overflow: hidden;
}
.on-img {
  position: absolute;
  top: 10px;
  right: 10px;
}
.show-title {
  height: 16px;
  overflow: hidden;
}
@media (min-width: 768px) {
  .show-img {
    min-width: 33.33333%;
  }
}
@media (min-width: 992px) {
  .show-img {
    min-width: 25%;
  }
  .card-subtitle {
    font-size: 0.875em;
  }
}

@media (min-width: 1400px) {
  .show-img {
    min-width: 20%;
  }
}
</style>
