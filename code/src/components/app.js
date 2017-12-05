import React from "react"
import Station from "./station"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listOfChannels: []
    }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        listOfChannels: json.channels
      })
    })
  }

  render() {
    if (this.state.listOfChannels.length > 0) {
      return <div>
        <h1 className="header">Radio Channels</h1><br />
        <div className="allChannels">
          {this.state.listOfChannels.map((item, index) => {
            return <div className="allStations" key={item.id}>
              <Station
                name={item.name}
                image={item.image}
                siteurl={item.siteurl}
                tagline={item.tagline}
                backgroundColor={item.color} />
              <audio controls>
                {/* <track kind="captions" {} /> */}
                <source src={this.state.listOfChannels[index].liveaudio.url} type="audio/mpeg" />
                <source src={this.state.listOfChannels[index].liveaudio.url} type="audio/mpeg" />
                  Your browser does not support the audio tag.
              </audio>
              <hr />
              <br />
            </div>
          })}
        </div>
      </div>
    } else {
      return <div>Loading Radio Channels ... please hold on ...</div>
    }
  }
}

export default App
