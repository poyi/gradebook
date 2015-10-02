GradeSheetList = React.createClass({
    propTypes: {
        gradesheet: React.PropTypes.object.isRequired
    },
    _selectSheet: function(event) {
        var sheetId = this.props.gradesheet._id;
        Session.setPersistent("currentSheet", sheetId);
        $('.gradesheet-nav a').removeClass('current-sheet');
        $('#' + sheetId).addClass('current-sheet');
    },
    render() {
        return (
          <a onClick={this._selectSheet} id={this.props.gradesheet._id}>{this.props.gradesheet.name}</a>
        );
    }
});
