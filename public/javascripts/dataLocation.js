class LandButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.land)
  }
  render() {
    return (
      <div>
        {this.props.land.lahan_nama}
        <button onClick={this.handleClick} className="btn-default">show</button>
      </div>
    );
  }
}

var LandList = React.createClass({
  handleClick: function (land) {
    this.props.handleClick(land)
  },
  render: function () {
    var infb = function (land) {
      return (
        <LandButton land={land} handleClick={this.handleClick}/>
      )
    }.bind(this);
    var landNodes = this.props.data.map(function(land) {
      return (
        infb(land)
        /*<LandButton land={land}/>*/
      )
    });
    return (
      <div className="LandList">
        <h3>Nama Lahan</h3>
        {landNodes}
      </div>
    )
  }
});
var LandDetail = React.createClass({
  render: function () {
    return (
      <div className="LandDetail">
        <h3>Lahan Detail</h3>
        <ul>
          <li>nama : {this.props.land.lahan_nama}</li>
          <li>luas : {this.props.land.luas}</li>
          <li>curah hujan : {this.props.land.curah_ujan}</li>
          <li>kedalaman air tanah : {this.props.land.kedalaman_air_tanah}</li>
          <li>premebilitas : {this.props.land.permeabilitas}</li>
          <li>kepadatan penduduk : {this.props.land.kepadatan_penduduk}</li>
          <li>biologis : {this.props.land.biologis_ket}</li>
          <li>produktivitas : {this.props.land.produktivitas_ket}</li>
          <li>administrasi : {this.props.land.administrasi}</li>
          <li>zona penyangga : {this.props.land.zona_penyanga_ket}</li>
        </ul>
      </div>
    )
  }
});
var LandBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleClick: function (land) {
    this.setState({land: land})
  },
  getInitialState: function () {
    return {data: [], land: {}}
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function () {
    return (
      <div className="container">
        <LandList data={this.state.data} handleClick={this.handleClick}/>
        <LandDetail land={this.state.land}/>
      </div>
    )
  }
});
ReactDOM.render(
  <LandBox url="/tpa/alllahan"/>,
  document.getElementById('content')
);