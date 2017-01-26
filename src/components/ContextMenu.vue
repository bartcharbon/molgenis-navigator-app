<template>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu"
        :style="x && y ? 'display:block;left:' + x +'px;top:' + y + 'px'  : 'display:none'">
        <li>
            <router-link :to="{ name: 'explorer', params: { entityTypeId: entityTypeId } }">View Data</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'meta', params: { entityTypeId: entityTypeId } }">View Attributes</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'context-menu',
        props: {
            entityTypeId: {
                type: String,
                required: true
            },
            x: {
                type: Number,
                required: true
            },
            y: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped>
    .dropdown-menu {
        position: absolute;
        margin-bottom: 5px;
    }
</style>