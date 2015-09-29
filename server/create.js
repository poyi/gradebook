Meteor.methods({
  addStudent: function (firstName, lastName) {
    return Students.insert({
      'firstName': firstName,
      'lastName': lastName,
      'createdAt': new Date()
    });
  },
  addAssignment: function (gradesheet, name, total) {
    return Assignments.insert({
      'gradesheet': gradesheet,
      'name': name,
      'total': total,
      'createdAt': new Date()
    });
  }
});
