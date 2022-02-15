<template>
  <div class="details-footer row align-content-center">
    <div class="high-em-color col ms-4 ms-lg-5 p-0">
      <p class="m-0 stars"><strong>Starring:</strong> {{starOne}}, {{starTwo}}, {{starThree}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "TVDetailsImgFooter",
  props: ['showIdAgain'],
    data(){
      return{
          starOne: "",
          starTwo: "",
          starThree: "",
      }
  },
  created(){
      axios.get(`https://api.themoviedb.org/3/tv/${this.showIdAgain}/credits?api_key=51c374b022c8809f8ebb065eaa0a82f6&language=en-US`)
      .then((response) =>{
          this.castArray = response.data.cast.slice(0, 3)
            this.starOne = this.castArray[0].name
            this.starTwo = this.castArray[1].name
            this.starThree = this.castArray[2].name
      })
      .catch((error) =>{
          console.log(error)
      })
  }
};
</script>

<style scoped>
.details-footer {
  height: 80px;
  background-color: rgb(203 26 6);
    letter-spacing: .05em;;
}

.stars {
  font-size: 0.875em;
  font-family: "Graphik Light";
  color: white;
}

.stars strong{
    font-family: "Graphik Regular"
}
</style>