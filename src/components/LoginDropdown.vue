<template>
  <div class="login-nav container-fluid">
    <div class="row h-100">
      <div class="this col d-flex justify-content-end align-items-center h-100">
        <router-link to="/"><fa icon="bars" size="2x"/></router-link>
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
  height:75px;
}


.fa-bars{
color: white;
}

</style>

