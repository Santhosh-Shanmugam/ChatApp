import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="flex items-center justify-center text-center min-h-screen bg-blue-600 shadow-lg">
      <div className="bg-white p-10 rounded-lg w-full max-w-md">
        <h1 className='font-bold text-4xl mt-2 p-10 text-center'> Join the Chat!</h1>
        <input
          placeholder="Name"
          className="w-full focus:outline-none px-4 py-3 border border-black-10 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Room"
          className="w-full focus:outline-none px-4 py-3 border border-black-10 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
        />
        <Link
          onClick={(event) => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit" className='mt-8 bg-blue-500 w-full px-4 py-3 rounded-lg text-white hover:bg-blue-700'>Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
