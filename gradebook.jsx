GradeBook = React.createClass({
 mixins: [ReactMeteorData],
 getMeteorData() {
   return {
     gradesheets: Gradesheets.find({}).fetch()
   }
 },
  renderStudents() {
    return this.data.students.map((student) => {
      return <Student key={student._id} student={student} />;
    });
  },
  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="gradebook-title">Student List</div>
          <div className="gradesheet-list"><GradeSheetList gradesheets={this.data.gradesheets} /></div>
          {/* <AddStudent />*/}
        </header>
        <GradeSheet gradesheet={"A12345"}/>
      </div>
    );
  }
});
