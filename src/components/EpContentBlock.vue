<template>
    <div>
        <p><strong>Episode</strong></p>
        <ep-tile></ep-tile>
        <ep-title></ep-title>
        <p>Episode Description</p>
        <ellipse-menu></ellipse-menu>
    </div>
</template>

<script>

import EllipseMenu from './EllipseMenu.vue'
import EpTile from './EpTile.vue'
import EpTitle from './EpTitle.vue'

export default {
    name: 'EpContentBlock',
    components: {
        EllipseMenu,
        EpTile,
        EpTitle
    }
}
</script>
