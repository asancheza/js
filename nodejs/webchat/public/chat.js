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

  // Listener function to write message
  socket.on('message', function (data) {
    if(data.message) {
      messages.push(data.message);
      var html = '';
      for (var i=0; i<messages.length; i++) {
        html += messages[i] + '<br />';
      }

      content.innerHTML = html;
    } else {
      console.log("A problem happened: ", data);
    }
  });

  // Send to the backend the message
  sendButton.onclick = function() {
    var text = field.value;
    socket.emit('send', {message: text});
  };
}