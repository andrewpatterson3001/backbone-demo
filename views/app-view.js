var AppView = Backbone.View.extend({
  el: $("body"),
  events: {
    'click #submit-button': 'sayHello'
  },
  initialize: function() {
    console.log('initializing')
  },
  render: function(){
    var messageSays = $('#add-new-message').val()
    console.log($('#add-new-message').val())
    this.$el.append($('<p>').text(messageSays));
    this.$('#add-new-message').val('');
  },
  sayHello: function(event){
    event.preventDefault();
    this.render();
  }
});

var app_view = new AppView();

//where do I set the new instance of the message model?
//I think it would look something like:

//this.model.set({messageContent:$('#add-new-message').val()})

//but where does this go? initialize?