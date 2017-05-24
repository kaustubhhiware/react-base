import React, { Component } from 'react';
import Redux from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{marginTop: '-1em'}}></div>
          <h2>Welcome to my_mdb</h2>
          <SearchBar />
        </div>
        <div style={{padding: '2em'}}></div>
        <Results />
      </div>
    );
  }
}


class MyComponent extends Component {
  render() {
    return <div>Hello {this.props.text}</div>
  }
}

var MovieActions = Redux.createActions([
    'sortField',
    'sortDirection',
    'filterList'
]);

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviename: ''
    }
  }

  handleSearch (e) {
    this.setState({ moviename: e.target.value });
  }

  handleClick () {
    if (!this.props.imdb.fetchMovie) {
      this.props.actions.fetchMovie(this.state);
    }
  }

  render () {
    return <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type='text' size='20' placeholder = 'Enter movie name here'
                     onChange={this.handleSearch.bind(this)} value={this.state.moviename} />
        <button type='Submit'> Search </button>
      </form>
    </div>
  }

}

class Results extends Component {
  render() {
    return <div>hi</div>
  }
}


export default App;