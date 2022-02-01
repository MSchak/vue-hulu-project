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
  font-family: "Graphik Bold";
  src: local("Graphik"),
   url(./fonts/Graphik/Graphik-Font-Family/GraphikBold.otf) format("OpenType")
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
  font-family: "Graphik Medium";
  src: local("Graphik"),
  url(./fonts/Graphik/Graphik-Font-Family/GraphikMedium.otf) format("OpenType");
}
@font-face {
  font-family: "Graphik Thin";
  src: local("Graphik"),
  url(./fonts/Graphik/Graphik-Font-Family/GraphikThin.otf) format("OpenType");
}
@font-face {
  font-family: "Graphik Light";
  src: local("Graphik"),
  url(./fonts/Graphik/Graphik-Font-Family/GraphikLight.otf) format("OpenType");
}

#app{
  font-family: "Graphik Semibold";
}

h1{
  font-family: "Graphik Bold";
  font-size: 2.5em;
}

h2{
  font-size: 1.125em;
  text-transform: uppercase;
}

h3{
  font-family: "Graphik Bold";
  font-size: 1.25em;
}

h4{
  font-family: "Graphik Light";
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -.5px;
    color: #292C33;
}

h5{
   font-family: "Graphik Medium";
  font-size: 1em;
  letter-spacing: -0.5px;
  text-transform: capitalize;
}
p{
  font-family: "Graphik Regular";
  font-size: .875em;
  letter-spacing: .5px;
}

@media (min-width: 992px){
  h1{
    font-size: 3em;
  }

  p{
    font-size: 1em;
  }
}
</style>