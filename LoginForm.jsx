LoginForm = React.createClass({
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.atForm,
      React.findDOMNode(this.refs.container));
      Accounts.onLogin(function() { Meteor._reload.reload(); });
  },
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },
  render() {
    // Just render a placeholder container that will be filled in
    return <div className="login-form" ref="container" />;
  }
});
