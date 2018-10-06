// Make connection
var socket = io();

var names = document.getElementById('names'),
    create = document.getElementById('create');


create.addEventListener('click', function(){


    socket.emit('person', {
        name: names.value  
    });
    names.value="";
    create.disabled = true;

});

var assign = document.getElementById('startgame');

assign.addEventListener('click', function(){
    socket.emit('startgame',{
    });
});

socket.on('playererror', function(){
    alert("not enough players!");
});


socket.on('merlinPage', function(data){
    document.getElementById("role").innerHTML="Hi " + data.p_name + ", you are merlin";
    document.getElementById("others").innerHTML="The bad guys are: " + data.badGuys.join(", ");
    console.log("Hi " + data.p_name + ", you are merlin");
});

socket.on('percivilPage', function(data){
    document.getElementById("role").innerHTML="Hi " + data.p_name + ", you are percival";
    document.getElementById("others").innerHTML="The merlin is: " + data.merlin;
    console.log("Hi " + data.p_name + ", you are percivil");
});

socket.on('badguyPage', function(data){
    document.getElementById("role").innerHTML="Hi " + data.p_name + ", you are a bad guy";
    document.getElementById("others").innerHTML="The bad guys are: " + data.badGuys.join(", ");
    console.log("Hi " + data.p_name + ", you are a bad guy");
});

socket.on('goodguyPage', function(data){
    document.getElementById("role").innerHTML="Hi " + data.p_name + ", you are a good guy";
    console.log("Hi " + data.p_name + ", you are a good guy");
});

socket.on('removeSignup', function(){
    document.getElementById('createperson').remove();
    document.getElementById('startbutton').remove();
});