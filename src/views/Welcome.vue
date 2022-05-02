<template>
  <div id="welcome">
    <login-dropdown></login-dropdown>
    <div class="container-fluid">
      <div
        class="row text-center align-content-center bkg-img pt-4 px-5 px-md-0"
      >
        <div class="col d-flex flex-column align-items-center mt-5">
          <p class="special mb-2 mb-md-4">
            Bundle with any hulu plan &amp; save
          </p>
          <img
            class="bndle-logos mb-3"
            src="../assets/bndle-logos.png"
            alt=""
          />
          <div class="plain w-100 w-lg-50">
            <p>
              Get endless entertainment, live sports and the shows and movies
              you love.
            </p>
          </div>
          <div>
            <button class="cta-btn btn btn-light m-2">
              <router-link class="cta-link" to="/plans"
                >Get the Disney Bundle</router-link
              >
            </button>
          </div>
          <div class="m-3">
            <router-link class="sign-up-link" to="/plans"
              >Sign up for Hulu only</router-link
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="
            col
            next-content
            d-flex
            flex-column
            text-center
            p-3 p-md-5
            px-3 px-md-0
          "
        >
          <p class="special mt-lg-5 mt-4">Included in all plans</p>
          <h1 class="pb-1 pb-lg-4">All The TV You Love</h1>
          <div class="d-flex justify-content-center">
            <p class="tv-details">
              Stream full seasons of exclusive series, current-season episodes,
              hit movies, Hulu Originals, kids show, and more.
            </p>
          </div>
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
    LoginDropdown,
  },
};
</script>

<style scoped>
#welcome {
  height: 100vh;
}
.bkg-img {
  background-image: url(~@/assets/welcome-bkg.jpeg);
  height: 660px;
}

.plain {
  font-family: "Graphik Regular", sans-serif;
  font-weight: bold;
  color: white;
  font-size: 1.125em;
  line-height: 30px;
  max-width: 670px;
  letter-spacing: 0.5px;
}

.bndle-logos {
  width: 90%;
}

.special {
  font-family: "Graphik Regular", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #00ed82;
  font-size: 12px;
  letter-spacing: 1px;
}

.cta-btn {
  height: 45px;
  min-width: 265px;
  padding: 0 32px;
  border: none;
}

.cta-btn:hover {
  background-color: rgba(221, 221, 221, 0.7);
}

.cta-link {
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 1px;
  text-align: center;
}

.sign-up-link {
  font-family: "Graphik Thin", sans-serif;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;
}

.next-content {
  background-color: black;
  height: 400px;
}

h1 {
  color: white;
  font-size: 36px;
  letter-spacing: 0.5px;
}

.tv-details {
  font-size: 1em;
  font-family: "Graphik Light", sans-serif;
  color: white;
  max-width: 680px;
  letter-spacing: 1px;
}

@media (min-width: 768px) {
  .bkg-img {
    height: 600px;
  }

  .plain {
    font-size: 1.375em;
  }
  .bndle-logos {
    width: 515px;
  }

  .cta-btn {
    height: 56px;
    min-width: 136px;
  }

  h1 {
    font-size: 64px;
  }
  .tv-details {
    font-size: 1.125em;
  }
}

@media (min-width: 992px) {
  .bkg-img {
    height: 660px;
  }

  .bndle-logos {
    width: 600px;
  }

  .cta-btn {
    height: 56px;
    min-width: 136px;
  }

  h1 {
    font-size: 48px;
  }
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4em;
  }
  .tv-details {
    max-width: 900px;
  }
}
@media (min-width: 1600px) {
  h1 {
    font-size: 4.5em;
  }
  .tv-details {
    font-size: 1.5em;
  }
}
</style>

