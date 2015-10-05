Gradebooks = new Mongo.Collection("gradebooks");

if (Meteor.isServer) {
  Meteor.publish("gradebooks", function () {
    return Gradebooks.find(
        { owner: this.userId }
    );
  });
}
