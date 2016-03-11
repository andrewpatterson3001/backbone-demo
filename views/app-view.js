var AppView = Backbone.View.extend({
  el: $("body"),
  events: {
    'click #submit-button': 'sayHello'
  },
  initialize: function() {
    alert('initializing')
  },
  render: function(){
    var testString = 'hello world'
    var messageSays = $('#add-new-message').val()
    this.$el.append($('<p>').text(messageSays));
    this.$('#add-new-message').val('');
  },
  sayHello: function(event){
    event.preventDefault();
    this.render();
  }
});

var app_view = new AppView();