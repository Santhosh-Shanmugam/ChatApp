import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="flex items-center bg-white p-2 shadow-lg">
      <input
        className="flex-1 p-2 bg-gray-100 rounded-l-lg focus:outline-none"
        type="text"
        placeholder="Type a message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button
        type="button"
        onClick={(e) => sendMessage(e)}
        className="bg-blue-700 hover:rounded-lg text-white rounded-r-lg p-2 ml-1 flex items-center"
      >
        send
      </button>
    </form>
  );
};

export default Input;
