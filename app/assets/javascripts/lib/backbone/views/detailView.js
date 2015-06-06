var DetailView = Backbone.View.extend({
	el: "#details",

	// there's a lot of duplicated code here w/ the other view!
	// I wonder if you couldn't just use the same view code, but have it use
	// two separate templates... switching from detail to non-detail view
	// would swap the active template and re-render.
	events: {
		'click .delete':'deleteActivity',
		'click .edit' :'editActivity',
		'click span.edit-activity': 'updateActivity',
		'click .attend': 'attendActivity'
	},

	initialize: function(){
		console.log(this.model);
		console.log("New details view instantiated");

	},
	setActivity: function(activityToSet){
		this.activity = activityToSet;
		this.render();
	},
	deleteActivity: function(){
		this.model.destroy();
	},
	editActivity: function(){
		console.log(this.model);
		$('#details').append(HandlebarsTemplates['activities/form'](this.activity.toJSON()));
		console.log(maincollection);
	},
	updateActivity: function(){
			var newData = {
				title: this.$("[name='title']").val(),
				creator: currentUser.email,
				date: this.$("[name='date']").val(),
				location: this.$("[name='location']").val(),
				description: this.$("[name='description']").val()
		};
			this.activity.save(newData);
			this.render();
	},
	attendActivity: function(evt){
			evt.preventDefault();
			registrationView.setAttend(this.model);
			console.log(this.model);
	},
	render: function(){
		var renderedHTML = HandlebarsTemplates['activities/details'](this.activity.toJSON());
		this.$el.html(renderedHTML);
		$('#activities').remove();
		$('#form-container').remove();
	}

})
