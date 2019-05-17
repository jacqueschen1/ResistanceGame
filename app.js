const express = require('express');
const app = express();
const serv = require('http').Server(app);
const Player = require('./model/player.js');
const Game = require('./model/game.js');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
const Players = [];
let game = undefined;

serv.listen(2000);
console.log('Server started');

const io = require('socket.io')(serv, {});
exports.serv = serv;
exports.io = io;

io.on('connection', function(socket) {
	console.log('socket connection', socket.id);
	exports.socket = socket;

	// Handle Person event
	socket.on('person', function(data) {
		socket.nickname = data.name;
		Players.push(new Player(data.name, socket.id));
		console.log(Players);
	});

	// Start Game
	socket.on('startgame', function() {
		game = new Game(Players);
		if (game.checkNumbers()) {
			game.setMissionNum();
			game.assignRoles();
			console.log(game.getPlayers());
			io.emit('removeSignup', {});
			const ProperPlayers = game.getPlayers();
			const PlayerNum = ProperPlayers.length;
			for (let i = 0; i<PlayerNum; i++) {
				const player = ProperPlayers[i];
				const id = player.id;
				if (player.percival) {
					console.log('sending percival to ' +player.name);
					io.to(id).emit('percivalPage', {
						p_name: player.name,
						p_type: player.type,
						merlin: game.getMerlin(),
					});
				} else if (player.merlin) {
					console.log('sending merlin to ' +player.name);
					console.log(game.getBadGuys());
					io.to(id).emit('merlinPage', {
						p_name: player.name,
						p_type: player.type,
						badGuys: game.getBadGuys(),
						players: game.getPlayers(),
					});
				} else {
					if (!player.type) {
						console.log('sending bad guy to ' +player.name);
						io.to(id).emit('badguyPage', {
							p_name: player.name,
							p_type: player.type,
							badGuys: game.getBadGuys(),
						});
					} else {
						console.log('sending townie to ' +player.name);
						io.to(id).emit('goodguyPage', {
							p_name: player.name,
							p_type: player.type,
						});
					}
				}
			}game.startRound();
		} else {
			socket.emit('playererror', {});
		}
	});

	socket.on('picks selected', function(socket) {
		// game.getRound().sendChoice(data.players);
	});
});
