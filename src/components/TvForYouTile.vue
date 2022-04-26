<template>
  <div class="show-img card mx-1">
    <button @click="openModal" class="modal-btn btn p-0">
      <img class="card-img-top" :src="showImg" alt="" />
      <!--<ellipse-menu class="on-img"></ellipse-menu>-->
    </button>
    <h5 class="show-title card-title my-2">{{ showTitle }}</h5>
  </div>
</template>

<script>
//import EllipseMenu from "./EllipseMenu.vue"
import axios from "axios";

export default {
  name: "TvForYouTile",
  props: ["showKey", "showImgPath", "showTitle"],
  components: {
    //  EllipseMenu,
  },
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
      .get(`https://image.tmdb.org/t/p/original${this.showImgPath}`)
      .then((response) => {
        this.showImg = response.config.url;
      })
      .catch(function (error) {
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

.on-img {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
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
}

@media (min-width: 1400px) {
  .show-img {
    min-width: 20%;
  }
}
</style>
