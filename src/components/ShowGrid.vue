<template>
    <div class="grid-container m-3">
        <!--This is going to be a for loop, for each episode in the season, create an EpTile -->
        <div class="row">
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        </div>
        <div class="row">
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        </div>
          <div class="row">
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        <ep-tile></ep-tile>
        </div>
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