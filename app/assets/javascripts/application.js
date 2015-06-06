// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars.runtime
//= require_tree ./lib/templates
//= require_tree ./lib/backbone/routers
//= require_tree ./lib/backbone/models
//= require_tree ./lib/backbone/collections
//= require_tree ./lib/backbone/views
//= require bootstrap-sprockets
//= require bootstrap-datepicker
//= require backbone_rails_sync
//= require backbone_datalink
//= require_tree .

var domReady = function domReady () {
		var router = new ActivitiesRouter();
		Backbone.history.start();
}
var pageReady = function pageReady(){
	var router = new ActivitiesRouter();
		Backbone.history.stop()
    Backbone.history.start()
}

// $(document).ready(domReady);

// $(document).on('page:load', pageReady);

// maybe give this a clearer name? as it is, it makes me thing this function
// is some sort of work-around...
var makeItWork= function(){
	$('.dp1 input').datepicker({
     orientation: 'top auto',
     autoclose: true,
     todayHighlight: true,
     startDate: "today",
     format: "yyyy/mm/dd"
	});
	$('#sumbit-button').click(function() {
    $('#attendModal').modal('hide');
});
};

$(document).ready(makeItWork);
$(document).on('page:load', makeItWork);
