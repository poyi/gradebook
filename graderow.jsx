GradeRow = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      assignments: Assignments.find({ student: this.props.student._id }).fetch()
    }
  },
  renderAssignments() {
    return this.data.assignments.map((assignment) => {
      return <Assignment key={assignment._id} assignment={assignment} />
    });
  },
  render() {
    return (
      <tr className="gradeRow">
        <td className="row-name">{this.props.student.firstName} {this.props.student.lastName}</td>
        {this.renderAssignments()}
      </tr>
    );
  }
});
