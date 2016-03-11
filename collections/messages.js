//collection
var MessageList = Backbone.Collection.extend({
  model: MessageModel
});

//Create a global collection of messages
var Messages = new MessageList([Message1, Message2]);