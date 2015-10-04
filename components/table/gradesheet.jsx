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
            return {isVisible: true, newAssignment: false, newStudent: false, editGradesheet: false};
        } else {
            return {isVisible: false, newAssignment: false, newStudent: false, editGradesheet: false};
        }
    },
    _renderStudentRows() {
        return this.data.students.map((student) => {
            return <GradeRow key={student._id} student={student} gradesheet={this.props.gradesheet} />;
        });
    },
    _renderStudentColumn() {
        return this.data.students.map((student) => {
            return <StudentColumn key={student._id} student={student} />;
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
    _editGradesheet: function() {
        var currentState = this.state.editGradesheet;
        if(currentState) {
            this.setState({ editGradesheet: false });
            $('.edit-gradesheet').text('EDIT GRADESHEET');
        } else {
            this.setState({ editGradesheet: true });
            $('.edit-gradesheet').text('- CLOSE EDIT');
        }
    },
    _closeForm: function(event) {
        event.preventDefault();
        this.setState({ newAssignment: false });
        $('.add-assignment').text('+ ADD ASSIGNMENT');
        this.setState({ newStudent: false });
        $('.add-student').text('+ ADD STUDENT');
        this.setState({ editGradesheet: false });
        $('.edit-gradesheet').text('EDIT GRADESHEET');
    },
    componentDidMount: function() {
        var fixedWidth = $('.fixed-table').width();
        $('.table').css('left', fixedWidth);
    },
    componentDidUpdate: function() {
        var fixedWidth = $('.fixed-table').width();
        $('.table').css('left', fixedWidth);
    },
    render() {
        if(this.data.isVisible) {
            return (
                <div className="sheet-container">
                    <div className="sheet-actions">
                        <a className="edit-gradesheet add-link" onClick={this._editGradesheet}>EDIT GRADESHEET</a>
                        <a className="add-student add-link" onClick={this._addStudent}>+ ADD STUDENT</a>
                        <a className="add-assignment add-link" onClick={this._addAssignment}>+ ADD ASSIGNMENT</a>
                    </div>
                    <div className="fixed-table">
                        <div className="table-fixed">Name</div>
                        {this._renderStudentColumn()}
                    </div>
                    <div className="table">
                        <SheetHeader gradesheet={this.props.gradesheet}/>
                        {this._renderStudentRows()}
                    </div>
                    <AddAssignment gradesheet={this.props.gradesheet} newAssignment={this.state.newAssignment} closeForm={this._closeForm}/>
                    <AddStudent newStudent={this.state.newStudent} closeForm={this._closeForm}/>
                    <EditGradesheet gradesheet={this.props.gradesheet} editGradesheet={this.state.editGradesheet} closeForm={this._closeForm}/>
                </div>
            );
        } else {
            return <div className="invisible"></div>
        }

    }
});
