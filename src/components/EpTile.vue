<template>
    <div class="ep-tile">
        <img src="" alt=""><p>Episode image</p>
        <ep-content-block></ep-content-block>
    </div>
</template>

<script>

import EpContentBlock from './EpContentBlock.vue'

export default {
    name: 'EpTile',
    components: {
        EpContentBlock
    }
}
</script>
