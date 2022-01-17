<template>
  <div id="welcome">
    <login-dropdown></login-dropdown>
    <div class="container-fluid">
      <div class="row text-center align-content-center bkg-img pt-4">
        <div class="col d-flex flex-column align-items-center mt-5">
          <p class="special mb-4">Bundle with any hulu plan &amp; save</p>
          <img
            class="bndle-logos mb-3"
            src="../assets/bndle-logos.png"
            alt=""
          />
          <div class="plain w-50">
          <p>
            Get endless entertainment, live sports and the shows and movies you
            love.
          </p>
          </div>
          <div><button class="cta-btn btn btn-light m-2"><router-link class="cta-link" to="/plans">Get the Disney Bundle</router-link></button></div>
          <div class="m-3">
            <router-link class="sign-up-link" to="/plans">Sign up for Hulu only</router-link>
          </div>
        </div>
      </div>
        <div class="row">
        <div class="col next-content d-flex flex-column text-center p-5">
        <p class="special mt-5">Included in all plans</p>
        <h1 class="pb-4">All The TV You Love</h1>
        <div class="d-flex justify-content-center"><p class="tv-details">Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids show, and more.</p></div>
          </div>
          </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import LoginDropdown from "../components/LoginDropdown.vue";

export default {
  name: "Welome",
  components: {
    LoginDropdown
  },
};
</script>

<style scoped>

#welcome{
  height: 100vh;
}
.bkg-img {
  background-image: url(~@/assets/welcome-bkg.jpeg);
  height: 660px;
}

.plain {
  font-family: "Graphik Regular";
  font-weight: bold;
  color: white;
  font-size: 22px;
  line-height: 30px;
  max-width: 670px;
  letter-spacing: .5px;
}

.bndle-logos {
  width: 600px;
}

.special {
   font-family: "Graphik Regular";
   font-weight: bold;
  text-transform: uppercase;
  color: #00ed82;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.cta-btn {
  height: 56px; 
min-width: 136px;
    padding: 0 32px;
    border: none;
}

.cta-link{
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-size: 14px;
    line-height: 14px;
    letter-spacing: 1px;
    text-align: center;
}

.sign-up-link{
    font-family: "Graphik Thin";
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;

}

.next-content{
  background-color: black;
  height: 400px;
}

h1{
  color: white;
  font-size: 48px;
}

.tv-details{
  font-size: 18px;
      font-family: "Graphik Thin";
  color: white;
  max-width: 680px;
}

</style>

