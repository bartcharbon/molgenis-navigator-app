import Vue from 'vue'
import Navigator from './Navigator.vue'

//initalize view
const app = new Vue({
  el: '#app',
  render: h => h(Navigator)
});
