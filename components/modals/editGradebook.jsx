EditGradebook = React.createClass({
  _updateGradebook: function(event) {
    event.preventDefault();
    var gradebook_id = this.props.gradebook._id;
    var name = React.findDOMNode(this.refs.name).value;
    Meteor.call('editGradebook', gradebook_id, name, function(error, result){
      if(result) {
        console.log('Gradebook Updated!');
      } else {
        console.log(error);
      }
    });
  },
  _deleteGradebook: function(event) {
    event.preventDefault();
    var gradebook_id = this.props.gradebook._id;
    Meteor.call('deleteGradebook', gradebook_id, function(error, result){
      if(result) {
        console.log('Gradebook Deleted!');
      } else {
        console.log(error);
      }
    });
  },
  render() {
    if(this.props.editGradebook){
      return(
        <div className="modal-form">
          <form className="new-gradesheet" onSubmit={this._updateGradebook} >
              <div className="form-header">Edit Gradebook<a className="form-close" onClick={this.props.closeForm}>x</a></div>
              <input type="text" ref="name" value={this.props.gradebook.name} onChange={this._updateGradebook}/>
              <div className="edit-link" type="submit" onClick={this._deleteGradebook}>- DELETE</div>
              <button type="submit" onClick={this.props.closeForm}>UPDATE</button>
          </form>
        </div>
      );
    } else {
      return <div className="invisible"></div>
    }
  }
});
