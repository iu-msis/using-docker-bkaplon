var profileApp = new Vue({
  el: '#profileAppVue',
  data: {
    users: []
  },
  methods: {
    fetchresults() {
		fetch ('https://randomuser.me/api/')
		.then(function(response){profileApp.users.results[0] = response.json() });
  }
},
created() {
  this.fetchresults()
}
})
;
