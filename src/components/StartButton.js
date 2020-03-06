import React from 'react';

function StartButton(props) {
    return (
      <div className='box'>
      { <img src='./Icon-Coin.png' alt='Coin' /> }
      <input type='number' name='amount' id='amount' min='100' max='1000' required />

      <button
      aria-label='Start playing'
      id='startButton'
      onClick ={props.onClick}>Start</button>
      </div>
    )
  }

export default StartButton