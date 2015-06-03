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
		user_id: currentUser.id,
		activity_id: this.attend.id
	};
},

	render: function(){
		var renderedHTML = HandlebarsTemplates['activities/registration'](this.attend.toJSON());
			this.$el.html(renderedHTML);
	}
})

