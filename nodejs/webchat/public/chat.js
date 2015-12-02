/*
  Webchat client
*/

window.onload = function() {
  var messages = [];
  // Connect to 3100 port
  var socket = io.connect('http://localhost:3100');

  // Get fields
  var field = document.getElementById("field");
  var sendButton = document.getElementById("send");
  var content = document.getElementById("content");
  var name = document.getElementById("name");

  // Listener function to write message
  socket.on('message', function (data) {
    if(data.message) {
      messages.push(data);
      var html = '';
      for (var i=0; i<messages.length; i++) {
        // Show username and messages from username
        html += '<strong>' + (messages[i].username ?
        messages[i].username : 'Server') + ':</strong> ';
        html += messages[i].message + '<br>';
      }

      content.innerHTML = html;
      content.scrollTop = content.scrollHeight;
    } else {
      console.log("A problem happened: ", data);
    }
  });

  // Send to the backend the message
  sendButton.onclick = function() {
    // Request username
    if(name.value == "") {
      alert("Please, type your name!");
    } else { 
      // Send message with username
      var text = field.value;
      var user = name.value;
      socket.emit('send', { message: text, username: user });
      field.value = "";
    }
  };
}