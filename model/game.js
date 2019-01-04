//Game Object
const Player = require('./player.js');
const Round = require('./round.js');
const Preset = require('./missionpreset');

class Game { 
	constructor(array){
		this.players = array;
		this.gameOver = false;
		this.passCount = 0;
		this.defeatCount = 0;
		this.missionNum = null;
		this.turn = 0;
	}
	
	getPlayers(){
		return this.players;
	}
	
	getMissionNum(){
		return this.missionNum;
	}

	getBadGuys(){
		var BadGuys = []
		for(var i = 0; i<this.players.length; i++){
			var Player = this.players[i];
			if(!Player.type){
				BadGuys.push(Player.name);
			}
		}
		return BadGuys;
	}

	getMerlin(){
		for(var i = 0; i<this.players.length; i++){
			var Player = this.players[i];
			if(!Player.merlin){
				return Player.name;
			}
		}
		return BadGuys;
	}


	addPlayer(p){
		this.players.push(p)
	}
	
	addResult(result){
		this.RoundResults.push(result);
	}

	checkNumbers(){
		if(this.players.length < 5 || this.players.length > 10){
			return false;
		}else {return true;
		};
	}

	setMissionNum(){
		if(this.players.length == 5){
			return Preset.fivep;
		}
		if(this.players.length == 6){
			return Preset.sixp;
		}
		if(this.players.length == 7){
			return Preset.sevenp;
		}
		if(this.players.length == 8){
			return Preset.eightp;
		}
		if(this.players.length == 9){
			return Preset.ninep;
		}
		if(this.players.length == 10){
			return Preset.tenp;
		}
		else{
			alert("Not enough/Too many players!");
		};
	}

	assignRoles(){
        Array.prototype.makerand = function(){
            var x = Math.floor(Math.random() * this.length);
            return x;
        };

        Array.prototype.addbad = function(){
            var x = this.makerand();
            this[x].setbad();
            this.splice(x,1);
        }

        var current_players = this.players.slice();
        
        var rand = current_players.makerand();
        current_players[rand].setmerlin();
        current_players.splice(rand,1);

        var rand2 = current_players.makerand();
        current_players[rand2].setpercival();
        current_players.splice(rand2,1);

        current_players.addbad();
        current_players.addbad();
        var length = current_players.length;

        if (length == 6){
            current_players.addbad();
        }
        var length = current_players.length;
        if (length == 5 || length == 4 || length == 3 ){
            current_players.addbad();
        }

	}

	startRound(){
		if (this.missionNum != null){
			let turn = (this.turn % (this.players.length));
			console.log("round start");
			let round = new Round(this.players[turn]);
			//if(round.passed()){
			//	this.PassCount++;
			//}else{
			//	this.DefeatCount++;
			//}
		}
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

