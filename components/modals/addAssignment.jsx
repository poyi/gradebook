AddAssignment = React.createClass({
    _handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var name = React.findDOMNode(this.refs.name).value;
    var desc = React.findDOMNode(this.refs.desc).value;
    var total = React.findDOMNode(this.refs.total).value;
    var gradesheet_id = this.props.gradesheet._id;
    var owner = Meteor.userId();

    Meteor.call('addAssignment', gradesheet_id, owner, name, desc, total, function(error, result){
      if(result) {
        // Fill in default score for each student
        var students = Students.find({}).fetch();
        students.map((student) => {
          Scores.insert({
              gradesheet: gradesheet_id,
              owner: owner,
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
    if(this.props.newAssignment) {
        return(
          <div className="modal-form">
            <form className="new-assignment" onSubmit={this._handleSubmit}>
                <div className="form-header">Add New Assignment<a className="form-close" onClick={this.props.closeForm}>x</a></div>
                <input type="text" ref="name" placeholder="Assignment Name" />
                <input type="text" ref="desc" placeholder="Description" />
                <input type="text" ref="total" placeholder="Total Points" />
                <button type="submit">ADD</button>
            </form>
          </div>
        );
    } else {
        return <div className="invisible"></div>
    }
  }
});
