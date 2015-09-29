GradeSheet = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      students: Students.find({}).fetch(),
    }
  },
  renderStudentRows() {
    return this.data.students.map((student) => {
      return <GradeRow key={student._id} student={student} gradesheet={this.props.gradesheet} />;
    });
  },
  render() {
    return (
      <div>
        <AddAssignment gradesheet={this.props.gradesheet} />
        <table className="gradeSheet">
          <SheetHeader gradesheet={this.props.gradesheet}/>
          {this.renderStudentRows()}
        </table>
      </div>
    );
  }
});
