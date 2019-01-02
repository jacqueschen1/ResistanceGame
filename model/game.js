//Game Object
const Player = require('./player.js');

//MissionNum Class
class MissionNum {
	constructor(num, fails){
		this.num = num;
		this.fails = fails;
	}
}
module.exports = MissionNum;

const two_one = new MissionNum(2, 1);
const three_one = new MissionNum(3, 1);
const four_one = new MissionNum(4, 1);
const five_one = new MissionNum(5, 1);
const four_two = new MissionNum(4, 2);
const five_two = new MissionNum(5, 2);

const fivep = [two_one, three_one, two_one, three_one, three_one];
const sixp = [two_one, three_one, four_one, three_one, four_one];
const sevenp = [two_one, three_one, three_one, four_two, four_one];
const eightp = [three_one, four_one, four_one, five_two, five_one];
const ninep = [three_one, four_one, four_one, five_two, five_one];
const tenp = [three_one, four_one, four_one, five_two, five_one];

class Game { 
	constructor(array){
		this.Players = array;
		this.Gameover = false;
		this.PassCount = 0;
		this.DefeatCount = 0;
		this.MissionNum = null;
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

	checkNumbers(){
		if(this.Players.length < 5 || this.Players.length > 10){
			return false;
		}else {return true;
		};
	}

	setMissionNum(){
		if(this.Players.length == 5){
			return fivep;
		}
		if(this.Players.length == 6){
			return sixp;
		}
		if(this.Players.length == 7){
			return sevenp;
		}
		if(this.Players.length == 8){
			return eightp;
		}
		if(this.Players.length == 9){
			return ninep;
		}
		if(this.Players.length == 10){
			return tenp;
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

