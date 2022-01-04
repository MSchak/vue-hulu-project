<template>
  <div id="nav">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-3">
          <img src="" alt="" />
          <p>Hulu</p>
        </div>

        <div class="col-6 text-center">
          <router-link to="/welcome">Welcome</router-link> |
          <router-link to="/plans">Plans</router-link> |
          <router-link to="/">Home</router-link> |
          <router-link to="/details">Details</router-link>
        </div>

        <div class="col-3 text-end">
          <button type="submit"></button>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "MainNavigation",
};
</script>

<style>

.col-6 {
align-items: center;
}
</style>