<template>
    <thead>
    <tr>
        <table-header-cell v-for="header in headers" :id="header.id" :label="header.label" :sortable="header.sortable" :sortDirection="header.sortDirection"
                           v-on:sort="handleSort"></table-header-cell>
    </tr>
    </thead>
</template>

<script>
    import TableHeaderCell from './TableHeaderCell.vue'

    export default {
        name: 'table-header',
        components: {TableHeaderCell},
        props: {
            headers: {
                type: Array,
                required: true
            }
        },
        methods: {
            handleSort: function (headerId, sortDirection) {
                this.$emit('sort', headerId, sortDirection)
            }
        }
    }
</script>

<style scoped>
</style>