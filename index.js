const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('buy input', msg => {
    io.emit('buy input', msg);
  });

  socket.on('stop', msg => {
    io.emit('stop', msg);
  });

  socket.on('sell input', msg => {
    io.emit('sell input', msg);
  });

  socket.on('username', msg => {
    io.emit('username', msg);
  });
  
  socket.on("topicEvent", message => {
    io.emit("topicEvent", message);
  });

});

http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

