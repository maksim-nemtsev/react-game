import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="name">{name}</div>
        <div className="game-title">Memory Game</div>
        <div className="score">Score: {score}</div>
      </div>
    );
  }
}

export default Navbar;
