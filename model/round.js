const Player = require('./player.js');
const Game = require('./game.js');
const MissionNum = require('./missionnum.js');
const App = require('./../app.js');

class Round {
    constructor(player, game){
        this.picker = player;
        this.game = game;
        sendPick();
    }

    sendPick(){
        console.log("sending pick");
        App.io.to(this.picker.id).emit('yourTurn', {
            player: this.picker.name
        });
    }
}
