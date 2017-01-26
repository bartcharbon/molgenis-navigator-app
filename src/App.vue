<template>
    <div class="container">
        <p>
            <router-link-active v-if="routeName === 'navigator'" :to="{ name: 'navigator' }">Navigator
            </router-link-active>
            <router-link v-else :to="{ name: 'navigator' }">Navigator</router-link>
            <span> | </span>
            <router-link-active v-if="routeName === 'explorer'" :to="{ name: 'explorer' }">Explorer</router-link-active>
            <router-link v-else :to="{ name: 'explorer' }">Explorer</router-link>
        </p>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            routeName: function () {
                return this.$store.state.route.name;
            },
        },
        mounted: function () {
            // navigate to navigator component when app is mounted
            this.$router.push({name: 'navigator'});
        }
    }
</script>