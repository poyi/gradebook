// Assignment component within the gradesheet table
AddGradesheet = React.createClass({
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var name = React.findDOMNode(this.refs.name).value.trim();
    var gradebook_id = this.props.gradebook;

    Meteor.call('addGradesheet', gradebook_id, name, function(error, result){
      if(result) {
        console.log('gradesheet added!');
      } else {
        console.log(error);
      }
    });

    // Clear form
    React.findDOMNode(this.refs.name).value = "";
  },
  render() {
    return(
      <div>
        <form className="new-gradesheet" onSubmit={this.handleSubmit} >
          <input
            type="text"
            ref="name"
            placeholder="Gradesheet Name" />
          <button type="submit">Add Gradesheet</button>
        </form>
      </div>
    );
  }
});
