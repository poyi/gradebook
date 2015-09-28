// Student component - represents a single collection item
Student = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    student: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.student.firstName} {this.props.student.lastName}</li>
    );
  }
});
