import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

/*const players = {
  _id: '1',
  name: 'Lauren',
  score: 102
}, {
  _id: '3',
  name: 'Andrew',
  score: -12
}];*/

const renderPlayers = (playersList) => { 
  return playersList.map((player) => {
  return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
        <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
        <button onClick={() => Players.remove(player._id)}>X</button>
      </p>
    );
  });
};

const handleSumbit  = (e) => {
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

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Mike';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p> 
        {renderPlayers(players)}
        <form onSubmit={handleSumbit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add player</button>
        </form>
      </div>
    );

  ReactDOM.render(jsx, document.getElementById('app'));
  }); 
});
