<template>
    <div class="card-body">
        <p><strong>Episode</strong></p>
        <p>Episode title</p>
        <p>Episode Description. Lorem ipsum bananas. </p>
        <ellipse-menu></ellipse-menu>
    </div>
</template>

<script>

import EllipseMenu from './EllipseMenu.vue'

export default {
    name: 'EpContentBlock',
    components: {
        EllipseMenu,
    }
}
</script>
