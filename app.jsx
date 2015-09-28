// App component - represents the whole app
App = React.createClass({
  // This mixin makes the getMeteorData method work
 mixins: [ReactMeteorData],

 // Loads items from the Tasks collection and puts them on this.data.tasks
 getMeteorData() {
   return {
     students: Students.find({}).fetch()
   }
 },

  renderStudents() {
    // Get tasks from this.data.tasks
    return this.data.students.map((student) => {
      return <Student key={student._id} student={student} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var firstName = React.findDOMNode(this.refs.firstName).value.trim();
    var lastName = React.findDOMNode(this.refs.lastName).value.trim();

    Students.insert({
      firstName: firstName,
      lastName: lastName,
      createdAt: new Date() // current time
    });

    // Clear form
    React.findDOMNode(this.refs.firstName).value = "";
    React.findDOMNode(this.refs.lastName).value = "";
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Student List</h1>
          {/* form with handle method */}
          <form className="new-student" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="firstName"
              placeholder="First Name" />
            <input
              type="text"
              ref="lastName"
              placeholder="Last Name" />
              <button type="submit">Add Student</button>
          </form>
        </header>
{/*
        <ul>
          {this.renderStudents()}
        </ul>
*/}
        <Gradesheet />
      </div>
    );
  }
});
