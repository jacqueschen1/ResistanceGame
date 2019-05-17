// Game Object
const Player = require('./player.js');
const Round = require('./round.js');
const Preset = require('./missionpreset');

class Game {
	constructor(array) {
		this.players = array;
		this.gameOver = false;
		this.passCount = 0;
		this.defeatCount = 0;
		this.missionNum = null;
		this.turn = 0;
		this.round = null;
	}

	getPlayers() {
		return this.players;
	}

	getMissionNum() {
		return this.missionNum;
	}

	getBadGuys() {
		const BadGuys = [];
		for (let i = 0; i<this.players.length; i++) {
			const Player = this.players[i];
			if (!Player.type) {
				BadGuys.push(Player.name);
			}
		}
		return BadGuys;
	}

	getMerlin() {
		for (let i = 0; i<this.players.length; i++) {
			const Player = this.players[i];
			if (!Player.merlin) {
				return Player.name;
			}
		}
		return BadGuys;
	}


	addPlayer(p) {
		this.players.push(p);
	}

	addResult(result) {
		this.RoundResults.push(result);
	}

	checkNumbers() {
		if (this.players.length < 5 || this.players.length > 10) {
			return false;
		} else {
			return true;
		};
	}

	setMissionNum() {
		if (this.players.length == 5) {
			this.missionNum = Preset.fivep;
		}
		if (this.players.length == 6) {
			this.missionNum = Preset.sixp;
		}
		if (this.players.length == 7) {
			this.missionNum = Preset.sevenp;
		}
		if (this.players.length == 8) {
			this.missionNum = Preset.eightp;
		}
		if (this.players.length == 9) {
			this.missionNum = Preset.ninep;
		}
		if (this.players.length == 10) {
			this.missionNum = Preset.tenp;
		} else {
			console.log('not enough players!');
		};
	}

	assignRoles() {
		Array.prototype.makerand = function() {
			const x = Math.floor(Math.random() * this.length);
			return x;
		};

		Array.prototype.addbad = function() {
			const x = this.makerand();
			this[x].setbad();
			this.splice(x, 1);
		};

		const currentPlayers = this.players.slice();

		const rand = currentPlayers.makerand();
		currentPlayers[rand].setmerlin();
		currentPlayers.splice(rand, 1);

		const rand2 = currentPlayers.makerand();
		currentPlayers[rand2].setpercival();
		currentPlayers.splice(rand2, 1);

		currentPlayers.addbad();
		currentPlayers.addbad();
		let length = currentPlayers.length;

		if (length == 6) {
			currentPlayers.addbad();
		}
		length = currentPlayers.length;
		if (length == 5 || length == 4 || length == 3 ) {
			currentPlayers.addbad();
		}
	}

	startRound() {
		console.log(this.missionNum);
		if (this.missionNum != null) {
			const turn = (this.turn % (this.players.length));
			console.log('round start');
			this.round = new Round(this.players[turn], this);
			// if(round.passed()){
			//	this.PassCount++;
			// }else{
			//	this.DefeatCount++;
			// }
		}
	}

	getRound() {
		return this.round;
	}
	// checkGameOver(){
	// 	var list = roundresults;
	// 	var length = list.length;
	// 	var index = array_keys(list, true);
	// 	var index_win = index.length
	// 	var index_lose = length - index_win

	// 	if(index_win > 2){
	// 		console.log("good guys win!");
	// 		gameover = true;
	// 	}else if(index_lose > 2){
	// 		console.log("bad guys win!");
	// 		gameover = true;
	// 	}
	// }
}
module.exports = Game;

