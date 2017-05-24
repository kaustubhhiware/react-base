import React, { Component } from 'react';
import logo from '../logo.svg';
import {connect} from 'react-redux';

import getMatches from '../actions/home';
import './App.css';


const ItemList = ({items}) => (
  <div style={{width:'800px',  margin:'0 auto'}}>
    <ul>
      {items.map(item => (
          <li key={item}>{item}</li>
        ))}
    </ul>
    <p>
      ~
    </p>
  </div>
);

class Home extends Component {

  componentWillMount() {
    this.props.dispatch(getMatches());
  }

  render () {
    var items = this.props.collections.get("posts");
    return (
      <div className="App">
        <div className="App-header">
          <a href="/#/search">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            Search 
          </a>
        </div>
        <p className="App-intro">
          Hello
          <ItemList items={items} />
        </p>
        <p>
          ~
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    collections: state.collectionState
  }
}

export default connect(mapStateToProps)(Home);