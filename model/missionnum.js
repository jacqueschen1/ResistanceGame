// MissionNum Class
class MissionNum {
	constructor(num, fails) {
		this.num = num;
		this.fails = fails;
	}

	getNum() {
		return this.num;
	}

	getFails() {
		return this.fails;
	}
}
module.exports = MissionNum;
