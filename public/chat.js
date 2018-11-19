// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var output = document.getElementById("output");
var handle = document.getElementById("handle");
var message = document.getElementById("message");
var btn = document.getElementById("send");

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
});