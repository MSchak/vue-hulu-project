<template>
  <div id="welcome">
    <div class="container-fluid">
      <div class="row text-center">
        <!--Main navigation hidden on this page */-->
        <login-dropdown></login-dropdown>
        <p><strong>Bundle with any hulu plan &amp; save</strong></p>
        <bundle-logos></bundle-logos>
        <cta-button></cta-button>
        <router-link to="/plans">Sign up for Hulu only</router-link>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import LoginDropdown from "../components/LoginDropdown";
import BundleLogos from "../components/BundleLogos";
import CtaButton from "../components/CtaButton";

export default {
  name: "Welome",
  components: {
    LoginDropdown,
    BundleLogos,
    CtaButton,
  },
};
</script>

