import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count : 0
    }
  }

 addOne = () => {
 this.setState({
      count: this.state.count + 1
    });

}

minusOne = () => {
  this.setState({
      count: this.state.count - 1
    });
}

reset = () => {
  this.setState({
      count: 0
    });
}

  render() {
    return (
      <div className="App">
      React Counter App
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.addOne}>+1</button>
      <button onClick={this.minusOne}>-1</button>
      <button onClick={this.reset}>reset</button>
        
      </div>
    );
  }
}

export default Counter;
