 //Player Object

class Player {
	constructor(name){
	this._Name = name;
	this._Type = true; //true is good
	this._Merlin = false;
	this._Percivil = false;
	}
	
	//Getters
	get name(){
		return this._Name;
	}
	
	get type(){
		return this._Type;
	}
	
	get merlin(){
		return this._Merlin;
	}
	get percivil(){
		return this._Percivil;
	}
	
	//Setters
	
	set type(newtype){
		this._Type = newtype;
	}
	
	set merlin(ismerlin){
		this._Merlin = ismerlin;
	}
	
	set percivil(ispercivil){
		this._Percivil = ispercivil;
	}

	setmerlin(){
		this._Merlin = true;
	}

	setpercivil(){
		this._Percivil = true;
	}
	
	setbad(){
		this.type = false;
	}
	
	//MODIFIES: Round
	vote(){
	
	}
	
	//MODIFIES: Round
	choose(){
	}


}

module.exports = Player;