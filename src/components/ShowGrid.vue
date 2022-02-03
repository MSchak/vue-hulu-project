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

</style>