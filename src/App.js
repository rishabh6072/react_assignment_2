import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './conponents/Validation';
import CharComponent from './conponents/char';


class App extends Component {

  state = {
    length: 0,
    charArray: [],
  }

  countInputLengthHandler = (event) => {
    const length = event.target.value.length
    const charArray = [...event.target.value.split("")];
    this.setState({
      length: length,
      input: event.target.value,
      charArray: charArray
    });
  }

  deleteListHandler = () => {
    this.setState({
      charArray: [],
      input: ''
    });
  }

  render() {
    const style = {
      margin: '30px auto',
      border: '1ps solid #eee',
      padding: '16px',
      width: '40%',
      boxShadow: '0 2px 3px 0 #ccc'
    }
    return (
      <div className="App" style={style}>
        <input onChange={this.countInputLengthHandler} value={this.state.input} />
        <p>Length of Input : {this.state.length}</p>
        <ValidationComponent length={this.state.length}/>
        <CharComponent list={this.state.charArray} click={this.deleteListHandler}/>
      </div>
    );
  }
}

export default App;
