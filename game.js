//Game Object
const Player = require('./player.js');

class Game { 
	constructor(missionnum, array){
		this.Players = array;
		this.Gameover = false;
		this.PassCount = 0;
		this.DefeatCount = 0;
		this.MissionNum = missionnum;
	}
	
	getPlayers(){
		return this.Players;
	}
	
	getMissionNum(){
		return this.MissionNum;
	}

	getBadGuys(){
		var BadGuys = []
		for(var i = 0; i<this.Players.length; i++){
			var Player = this.Players[i];
			if(!Player.type){
				BadGuys.push(Player.name);
			}
		}
		return BadGuys;
	}

	getMerlin(){
		for(var i = 0; i<this.Players.length; i++){
			var Player = this.Players[i];
			if(!Player.merlin){
				return Player.name;
			}
		}
		return BadGuys;
	}


	addPlayer(p){
		this.Players.push(p)
	}
	
	addResult(result){
		this.RoundResults.push(result);
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

        var current_players = this.Players.slice();
        
        var rand = current_players.makerand();
        current_players[rand].setmerlin();
        current_players.splice(rand,1);

        var rand2 = current_players.makerand();
        current_players[rand2].setpercivil();
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