<template>
    <div>
        <high-em-image></high-em-image>
        <high-em-content-block></high-em-content-block>

    </div>
</template>

<script>

import HighEmImage from './HighEmImage'
import HighEmContentBlock from './HighEmContentBlock.vue'

export default{
    name: 'HighEmContent',
    components: {
        HighEmImage,
        HighEmContentBlock
    }
}
</script>
