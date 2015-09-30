AddAssignment = React.createClass({
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var name = React.findDOMNode(this.refs.name).value.trim();
    var desc = React.findDOMNode(this.refs.desc).value.trim();
    var total = React.findDOMNode(this.refs.total).value.trim();
    var gradesheet_id = this.props.gradesheet._id;

    Meteor.call('addAssignment', gradesheet_id, name, total, function(error, result){
      if(result) {
        // Fill in default score for each student
        var students = Students.find({}).fetch();
        students.map((student) => {
          Scores.insert({
              gradesheet: gradesheet_id,
              student: student._id,
              assignment: result,
              point: 0,
              createdAt: new Date()
            });
        });
        console.log('Default scores added for each student');
      } else {
        console.log(error);
      }
    });

    // Clear form
    React.findDOMNode(this.refs.name).value = "";
    React.findDOMNode(this.refs.desc).value = "";
    React.findDOMNode(this.refs.total).value = "";
  },
  render() {
    return(
      <div>
        <form className="add-assignment" onSubmit={this.handleSubmit} >
          <input
            type="text"
            ref="name"
            placeholder="Assignment Name" />
            <input
              type="text"
              ref="desc"
              placeholder="Description" />
          <input
            type="text"
            ref="total"
            placeholder="Total Points" />
          <button type="submit">Add Assignment</button>
        </form>
      </div>
    );
  }
});
