Meteor.methods({
  deleteGradebook: function (gradebook_id) {
        Gradebooks.remove(gradebook_id);
        Gradesheets.remove({"gradebook": gradebook_id});
        return true;
  }
});
