GradeBook = React.createClass({
    getInitialState: function() {
      return {
          newGradesheet: false
      };
    },
    componentWillMount: function() {
        var selected = Session.get('currentSheet');
        if(this.props.gradesheets) {
           if(this.props.gradesheets[0]) {
               var firstSheet = this.props.gradesheets[0]._id;
               Session.setPersistent("currentSheet", firstSheet);
           }
        }
    },
    componentDidMount: function() {
        // Highlights the current visible Gradesheet
        var selected = Session.get('currentSheet');
        $('#' + selected).addClass('current-sheet');
    },
    _GradeSheetNav() {
        return this.props.gradesheets.map((gradesheet) => {
            return <GradeSheetList key={gradesheet._id} gradesheet={gradesheet} />;
        });
    },
    _GradeSheet() {
        return this.props.gradesheets.map((gradesheet) => {
            return <GradeSheet key={gradesheet._id} gradesheet={gradesheet} />;
        });
    },
    _addGradesheet: function() {
        var currentState = this.state.newGradesheet;
        if(currentState) {
            this.setState({ newGradesheet: false });
            $('.add-gradesheet').text('+ ADD GRADEBOOK');
        } else {
            this.setState({ newGradesheet: true });
            $('.add-gradesheet').text('- CLOSE FORM');
        }
    },
    _closeForm: function(event) {
        event.preventDefault();
        this.setState({ newGradesheet: false});
        $('.add-gradesheet').text('+ ADD GRADESHEET');
    },
  render() {
    return (
      <div>
        <header className="header">
          <a href="/" className="home-link">&lsaquo;</a>
          <div className="gradebook-title">{this.props.gradebook.name}</div>
        </header>
        <div className="gradesheet-nav">
          {this._GradeSheetNav()}
          <a className="add-gradesheet add-link" onClick={this._addGradesheet}>+ ADD GRADESHEET</a>
        </div>
        {this._GradeSheet()}
        <AddGradesheet gradebook={this.props.gradebook} newGradesheet={this.state.newGradesheet} closeForm={this._closeForm}/>
      </div>
    );
  }
});
