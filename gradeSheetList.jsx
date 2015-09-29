GradeSheetList = React.createClass({
  propTypes: {
    gradesheets: React.PropTypes.array.isRequired
  },
  listGradeSheets(gradesheets) {
    return gradesheets.map((gradesheet) => {
      return (
        <span>{gradesheet.name}</span>
      );
    });
  },
  handleChange: function(event) {
    // Assignments.update({
    //   _id: this.props.assignment._id
    // },
    // { $set: {name: event.target.value} });
  },
  render() {
    return (
      <div>{this.listGradeSheets(this.props.gradesheets)}</div>
    );
  }
});
