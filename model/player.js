 //Player Object

class Player {
	constructor(name, socketid){
	this._name = name;
	this._type = true; //true is good
	this._merlin = false;
	this._percival = false;
	this._id = socketid;
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
	get percival(){
		return this._percival;
	}

	get id(){
		return this._id;
	}
	
	//Setters
	
	set type(newtype){
		this._type = newtype;
	}
	
	set merlin(ismerlin){
		this._merlin = ismerlin;
	}
	
	set percival(ispercivil){
		this._percival = ispercivil;
	}

	setmerlin(){
		this._merlin = true;
	}

	setpercival(){
		this._percival = true;
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