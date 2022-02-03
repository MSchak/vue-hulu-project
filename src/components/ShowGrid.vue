<template>
    <div class="grid-container m-1 d-flex flex-row flex-wrap justify-content-center ms-xl-0">
        <!--This is going to be a for loop, for each episode in the season, create an EpTile -->
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        </div>
</template>

<script>

import EpTile from './EpTile.vue'

export default {
    name: 'ShowGrid',
      components: { 
          EpTile 
    } 
}
</script>

<style scoped>
.grid-container{
    max-width: 500px;
}
@media (min-width: 576px){
.grid-container{
    max-width: 768px;
}
}
@media (min-width: 768px){
.grid-container{
    max-width: 992px;
}
}

@media (min-width: 992px){
.grid-container{
    max-width: 1200px;
}
}
@media (min-width: 1200px){
.grid-container{
    max-width: 2500px;
}
}
</style>