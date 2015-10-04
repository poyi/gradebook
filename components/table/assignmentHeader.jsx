// Assignment component within the gradesheet table
AssignmentHeader = React.createClass({
  propTypes: {
    assignment: React.PropTypes.object.isRequired
  },
  handleChange: function(event) {
    Assignments.update({
      _id: this.props.assignment._id
    },
    { $set: {name: event.target.value} });
  },
  getInitialState: function() {
      return { editAssignment: false };
  },
  _editAssignment: function(event) {
      event.preventDefault();
      var currentState = this.state.editAssignment;
      if(currentState) {
          this.setState({ editAssignment: false });
          $(event.target).text('EDIT');
      } else {
          this.setState({ editAssignment: true });
          $(event.target).text('CANEL EDIT');
      }
  },
  componentDidMount: function() {
        $('.table-header, .assignmentDetail').hoverIntent(function() {
            $(this).next('.assignmentDetail').fadeIn();
        });
        $('html').not('.assignmentDetail').click(function() {
            $('.assignmentDetail').fadeOut();
        })

      function resizeInput() {
          $(this).attr('size', $(this).val().length);
      }
      $('input[type="text"]')
          // event handler
          .keyup(resizeInput)
          // resize on page load
          .each(resizeInput);
      },
      _closeForm: function(event) {
          event.preventDefault();
          this.setState({ editAssignment: false });
          $('.edit-assignment').text('EDIT');
      },
  render() {
    return (
      <div className="table-cell">
        <div className="table-header">{this.props.assignment.name}</div>
        <div className="assignmentDetail">
            <div className="stats"><b>Total Points:</b> <br></br>{this.props.assignment.total}</div>
            <div className="stats"><b>Description:</b> <br></br>{this.props.assignment.desc}</div>
            <div className="edit-link edit-assignment" onClick={this._editAssignment}>EDIT</div>
        </div>
        <EditAssignment assignment={this.props.assignment} editAssignment={this.state.editAssignment} closeForm={this._closeForm}/>
      </div>
    );
  }
});
