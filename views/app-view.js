var AppView = Backbone.View.extend({
  el: $("body"),
  events: {
    'keypress': 'sayHello'
  },
  initialize: function() {
    alert('initializing')
  },
  render: function(){
    var testString = 'hello world'
    this.$el.append(testString);
  },
  sayHello: function(){
    this.render();
  }
});

var app_view = new AppView();