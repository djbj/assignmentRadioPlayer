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
        Radio Channels <br />
        Here you can find a list of {this.state.listOfChannels.length} radio channels: <br />
        <div className="allChannels">
          Channel name: {this.state.listOfChannels[0].name}<br />
          Image name: {this.state.listOfChannels[0].image}<br />
          Colour value: {this.state.listOfChannels[0].color}<br />

          {this.state.listOfChannels.map((item) => {
            return <Station key={item.id} name={item.name}/>
          })}
          <audio controls>
            <source src={this.state.listOfChannels[0].liveaudio.url} type="audio/mpeg" />
            <source src={this.state.listOfChannels[0].liveaudio.url} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio><br />
        </div>
        </div>
    } else {
      return <div>Loading Radio Channels</div>
    }
  }



  // <div className="listOfProducts">
  //           { productsJson.products.map( (item, index) => {
  //             return <Product key={item.id} name={item.name}/>
  //           })}
  //         </div>

  // render() {
  //   return (
  //     <div>
  //       <h1>Welcom, we have {listOfChannels.length} Radio Channels for you</h1>
  //       <div className="allChannels">
  //         {listOfChannels.channels.map((item, index) => {
  //           return <Station key={item.id} name={item.name} type={item.color} />
  //         })}
  //       </div>
  //     </div>
  //   )
  //
  // }
}

// if (this.state.listOfChannels.length > 0) {
//   return <div>
//     Radio Channels <br />
//     Here you can find a list of {this.state.listOfChannels.length} radio channels: <br />
//     <div className="allChannels">
//       Channel name: {this.state.listOfChannels[0].name}<br />
//       Image name: {this.state.listOfChannels[0].image}<br />
//       Colour value: {this.state.listOfChannels[0].color}<br />
//       <audio controls>
//         <source src={this.state.listOfChannels[0].liveaudio.url} type="audio/mpeg" />
//         <source src={this.state.listOfChannels[0].liveaudio.url} type="audio/mpeg" />
//         Your browser does not support the audio tag.
//       </audio><br />
//     </div>
//     </div>
// } else {
//   return <div>Loading Radio Channels</div>
// }
export default App
