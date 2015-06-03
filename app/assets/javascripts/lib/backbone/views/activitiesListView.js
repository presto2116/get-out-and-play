var ActivitiesListView = Backbone.View.extend({
	el: '#activities-list',

	initialize: function(){
		this.listenTo(this.collection, 'reset', this.renderAll);
		this.listenTo(this.collection, 'add', this.renderOne);
		console.log("created Activities List View");
	},


	renderOne: function(activity){
		var view = new ActivityView({model: activity});
		this.$el.prepend(view.$el);
	},
	renderAll: function(){
		this.$el.empty();
		this.collection.each(this.renderOne.bind(this));
	}
})