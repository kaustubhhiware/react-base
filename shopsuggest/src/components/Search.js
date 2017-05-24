import React, { Component } from 'react';
import logo from '../logo.svg';
import request from '../utils/network';
import Autosuggest from 'react-autosuggest';
import {connect} from 'react-redux';

import { setString, getSuggest } from '../actions/search'; 
import store from '../store/configureStore';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: ''
    };

    this.suggestions = this.suggestions.bind(this);
    this.posts = this.posts.bind(this);
    this.dropdown = this.dropdown.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  dropdown(e) {
    let keyCode = e.which || e.keyCode;
    if (keyCode === 13) { // detect Enter key press
      this.posts();
      window.location.href = "/#/";
    }
  }

  suggestions(event) {
    this.props.dispatch(getSuggest(this.state.query));
  }

  posts() {
    // let query = document.getElementById('search').value;
    this.props.dispatch(setString(this.state.query));
  }

  // change the state on every change in input field
  setQuery(event) {
    this.setState({query:event.target.value});
  }

  render() {
    // let results = this.props.collections.get("results");
    var optionList = this.props.collections.get("resultList") || [];
    console.log("Search", optionList);
    return (
      <div className="App">
        <div className="App-header">
          <a href="/#/">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            Home
          </a>
          <br /><br />
          <input
            id="search"
            type="text"
            onKeyUp={this.suggestions}
            onKeyPress={this.dropdown}
            onChange={this.setQuery}
            value={this.state.query}
            list="autosuggest"
            placeholder="Enter search"
          />
          <datalist id="autosuggest">
            {optionList.map(x => {
              return (
                <option value={x} />
              );
            })}
          </datalist>
        </div>
        <p className="App-intro">
          Search page
        </p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    collections: state.collectionState
  }
}

export default connect(mapStateToProps)(Search);