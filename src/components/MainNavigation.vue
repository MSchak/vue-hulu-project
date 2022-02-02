<template>
  <div id="nav">
    <div class="nav-container container-fluid mx-3">
      <div class="row align-items-center h-100 mx-1 me-4 pt-1">
        <div class="col-1">
          <p class="title mb-0">hulu</p>
        </div>

        <div class="col-10 text-center nav-items">
          <select name="menu" id="menu" v-model="selected" @change="navigateTo">
            <option value="1">Welcome</option>
            <option value="2">Plans</option>
            <option value="3">Home</option>
            <option value="4">Details</option>
          </select>

          <ul class="nav-menu d-flex justify-content-evenly mb-0">
            <li>
              <router-link class="nav-item" to="/welcome">Welcome</router-link>
            </li>
            <li>
              <router-link class="nav-item" to="/plans">Plans</router-link>
            </li>
            <li><router-link class="nav-item" to="/">Home</router-link></li>
            <li>
              <router-link class="nav-item" to="/details">Details</router-link>
            </li>
          </ul>
        </div>

        <div class="col-1 text-end search">
          <fa icon="search" size="lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
  data() {
    return {
      selected: "3",
    };
  },
  methods: {
    navigateTo() {
      if (this.selected == 1) {
        this.$router.push("/welcome");
      } else if (this.selected == 2) {
        this.$router.push("/plans");
      } else if (this.selected == 3) {
        this.$router.push("/");
      } else if (this.selected == 4) {
        this.$router.push("/details");
      }
    },
  },
};
</script>

<style scoped>
.nav-container {
  position: fixed;
  border-bottom: 0.5px solid white;
  z-index: 100;
  height: 60px;
}

.title {
  color: white;
  font-family: "Graphik Black";
  font-size: 1.5em;
  letter-spacing: 3px;
  z-index: 101;
}

select {
  border: none;
  width: 70px;
  padding: 10px 4px;
  border-radius: 4px;
      background-color: #00000014;
  opacity: 60%;
  font-family: "Graphik Regular";
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  color: white;
  letter-spacing: 2px;
}

.nav-items {
  font-family: "Graphik Regular";
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  letter-spacing: 2px;
}

.nav-menu {
  display: none !important;
}
.nav-item {
  text-decoration: none;
  color: white;
  font-size: 12px;
}

.nav-items ul li {
  list-style-type: none;
}
.search {
  color: white;
}
@media (min-width: 768px) {
  #menu {
    display: none;
  }
  .nav-menu {
    display: flex !important;
  }
}
@media (min-width: 1200px) {
  .nav-item {
    font-size: 14px;
  }
}
</style>