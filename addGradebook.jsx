AddGradebook = React.createClass({
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var name = React.findDOMNode(this.refs.name).value.trim();

    Meteor.call('addGradebook', name, function(error, result){
      if(result) {
        console.log('Gradebook added!');
      } else {
        console.log(error);
      }
    });

    // Clear form
    React.findDOMNode(this.refs.name).value = "";
  },
  render() {
    if(this.props.isOpen){
      return(
        <div className="modal-form">
          <form className="add-gradesheet" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="name"
              placeholder="Gradesheet Name" />
            <button type="submit">CREATE</button>
          </form>
        </div>
      );
    } else {
      return <div></div>
    }
  }
});
