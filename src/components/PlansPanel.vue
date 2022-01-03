<template>
    <div>
        <h3>Placeholder</h3>
        <bundle-logos></bundle-logos>
        <price></price>
        <p>Description of bundle</p>
        <select-button></select-button>
    </div>
</template>

<script>

import BundleLogos from './BundleLogos.vue'
import Price from './Price.vue'
import SelectButton from './SelectButton'

export default {
    name: 'PlansPanel',
    components: {
        BundleLogos,
        Price,
        SelectButton
    }
}
</script>
