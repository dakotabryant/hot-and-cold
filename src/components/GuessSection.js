import React from 'react';
import './guess-section.css';

const GuessSection = (props) => {
    return (
        <div className="mainContainer">
            <h1>HOT or COLD</h1>  
            <form action="POST">
                <input id="guessInput" type="text"/>
                <button>Guess</button>
            </form>
        </div>
    );
}

export default GuessSection;