<template>
    <div class="drpdwn my-4">
        <button @click="toggle" class="btn btn-light w-25 text-start">Dropdown</button>
        <ul v-if="active" class="drpdwn-menu p-0 w-25">
            <li class="drpdwn-item"><button class="btn w-100 text-start">Season 1</button></li>
            <li class="drpdwn-item"><button class="btn w-100 text-start">Season 2</button></li>
            <li class="drpdwn-item"><button class="btn w-100 text-start">Season 3</button></li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'DropdownMenu',
    data() {
        return {
            active : false
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    }
}
</script>

<style scoped>

.drpdwn-menu{
    list-style-type: none;
    background-color: #f9fafb;
    position: absolute;
    z-index: 1;
}
</style>