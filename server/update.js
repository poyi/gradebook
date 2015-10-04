Meteor.methods({
  editGradebook: function (gradebook_id, name) {
      return Gradebooks.update({
          _id: gradebook_id
          }, { $set: {
              name: name,
              }
          });
  },
  editGradesheet: function (gradesheet_id, name) {
    return Gradesheets.update({
        _id: gradesheet_id
    }, { $set:{
        name: name
        }
    });
  },
  editAssignment: function (assignment_id, name, desc, total) {
      return Assignments.update({
          _id: assignment_id
          }, { $set: {
              name: name,
              desc: desc,
              total: total
              }
          });
  }
});
