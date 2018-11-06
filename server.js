const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
const server = http.createServer(app);

const io = socketIO(server);

let numberOfOnlineUsers = 0;

io.on('connection', (socket) => {
    numberOfOnlineUsers++;
    io.emit('numberOfOnlineUsers', numberOfOnlineUsers);

    console.log('New user connected : '+numberOfOnlineUsers);

    socket.on('join', function(data){
        //joining
        socket.join(data.room);
  
        console.log(data.user + 'joined the room : ' + data.room);
  
        socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
      });
  
  
      socket.on('leave', function(data){
      
        console.log(data.user + 'left the room : ' + data.room);
  
        socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room.'});
  
        socket.leave(data.room);
      });
  
      socket.on('message',function(data){
  
        io.in(data.room).emit('new message', {user:data.user, message:data.message});
      })
});



server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});