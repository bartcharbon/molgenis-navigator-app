<template>
    <div class="container">

        <!-- Put this in a separate component -->
        <div v-if="error != undefined" class="alert alert-danger" role="alert">
            <button @click="error=null" type="button" class="close"><span aria-hidden="true">&times;</span></button>
            {{error}}
        </div>

        <!-- Put this in a separate component -->
        <div class="input-group">
            <input v-model="query" type="text" class="form-control" placeholder="Search packages and data ...">
            <span @click="submitQuery()" class="input-group-addon">search</span>
            <span @click="clearQuery()" class="input-group-addon">clear</span>
        </div>

        <!-- Put this in a separate component -->
        <ol v-if="query != undefined" class="breadcrumb">
            <li><a @click="selectPackage(null);">My MOLGENIS</a></li>
            <li><a><b>Showing result matching "{{query}}""</b></a></li>
        </ol>

        <ol v-else class="breadcrumb">
            <li><a @click="selectPackage(null);">My MOLGENIS</a></li>
            <li v-for="package in path"><a @click="selectPackage(package.id)">{{package.label}}</a></li>
            <li><a><b>{{currentLabel}}</b></a></li>
        </ol>

        <!-- Put this in a separate component -->
        <table class="table">
            <table-header
                    :headers="[{id: 'name', label: 'Name', sortable: true, sortDirection: sortDirection},{id: 'desc', label:'Description'}]"
                    v-on:sort="handleSort"></table-header>
            <tbody>
            <tr v-for="package in packages">
                <td @dblclick="setSelectedPackage(package.id)" @click="selected = package.id"
                    :class="{active: package.id == selected}"><span class="glyphicon glyphicon-folder-open"
                                                                    aria-hidden="true"></span>&nbsp; {{package.label}}
                </td>
                <td @dblclick="selectPackage(package.id)" @click="selected = package.id"
                    :class="{active: package.id == selected}" class="hidden-xs">
                    <i>{{package.description}}</i>
                </td>
            </tr>
            <tr v-for="entity in entities">
                <td @dblclick="openDataset(entity.id)" @click="selected = entity.id"
                    :class="{active: entity.id == selected}">
                    <span class="glyphicon glyphicon-list" aria-hidden="true"></span>&nbsp; {{entity.label}}
                </td>
                <td @dblclick="openDataset(entity.id)" @click="selected = entity.id"
                    :class="{active: entity.id == selected}" class="hidden-xs">
                    <i>{{entity.description}}</i>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import TableHeader from './TableHeader.vue'
    import {mapActions, mapMutations} from 'vuex'
    import {GET_PACKAGES, GET_ENTITIES, LOGIN} from './store/actions'
    import {SET_QUERY, SET_SORT_DIRECTION, SET_SELECTED_PACKAGE} from './store/mutations'

    export default {
        name: 'Navigator',
        components: {TableHeader},
        data() {
            return {
                path: 'test',
                currentLabel: 'test',
            }
        },
        methods: {
            ...mapActions({
                'getPackages': GET_PACKAGES
            }),
            ...mapMutations({
                'sortTable': SET_SORT_DIRECTION,
                'setQuery': SET_QUERY
            }),
            submitQuery: function () {
                this.$router.push({query: Object.assign({}, this.$router.currentRoute.query, {q: this.$store.state.route.query.q})});
                this.$store.dispatch(GET_PACKAGES, this.$store.state.route.query.q)
                this.$store.dispatch(GET_ENTITIES, this.$store.state.route.query.q)
            },
            clearQuery: function () {
                this.$router.push({
                    query: Object.assign({}, this.$router.currentRoute.query, {
                        q: undefined,
                        sort: undefined
                    })
                });
                this.$store.commit(SET_QUERY, undefined)
                this.$store.dispatch(GET_PACKAGES)
            },
            handleSort: function (headerId, sortDirection) {
                this.$router.push({query: Object.assign({}, this.$router.currentRoute.query, {sort: sortDirection})});
                this.sortTable(sortDirection)
                this.getPackages(this.$store.state.route.query.q);
            }
        },
        computed: {
            query: {
                get() {
                    return this.$store.state.route.query.q
                },
                set(query) {
                    this.setQuery(query);
                }
            },
            sortDirection: {
                get() {
                    return this.$store.state.route.query.sort
                },
                set(sortDirection) {
                    this.$store.commit(SET_SORT_DIRECTION, sortDirection)
                }
            },
            packages() {
                return this.$store.state.packages
            },
            entities() {
                return this.$store.state.entities
            },
            error() {
                return this.$store.state.error
            },
            selected: {
                get() {
                    return this.$store.state.selectedPackage
                },
                set(packageID) {
                    this.$store.commit(SET_SELECTED_PACKAGE, packageID)
                }
            }
        },
        mounted: function () {
            this.$store.state.token ? this.$store.dispatch(GET_PACKAGES) : this.$store.dispatch(LOGIN)
        },
        watch: {
            '$route' (to, from) {
                this.getPackages(this.$store.state.route.query.q);
            }
        }
    }
</script>