<template>
    <div class="grid-container m-3">
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