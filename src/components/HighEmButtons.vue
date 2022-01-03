<template>
    <div>
        <button>Play</button>
        <button>Details</button>
        <ellipse-menu></ellipse-menu>
    </div>
</template>

<script>

import EllipseMenu from './EllipseMenu.vue'

export default {
    name: 'HighEmButtons',
    components: {
        EllipseMenu
    }

}
</script>
