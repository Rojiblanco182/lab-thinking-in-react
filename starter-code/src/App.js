import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
