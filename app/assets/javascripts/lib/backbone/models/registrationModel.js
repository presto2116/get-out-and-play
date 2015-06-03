var RegistrationModel = Backbone.Model.extend({
  initialize: function(){
    console.log('New Registration Model Created');
  },
  urlRoot: '/registrations'
});