<template>
  <div
    :style="highEmImg"
    class="high-em-img row"
  >
        <div class="high-em-content pb-2 gradient d-flex align-items-end">
      <div
        class="col-4 m-4 ms-md-4 ps-2 ps-md-3 pb-lg-2 p-xxl-4"
      >
        <div class="show-logo d-flex mb-4">
          <img src="" alt="" />
        </div>
        <div class="ep-title">
          <p>{{ showDetails.title }}</p>
        </div>
        <p class="ep-decription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mollis commodo augue sed molestie.
        </p>
        <high-em-buttons></high-em-buttons>
      </div>
      </div>
          </div>
</template>

<script>
import HighEmButtons from "./HighEmButtons.vue";
import axios from "axios";

export default {
  name: "HighEmContent",
  data() {
    return {
      showDetails: {},
      options: {
        method: "GET",
        url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
        params: { type: "get-show-images-by-imdb", imdb: "tt2741602" },
        headers: {
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
          "x-rapidapi-key":
            "0bd8a923e7msh8c59b63cd726838p1433d2jsne4605bc6e80f",
        },
      },
    };
  },
  components: {
    HighEmButtons,
  },
  created() {
    axios
      .request(this.options)
      .then((response) => {
        console.log(response.data);
        this.showDetails = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  computed: {
    highEmImg() {
      return {
        backgroundImage: `url(${this.showDetails.fanart})`,
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
  background-position: fixed;
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
  font-family: "Graphik Medium";
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.29px;
  color: white;
  margin-bottom: 10px;
}

.ep-decription {
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

  .ep-decription {
    font-family: "Graphik Regular";
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
