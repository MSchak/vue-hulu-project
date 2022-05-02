<template>
  <div class="plans-nav container-fluid px-4">
    <div class="row h-100 px-2 align-content-center">
      <div class="col mt-2 pt-2 text-start">
        <img class="logo" src="../assets/logo-black.svg" alt="" />
      </div>

      <div class="col mt-3 pt-1 text-end">
        <div>
          <p class="login">
            <router-link class="login-link" to="/">Log In</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlansNav",
};
</script>

<style scoped>
.plans-nav {
  height: 60px;
  background-color: white;
}

.logo {
  height: 20px;
}

.login {
  font-family: "Graphik Black", sans-serif;
}

.login-link {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
}
</style>