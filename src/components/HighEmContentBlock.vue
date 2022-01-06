<template>
    <div class="col-4 m-5 align-content-end p-0">
        <show-logo></show-logo>
        <ep-title></ep-title>
        <p class="ep-decription"></p>
        <high-em-buttons></high-em-buttons>
    </div>
</template>

<script>

import ShowLogo from './ShowLogo.vue'
import EpTitle from './EpTitle.vue'
import HighEmButtons from './HighEmButtons.vue'

export default {
    name: 'HighEmContentBlock',
    components: {
        ShowLogo,
        EpTitle,
        HighEmButtons
    }
}
</script>
