GradebookCard = React.createClass({
    getInitialState: function() {
        return { editGradebook: false };
    },
    url() {
        var id = this.props.gradebook._id;
        return '/gradebook/' + id;
    },
    _editGradebook: function(event) {
        event.preventDefault();
        var currentState = this.state.editGradebook;
        if(currentState) {
            this.setState({ editGradebook: false });
            $(event.target).text('EDIT');
        } else {
            this.setState({ editGradebook: true });
            $(event.target).text('CANEL EDIT');
        }
    },
    _closeForm: function(event) {
        event.preventDefault();
        this.setState({ editGradebook: false });
        $('.edit-gradebook').text('EDIT');
    },
    render() {
        return (
            <div className="gradebook-card">
                <a href={this.url()} className="gradebook-link">
                    <div className="book-title">{this.props.gradebook.name}</div>
                </a>
                <div className="book-actions"><div className="edit-link edit-gradebook" onClick={this._editGradebook}>EDIT</div></div>
                <EditGradebook editGradebook={this.state.editGradebook} gradebook={this.props.gradebook} closeForm={this._closeForm}/>
            </div>
        );
    }
});
