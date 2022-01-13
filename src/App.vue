<template>
      <router-view />
</template>

<script>



export default {
  name: 'app',
  components: {
  }
  }

</script>

<style>
@font-face {
  font-family: "Graphik Black";
  src: local("Graphik"),
   url(./fonts/Graphik/Graphik-Font-Family/GraphikBlack.otf) format("OpenType")
}
@font-face {
  font-family: "Graphik Semibold";
  src: local("Graphik"),
  url(./fonts/Graphik/Graphik-Font-Family/GraphikSemibold.otf) format("OpenType");
}
@font-face {
  font-family: "Graphik Regular";
  src: local("Graphik"),
  url(./fonts/Graphik/Graphik-Font-Family/GraphikRegular.otf) format("OpenType");
}

@font-face {
  font-family: "Graphik Thin";
  src: local("Graphik"),
  url(./fonts/Graphik/Graphik-Font-Family/GraphikThin.otf) format("OpenType");
}

#app{
  font-family: "Graphik Semibold";
}
</style>