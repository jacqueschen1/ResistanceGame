
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(2000);
console.log("Server started");

console.log('Hello world');

var SOCKET_LIST = {};
var io = require('socket.io')(serv,{});
io.on('connection', function(socket){
    socket.id = Math.random();
    console.log('user connected', socket.id);

    socket.on('disconnect', function(){
        console.log("user disconnected");
    });
});


// Resistance the game

const Player = require('./player.js');
const Game = require('./game.js');

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




