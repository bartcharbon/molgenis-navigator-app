<template>
    <tbody>
    <package-table-row v-for="package in package_.children" type="package" :id="package.fullName" :label="package.label"
                       :description="package.description" v-on:selectPackage="handleSelectPackage"></package-table-row>
    <package-table-row v-for="entityType in package_.entityTypes" type="entity" :id="entityType.fullName"
                       :label="entityType.label" :description="entityType.description"
                       v-on:selectEntityType="handleSelectEntityType"></package-table-row>
    <tr v-if="package_.children.length == 0 && package_.entityTypes.length == 0">
        <td colspan="2"><em>empty folder</em></td>
    </tr>
    </tbody>
</template>

<script>
    import PackageTableRow from './PackageTableRow.vue'

    export default {
        name: 'package-table-body',
        components: {PackageTableRow},
        props: {
            package_: {
                type: Object,
                required: true
            }
        },
        methods: {
            handleSelectPackage: function (id) {
                this.$emit('selectPackage', id);
            },
            handleSelectEntityType: function (id) {
                this.$emit('selectEntityType', id);
            }
        }
    }
</script>

<style scoped>
</style>