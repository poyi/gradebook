Gradesheets = new Mongo.Collection("gradesheets");

if (Meteor.isServer) {
  Meteor.publish("gradesheets", function () {
    return Gradesheets.find(
        { owner: this.userId }
    );
  });
}
