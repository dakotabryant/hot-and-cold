import React from 'react';
import Count from './Count';
import List from './List';
import './guess-section.css';


const GuessSection = (props) => {
    return (
        <div className="mainContainer">
            <h1><span className="hot">HOT</span> or <span className="cold">COLD</span></h1>
            <form action="POST">
                <input id="guessInput" type="text"/>
                <button>Guess</button>
            </form>
            <Count/>
            <List/>
        </div>
    );
}

export default GuessSection;
