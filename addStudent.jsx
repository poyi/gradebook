// Assignment component within the gradesheet table
AddStudent = React.createClass({
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var firstName = React.findDOMNode(this.refs.firstName).value.trim();
        var lastName = React.findDOMNode(this.refs.lastName).value.trim();

    Meteor.call('addStudent', firstName, lastName, function(error, result){
        // Fill in default score upon adding a new student
        var assignments = Assignments.find({}).fetch();
        assignments.map((assignment) => {
            Scores.insert({
                gradesheet: assignment.gradesheet,
                student: result,
                assignment: assignment._id,
                point: 0,
                createdAt: new Date()
            });
        });
    });

    // Clear form
    React.findDOMNode(this.refs.firstName).value = "";
    React.findDOMNode(this.refs.lastName).value = "";
    },
    render() {
        if(this.props.newStudent) {
            return(
                <div className="modal-form">
                    <form className="new-student" onSubmit={this.handleSubmit} >
                        <div className="form-header">Add New Student<a className="form-close" onClick={this.props.closeForm}>x</a></div>
                        <input type="text" ref="firstName" placeholder="First Name" />
                        <input type="text" ref="lastName" placeholder="Last Name" />
                        <button type="submit">ADD</button>
                    </form>
                </div>
            );
        } else {
          return <div className="invisible"></div>
        }
    }
});
