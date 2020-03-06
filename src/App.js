import React from 'react';
import './index.scss';
import Spinner from './components/Spinner';
import StartButton from './components/StartButton';


function RepeatButton(props) {
  return (
    <button 
      aria-label='Play again.' 
      id='spinButton' 
      onClick={props.onClick}>SPIN </button>
  );
}

function WinningSound() {
  return (
  <audio autoplay="autoplay" className="player" preload="false">
    <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
  </audio>  
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null
    }
    this.finishHandler = this.finishHandler.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }  

  handleClick() { 
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }

  static loser = [
    'Not quite', 
    'Stop gambling', 
    'Hey, you lost!',       
    'Don\'t beat yourself up'
  ];

  static matches = [];

  finishHandler(value) {
    App.matches.push(value);  

    if (App.matches.length === 3) {
      const { winner } = this.state;
      const first = App.matches[0];
      let results = App.matches.every(match => match === first)
      this.setState({ winner: results });
    }
  }

  emptyArray() {
    App.matches = [];
  }

  render() {
    const { winner } = this.state;
    const getLoser = () => {       
      return App.loser[Math.floor(Math.random()*App.loser.length)]
    }
    let startButton = null;
    let repeatButton = null;
    let winningSound = null;

    if (winner !== null) {
      startButton = <StartButton onClick={this.handleClick} />
      repeatButton = <RepeatButton onClick={this.handleClick} />
    }
    
    if (winner) {
      winningSound = <WinningSound />
    }

    return (
      <div>
        {winningSound}
        <h1 style={{ color: 'white'}}>
          <span>{winner === null ? 'Waiting…' : winner ? 'You won' : getLoser()}</span>
        </h1>

        <div>
        {startButton} 
        </div>

        <div className={`spinner-container`}>
          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" />
          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child2 = child; }} timer="1400" />
          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child3 = child; }} timer="2200" />
          <div className="arrowRight"></div>
          <div className='arrowLeft'></div>
        </div>
        {repeatButton}         
      </div>
    );
  }
} 

export default App;
