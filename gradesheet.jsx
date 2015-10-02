GradeSheet = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var selected = Session.get('currentSheet');
        var currentSheet = this.props.gradesheet._id;
        if ( selected == currentSheet ) {
            return {
                isVisible: true,
                students: Students.find({}).fetch()
            }
        } else {
            return {
                isVisible: false,
                students: Students.find({}).fetch()
            }
        }
    },
    getInitialState: function() {
        var selected = Session.get('currentSheet');
        var currentSheet = this.props.gradesheet._id;
        if (selected == currentSheet) {
            return {isVisible: true, newAssignment: false, newStudent: false};
        } else {
            return {isVisible: false, newAssignment: false, newStudent: false};
        }
    },
    renderStudentRows() {
        return this.data.students.map((student) => {
            return <GradeRow key={student._id} student={student} gradesheet={this.props.gradesheet} />;
        });
    },
    _addAssignment() {
      var currentState = this.state.newAssignment;
      if(currentState) {
          this.setState({ newAssignment: false });
          $('.add-assignment').text('+ ADD ASSIGNMENT');
      } else {
          this.setState({ newAssignment: true });
          $('.add-assignment').text('CLOSE FORM');
      }
    },
    _addStudent: function() {
        var currentState = this.state.newStudent;
        if(currentState) {
            this.setState({ newStudent: false });
            $('.add-student').text('+ ADD STUDENT');
        } else {
            this.setState({ newStudent: true });
            $('.add-student').text('- CLOSE FORM');
        }
    },
    _closeForm: function() {
        this.setState({ newAssignment: false });
        $('.add-assignment').text('+ ADD ASSIGNMENT');
        this.setState({ newStudent: false });
        $('.add-student').text('+ ADD STUDENT');
    },
    render() {
        if(this.data.isVisible) {
            return (
                <div>
                    <div className="sheet-actions">
                        <a className="add-student add-link" onClick={this._addStudent}>+ ADD STUDENT</a>
                        <a className="add-assignment add-link" onClick={this._addAssignment}>+ ADD ASSIGNMENT</a>
                    </div>
                    <table className="gradeSheet">
                        <SheetHeader gradesheet={this.props.gradesheet}/>
                        {this.renderStudentRows()}
                    </table>
                    <AddAssignment gradesheet={this.props.gradesheet} newAssignment={this.state.newAssignment} closeForm={this._closeForm}/>
                    <AddStudent newStudent={this.state.newStudent} closeForm={this._closeForm}/>
                </div>
            );
        } else {
            return <div className="invisible"></div>
        }

    }
});
