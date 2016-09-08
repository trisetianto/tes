var MenuBar = React.createClass({
  render: function () {
    return (
      <ul className="nav navbar-nav">
        <li><a href="/ld">Location Data</a></li>
        <li><a href="/lr">Location Recommendation</a></li>
        <li><a>Admin</a></li>
      </ul>
    )
  }
});
var MenuBox = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Decision Support Systems</a>
          </div>
          <MenuBar/>
        </div>
      </nav>
    )
  }
});

ReactDOM.render(
  <MenuBox/>,
  document.getElementById('header')
);