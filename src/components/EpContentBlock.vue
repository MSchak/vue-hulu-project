<template>
    <div class="card-body">
        <p><strong>Episode</strong></p>
        <ep-title></ep-title>
        <p>Episode Description. Lorem ipsum bananas. </p>
        <ellipse-menu></ellipse-menu>
    </div>
</template>

<script>

import EllipseMenu from './EllipseMenu.vue'
import EpTitle from './EpTitle.vue'

export default {
    name: 'EpContentBlock',
    components: {
        EllipseMenu,
        EpTitle
    }
}
</script>
