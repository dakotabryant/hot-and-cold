import React from 'react';
import Header from './components/Header';
import GuessSection from './components/GuessSection';

class Game extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <GuessSection/>
      </div>
    );
  }
}

export default Game;
