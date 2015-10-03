// Score component within the graderow
Score = React.createClass({
  propTypes: {
    score: React.PropTypes.object.isRequired
  },
  handleChange: function(event) {
    Scores.update({_id: this.props.score._id},{ $set: {point: event.target.value} });
  },
  componentDidMount: function() {
      function resizeInput() {
          $(this).attr('size', $(this).val().length);
      }
      $('input[type="text"]')
          // event handler
          .keyup(resizeInput)
          // resize on page load
          .each(resizeInput);
      },
  render() {
    return <div className="table-cell"><input type="text" value={this.props.score.point} onChange={this.handleChange} /></div>
  }
});
