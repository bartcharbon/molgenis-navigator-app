<template>
    <tr>
        <td v-if="type === 'package'" class="package-label-col" @click="handleSelectPackage">
            <span class="glyphicon glyphicon-folder-close" aria-hidden="true"></span>&nbsp; {{label}}
        </td>
        <td v-else class="package-label-col" @click="handleSelectEntityType" @contextmenu.prevent="handleShowEntityTypeContextMenu">
            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>&nbsp; {{label}}
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
            handleSelectPackage: function (e) {
                this.$emit('selectPackage', this.id)
            },
            handleSelectEntityType: function (e) {
                this.$emit('selectEntityType', this.id)
            },
            handleShowEntityTypeContextMenu: function (e) {
                this.$emit('showEntityTypeContextMenu', this.id, {x: e.pageX, y: e.pageY})
            }
        }
    }
</script>

<style scoped>
    td.package-label-col:hover {
        cursor: pointer;
    }
</style>