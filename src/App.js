import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [] }
  }
  addItem = () => {
    var node = document.getElementById("inp")
    var item = node.value
    this.setState({ items: this.state.items.concat(item) })
  }

  generateLis = () => {
    return this.state.items.map(item => (<li> {item} </li>));
  }

  render() {
    return (
      <div>
        <input id="inp" />
        <button onClick={this.addItem}> Add item </button>
        <ul>{this.generateLis()}</ul>
      </div>
    );
  }
}

export default App;
