//Player Object

class Player {
	constructor(name){
	this._name = name;
	this._type = true; //true is good
	this._merlin = false;
	this._percivil = false;
	}
	
	//Getters
	get name(){
		return this._name;
	}
	
	get type(){
		return this._type;
	}
	
	get merlin(){
		return this._merlin;
	}
	get percivil(){
		return this._percivil;
	}
	
	//Setters
	
	set type(newtype){
		this._type = newtype;
	}
	
	set merlin(ismerlin){
		this._merlin = ismerlin;
	}
	
	set percivil(ispercivil){
		this._percivil = ispercivil;
	}

	setmerlin(){
		this._merlin = true;
	}

	setpercivil(){
		this._percivil = true;
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