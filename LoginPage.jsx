LoginPage = React.createClass({
    render() {
    // Just render a placeholder container that will be filled in
    return (
        <div>
            <div className="page-title">Hello Teacher!</div>
            <div className="page-subtitle"> Start Creating Simple yet Awesome Gradebooks for Free.</div>
            <LoginForm />
        </div>
    );
    }
});
