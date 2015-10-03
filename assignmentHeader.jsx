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
  componentDidMount: function() {
      function resizeInput() {
          $(this).attr('size', $(this).val().length);
      }
      $('input[type="text"]')
          // event handler
          .keyup(resizeInput)
          // resize on page load
          .each(resizeInput);
      },
  render() {
    return (
      <td className="score-cell">
        <input type="text" value={this.props.assignment.name} onChange={this.handleChange} />
      </td>
    );
  }
});
