import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';
import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ctc: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      ctc: this.state.ctc
    });

    this.setState({
      items,
      ctc: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Salary Breakup Calculator by Terafinn Technologies
        </h3>
      
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newctc={ this.state.ctc } />
       </header>
        
        
        <Table items={ this.state.items }/>
      </div>
    );
  }
}

export default App;

