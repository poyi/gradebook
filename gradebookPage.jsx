GradebookPage = React.createClass({
 mixins: [ReactMeteorData],
 getMeteorData() {
   return {
     gradesheets: Gradesheets.find({gradebook: this.props.gradebook}).fetch(),
     gradebook: Gradebooks.findOne({_id: this.props.gradebook})
   }
 },
  render() {
    return (
      <div className="container">
        <GradeBook gradebook={this.data.gradebook} gradesheets={this.data.gradesheets} />
      </div>
    );
  }
});
