EditAssignment = React.createClass({
    _handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var name = React.findDOMNode(this.refs.name).value;
    var desc = React.findDOMNode(this.refs.desc).value;
    var total = React.findDOMNode(this.refs.total).value;
    var assignment_id = this.props.assignment._id;

    Meteor.call('editAssignment', assignment_id, name, desc, total, function(error, result){
      if(result) {
        console.log('Assignment Updated');
      } else {
        console.log(error);
      }
    });
},
  render() {
    if(this.props.editAssignment) {
        return(
          <div className="modal-form">
            <form className="new-assignment" onSubmit={this._handleSubmit}>
                <div className="form-header">Edit Assignment<a className="form-close" onClick={this.props.closeForm}>x</a></div>
                <input type="text" ref="name" value={this.props.assignment.name} onChange={this._handleSubmit} />
                <input type="text" ref="desc" value={this.props.assignment.desc} onChange={this._handleSubmit} />
                <input type="text" ref="total" value={this.props.assignment.total} onChange={this._handleSubmit} />
                <button type="submit" onClick={this.props.closeForm}>UPDATE</button>
            </form>
          </div>
        );
    } else {
        return <div className="invisible"></div>
    }
  }
});
