<template>
    <div class="card p-4">
        <div class="card-body">
        <h3 class="card-title">Placeholder</h3>
        <bundle-logos></bundle-logos>
        <price></price>
        <p class="card-text">Description of bundle</p>
        <select-button></select-button>
        </div>
    </div>
</template>

<script>

import BundleLogos from './BundleLogos.vue'
import Price from './Price.vue'
import SelectButton from './SelectButton.vue'

export default {
    name: 'PlansPanel',
    components: {
        BundleLogos,
        Price,
        SelectButton
    }
}
</script>
