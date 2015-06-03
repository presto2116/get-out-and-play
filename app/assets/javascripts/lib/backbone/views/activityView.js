var ActivityView = Backbone.View.extend({
	className: "activity",
	tagName:'div',

	events: {
		'click span.delete':'deleteActivity',
		'click span.details' :'showActivity',
		'click span.edit': 'editActivity',
		'click span.edit-activity': 'updateActivity',
		'click span.cancel': 'cancel'
	},

	initialize: function(){
		console.log("New Activity View instantiated");
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.render();
	},
	render: function(){
		var renderedHTML = HandlebarsTemplates['activities/index'](this.model.toJSON());
		this.$el.html(renderedHTML);
		console.log("page rendered");
	},

	deleteActivity: function(){
		this.model.destroy();
	},
	showActivity: function(evt){
		evt.preventDefault();
		// console.log(this.model.attributes);
		router.navigate("details/" + this.model.id, {trigger: true});
		detailView.setActivity(this.model);
	},
	editActivity: function(){
		$('#form-container').hide();
		$('span.edit').hide();
		this.$('activity-form-div').remove();
		this.$el.append(HandlebarsTemplates['activities/form'](this.model.toJSON()));
	},
	updateActivity: function(){
			var newData = {
				title: this.$("[name='title']").val(),
				creator: currentUser.email,
				date: this.$("[name='date']").val(),
				location: this.$("[name='location']").val(),
				description: this.$("[name='description']").val()
		};
			this.model.save(newData);
	},
	 cancel: function() {
    this.$('.activity-form-div').remove();
    $('span.edit').show();
  }


})