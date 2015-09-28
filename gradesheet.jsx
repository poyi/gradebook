Gradesheet = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      students: Students.find({}).fetch()
    }
  },
  renderStudents() {
    return this.data.students.map((student) => {
      return <GradeRow key={student._id} student={student} />;
    });
  },
  render() {
    return (
      <table className="gradeSheet">
        <SheetHeader />
        {this.renderStudents()}
      </table>
    );
  }
});
