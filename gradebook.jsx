GradeBook = React.createClass({
 mixins: [ReactMeteorData],
 getMeteorData() {
   return {
     gradesheets: Gradesheets.find({gradebook: this.props.gradebook}).fetch()
   }
 },
  showGradesheet() {
    return this.data.gradesheets.map((gradesheet) => {
      return <GradeSheet key={gradesheet._id} gradesheet={gradesheet} />;
    });
  },
  render() {
    console.log('This should be id from url param ' + this.props.gradebook);
    return (
      <div className="container">
        <header className="header">
          <div className="gradebook-title">Student List</div>
          <div className="gradesheet-list"><GradeSheetList gradesheets={this.data.gradesheets} /></div>
          {/* <AddStudent />*/}
          <AddGradebook />
          <AddGradesheet gradebook={this.props.gradebook}/>
        </header>
        {this.showGradesheet()}
      </div>
    );
  }
});
