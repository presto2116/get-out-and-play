var ActivitiesRouter = Backbone.Router.extend({

	routes: {
		"details/:id": "details",
		"": "index",
	},

	initialize: function(){
		router = this;
		maincollection = new ActivitiesCollection();
		listView = new ActivitiesListView({collection: maincollection});
		detailView = new DetailView();
		formActivityView = new FormActivityView();
		registrationView = new RegistrationView();
	},

	index: function(){
		maincollection.fetch({reset: true});
	},
	details: function(id){
		console.log("clicked activity details of id: " + id);
		maincollection.fetch({reset: true, data: {id: id}});
	}

})