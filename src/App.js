import React, { Component } from "react"
import "./index.css"
import jokes from "./jokes.json"

class App extends Component {
  state = {
   displayJoke: null
  }
  
  pickJoke = () => {
    let joke = jokes.jokes[Math.floor(Math.random() * jokes.jokes.length)];
    console.log(joke);
    this.setState({ displayJoke: joke });
  }

  render() {
    return (
      <div className="App">
        <h1>this is my big text</h1>
        <button onClick={this.pickJoke}>Click to do something</button>
        <div>{this.state.displayJoke}</div>
      </div>
    );
  }
}

export default App
