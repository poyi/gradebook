if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
      Hooks.init();
    // Use Meteor.startup to render the component after the page is ready
    // React.render(<MainLayout />, document.getElementById("render-target"));
  });
}
