FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <GradebookIndex />
    });
  }
});

FlowRouter.route('/gradebook/:_id', {
  name: 'gradebook',
  subscriptions: function(params) {
    this.register('gradebook', Meteor.subscribe('gradebooks', params._id));
  },
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <GradeBook gradebook={params._id} />
    });
  }
});
