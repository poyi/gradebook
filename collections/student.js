Students = new Mongo.Collection("students");

if (Meteor.isServer) {
  Meteor.publish("students", function () {
    return Students.find(
        { owner: this.userId }
    );
  });
}
