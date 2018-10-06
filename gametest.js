const Player = require('./player.js');
const Game = require('./game.js');
const MissionNum = require('./app.js');
//Tests 

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

var players = []
for (i=0; i<10; i++) {
    players[i] = new Player('p' + String(i));
}

var testgame = new Game(tenp, players);


testgame.addresult(true);
testgame.assignroles();

var players = []
for (i=0; i<9; i++) {
    players[i] = new Player('p' + String(i));
}

// var testgame9 = new Game(ninep);
// for (var i = 0; i < players.length; i++){
//     testgame9.addplayer(players[i]);
// }

// testgame9.addresult(true);
// testgame9.assignroles();

// var players = []
// for (i=0; i<8; i++) {
//     players[i] = new Player('p' + String(i));
// }

// var testgame8 = new Game(eightp);
// for (var i = 0; i < players.length; i++){
//     testgame8.addplayer(players[i]);
// }

// testgame8.addresult(true);
// testgame8.assignroles();
// console.log(testgame8.getplayers());

// var players = []
// for (i=0; i<7; i++) {
//     players[i] = new Player('p' + String(i));
// }

// var testgame7 = new Game(sevenp);
// for (var i = 0; i < players.length; i++){
//     testgame7.addplayer(players[i]);
// }

// testgame7.addresult(true);
// testgame7.assignroles();

// var players = []
// for (i=0; i<6; i++) {
//     players[i] = new Player('p' + String(i));
// }

// var testgame6 = new Game(sixp);
// for (var i = 0; i < players.length; i++){
//     testgame6.addplayer(players[i]);
// }

// testgame6.addresult(true);
// testgame6.assignroles();
