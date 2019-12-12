import React, { Component } from "react"
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <h1 className="title">Hey Daaaad... How'd you get in here???</h1>
        <Button className="button" variant="light" size="lg" onClick={this.pickJoke}>Click for a joke from dear old dad.</Button>
        <div className="output">{this.state.displayJoke}</div>
      </div>
    );
  }
}

export default App
