var FormActivityView = Backbone.View.extend({
	el: "#form-container",
	tagName: "div",

	events: {
		'click span.new-activity':'createActivity'
	},

	initialize: function(){
		console.log("New Activity Form View instantiated");
		this.render();
	},
	render: function(){
		var renderedHTML = HandlebarsTemplates['activities/form']();
		this.$el.html(renderedHTML);
	},
		createActivity: function(){
			var data = {
				title: this.$("[name='title']").val(),
				creator: currentUser.email,
				date: this.$("[name='date']").val(),
				location: this.$("[name='location']").val(),
				description: this.$("[name='description']").val()
		};
			collection.create(data);
			this.render();
	}
})