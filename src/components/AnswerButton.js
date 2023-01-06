import React from 'react';
import { decodeHTML } from '../lib';

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={()=>{const answer = this.props.answer; {this.props.handleGuess(answer)}}}
        className='btn btn-outline-primary'
      >
        {decodeHTML(this.props.answer)}
      </button>
    );
  }
}

export { AnswerButton };
