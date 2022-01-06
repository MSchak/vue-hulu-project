<template>
  <div id="welcome">
    <login-dropdown></login-dropdown>
    <div class="container-fluid">
      <div class="row text-center align-content-center bkg-img">
        <div class="col">
        <!--Main navigation hidden on this page */-->
        <p><strong>Bundle with any hulu plan &amp; save</strong></p>
        <bundle-logos></bundle-logos>
        <p><strong>Get endless entertainment, live sports and the shows and movies you love.</strong></p>
        <cta-button></cta-button>
        <div class="sign-up-link m-3"><router-link to="/plans">Sign up for Hulu only</router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import LoginDropdown from "../components/LoginDropdown.vue";
import BundleLogos from "../components/BundleLogos.vue";
import CtaButton from "../components/CtaButton.vue";

export default {
  name: "Welome",
  components: {
    LoginDropdown,
    BundleLogos,
    CtaButton,
  },
};
</script>

<style>
.bkg-img{
    background-image: url(~@/assets/welcome-bkg.jpeg);
    height: 800px;
}

#welcome p{
  color: white;
}
</style>

