GradebookLink = React.createClass({
  url() {
    var id = this.props.gradebook._id
    return '/gradebook/' + id
  },
  render() {
    return (
      <div>
        <a href={this.url()} className="gradebook-item">
            <div className="book-title">{this.props.gradebook.name}</div>
        </a>
      </div>
    );
  }
});
