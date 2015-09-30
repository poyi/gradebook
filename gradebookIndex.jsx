GradebookIndex = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
   return {
     gradebooks: Gradebooks.find({}).fetch()
   }
  },
  getInitialState: function() {
    return { isModalOpen: false };
  },
  toggleModal: function() {
    var currentState = this.state.isModalOpen;
    if(currentState) {
      this.setState({ isModalOpen: false });
      $('.add-gradebook').text('ADD GRADEBOOK');
    } else {
      this.setState({ isModalOpen: true });
      $('.add-gradebook').text('CLOSE FORM');
    }
  },

  closeModal: function() {
      this.setState({ isModalOpen: false });
  },
  showGradebooks() {
    return this.data.gradebooks.map((gradebook) => {
      return <GradebookLink key={gradebook._id} gradebook={gradebook} />
    });
  },
  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="gradebook-title">Gradebooks</div>
          <button className="add-gradebook" onClick={this.toggleModal}>ADD GRADEBOOK</button>
          <AddGradebook isOpen={this.state.isModalOpen}/>
        </header>
        {this.showGradebooks()}
      </div>
    );
  }
});
