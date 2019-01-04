const MissionNum = require('./missionnum');

const two_one = new MissionNum(2, 1);
const three_one = new MissionNum(3, 1);
const four_one = new MissionNum(4, 1);
const five_one = new MissionNum(5, 1);
const four_two = new MissionNum(4, 2);
const five_two = new MissionNum(5, 2);

exports.fivep = [two_one, three_one, two_one, three_one, three_one];
exports.sixp = [two_one, three_one, four_one, three_one, four_one];
exports.sevenp = [two_one, three_one, three_one, four_two, four_one];
exports.eightp = [three_one, four_one, four_one, five_two, five_one];
exports.ninep = [three_one, four_one, four_one, five_two, five_one];
exports.tenp = [three_one, four_one, four_one, five_two, five_one];
