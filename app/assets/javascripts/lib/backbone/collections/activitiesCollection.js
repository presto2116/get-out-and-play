var ActivitiesCollection = Backbone.Collection.extend({
	model: ActivityModel,
	url: '/activities'
})