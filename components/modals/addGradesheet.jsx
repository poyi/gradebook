// Assignment component within the gradesheet table
AddGradesheet = React.createClass({
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var name = React.findDOMNode(this.refs.name).value.trim();
        var gradebook_id = this.props.gradebook._id;
        var owner = Meteor.userId();

        Meteor.call('addGradesheet', gradebook_id, owner, name, function(error, result){
            if(result) {
                console.log('gradesheet added! ' + result);
                $('#' + result).addClass('current-sheet');
                Session.setPersistent("currentSheet", result);
            } else {
                console.log(error);
            }
        });

        // Clear form
        React.findDOMNode(this.refs.name).value = "";
    },
    render() {
        if(this.props.newGradesheet){
            return(
                <div className="modal-form">
                    <form className="new-gradesheet" onSubmit={this.handleSubmit} >
                        <div className="form-header">Add New Gradesheet<a className="form-close" onClick={this.props.closeForm}>x</a></div>
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
