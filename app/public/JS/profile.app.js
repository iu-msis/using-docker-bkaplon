var profileApp = new Vue({
  el: '#profileAppVue',
  data: {
    results: []
  },
  methods: {
    fetchresults() {
		fetch ('randomuser.me-sample.json')
		.then(function(response){profileApp.results = response.json() });
  }
},
created() {
  this.fetchresults()
}
});
