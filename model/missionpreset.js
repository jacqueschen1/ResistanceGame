const MissionNum = require('./missionnum');

const twoOne = new MissionNum(2, 1);
const threeOne = new MissionNum(3, 1);
const fourOne = new MissionNum(4, 1);
const fiveOne = new MissionNum(5, 1);
const fourTwo = new MissionNum(4, 2);
const fiveTwo = new MissionNum(5, 2);

exports.fivep = [twoOne, threeOne, twoOne, threeOne, threeOne];
exports.sixp = [twoOne, threeOne, fourOne, threeOne, fourOne];
exports.sevenp = [twoOne, threeOne, threeOne, fourTwo, fourOne];
exports.eightp = [threeOne, fourOne, fourOne, fiveTwo, fiveOne];
exports.ninep = [threeOne, fourOne, fourOne, fiveTwo, fiveOne];
exports.tenp = [threeOne, fourOne, fourOne, fiveTwo, fiveOne];
