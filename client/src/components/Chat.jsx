import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Infobar from './Infobar';
import Input from './input';
import Messages from './Messages';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // Initialize messages as an empty array

  const End_point = "http://localhost:5000"; // Ensure http:// prefix is added
  const location = useLocation();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(End_point, { transports: ['websocket', 'polling'] });

    socket.emit('join', { name, room }, () => {});

    return () => {
      // Cleanup on component unmount
      socket.disconnect();
    };
  }, [End_point, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black p-4'>
      <div className=''>
        <Infobar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
