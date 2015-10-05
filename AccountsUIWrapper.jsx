AccountsUIWrapper = React.createClass({
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
      React.findDOMNode(this.refs.container));
      var userId = Meteor.userId();
      Hooks.onLoggedOut = function (userId) { Meteor._reload.reload(); }
  },
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },
  render() {
    // Just render a placeholder container that will be filled in
    return <div className="login-btn" ref="container" />;
  }
});
