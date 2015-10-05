Meteor.methods({
  addStudent: function (owner, firstName, lastName) {
    return Students.insert({
      'owner': owner,
      'firstName': firstName,
      'lastName': lastName,
      'createdAt': new Date()
    });
  },
  addAssignment: function (gradesheet_id, owner, name, desc, total) {
    return Assignments.insert({
      'gradesheet': gradesheet_id,
      'owner': owner,
      'name': name,
      'desc': desc,
      'total': total,
      'createdAt': new Date()
    });
  },
  addGradesheet: function (gradebook_id, owner, name) {
    return Gradesheets.insert({
      'gradebook': gradebook_id,
      'owner': owner,
      'name': name,
      'createdAt': new Date()
    });
  },
  addGradebook: function (owner, name) {
    return Gradebooks.insert({
      'owner': owner, 
      'name': name,
      'createdAt': new Date()
    });
  }
});
