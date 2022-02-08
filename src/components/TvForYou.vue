<template>
  <div class="related-slideshow my-3">
    <h2>TV For You</h2>
    <div class="slide-container">
      <div class="slide-items d-flex" :class="carouselClasses">
      <tv-for-you-tile v-for="show in tvShows" :key="show.imdb_id" :showKey="show.imdb_id" :showTitle="show.title">
      </tv-for-you-tile>
      </div>
      <div class="slide-buttons">
        <button @click="scrollBack()" class="back-btn btn btn-light">
          &#60;
        </button>
        <button @click="scrollFwd()" class="fwd-btn btn btn-light">
          &#62;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TvForYouTile from "./TvForYouTile.vue";
import axios from "axios";

export default {
  name: "TVForYou",
  components: {
    TvForYouTile,
  },
  data() {
    return {
      carouselClasses: "",
      tvShows: [],
      options: {
        method: "GET",
        url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
  params: {type: 'get-trending-shows', page: '1'},
  headers: {
    'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
    'x-rapidapi-key': '0bd8a923e7msh8c59b63cd726838p1433d2jsne4605bc6e80f'
  }
}
    };
  },
  methods: {
    scrollFwd() {
      this.carouselClasses = "scroll";
    },
    scrollBack() {
      this.carouselClasses = "scroll-back";
    },
  },
  created() {
    axios
      .request(this.options)
      .then((response) => {
        console.log(response.data);
        this.tvShows = response.data.tv_results;
        console.log(this.tvShows);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.related-slideshow {
  position: relative;
}

.slide-container {
  overflow-x: auto;
}
.slide-container::-webkit-scrollbar {
  display: none;
}

.slide-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.back-btn,
.fwd-btn {
  position: absolute;
}

.back-btn {
  left: 0px;
  bottom: 90px;
}

.fwd-btn {
  right: -10px;
  bottom: 90px;
}

.btn-light {
  border-radius: 50%;
  background-color: white;
}

.slide-items {
  position: relative;
  left: 0px;
  transition: transform 850ms;
}

.scroll {
  transform: translateX(-100%);
}

.scroll-back {
  transform: translateX(0%);
}
@media (min-width: 768px) {
  .back-btn {
    bottom: 100px;
  }

  .fwd-btn {
    bottom: 100px;
  }
}
@media (min-width: 1200px) {
  .back-btn {
    bottom: 120px;
  }

  .fwd-btn {
    bottom: 120px;
  }
}
@media (min-width: 1400px) {
}
</style>
