import React from "react"

class Station extends React.Component {
  render() {
    return (
      // <div className="StationContainer">
        <div className="Station">
          <h2>{this.props.name}</h2>
          <img src={this.props.id} alt="Station" />
        </div>
      // </div>
    )
  }
}

export default Station
