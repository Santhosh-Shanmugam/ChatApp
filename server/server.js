import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import router from "./router.js";
import cors from "cors";
import users from './users.js';
const { adduser, removeuser, getuser, getUserInRoom } = users;

dotenv.config();

const PORT = process.env.PORT || 2000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors()); // This will enable CORS for any origin
app.use(router);  // Use the router middleware

io.on('connection', (socket) => {
  console.log('A new client connected');
  
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = adduser({ id: socket.id, name, room });
    
    if (error) {
      return callback(error);
    }
    
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    socket.join(user.room);
    io.to(user.room).emit('roomData' , {room: user.room, users: getUserInRoom(user.room)})
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getuser({ id: socket.id });

    if (user) {
      io.to(user.room).emit('message', { user: user.name, text: message });
      io.to(user.room).emit('roomData', { user: user.name, users: getUserInRoom(user.room) });

    }

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeuser({ id: socket.id });

    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
      console.log('A client disconnected');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
