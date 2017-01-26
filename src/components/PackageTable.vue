<template>
    <div>
        <package-table-controls :package_="package_" v-on:selectPackage="handleSelectPackage"></package-table-controls>
        <table class="table">
            <package-table-header
                    :headers="[{id: 'name', label: 'Name', sortable: true, sortDirection: sortDirection},{id: 'desc', label:'Description'}]"
                    v-on:sort="handleSort"></package-table-header>
            <package-table-body :package_="package_" v-on:selectPackage="handleSelectPackage"
                                v-on:selectEntityType="handleSelectEntityType"></package-table-body>
        </table>
    </div>
</template>

<script>
    import PackageTableControls from './PackageTableControls.vue'
    import PackageTableHeader from './PackageTableHeader.vue'
    import PackageTableBody from './PackageTableBody.vue'

    export default {
        name: 'package-table',
        components: {PackageTableControls, PackageTableHeader, PackageTableBody},
        props: {
            package_: {
                type: Object,
                required: true
            },
            sortDirection: {
                type: String
            }
        },
        methods: {
            handleSelectPackage: function (id) {
                this.$emit('selectPackage', id);
            },
            handleSelectEntityType: function (id) {
                this.$emit('selectEntityType', id);
            },
            handleSort: function (headerId, sortDirection) {
                this.$emit('sort', headerId, sortDirection);
            }
        }
    }
</script>

<style scoped>
</style>