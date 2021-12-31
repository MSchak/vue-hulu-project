<template>
    <high-em-content></high-em-content>
    <sub-nav></sub-nav>
    <dropdown-menu></dropdown-menu>
    <show-grid></show-grid>
</template>

<script>
import HighEmContent from '../components/HighEmContent.vue'
import SubNav from '../components/SubNav.vue'
import DropdownMenu from '../components/DropdownMenu.vue'
import ShowGrid from '../components/ShowGrid.vue'

export default {
  name: 'Details',
  components: {
      HighEmContent,
      SubNav,
      DropdownMenu,
      ShowGrid
  }
}
</script>