Meteor.methods({
  addStudent: function (firstName, lastName) {
    return Students.insert({
      'firstName': firstName,
      'lastName': lastName,
      'createdAt': new Date()
    });
  },
  addAssignment: function (gradesheet_id, name, total) {
    return Assignments.insert({
      'gradesheet': gradesheet_id,
      'name': name,
      'total': total,
      'createdAt': new Date()
    });
  },
  addGradesheet: function (gradebook_id, name) {
    return Gradesheets.insert({
      'gradebook': gradebook_id,
      'name': name,
      'createdAt': new Date()
    });
  },
  addGradebook: function (name) {
    return Gradebooks.insert({
      'name': name,
      'createdAt': new Date()
    });
  }
});
