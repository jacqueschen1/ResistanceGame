
var express = require('express');
var app = express();
var serv = require('http').Server(app);
const Player = require('./player.js');
const Game = require('./game.js');
var Users = {};
var Players = [];

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(2000);
console.log("Server started");

console.log('Hello world');

var io = require('socket.io')(serv,{});
io.on('connection', function(socket){
    console.log('socket connection', socket.id);
    

    //Handle Person event
    socket.on('person', function(data){
        socket.nickname = data.name;
        Users[data.name]= socket.id;
        console.log(Users);
        Players.push(new Player(data.name));
        console.log(Players);
    });

    //Start Game
    socket.on('startgame', function(){
        if(Players.checknumbers()){
            var missionnum = Players.getMissionNum();
            var game = new Game(missionnum, Players);
            game.assignRoles();
            console.log(game.getPlayers());
            io.emit('removeSignup', {});
            var ProperPlayers = game.getPlayers();
            var PlayerNum = ProperPlayers.length;
            for(var i = 0; i<PlayerNum; i++){
                var player = ProperPlayers[i];
                 var id = Users[player.name];
                 if(player.percivil){
                    console.log("sending percivil to " +player.name);
                    io.to(id).emit('percivilPage', {
                        p_name: player.name,
                        p_type: player.type,
                        merlin: game.getMerlin()
                    });
                }
                else if(player.merlin){
                    console.log("sending merlin to " +player.name);
                    console.log(game.getBadGuys());
                   io.to(id).emit('merlinPage', {
                       p_name: player.name,
                       p_type: player.type,
                       badGuys: game.getBadGuys()
                   }); 
                }
               
                else{
                    if(!player.type){
                        console.log("sending bad guy to " +player.name);
                        io.to(id).emit('badguyPage', {
                            p_name: player.name,
                            p_type: player.type,
                            badGuys: game.getBadGuys()
                        });
                    }
                    else{
                        console.log("sending townie to " +player.name);
                        io.to(id).emit('goodguyPage', {
                            p_name: player.name,
                            p_type: player.type
                        });
                    }
                }
             }
        }
        else{
            socket.emit('playererror', {});
        }


    })



});


// Resistance the game



//MissionNum Object
class MissionNum {
	constructor(num, fails){
		this.num = num;
		this.fails = fails;
	}
}
module.exports = MissionNum;

var two_one = new MissionNum(2, 1);
var three_one = new MissionNum(3, 1);
var four_one = new MissionNum(4, 1);
var five_one = new MissionNum(5, 1);
var four_two = new MissionNum(4, 2);
var five_two = new MissionNum(5, 2);

var fivep = [two_one, three_one, two_one, three_one, three_one];
var sixp = [two_one, three_one, four_one, three_one, four_one];
var sevenp = [two_one, three_one, three_one, four_two, four_one];
var eightp = [three_one, four_one, four_one, five_two, five_one];
var ninep = [three_one, four_one, four_one, five_two, five_one];
var tenp = [three_one, four_one, four_one, five_two, five_one];

Array.prototype.checknumbers = function(){
    if(this.length < 5 || this.length > 10){
        return false;
    }else {return true;
    };
};

Array.prototype.getMissionNum = function(){
    if(this.length == 5){
        return fivep;
    }
    if(this.length == 6){
        return sixp;
    }
    if(this.length == 7){
        return sevenp;
    }
    if(this.length == 8){
        return eightp;
    }
    if(this.length == 9){
        return ninep;
    }
    if(this.length == 10){
        return tenp;
    }
    else{
        alert("Not enough/Too many players!");
    };
};


Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};




