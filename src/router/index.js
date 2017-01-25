import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigator from "../Navigator.vue";

Vue.use(VueRouter)

const routes = [{path: '/', component: Navigator}]

// https://router.vuejs.org/en/essentials/getting-started.html
export default new VueRouter({
    routes
})