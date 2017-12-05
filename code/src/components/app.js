import React from "react"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listOfChannels: []
    }
  }

// http://api.sr.se/api/v2/channels?format=json&size=100
// station name, image, and colour

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
        Radio Channels <br />
        Here you can find a list of {this.state.listOfChannels.length} radio channels: <br />

        Channel name: {this.state.listOfChannels[0].name}<br />
        Image name: {this.state.listOfChannels[0].image}<br />
        Colour value: {this.state.listOfChannels[0].color}<br />
        <audio controls>
          <source src={this.state.listOfChannels[0].liveaudio.url} type="audio/mpeg" />
          <source src={this.state.listOfChannels[0].liveaudio.url} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio><br />
        </div>
    } else {
      return <div>Loading Radio Channels</div>
    }
  }
}

export default App
