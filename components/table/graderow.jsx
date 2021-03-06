GradeRow = React.createClass({
    mixins: [ReactMeteorData],
        getMeteorData() {
            Meteor.subscribe("scores");
        return {
            scores: Scores.find({ student: this.props.student._id, gradesheet: this.props.gradesheet._id }).fetch()
        };
    },
    _renderScores() {
        // Render score for each assignment per student
        return this.data.scores.map((score) => {
            return <Score key={score._id} score={score}/>;
        });
    },
    render() {
        return (
            <div className="table-row">
                {this._renderScores()}
            </div>
        );
    }
});
