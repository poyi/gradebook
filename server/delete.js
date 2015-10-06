Meteor.methods({
  deleteGradebook: function (gradebook_id) {
        Gradebooks.remove(gradebook_id);
        Gradesheets.remove({"gradebook": gradebook_id});
        return true;
  },
  deleteAssignment: function (assignment_id) {
        Assignments.remove(assignment_id);
        Scores.remove({"assignment": assignment_id});
        return true;
  },
  deleteGradesheet: function (gradesheet_id) {
        Gradesheets.remove(gradesheet_id);
        Assignments.remove({"gradesheet": gradesheet_id});
        Scores.remove({"gradesheet": gradesheet_id});
        return true;
  }
});
