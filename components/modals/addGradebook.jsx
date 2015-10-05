AddGradebook = React.createClass({
    _handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var name = React.findDOMNode(this.refs.name).value;
        var owner = Meteor.userId();

        Meteor.call('addGradebook', owner, name, function(error, result){
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
    if(this.props.newGradebook){
      return(
        <div className="modal-form">
          <form className="new-gradesheet" onSubmit={this._handleSubmit} >
              <div className="form-header">Add New Gradebook<a className="form-close" onClick={this.props.closeForm}>x</a></div>
              <input type="text" ref="name" placeholder="Gradesheet Name" />
              <button type="submit">ADD</button>
          </form>
        </div>
      );
    } else {
      return <div className="invisible"></div>
    }
  }
});
