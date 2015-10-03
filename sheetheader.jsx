SheetHeader = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      assignments: Assignments.find({ gradesheet: this.props.gradesheet._id }).fetch()
    }
  },
  renderAssignments() {
    return this.data.assignments.map((assignment) => {
      return <AssignmentHeader key={assignment._id} assignment={assignment} />
    });
  },
  render() {
    return (
      <tr className="gradeRow-header">
        <td className="row-name">Name</td>
        {this.renderAssignments()}
      </tr>
    );
  }
});
