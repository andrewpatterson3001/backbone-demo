var MessageModel = Backbone.Model.extend({
  defaults: {
    messageContent: ''
  },
  initialize: function(){
    this.on('change', this.notifyEachChange, this)
  },
  notifyEachChange: function (model) {
    console.log('There was a change to a model instance')
  }
});

var Message1 = new MessageModel({messageContent:"hello world"})

var Message2 = new MessageModel({messageContent:"windy day"})