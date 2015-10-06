EditGradesheet = React.createClass({
    _handleSubmit(event) {
        event.preventDefault();
        var name = React.findDOMNode(this.refs.name).value;
        var gradesheet_id = this.props.gradesheet._id;

        Meteor.call('editGradesheet', gradesheet_id, name, function(error, result){
            if(result) {
                console.log('Gradesheet Updated! ' + result);
            } else {
                console.log(error);
            }
        });
    },
    _deleteGradebook: function(event) {
      event.preventDefault();
      var gradesheet_id = this.props.gradesheet._id;
      Meteor.call('deleteGradesheet', gradesheet_id, function(error, result){
        if(result) {
          console.log('Gradesheet Deleted!');
        } else {
          console.log(error);
        }
      });
    },
    render() {
        if(this.props.editGradesheet){
            return(
                <div className="modal-form">
                    <form className="new-gradesheet" onSubmit={this._handleSubmit} >
                        <div className="form-header">Edit Gradesheet<a className="form-close" onClick={this.props.closeForm}>x</a></div>
                        <input type="text" ref="name" value={this.props.gradesheet.name} onChange={this._handleSubmit} />
                        <div className="edit-link" onClick={this._deleteGradesheet}>- DELETE</div>
                        <button type="submit" onClick={this.props.closeForm}>UPDATE</button>
                    </form>
                </div>
            );
        } else {
            return <div className="invisible"></div>
        }
    }
});
