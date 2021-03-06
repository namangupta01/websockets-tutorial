// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var output = document.getElementById("output");
var handle = document.getElementById("handle");
var message = document.getElementById("message");
var btn = document.getElementById("send");
var feedback = document.getElementById("feedback");

// Emit events
btn.addEventListener('click', function(){
	socket.emit('chat', {
		handle: handle.value,
		message: message.value
	})
});

// Listen for events
socket.on('chat', function(data){
	output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>'
	feedback.innerHTML = ''
});

message.addEventListener('keypress', function(){
	socket.emit('typing', handle.value);
});

socket.on('typing', function(data){
	feedback.innerHTML = '<p><em>' + data + 'is typing...</em></p>'
});