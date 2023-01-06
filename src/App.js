import React, { Component } from 'react';
import { Question } from './components';

const category = '';
const TRIVIA_API = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy`;

class App extends Component {
  constructor() {
    super();
    this.state = {question: null}; 
}
componentDidMount() {
  fetch(TRIVIA_API)
      .then((res) => res.json())
      .then((data) => {this.setState({question: data.results[0]})})
      
}

  render() {
    return (
      <div className='container l:w-50 p-5'>
        <h1 className='display-1'>Trivia</h1>
        <h2 className='fw-lighter fs-5 mb-4'>
         {this.state.question && <Question question={this.state.question} />}
        </h2>
       
        <hr />
        <div>
          {/* Render question here */}
        </div>
      </div>
    );
  }
}

export { App };
