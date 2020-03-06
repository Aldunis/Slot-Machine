import React from 'react';
import Spinner from './Spinner';

function repeatButton(props) {
    return (
        <button
            aria-label='Start'
            className='repeatButton'
            onClick={props.onClick}>
                Start
        </button>
    );
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null
        }
        this.finishHandler = this.finishHandler.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({winner: null});
        this.emptyArray();
        this._child1.forceUpdateHandler();
        this._child2.forceUpdateHandler();
        this._child3.forceUpdateHandler();
    }

    static loser = [
        'Not quite',
        'Almost there',
        'You still lose money',
        'Stop playing',
        'You lost all your money',
        'There goes money for food',
        'There goes the bills',
        'There goes the rent money',
        'Please,stop playing',
        'Don\'t do it'
    ];

    static matches = [];

    finishHandler(value) {
        Main.matches.push(value);

        if (Main.matches.length === 3) {
            const {winner} = this.state;
            const first = Main.matches[0];
            let results = Main.matches.every(match => match === first)
            this.setState({winnder: results});
        }
    }

    emptyArray() {
        Main.matches = [];
    }

    render() {
        const {winner} = this.state;
        const getLoser = () => {
            return Main.loser[Math.floor(Math.random()* Main.loser.length)]
        }
        
        let repeatButton = null;
        let winningSound = null;

        if(winner !== null) {
            repeatButton = <repeatButton onClick={this.handleClick} />
        }

        if(winner) {
            winningSound = <winningSound />
        }

        return (
            <div>
                {winningSound}
                <h1 style= {{color: 'black'}}>
                    <span>{winner === null ? 'Waiting...' : winner ? 'U won':
                    getLoser()}
                    </span>
                </h1>

                <div className={'spinner-container'}>
                    <Spinner onFinish={this.finishHandler} ref={(child) => {
                        this._child1 = child;
                    }
                }
                        timer='1000'
                        />

                    <Spinner onFinish={this.finishHandler} ref={(child) => {
                        this._child2 = child;
                    }
                }
                        timer='1400'
                        />

                    <Spinner onFinish={this.finishHandler} ref={(child) => {
                        this._child3 = child;
                    }
                }
                        timer='2200'
                        />
                        <div className='gradient-fade'></div>
                </div>
                {repeatButton}
            </div>
        )
    }
}

export default Main;