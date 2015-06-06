var RegistrationView = Backbone.View.extend({
	el: "#registration",

	initialize: function(){
		console.log("new registration view instantiated");
	},
setAttend: function(attendToSet){
	this.attend = attendToSet;
	console.log(this.attend);
	console.log(currentUser.id);
	var data = {
		// do you need to fetch / send the current user id?
		// can't your rails app just use current_user as defined?
		// that also prevents users from setting this user_id themselves
		// (thus registering someone else maliciously)
		user_id: currentUser.id,
		activity_id: this.attend.id
	};
},

	render: function(){
		var renderedHTML = HandlebarsTemplates['activities/registration'](this.attend.toJSON());
			this.$el.html(renderedHTML);
	}
})
