import Vue from "vue";
import VueRouter from "vue-router";
import Navigator from "../Navigator.vue";
import Explorer from "../Explorer.vue";

Vue.use(VueRouter)

const routes = [{path: '/navigator', name: 'navigator', component: Navigator}, {
    path: '/explorer/:entityTypeId?',
    name: 'explorer',
    component: Explorer
}]

// https://router.vuejs.org/en/essentials/getting-started.html
export default new VueRouter({
    routes
})