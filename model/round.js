const Player = require('./player.js');
const Game = require('./game.js');
const MissionNum = require('./missionnum.js').default;
const App = require('./../app.js');


class Round {
	constructor(player, game) {
		this.io = App.io;
		this.picker = player;
		this.game = game;
		this.numPicks = game.getMissionNum().getNum();
		this.numFails = game.getMissionNum().getNum();
		this.sendPick();
	}

	sendPick() {
		console.log('sending pick');
		this.io.to(this.picker.id).emit('yourTurn', {
			player: this.picker.name,
			numPicks: this.numPicks,
		});
	}
}
module.exports = Round;
