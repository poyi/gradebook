GradebookIndex = React.createClass({
 mixins: [ReactMeteorData],
 getMeteorData() {
   return {
     gradebooks: Gradebooks.find({}).fetch()
   }
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
          <AddGradebook />
        </header>
        {this.showGradebooks()}
      </div>
    );
  }
});
