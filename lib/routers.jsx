FlowRouter.route('/', {
  action: function(params) {
    if (Meteor.userId()) {
        ReactLayout.render(MainLayout, {
          content: <GradebookIndex/>
        });
    } else {
      ReactLayout.render(MainLayout, {
        content: <LoginPage/>
      });
    }
  }
});

FlowRouter.route('/gradebook/:_id', {
  subscriptions: function(params) {
    this.register('gradebook', Meteor.subscribe('gradebooks', params._id));
  },
  action: function(params) {
      if (Meteor.userId()) {
          ReactLayout.render(MainLayout, {
            content: <GradebookPage gradebook={params._id} />
          });
      } else {
        ReactLayout.render(MainLayout, {
          content: <LoginPage/>
        });
      }
  }
});
