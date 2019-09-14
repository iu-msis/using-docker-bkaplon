var profileapp = new Vue({
  el: '#profileappvue',
  data: {
    results: []
  },
  methods: {
    fetchresults() {
		fetch ('https://randomuser.me/api/')
		.then( response => response.json())
		.then( json => profileapp.results = json })
  }
},
created() {
  this.fetchresults()
}
});
