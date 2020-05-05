import React from 'react';

import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handleSumbit(e) {
        let playerName = e.target.playerName.value; //e: paramètre / target: la valeur voulue avec le form / le "name=""" / value prop pour grab la value
        e.preventDefault(); //Permet de ne pas rafraîchir la page
      
        if (playerName) {
          e.target.playerName.value = ''; //Permet de clear le input
          Players.insert({
            name: playerName,
            score: 0
         });
       }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSumbit.bind(this)}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add player</button>
                </form>
            </div>
        );
    }
}