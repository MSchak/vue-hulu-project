<template>
  <div :style="highEmImg" class="high-em-content high-em-img row">
    <div class="gradient d-flex align-items-end pb-2">
      <div class="col-10 col-md-6 col-xxl-4 m-4 m-lg-5 align-content-end p-0">
        <div class="show-logo d-flex mb-4">
          <img src="" alt="" />
        </div>
        <p class="movie-title">{{ movieTitle }}</p>
        <p class="movie-description">
          {{ movieDescription }}
        </p>
        <div class="d-flex">
          <div>
            <button class="btn play-btn">
              <fa icon="play-circle" size="2x" />
            </button>
          </div>
          <div class="d-flex align-items-center mx-1 mx-lg-3">
            <p class="play-ep">Watch now</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetailsHighEmContent",
  props: ["movieIdAgain", "movieTitle", "movieDescription"],
  data() {
    return {
      movieImg: "",
      movieDetails: {},
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.movieIdAgain}?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`
      )
      .then((response) => {
        console.log(response);
        this.movieDetails = response.data;
        this.movieImgPath = this.movieDetails.backdrop_path;
        return axios.get(
          `https://image.tmdb.org/t/p/original/${this.movieImgPath}`
        );
      })
      .then((info) => {
        this.movieImg = info.config.url;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    highEmImg() {
      return {
        backgroundImage: `url(${this.movieImg})`,
      };
    },
  },
};
</script>

<style scoped>
.high-em-img {
  padding: 0;
}

.gradient {
  background-image: linear-gradient(
    180deg,
    rgba(253, 253, 253, 1%),
    rgb(203 26 6 / 100%)
  );
  padding: 0;
}

.movie-title {
  font-family: "Graphik Medium", sans-serif;
  font-size: 0.875em;
  line-height: 1.5em;
  letter-spacing: 0.5px;
  color: white;
  margin-bottom: 10px;
}

.movie-description {
  font-family: "Graphik Regular", sans-serif;
  color: white;
  font-size: 0.75em;
}

.play-btn {
  padding: 0px;
}
.play-btn {
  color: white;
}
.play-ep {
  font-family: "Graphik Medium", sans-serif;
  font-size: 0.875em;
  letter-spacing: 0.5px;
  line-height: 1.375em;
  color: white;
  text-transform: uppercase;
  margin-bottom: 0px;
}

@media (min-width: 768px) {
  .gradient {
    background-image: linear-gradient(
      to left,
      rgba(253, 253, 253, 15%),
      rgb(203 26 6 / 81%)
    );
  }
}
@media (min-width: 992px) {
  .movie-description {
    font-size: 0.875em;
  }
  .play-btn {
    font-size: 25px;
  }
}

@media (min-width: 1600px) {
  .high-em-image {
    max-height: 750px;
  }
  .movie-title {
    font-size: 1.125em;
  }
  .movie-description {
    font-size: 1.125em;
  }
}
</style>