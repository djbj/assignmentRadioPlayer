import React from "react"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  render() {
    if (this.state.channels.length > 0) {
      return <div>Radio Channels</div>
    } else {
      return <div>Loading Radio Channels</div>
    }



  }
}

export default App
