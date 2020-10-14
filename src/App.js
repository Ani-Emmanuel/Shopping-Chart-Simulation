import React, { Component } from 'react';
import './App.css';
import Counter from "./components/couner";
// import Chart from './components/childConponent';

class App extends Component {
  render() {

    return (
      <div className="main" style={ { display: "flex", justifyContent: "center" } }>
        <Counter />
      </div>
    );
  }
}

export default App;
