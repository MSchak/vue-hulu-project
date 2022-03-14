<template>
  <div class="tabs row ps-0 ps-lg-4 align-items-center">
    <div class="col h-100">
      <ul
        class="nav nav-tabs justify-content-start h-100 align-content-center"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item h-100" role="presentation">
          <button
            @click="tab = 1"
            :class="{ active: tab == 1 }"
            class="nav-link h-100"
          >
            You may also Like
          </button>
        </li>
        <li class="nav-item h-100" role="presentation">
          <button
            @click="tab = 2"
            :class="{ active: tab == 2 }"
            class="nav-link h-100"
          >
            Details
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div v-if="tab === 1" class="pane you-make-like tab-content row pt-4">
        <div
        class="
          you-may-like
          d-flex
          flex-row flex-wrap
        "
      >
        <show-tile v-for="show in youMayLike" :key="show.id" :showID="show.id"></show-tile>
      </div>
  </div>

  <div class="details tab-content row ms-0 ms-lg-4 ps-1 pt-4">
    <div class="col">
      <div v-if="tab === 2" class="pane details">
        <h5 class="mb-3">About This Show</h5>
        <h4>{{movieTitle}}</h4>
        <p class="movie-description">{{movieDescription}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ShowTile from "../components/ShowTile.vue";
import axios from "axios"

export default {
  name: "MoviesSubNav",
  components: {
    ShowTile,
  },
  props: ['movieIdAgain', 'movieTitle', 'movieDescription'],
  data() {
    return {
      tab: 1,
      youMayLike: []
    };
  },
  created(){
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=51c374b022c8809f8ebb065eaa0a82f6')
      .then((response) => {
       this.youMayLike = response.data.results.splice(0, 10)
      })
      .catch(function(error){
        console.log(error);
      })
  }
};
</script>

<style scoped>
.tabs {
  height: 64px;
  border-bottom: 0.5px solid lightgrey;
}

.nav-tabs {
  border-bottom: none;
}

.nav-link {
  font-family: "Graphik Medium";
  font-size: 0.75em;
  color: #6b7790;
  text-transform: uppercase;
  border: none;
}

.nav-link.active {
  border: none;
  color: #292c33;
  border-bottom: 4px solid rgb(203 26 6);
}

.you-may-like{
  padding-left: 25px;
}
.details {
  height: 600px;
}
.movie-description {
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 24px;
  word-spacing: 1px;
  color: #6b7790;
  opacity: .80;
}

@media (min-width: 576px) {
  .movie-description {
    width: 50%;
  }
}

@media (min-width: 992px) {
  .tabs {
    height: 72px;
    border-bottom: 0.5px solid lightgrey;
  }
  .nav-link {
    font-size: 0.875em;
  }


  .you-may-like{
  padding-left: 40px;
}
}
</style>