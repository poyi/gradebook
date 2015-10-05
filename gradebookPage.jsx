GradebookPage = React.createClass({
 mixins: [ReactMeteorData],
 getMeteorData() {
   return {
       gradebook: Gradebooks.findOne({_id: this.props.gradebook, owner: Meteor.userId()}),
       gradesheets: Gradesheets.find({gradebook: this.props.gradebook}).fetch()
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
