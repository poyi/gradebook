// Score component within the graderow
Score = React.createClass({
  propTypes: {
    score: React.PropTypes.object.isRequired
  },
  handleChange: function(event) {
    Scores.update({_id: this.props.score._id},{ $set: {point: event.target.value} });
  },
  render() {
    return <td className="score-cell"><input type="text" value={this.props.score.point} onChange={this.handleChange} /></td>;
  }
});
