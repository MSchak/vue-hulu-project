<template>
  <div :style="highEmImg" class="high-em-img row">
    <div class="high-em-content pb-2 gradient d-flex align-items-end">
      <div class="col-4 m-4 ms-md-4 ps-2 ps-md-3 pb-lg-2 p-xxl-4">
        <div class="ep-title">
          <p>{{ showTitle }}</p>
        </div>
        <p class="ep-description">
          {{ showDescription }}
        </p>
        <high-em-buttons @open-modal="openModal"></high-em-buttons>
      </div>
    </div>
  </div>
</template>

<script>
import HighEmButtons from "./HighEmButtons.vue";
import axios from "axios";

export default {
  name: "HighEmContent",
  components: {
    HighEmButtons,
  },
  data() {
    return {
      showDetails: [],
      showImgPath: "",
      showTitle: "",
      showDescription: "",
      showImg: "",
      key: "",
    };
  },
  methods: {
    openModal() {
      console.log(this.key);
      this.$emit("openModal", {
        showKey: this.key,
      });
    },
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`
      )
      .then((response) => {
        this.showDetails = response.data.results.slice(0, 1);
        this.showImgPath = this.showDetails[0].backdrop_path;
        this.showTitle = this.showDetails[0].name;
        this.showDescription = this.showDetails[0].overview;
        this.key = this.showDetails[0].id;
        return axios.get(
          `https://image.tmdb.org/t/p/original/${this.showImgPath}`
        );
      })
      .then((info) => {
        this.showImg = info.config.url;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  computed: {
    highEmImg() {
      return {
        backgroundImage: `url(${this.showImg})`,
      };
    },
  },
};
</script>

<style>
.high-em-img {
  height: 700px;
  padding: 0;
  background-size: cover;
  background-position: center;
}

.gradient {
  background-image: linear-gradient(
    180deg,
    rgba(253, 253, 253, 1%),
    rgb(203 26 6 / 100%)
  );
  padding: 0;
}

.ep-title p {
  font-family: "Graphik Medium", sans-serif;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.29px;
  color: white;
  margin-bottom: 10px;
}

.ep-description {
  display: none;
}

@media (min-width: 576px) {
  .high-em-img {
    height: 540px;
  }
}

@media (min-width: 768px) {
  .high-em-img {
    height: 440px;
  }
  .gradient {
    background-image: linear-gradient(
      to left,
      rgba(253, 253, 253, 15%),
      rgb(203 26 6 / 81%)
    );
  }

  .ep-description {
    font-family: "Graphik Regular", sans-serif;
    color: white;
    font-size: 0.875em;
    display: block;
  }
}

@media (min-width: 992px) {
  .high-em-img {
    height: 560px;
  }
}
@media (min-width: 1200px) {
  .high-em-img {
    height: 600px;
  }
}

@media (min-width: 1400px) {
  .high-em-img {
    height: 700px;
  }
}
</style>
