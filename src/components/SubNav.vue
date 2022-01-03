<template>
    <div>
        <div class="tab-list">
            <button>Episodes</button>
            <button>You may also like</button>
            <button>Details</button>
        </div>
        <div>    
            <dropdown-menu></dropdown-menu>
            <show-grid></show-grid>
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<script>

import DropdownMenu from '../components/DropdownMenu.vue'
import ShowGrid from '../components/ShowGrid.vue'

export default {
    name: 'SubNav',
    components: {
        DropdownMenu,
        ShowGrid
    }
}
</script>
