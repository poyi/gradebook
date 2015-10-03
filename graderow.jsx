GradeRow = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      scores: Scores.find({ student: this.props.student._id, gradesheet: this.props.gradesheet._id }).fetch()
    }
  },
  renderScores() {
    // Render score for each assignment per student
    return this.data.scores.map((score) => {
      return <Score key={score._id} score={score}/>
    });
  },
  render() {
    return (
        <div className="table-row">
            {this.renderScores()}
        </div>
    );
  }
});
