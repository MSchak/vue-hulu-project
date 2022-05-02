<template>
  <div class="login-nav container-fluid">
    <div class="row h-100">
      <div
        class="
          login-menu
          col
          d-flex
          justify-content-end
          align-items-center
          h-100
          mt-2
          me-4
        "
      >
        <router-link to="/"
          ><fa icon="bars" size="lg" />
          <p class="log-in">Log In</p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginDropdown",
};
</script>

<style>
.login-nav {
  position: absolute;
  height: 75px;
}

.fa-bars {
  color: white;
}

.log-in {
  display: none;
}

@media (min-width: 992px) {
  .login-menu a {
    text-decoration: none;
    color: white;
  }

  .log-in {
    display: block;
    font-family: "Graphik Regular", sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .fa-bars {
    display: none;
  }
}
</style>

