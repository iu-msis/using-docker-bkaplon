var profileapp = new Vue({
  el: '#profileappvue',
  data: {
    profile: []
  },
  Methods: {
    fetchRandomUser() {
		fetch ('https://randomuser.me/api/')
		.then( response => response.json())
		.then( json => profileapp.profile = json })
  },
created() {
  this.fetchRandomUser()
}
});
