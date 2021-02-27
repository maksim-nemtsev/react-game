import React from 'react';
import Game from './Game';
import Navbar from './Navbar';
import EndGame from './EndGame';

class Main extends React.Component {
  state = {
    showEndGame: false,
    name: '',
    score: 0,
  };

  handleLogin = (name) => {
    this.setState({ name });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { name, score, showEndGame } = this.state;
    return (
      <div>
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} />
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

export default Main;
