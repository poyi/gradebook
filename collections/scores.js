Scores = new Mongo.Collection("scores");
if (Meteor.isServer) {
  Meteor.publish("scores", function () {
    return Scores.find(
        { owner: this.userId }
    );
  });
}
