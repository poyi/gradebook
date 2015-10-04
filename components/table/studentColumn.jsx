StudentColumn = React.createClass({
  render() {
    return (
        <div className="table-row">
            <div className="table-fixed">{this.props.student.firstName} {this.props.student.lastName}</div>
        </div>
    );
  }
});
