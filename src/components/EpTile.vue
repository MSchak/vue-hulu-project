<template>
    <div class="col ep-tile me-1 p-0">
        <div class="card border-0">
        <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="">
        <ep-content-block></ep-content-block>
        </div>
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
