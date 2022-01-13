<template>
  <div id="nav">
    <div class="nav-container container-fluid mx-3">
      <div class="row align-items-center h-100 mx-4">
        <div class="col-3">
          <p class="title mb-0">hulu</p>
        </div>

        <div class="col-6 text-center nav-items">
          <ul class="d-flex justify-content-evenly mb-0">
          <li><router-link class="nav-item" to="/welcome">Welcome</router-link></li>
          <li><router-link class="nav-item" to="/plans">Plans</router-link></li>
          <li><router-link class="nav-item" to="/">Home</router-link></li>
          <li><router-link class="nav-item" to="/details">Details</router-link></li>
          </ul>
        </div>

        <div class="col-3 text-end px-5">
          <img class="search" src="../assets/search.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
};
</script>

<style scoped>
.nav-container{
  position: fixed;
  border-bottom: .5px solid white;
  z-index: 100;
  height: 60px;
}

.title{
  color: white;
  font-family: "Graphik Black";
  font-size: 1.5em;
  letter-spacing: 3px;
  z-index: 101;
}

.nav-items{
  text-transform: uppercase;
  color: white;
}

.nav-item{
  text-decoration: none;
  color: white;
}

.nav-items ul li{
  list-style-type: none;
}
.search{
  width: 30px;
}


</style>