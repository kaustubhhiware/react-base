import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <List>
          </List>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

class Entries extends Component {

  render() {
    var things2do = this.props.entries;

    function add(x) {
      return <li key={x.key}>{x.text}</li>
    }
 
    var listr = things2do.map(add);

    return (
      <ul className="listed">
        {listr}
      </ul>
    );
  }

}
// last stable version

class List extends Component {
  init() {
    return (
      data : []
    );
  }

  add (e) {
    e.preventDefault();
    var value = this.state.data;
   
    value.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );
 
    this.setState({
      data: value
    });
 
    this._inputElement.value = "";
  }

  render() {
    return (
      <div className="ListMain">
        <div className="header">
          <form onSubmit = {this.add} >
            <input ref={(a) => this._inputElement = a} placeholder="enter todo">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <Entries entries={this.state.data} />
      </div>
    );
  }
}

export default App;
