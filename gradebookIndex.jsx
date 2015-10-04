GradebookIndex = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            gradebooks: Gradebooks.find({}).fetch()
        }
    },
    getInitialState: function() {
        return { newGradebook: false };
    },
    _addGradebook: function() {
        var currentState = this.state.newGradebook;
        if(currentState) {
            this.setState({ newGradebook: false });
            $('.add-gradebook').text('+ ADD GRADEBOOK');
        } else {
            this.setState({ newGradebook: true });
            $('.add-gradebook').text('- CLOSE FORM');
        }
    },
    _showGradebooks() {
        return this.data.gradebooks.map((gradebook) => {
            return <GradebookCard key={gradebook._id} gradebook={gradebook} />
        });
    },
    _closeForm: function(event) {
        event.preventDefault();
        this.setState({ newGradebook: false });
        $('.add-gradebook').text('+ ADD GRADEBOOK');
    },
    render() {
        return (
            <div className="container">
                <header className="header">
                    <div className="gradebook-title-home">Gradebooks</div>
                    <button className="add-gradebook" onClick={this._addGradebook}>+ ADD GRADEBOOK</button>
                    <AddGradebook newGradebook={this.state.newGradebook} closeForm={this._closeForm}/>
                </header>
                {this._showGradebooks()}
            </div>
        );
    }
});
