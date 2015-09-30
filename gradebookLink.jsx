GradebookLink = React.createClass({
  url() {
    var id = this.props.gradebook._id
    return '/gradebook/' + id
  },
  render() {
    return (
      <div className="gradebook-item">
        <a href={this.url()}>{this.props.gradebook.name}</a>
      </div>
    );
  }
});
