Assignments = new Mongo.Collection("assignments");

if (Meteor.isServer) {
  Meteor.publish("assignments", function () {
    return Assignments.find(
        { owner: this.userId }
    );
  });
}
