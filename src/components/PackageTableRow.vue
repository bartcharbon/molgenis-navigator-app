<template>
    <tr>
        <td class="package-label-col" @click="handleSelectPackageOrEntity()">
            <span :class="type === 'package' ? 'glyphicon glyphicon-folder-close' : 'glyphicon glyphicon-file'"
                  aria-hidden="true"></span>&nbsp; {{label}}
        </td>
        <td class="hidden-xs">
            <i>{{description}}</i>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'package-table-row',
        props: {
            type: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            description: {
                type: String,
            }
        },
        methods: {
            handleSelectPackageOrEntity: function () {
                if (this.type === 'package') {
                    this.$emit('selectPackage', this.id)
                } else {
                    this.$emit('selectEntityType', this.id)
                }
            }
        }
    }
</script>

<style scoped>
    td.package-label-col:hover {
        cursor: pointer;
    }
</style>