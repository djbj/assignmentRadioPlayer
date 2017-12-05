import React from "react"

class Station extends React.Component {

  render() {
    return (
      <div className="station" style={{ backgroundColor: `#${this.props.backgroundColor}` }}>
        <div className="stationLogo">
          <img src={this.props.image} alt="Station" />
        </div>
        <div className="stationDescription" style={{ backgroundColor: `#${this.props.backgroundColor}` }}>
          <h2>{this.props.name}</h2>
          <p>{this.props.tagline}</p>
        </div>
      </div>
    )
  }
}

export default Station
