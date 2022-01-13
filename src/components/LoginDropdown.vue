<template>
  <div class="login-nav container-fluid">
    <div class="row">
      <div class="col text-end">
        <router-link to="/"><img class="hamburger-menu mx-4 my-4" src="../assets/menu.png"></router-link>
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

.login-nav{
  position:fixed;
}

.hamburger-menu{
width: 20px;
height: 20px;
}

</style>

