// Assignment component within the gradesheet table
AssignmentHeader = React.createClass({
  propTypes: {
    assignment: React.PropTypes.object.isRequired
  },
  handleChange: function(event) {
    Assignments.update({
      _id: this.props.assignment._id
    },
    { $set: {name: event.target.value} });
  },
  render() {
    return (
      <td className="score-cell">
        <input type="text" value={this.props.assignment.name} onChange={this.handleChange} />
      </td>
    );
  }
});
