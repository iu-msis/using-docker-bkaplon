var profileApp = new Vue({
  el: '#profileAppVue',
  data: {
    users: []
  },
  methods: {
    fetchresults() {
  		fetch ('https://randomuser.me/api/')
  		.then(function(response) {return response.json()})
      .then(function(json) {profileApp.users = json.results});
    }
  },
  created() {
    this.fetchresults()
  }
})
;
