import Vue from 'vue'

import getStateForPackage from './getStateForPackage.js'
import getStateForSearch from './getStateForSearch.js'
import state from './exampledata.js'

//initialize state to root package (packageId = null)
getStateForPackage(state, null)

//initalize view
const app = new Vue({
  el: '#app',
  methods: {
    updateSearch: function() {
      if (this.search != undefined) getStateForSearch(this, this.search)
    },
    clearSearch: function() {
      getStateForPackage(this, null);
    },
    selectPackage: function(packageId) {
      getStateForPackage(this, packageId);
    },
    openDataset: function(datasetId) {
      window.open("/menu/main/dataexplorer?entity=" + datasetId);
    }
  },
  data: state
});
