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
          Current suggestions
        </p>
      </div>
    );
  }
}

var Entries = React.createClass({
  render() {
    var things2do = this.props.entries;
 
    function add2do(item) {
      return <li style={{color: 'grey'}}>{item.text}</li>
    }
 
    var listr = things2do.map(add2do);
 
    return (
      <ul>
        {listr}
      </ul>
    );
  }
});


var List = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  addItem: function(e) {
  var value = this.state.data;
   
  value.push(
    {
      text: this._inputElement.value,
    }
  );
 
  this.setState({
    data: value
  });
 
  this._inputElement.value = "";
 
  e.preventDefault();
},

  render: function() {
    return (
      <div>
        <div>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <Entries entries={this.state.data}/>
      </div>
    );
  }

});

export default App;
