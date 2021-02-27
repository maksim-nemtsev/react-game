import React, { Component } from 'react';
import { messages } from './messages';

export class EndGame extends Component {
  handleClick = () => {
    this.props.newGame(false);
  };

  render() {
    messages.sort(() => Math.random() - 0.5);
    return (
      <div className="end-game">
        <div className="message">
          <h2>{messages[0].title}</h2>
          <p>{messages[0].message}</p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default EndGame;
