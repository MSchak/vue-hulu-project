<template>
  <div id="nav">
    <img src="" alt=""><p>Hulu</p>
    <router-link to="/welcome">Welcome</router-link> |
    <router-link to="/plans">Plans</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/details">Details</router-link>
    <button type="submit"></button>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'MainNavigation'
}


</script>