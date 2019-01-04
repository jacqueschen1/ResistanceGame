var express = require('express');
var app = express();
var serv = require('http').Server(app);
const Player = require('./model/player.js');
const Game = require('./model/game.js');

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
var Players = [];

serv.listen(2000);
console.log("Server started");

var io = require('socket.io')(serv,{});
exports.serv = serv;
exports.io = io;

io.on('connection', function(socket){
    console.log('socket connection', socket.id);
    exports.socket = socket

    //Handle Person event
    socket.on('person', function(data){
        socket.nickname = data.name;
        Players.push(new Player(data.name, socket.id));
        console.log(Players);
    });

    //Start Game
    socket.on('startgame', function(){
        var game = new Game(Players);
        if(game.checkNumbers()){
            game.setMissionNum();
            game.assignRoles();
            console.log(game.getPlayers());
            io.emit('removeSignup', {});
            var ProperPlayers = game.getPlayers();
            var PlayerNum = ProperPlayers.length;
            for(var i = 0; i<PlayerNum; i++){
                var player = ProperPlayers[i];
                var id = player.id;
                 if(player.percival){
                    console.log("sending percival to " +player.name);
                    io.to(id).emit('percivalPage', {
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
                       badGuys: game.getBadGuys(),
                       players: game.getPlayers()
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





var roundSender = function(string){
    
}




